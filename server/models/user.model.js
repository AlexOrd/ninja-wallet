import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const User = mongoose.model('User', schema);

export { User };
