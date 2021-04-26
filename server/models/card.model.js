import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  transactions: {
    type: [],
  },
  cardNumber: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  cardName: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    default: 0
  }
}, { timestamps: true, collection: 'card' });

const Card = mongoose.model('Card', schema);

export { Card };
