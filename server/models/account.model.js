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
    },
    cardName: {
        type: String
    },
    cardMoney: {
        type: Number
    }
});

const Account = mongoose.model('Account', schema);

export { Account };
