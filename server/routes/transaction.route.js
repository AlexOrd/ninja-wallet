const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction.controller');
const validate = require ('../config/joi.validate');
const schema = require ('../utils/validator');

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
  .route('/accountId/:accountId')
  .get(transactionController.getTransactionsByAccountId);
router
  .route('/category/:transactionCategory')
  .get(transactionController.getTransactionsByCategory);




module.exports = router;
