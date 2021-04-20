import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  transactionId: {
    type: Schema.Types.ObjectId,
  },
  transactionIds: {
    type: [Schema.Types.ObjectId],
    ref: "Transaction"
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
  },
  expiry: {
    type: String
  },
  cvc: {
    type: Number
  }
}, { timestamps: true, collection: 'card' });

const Card = mongoose.model('Card', schema);

export { Card };
