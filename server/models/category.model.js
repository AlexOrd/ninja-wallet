import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    color: { type: String, required: false },
  },
  { timestamps: true, collection: 'categories' }
);

const Category = mongoose.model('Category', schema);

export { Category };
