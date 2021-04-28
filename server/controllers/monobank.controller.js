import axios from 'axios';
import { Card } from '../models/card.model';
import { MonobankUserDataModel } from '../models/monobank.model';
import { Transaction } from '../models/transaction.model';
import User from '../models/user.model';
import HttpStatus from 'http-status-codes';

const monobankApiBaseUrl = 'https://api.monobank.ua/personal';

export const getUserInfo = async (req, res) => {
  const monobankToken = req.headers['monobank-token'];

  try {
    const monobankApiRes = await axios.get(`${monobankApiBaseUrl}/client-info`, {
      headers: {
        'X-Token': monobankToken,
      },
    });

    res.status(HttpStatus.CREATED).json({
      success: true,
      data: { monobankInfo: monobankApiRes.data },
    });
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
};

export const addMonobankAccountToUser = async (req, res) => {
  // if (await doesUserAlreadyAddedThisAccount(req.body.monobankAccountId, req.userID)) {
  //     res.status(HttpStatus.NOT_ACCEPTABLE).json({
  //       success: false,
  //       msg: 'You already added this card',
  //     });
  //   }

  try {
    const newCard = new Card({
      userId: req.userID,
      cardNumber: req.body.cardNumber,
      currency: 'uah',
      cardName: 'monobank',
    });

    const createdNewCard = await newCard.save();

    const monobankUserData = new MonobankUserDataModel({
      monobankToken: req.headers['monobank-token'],
      monobankAccountId: req.body.monobankAccountId,
      userId: req.userID,
      card: createdNewCard._id,
    });

    const createdMonobankUserData = await monobankUserData.save();

    res.status(HttpStatus.CREATED).json({
      success: true,
      data: { monobankUserData: createdMonobankUserData },
    });
  } catch (err) {
    console.log(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
};

export const getUserMonobankDataAccounts = async (req, res) => {
  try {
    const monobankUserAccountsData = await MonobankUserDataModel.find({ userId: req.userID });

    res.status(HttpStatus.CREATED).json({
      success: true,
      data: { monobankUserAccountsData: monobankUserAccountsData },
    });
  } catch (err) {}
};

export const getStatementData = async (req, res) => {
  const sevenDaysAgoData = new Date();
  sevenDaysAgoData.setDate(sevenDaysAgoData.getDate() - 10);

  const monobankToken = req.headers['monobank-token'];
  const monobankAccountId = req.body.monobankAccountId;
  const dateFrom = req.body.from || sevenDaysAgoData.getTime();
  const dateTo = req.body.to || new Date().getTime();
  const monobankUserDataId = req.body.monobankUserDataId;

  try {
    const monobankApiRes = await axios.get(
      `${monobankApiBaseUrl}/statement/${monobankAccountId}/${dateFrom}/${dateTo}`,
      {
        headers: {
          'X-Token': monobankToken,
        },
      }
    );

    const monobankUserData = await MonobankUserDataModel.findOne({ _id: monobankUserDataId });
    const dontReturnTransactionIds = monobankUserData.dismissedTransactionIds.concat(
      monobankUserData.appliedTransactionIds
    );

    const filteredTransactions = monobankApiRes.data.filter((transaction) => {
      if (dontReturnTransactionIds.includes(transaction.id) || transaction.amount >= 0) {
        return false;
      }
      return true;
    });

    const onlyExpenses = filteredTransactions.map((transaction) => ({
      ...transaction,
      amount: Math.abs(transaction.amount / 100),
    }));

    res.status(HttpStatus.CREATED).json({
      success: true,
      data: { monobankTransactions: onlyExpenses },
    });
  } catch (err) {
    console.log(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
};

export const dismissTransaction = async (req, res) => {
  try {
    const monobankUserData = await MonobankUserDataModel.findOne({
      _id: req.body.monobankUserDataId,
    });

    if (!monobankUserData) {
    }

    const transactionAlreadyAddedOrDismissed = checkIfTransactionAlreadyAddedOrDismissed(
      monobankUserData.appliedTransactionIds,
      monobankUserData.dismissedTransactionIds,
      req.body.transactionId
    );

    if (transactionAlreadyAddedOrDismissed.isError) {
      return res.status(HttpStatus.NOT_ACCEPTABLE).json({
        success: false,
        msg: transactionAlreadyAddedOrDismissed.msg,
      });
    }

    monobankUserData.dismissedTransactionIds.push(req.body.transactionId);

    const updatedMonobankUserData = await monobankUserData.save();

    res.status(HttpStatus.OK).json({
      success: true,
      data: { monobankUserData: updatedMonobankUserData },
    });
  } catch (err) {
    console.log(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
};

export const applyTransaction = async (req, res) => {
  try {
    debugger
    const monobankUserData = await MonobankUserDataModel.findOne({
      _id: req.body.monobankUserDataId,
    });

    if (!monobankUserData) {
    }
    
    const transactionAlreadyAddedOrDismissed = checkIfTransactionAlreadyAddedOrDismissed(
      monobankUserData.appliedTransactionIds,
      monobankUserData.dismissedTransactionIds,
      req.body.transactionId
    );

    if (transactionAlreadyAddedOrDismissed?.isError) {
      return res.status(HttpStatus.NOT_ACCEPTABLE).json({
        success: false,
        msg: transactionAlreadyAddedOrDismissed.msg,
      });
    }

    monobankUserData.appliedTransactionIds.push(req.body.transactionId);

    const updatedMonobankUserData = await monobankUserData.save();

    const newTransaction = new Transaction({
      transactionType: 'monobank',
      userId: req.userID,
      cardId: updatedMonobankUserData.card,
      sum: req.body.transactionSum, // sum from monobank transaction
      merchantName: req.body.transactionDescription, // desctiprion from monobank transaction
    });

    const createdTransaction = await newTransaction.save();

    res.status(HttpStatus.OK).json({
      success: true,
      data: {
        monobankUserData: updatedMonobankUserData,
        transaction: createdTransaction,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      err
    });
  }
};

const checkIfTransactionAlreadyAddedOrDismissed = (
  appliedTransactionIds,
  dismissedTransactionIds,
  transactionsId
) => {
  if (appliedTransactionIds.includes(transactionsId)) {
    return {
      isError: true,
      msg: 'This transaction already added',
    };
  }

  if (dismissedTransactionIds.includes(transactionsId)) {
    return {
      isError: true,
      msg: 'This transaction already dismisses',
    };
  }

  return {
    isError: false,
  };
};

const doesUserAlreadyAddedThisAccount = async (accoutId, userId) => {
  const user = await User.findOne({ _id: userId });

  if (user.monobankUserData.includes(accoutId)) {
    return true;
  }

  return false;
};
