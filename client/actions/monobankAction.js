import api from '../API/api';
import {
  SET_MONOBANK_ACCOUT,
  SET_NEW_MONOBANK_ACCOUNT,
  ADD_DATA_TO_STATEMENTS,
  SET_USER_MONOBANK_ACCOUNTS,
  SET_ERROR,
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

export const setError = (msg) => ({
  type: SET_ERROR,
  data: { msg },
});

export const fetchUserInfo = (header, handleError) => async (dispatch) => {
  const res = await api.monobankApi.getUserInfo(header, handleError);
  dispatch(setMonobankAccout(res.data.monobankInfo));
};

export const fetchUserMonobankAccounts = (handleError) => async (dispatch) => {
  const res = await api.monobankApi.getMonobankUserAccounts(handleError);

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
  monobankUserDataId,
  handleError
) => async (dispatch) => {
  try {
    const res = await api.monobankApi.getStatementInfo(
      monobankToken,
      monobankAccountId,
      monobankUserDataId,
      handleError
    );

    dispatch(addStatementData(monobankAccountId, res.data.monobankTransactions));
  } catch (err) {
    console.log(err);
  }
};
