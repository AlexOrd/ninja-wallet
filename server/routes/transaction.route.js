const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transaction.controller");

router.route("/create").post(transactionController.createTransaction);




module.exports = router;
