import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userPhoto: {
    type: Schema.Types.ObjectId,
    ref: 'userPhoto',
    required: true
  },
});

const User = mongoose.model('User', schema);

export { User };
