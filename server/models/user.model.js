import mongoose from 'mongoose';
import './userPhoto.model';

const Schema = mongoose.Schema;

const deviceSchema = new mongoose.Schema({
  confirmCode: String,
  deviceType: {
    type: String,
    default: 'mobile',
  },
  browser: {
    type: String,
    default: 'chrome',
  },
  platform: {
    type: String,
    default: 'microsoft Windows',
  },
  lastLogin: Date,
});

const schema = new Schema({
  firstName: String,
  lastName: String,
  bots: {
    telegram: {
      confirmCode: {
        type: String,
        default: '',
      },
      chatID: {
        type: String,
        default: '',
      },
    },
  },
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

    notifyAboutSignIn: {
      type: Boolean,
      default: false,
    },

    doubleAuthenticate: {
      type: Boolean,
      default: false,
    },
  },
});

const User = mongoose.model('User', schema);
export default User;
