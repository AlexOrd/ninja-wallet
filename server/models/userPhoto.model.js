import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    image: {
      type: Schema.Types.String,
      required: true,
    },
  },
  { collection: 'userPhoto' }
);

export default mongoose.model('userPhoto', schema);
