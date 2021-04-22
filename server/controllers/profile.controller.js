import User from '../models/user.model';
import { profileExist } from '../utils/profileAndPhoto-validations';
import { unexpectedError } from '../utils/error_handling/unexpected_error';

export async function getProfile(req, res, next) {
  const id = req.userID;

  const check = await profileExist(id);
  if(!check) {
    return res.status(400).json({
      success: false,
      message: 'Profile does not exist',
    });
  }

  try {
    const profile = await User.findById(id).populate('avatarId').exec();
    res.status(200).json({
      success: true,
      data: {
        profile,
      },
    });
  } catch(err) {
    unexpectedError(err, next);
  }
} 

export async function updateProfile(req, res, next) {
  const { firstName, lastName, email } = req.body;
  const id = req.userID;

  const check = await profileExist(id);
  if(!check) {
    return res.status(400).json({
      success: false,
      message: 'Profile does not exist',
    });
  }

  try {
    const updated = await User.findByIdAndUpdate(id, { firstName, lastName, email }, {new: true});
    res.status(200).json({
      success: true,
      data: {
        updated,
      },
    });
  } catch(err) {
    unexpectedError(err, next);
  }
}

export async function deleteProfile(req, res, next) {
  const id = req.userID;

  const check = await profileExist(id);
  if(!check) {
    return res.status(400).json({
      success: false,
      message: 'Profile does not exist',
    });
  }

  try {
    const deleted = await User.findByIdAndDelete(id);
    res.status(204).json({
      success: true,
      data: {
        deleted,
      },
    });
  } catch(err) {
    unexpectedError(err, next);
  }
}