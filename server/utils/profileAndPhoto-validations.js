import User from '../models/user.model';
import UserPhoto from '../models/userPhoto.model';

export const profileExist = async (profileId) => {
  const profile = await User.findOne({_id: profileId});
  if(profile) {
    return true;
  }

  return false;
};

export const userPhotoExist = async (photoId) => {
  const photo = await UserPhoto.findOne({_id: photoId});
  if(photo) {
    return true;
  }

  return false;
};