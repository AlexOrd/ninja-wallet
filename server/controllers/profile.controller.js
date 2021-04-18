import User from '../models/user.model';
import { profileExist } from '../utils/profileAndPhoto-validations';

export async function getProfile(req, res) {
  const { id } = req.params;

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
    res.status(404).json({
      success: false,
      message: err,
    });
  }
} 

export async function updateProfile(req, res) {
  const { firstName, lastName, email } = req.body;
  const { id } = req.params;

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
    res.status(500).json({
      success: false,
      message: err,
    });
  }
}

export async function deleteProfile(req, res) {
  const { id } = req.params;

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
    res.status(500).json({
      success: false,
      message: err,
    });
  }
}