import mongoose from 'mongoose';
import { Card } from '../models/card.model';
import { Transaction } from '../models/transaction.model';
import { MonobankUserDataModel } from '../models/monobank.model';
import { validateCard, isCardExist, checkCardOwner } from '../utils/card-validations';

export const createCard = async (req, res) => {
  const checkCreditCard = await validateCard(req.body, req.userID)

  if (!checkCreditCard.success) {
    return res.status(406).send({ success: false, message: checkCreditCard.message })
  }

  const card = new Card({
    _id: new mongoose.Types.ObjectId(),
    userId: req.userID,
    ...req.body
  });

  try {
    const createdCard = await card.save();
    res.status(201).send({ card: createdCard, success: true });
  } catch (err) {
    res.status(400).send({ err, success: false });
  }
}

export const editCard = async (req, res) => {
  const cardExist = await isCardExist(req.params.id);
  const card = await Card.findById(req.params.id);

  if (!checkCardOwner(card, req.userID)) {
    return res.status(400).send({ success: false, message: 'User error' });
  }

  if (!cardExist.success) {
    return res.status(400).send(cardExist.message);
  }

  try {
    card.cardName = req.body.cardName || card.cardName;
    card.currency = req.body.currency || card.cardName;
    card.balance = req.body.balance || card.balance;
    card.cardNumber = req.body.cardNumber || card.cardNumber

    await card.save();

    return res.status(200).send({
      message: 'Card was updated',
      card,
      success: true
    });
  } catch (err) {
    return res.status(304).send({ err, success: false });
  }
}

export const getCards = async (req, res) => {


  try {
    const cards = await Card.find({ userId: req.userID })
    const newCardsResponse = await Promise.all(cards.map(async (card) => {
      const transactionsResponse = await Transaction.find({ cardId: card._id })
      card.transactions.push(...transactionsResponse)
      console.log(card)
      return card
    }))

    res.status(200).send({ cards: newCardsResponse, success: true });
  } catch (err) {
    res.status(400).send({ err, success: false });
  }
}

export const getCardById = async (req, res) => {
  const cardExist = await isCardExist(req.params.id)
  const card = await Card.findOne({ _id: req.params.id })

  if (!checkCardOwner(card, req.userID)) {
    return res.status(400).send({ success: false, message: 'User error' })
  }

  if (!cardExist.success) {
    return res.status(400).send(cardExist.message)
  }

  try {
    res.status(200).send({ card, success: true });
  } catch (err) {
    res.status(400).send({ err, success: false });
  }
}

export const removeCardById = async (req, res) => {
  const cardExist = await isCardExist(req.params.id)
  const card = await Card.findOne({ _id: req.params.id })

  const monobankCard = await MonobankUserDataModel.findOne({ card: req.params.id })
  

  if (!checkCardOwner(card, req.userID)) {
    return res.status(400).send({ success: false, message: 'User error' })
  }

  if (!cardExist.success) {
    return res.status(400).send({ success: cardExist.success, message: cardExist.message })
  }

  try {
    await Card.deleteOne({ _id: req.params.id });
    if(monobankCard) {
      await MonobankUserDataModel.deleteOne({ _id: monobankCard._id })
    }
    res.status(200).send({ message: 'Card was deleted', success: true });
  } catch (err) {
    res.status(400).send({ err, success: false });
  }
}
