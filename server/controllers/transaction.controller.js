const Transaction = require('../models/transaction.model')


//ROUTE HANDLERS
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()
    res.status(200).json({
      status: 'success',
      results: transactions.length,
      data: {
        transactions
      },
    });

  } catch (err) {
    res.send(404).json({
      status: 'fail',
      message: err
    })
  }
};
exports.createTransaction = async (req, res) => {
  try {
    const newTransaction = await Transaction.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        transaction: newTransaction
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};
exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({
      status: 'success',
      data: {
        transaction
      },
    });

  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'notUpdated'
    })
  }
};
exports.deleteTransaction = async (req, res) => {
  try {
    await Bank.findByIdAndDelete(req.params.id)
    res.send(204).json({
      status: 'success',
      data: null
    })
  } catch (err) {
    res.send(404).json({
      status: 'fail',
      message: err
    })
  }
};
