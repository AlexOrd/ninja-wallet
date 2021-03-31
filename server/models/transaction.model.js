import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    _id: {
        type: Schema.ObjectId,
        required: true
    },
    transactionName: {
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
    }
});

const Transaction = mongoose.model('Transaction', schema);

export { Transaction };
