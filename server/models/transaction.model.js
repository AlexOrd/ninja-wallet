import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    _id: {
        type: Schema.ObjectId,
        required: true
    },
    transactionType: {
        type: String, 
        required: true
    },
    transactionCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'  
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true 
    },
    accountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Account',
      required: true   
    },
    sum: {
      type: Number,
      required: true
    },
    merchantName: {
      type: String
    }
}, {timestamps: true, collection: 'transactions'});

const Transaction = mongoose.model('Transaction', schema);

export { Transaction };
