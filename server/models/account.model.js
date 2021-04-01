import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    _id: {
        type: Schema.ObjectId,
        required: true
    },
    userId: {
        type: String,
        required: true
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
});

const Account = mongoose.model('Account', schema);

export { Account };
