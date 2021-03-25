import { Schema, model } from 'mongoose';

const schema = new Schema({
  data: { type: Schema.Types.Buffer, required: true },
  contentType: { type: Schema.Types.String, required: true }
});

const UserPhoto = model('UserPhoto', schema);

export { UserPhoto };
