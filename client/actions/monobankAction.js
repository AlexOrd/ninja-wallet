import api from '../API/api';
import { SET_MONOBANK_ACCOUT, SET_NEW_MONOBANK_ACCOUNT } from '../constants/actionType';
import { fetchCards } from './cardAction';

export const setMonobankAccout = (monobankInfo) => ({
  type: SET_MONOBANK_ACCOUT,
  data: { monobankInfo },
});

export const createMonobankAccout = (newMonobankAccount) => ({
  type: SET_NEW_MONOBANK_ACCOUNT,
  data: { newMonobankAccount },
});

export const fetchUserInfo = (header) => async (dispatch) => {
  const res = await api.monobankApi.getUserInfo(header);
  dispatch(setMonobankAccout(res));
};

export const createMonobankThunk = (createMonobank, header) => async (dispatch) => {
  try {
    const res = await api.monobankApi.createMonobankAccount(createMonobank, header);
    dispatch(fetchCards());
  } catch (error) {}
};
