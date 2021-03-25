import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: { type: Schema.Types.String, required: true },
  userPhoto: {
    type: Schema.Types.ObjectId,
    ref: 'UserPhoto',
    required: true
  },
  email: { type: Schema.Types.String, required: true }
  // More data about user profile....
});

const UserPhoto = model('UserPhoto', schema);

export { UserPhoto };
