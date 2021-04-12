import mongoose from 'mongoose';
import { Card } from '../models/card.model';

export const createCard = async (req, res) => {
  const card = new Card({
    _id: new mongoose.Types.ObjectId(),
    userId: req.body.userID,
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
    const cards = await Card.find({});
    res.status(200).send({ cards, success: true });
  } catch (err) {
    res.status(400).send({ err, success: false });
  }
}

export const getCardById = async (req, res) => {
  try {
    const card = await Card.findOne({ _id: req.params.id });
    res.status(200).send({ card, success: true });
  } catch (err) {
    res.status(400).send({ err, success: false });
  }
}

export const removeCardById = async (req, res) => {
  try {
    const deletedCard = Card.deleteOne({ _id: req.params.id });
    res.status(200).send({ message: 'Card was deleted', deletedCard, success: true });
  } catch (err) {
    res.status(400).send({ err, success: false });
  }
}
