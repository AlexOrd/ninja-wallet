import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  image: {
    type: Schema.Types.String,
    required: true
  }
},
  { collection: 'userPhoto' }
);

const userPhoto = mongoose.model('userPhoto', schema);

export { userPhoto };
