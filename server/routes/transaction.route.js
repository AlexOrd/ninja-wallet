const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction.controller');

router.route('/create').post(transactionController.createTransaction);
// router
//   .route('/')
//   .get(transactionController.getAllTransaction)
//   .post(transactionController.createTransaction);

// router
//   .route('/:id')
//   .patch(transactionController.updateTransaction)
//   .get(transactionController.getTransaction)
//   .delete(transactionController.deleteTransaction);
  
// router.route("/accountId/:accountId").get(transactionController.getTransactionsByAccountId);
// router.route("/category/:transactionCategory").get(transactionController.getTransactionsByCategory);




module.exports = router;
