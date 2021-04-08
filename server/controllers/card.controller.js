import mongoose from 'mongoose';
import { Card } from '../models/card.model';

export const createCard = (req, res) => {
    const card = new Card({
        _id: new mongoose.Types.ObjectId(),
        userId: req.body.userId,
        ...req.body
    });

    card
        .save()
        .then(card => res.status(201).send({card, success: true}))
        .catch(err => res.status(400).send({err, success: false}));
}

export const editCard = (req, res) => {
    const card = new Card({ ...req.body });

    Card
        .updateOne({ _id: req.params.id }, card)
        .then(card => res.status(200).send({
            message: 'Card was updated',
            card,
            success: true
        })).catch(err => res.status(304).send({
            err, 
            success: false
        }))
}

export const getCards = (req, res) => {
    Card
        .find({})
        .then(cards => res.status(200).send({ cards, success: true }))
        .catch(err => res.status(400).send({ err, success: false }))
}

export const getCardById = (req, res) => {
    Card
        .findOne({ _id: req.params.id })
        .then(card => res.status(200).send({ card, success: true}))
        .catch(err => res.status(400).send({ err, success: false }))
}

export const removeCardById = (req, res) => {
    Card.deleteOne({ _id: req.params.id })
        .then(card => res.status(200).send({ message: 'Card was deleted', success: true }))
        .catch(err => res.status(400).send({ err, success: false }))
}
