import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    _id: {
        type: Schema.ObjectId,
        required: true
    },
    accountNumber: {
        type: String, 
        required: true
    },
    currency: {
        type: String,
    },
    accountName: {
        type: String
    },
    accountMoney: {
        type: Number
    }
});

const Account = mongoose.model('Account', schema);

export { Account };
