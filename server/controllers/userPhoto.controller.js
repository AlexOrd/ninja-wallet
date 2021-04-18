import UserPhoto from '../models/userPhoto.model';
import User from '../models/user.model';

export async function createPhoto(req, res) {
  try {
    const { id } = req.params;
    const { fileString } = req.body;
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
    res.status(500).json({
      success: false,
      message: err,
    });
  }
}

export async function updatePhoto(req, res) {
  try {
    const { id } = req.params;
    const { fileString } = req.body;
    const updatedPhoto = await UserPhoto.findByIdAndUpdate(id, {image: fileString}, {new: true});
    res.status(200).json({
      success: true,
      data: {
        updatedPhoto,
      },
    });
  } catch(err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
}