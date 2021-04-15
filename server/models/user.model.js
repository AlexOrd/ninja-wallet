import mongoose from 'mongoose';
import './userPhoto.model';

const Schema = mongoose.Schema;

const deviceSchema = new mongoose.Schema({
  confirmCode: String,
  deviceType: {
    type: String,
    default: 'pc',
  },
  lastLogin: Date,
});

const schema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
  },
  isVerifiedEmail: {
    type: Boolean,
    default: false,
  },
  avatarId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userPhoto',
  },
  auth: {
    password: {
      type: String,
      required: true,
    },
    openedOnDevices: [deviceSchema],
    codeForPasswordChanging: String,
    codeForEmailVerification: {
      value: String,
      emitted: Date,
    },
  },
});


const User = mongoose.model('User', schema);
export default User
