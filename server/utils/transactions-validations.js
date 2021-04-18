import { Card } from '../models/card.model';
import { Transaction } from '../models/transaction.model';

export const doesCardIdExist = async (cardId) => {
  const doesExist = await Card.findOne({ _id: cardId });

  if (doesExist) {
    return true;
  }

  return false;
};

export const doesTransactionIdExist = async (transactionId) => {
  const doesExist = await Transaction.findOne({ _id: transactionId });

  if (doesExist) {
    return true;
  }

  return false;
};