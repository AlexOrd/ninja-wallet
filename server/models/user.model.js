import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const verificationCode = new mongoose.Schema({
  _id: false,
  value: {
      type: String, 
      required: true
  },
  emitted: {
      type: Date,
      required: true
  }
})

const schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  auth: {
    email: String,
    password: String,
    refreshToken: String,
    isVerificationEmail: {
        type: Boolean,
        default: false
    },
    changePasswordCode: verificationCode,
    verificationCode: verificationCode,
  }
});

const User = mongoose.model('User', schema);

export { User };
