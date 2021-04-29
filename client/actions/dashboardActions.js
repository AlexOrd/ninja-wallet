import { axiosInstance } from '../config/axios';
import {
  GET_CARDS_SUCCESS,
  GET_TRANSACTIONS_SUCCESS,
  GET_SUMMARY_SUCCESS,
  SET_LOADING_STATUS,
} from '../constants/actionType';

export const getAllCards = () => (dispatch) => {
  axiosInstance
    .get('/api/card')
    .then(({ data }) => {
      dispatch(success(data.cards));
    })
    .catch((err) => console.log(err));

  const success = (payload) => ({
    type: GET_CARDS_SUCCESS,
    payload,
  });
};

export const getCardTransactions = (cardId, quantity) => (dispatch) => {
  dispatch(setLoadingStatus('transactions', true));
  axiosInstance
    .get('/api/transactions/cardId/' + cardId)
    .then(({ data }) => {
      dispatch(success(data.transactions));
    })
    .catch((err) => console.log(err));

  const success = (payload) => ({
    type: GET_TRANSACTIONS_SUCCESS,
    payload,
  });
};

export const getSummaryInfo = () => (dispatch) => {
  axiosInstance
    .get('/api/summary')
    .then(({ data }) => {
      dispatch(success(data.data));
    })
    .catch((err) => console.log(err));

  const success = (payload) => ({
    type: GET_SUMMARY_SUCCESS,
    payload,
  });
};

const setLoadingStatus = (entity, status) => ({
  type: SET_LOADING_STATUS,
  payload: {
    entity,
    status,
  },
});
