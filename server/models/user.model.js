import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const deviceSchema = new mongoose.Schema({
  confirmCode: String,
  deviceType: {
      type: String,
      default: 'pc'
  },
  lastLogin: Date
})

const schema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true
  },

  isVerifiedEmail: {
      type: Boolean,
      default: false
  },
  
  auth: {
    password: {
        type: String,
        required: true
    },
    openedOnDevices: [deviceSchema],
    codeForPasswordChanging: String,
    codeForEmailVerification: {
        value: String,
        emitted: Date
    },
},
});


const User = mongoose.model('User', schema);
export default User