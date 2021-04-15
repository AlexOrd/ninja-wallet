import mongoose from 'mongoose';
import './category.model';
import './user.model';
import './card.model';

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    _id: {
      type: Schema.ObjectId,
      required: true,
    },
    transactionType: {
        type: String, 
        required: true
    },
    transactionCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    cardId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Card',
      required: true   
    },
    sum: {
      type: Number,
      required: true,
    },
    merchantName: {
      type: String,
    },
  },
  { timestamps: true, collection: 'transactions' }
);

const Transaction = mongoose.model('Transaction', schema);

module.exports = Transaction;
