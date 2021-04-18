import User from '../models/user.model';

export async function getProfile(req, res) {
  try {
    const { id } = req.params;
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
  try {
    const { firstName, lastName, email } = req.body;
    const { id } = req.params;
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
  try {
    const { id } = req.params;
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