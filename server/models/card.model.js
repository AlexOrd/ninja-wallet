const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  cardName: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
});

const Card = mongoose.model('Card', schema);

module.exports = Card;
