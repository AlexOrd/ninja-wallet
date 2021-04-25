const { Transaction } = require('../models/transaction.model');
import { doesCardIdExist, doesTransactionIdExist } from '../utils/transactions-validations';

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate('cardId transactionCategory');
    res.status(200).json({
      success: true,
      results: transactions.length,
      transactions,
    });
  } catch (err) {
    res.send(500).json({
      success: false,
      message: err,
    });
  }
};
exports.getTransactionsByCardId = async (req, res) => {
  try {
    const transactions = await Transaction.find({ cardId: req.params.cardId });
    res.status(200).json({
      success: true,
      results: transactions.length,
      transactions,
    });
  } catch (err) {
    res.send(404).json({
      success: false,
      message: err,
    });
  }
};
exports.getTransactionsByCategory = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      transactionCategory: req.params.transactionCategory,
    });
    res.status(200).json({
      success: true,
      results: transactions.length,

      transactions,
    });
  } catch (err) {
    res.send(404).json({
      success: false,
      message: err,
    });
  }
};

exports.createTransaction = async (req, res) => {
  if (!doesCardIdExist(req.body.cardId)) {
    return res.send(400).json({
      success: false,
      message: 'This card does not exist!',
    });
  }
  try {
    console.log(req.userID)
      const transactionFromRequest = {...req.body, userId: req.userID}
      console.log(transactionFromRequest)
    const newTransaction = await Transaction.create(transactionFromRequest);
    res.status(201).json({
      success: true,

      transaction: newTransaction,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};
exports.getTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id).populate('cardId');
    // check if transaction exists, it can be null
    res.status(200).json({
      success: true,
      transaction,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err,
    });
  }
};
// if does not exist this transaction
exports.updateTransaction = async (req, res) => {
  if (!doesTransactionIdExist(req.params.id)) {
    return res.send(400).json({
      success: false,
      message: 'This transaction does not exist!',
    });
  }
  try {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: 'true',
      transaction,
    });
  } catch (err) {
    res.status(404).json({
      success: 'false',
      message: 'notUpdated',
    });
  }
};
exports.deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.send(204).json({
      success: 'true',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      success: 'false',
      message: err,
    });
  }
};
