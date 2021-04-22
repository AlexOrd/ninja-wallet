import UserPhoto from '../models/userPhoto.model';
import User from '../models/user.model';
import { profileExist, userPhotoExist } from '../utils/profileAndPhoto-validations';
import { unexpectedError } from '../utils/error_handling/unexpected_error';

export async function createPhoto(req, res, next) {
  const id = req.userID;
  const { fileString } = req.body;

  const check = await profileExist(id);
  if(!check) {
    return res.status(400).json({
      success: false,
      message: 'Profile does not exist',
    });
  }

  try {
    const newPhoto = new UserPhoto({
      image: fileString,
    });
    const saved = await newPhoto.save();
    const updatedUser = await User.findByIdAndUpdate(id, {avatarId: saved._id}, {new: true});
    res.status(200).json({
      success: true,
      data: {
        updatedUser,
      },
    });
  } catch(err) {
    unexpectedError(err, next);
  }
}

export async function updatePhoto(req, res, next) {
  const { id } = req.params;

  const check = await userPhotoExist(id);
  if(!check) {
    return res.status(400).json({
      success: false,
      message: 'User Photo does not exist',
    });
  }
  
  try {
    const { fileString } = req.body;
    const updatedPhoto = await UserPhoto.findByIdAndUpdate(id, {image: fileString}, {new: true});
    res.status(200).json({
      success: true,
      data: {
        updatedPhoto,
      },
    });
  } catch(err) {
    unexpectedError(err, next);
  }
}