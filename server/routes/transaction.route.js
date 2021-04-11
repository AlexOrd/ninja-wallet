const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction.controller');
import validate from '../config/joi.validate';
import schema from '../utils/validator';

router
  .route('/')
  .get(transactionController.getAllTransactions)
  .post(validate(schema.transaction), transactionController.createTransaction);

router
  .route('/:id')
  .patch(validate(schema.updateTransaction), transactionController.updateTransaction)
  .get(transactionController.getTransaction)
  .delete(transactionController.deleteTransaction);
  
router
  .route('/cardId/:cardId')
  .get(transactionController.getTransactionsByCardId);
router
  .route('/category/:transactionCategory')
  .get(transactionController.getTransactionsByCategory);




module.exports = router;
