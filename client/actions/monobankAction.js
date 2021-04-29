import api from '../API/api';
import {
  SET_MONOBANK_ACCOUT,
  SET_NEW_MONOBANK_ACCOUNT,
  ADD_DATA_TO_STATEMENTS,
  SET_USER_MONOBANK_ACCOUNTS,
  REMOVE_MONOBANK_TRANSACTION,
} from '../constants/actionType';
import { fetchCards } from './cardAction';

export const setMonobankAccout = (monobankInfo) => ({
  type: SET_MONOBANK_ACCOUT,
  data: { monobankInfo },
});

export const createMonobankAccout = (newMonobankAccount) => ({
  type: SET_NEW_MONOBANK_ACCOUNT,
  data: { newMonobankAccount },
});

const addStatementData = (monobankAccountId, statements) => ({
  type: ADD_DATA_TO_STATEMENTS,
  data: { monobankAccountId, statements },
});

const setUserMonobankAccounts = (userMonobankAccounts) => ({
  type: SET_USER_MONOBANK_ACCOUNTS,
  data: { userMonobankAccounts },
});

export const fetchUserInfo = (header) => async (dispatch) => {
  const res = await api.monobankApi.getUserInfo(header);
  dispatch(setMonobankAccout(res.data.monobankInfo));
};

export const fetchUserMonobankAccounts = () => async (dispatch) => {
  const res = await api.monobankApi.getMonobankUserAccounts();

  dispatch(setUserMonobankAccounts(res.data.monobankUserAccountsData));
};

export const createMonobankThunk = (createMonobank, header) => async (dispatch) => {
  try {
    const res = await api.monobankApi.createMonobankAccount(createMonobank, header);
    dispatch(fetchCards());
  } catch (error) {}
};

export const getStatementDataThunk = (
  monobankToken,
  monobankAccountId,
  monobankUserDataId
) => async (dispatch) => {
  try {
    const res = await api.monobankApi.getStatementInfo(
      monobankToken,
      monobankAccountId,
      monobankUserDataId
    );

    dispatch(addStatementData(monobankAccountId, res.data.monobankTransactions));
  } catch (err) {
    // console.log(err);
  }
};

export const removeMonobankTransaction = (transactionId, monobankAccountId) => ({
  type: REMOVE_MONOBANK_TRANSACTION,
  data: { transactionId, monobankAccountId },
});

export const applyTransaction = (transaction, header) => async (dispatch) => {
  try {
    const res = await api.monobankApi.applyTransaction(transaction, header);

    dispatch(removeMonobankTransaction(transaction.transactionId, transaction.monobankAccountId));
  } catch (err) {}
};

export const dismissTransaction = (transaction, header) => async (dispatch) => {
  try {
    const res = await api.monobankApi.dismissTransaction(transaction, header);

    dispatch(removeMonobankTransaction(transaction.transactionId, transaction.monobankAccountId));
  } catch (err) {}
};
