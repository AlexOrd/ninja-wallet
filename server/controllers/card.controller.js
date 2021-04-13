import mongoose from 'mongoose';
import { Card } from '../models/card.model';
import { validateCard, isCardExist, checkCardOwner } from '../utils/card-validations'
 
export const createCard = async (req, res) => {
  const checkCreditCard = await validateCard(req.body, req.userID)

  if(!checkCreditCard.success) {
    return res.status(406).send({ success: false, message: checkCreditCard.message })
  }

  const card = new Card({
    _id: new mongoose.Types.ObjectId(),
    userId: req.userID,
    ...req.body
  });

  try {
    const createdCard = await card.save();
    res.status(201).send({ createdCard, success: true });
  } catch (err) {
    res.status(400).send({ err, success: false });
  }
}

export const editCard = async (req, res) => {
  const cardExist = await isCardExist(req.params.id)
  const card = await Card.findOne({ _id: req.params.id })

  if(!checkCardOwner(card, req.userID)) {
    return res.status(400).send({success: false, message: 'User error'})
  }

  if(!cardExist.success) {
    return res.status(400).send(cardExist.message)
  }

  try {
    const updatedCard = await Card.updateOne({ _id: req.params.id }, card);
    res.status(200).send({
      message: 'Card was updated',
      updatedCard,
      success: true
    });
  } catch (err) {
    res.status(304).send({ err, success: false });
  }
}

export const getCards = async (req, res) => {
  try {
    const cards = await Card.find({ userId: req.userID })
    res.status(200).send({ cards, success: true });
  } catch (err) {
    res.status(400).send({ err, success: false });
  }
}

export const getCardById = async (req, res) => {
  const cardExist = await isCardExist(req.params.id)
  const card = await Card.findOne({ _id: req.params.id })

  if(!checkCardOwner(card, req.userID)) {
    return res.status(400).send({success: false, message: 'User error'})
  }

  if(!cardExist.success) {
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

  if(!checkCardOwner(card, req.userID)) {
    return res.status(400).send({success: false, message: 'User error'})
  }

  if(!cardExist.success) {
    return res.status(400).send({ success: cardExist.success, message: cardExist.message})
  }

  try {
    await Card.deleteOne({ _id: req.params.id });
    res.status(200).send({ message: 'Card was deleted', success: true });
  } catch (err) {
    res.status(400).send({ err, success: false });
  }
}
