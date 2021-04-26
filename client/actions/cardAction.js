import api from '../API/api';
import { SET_CARD, SET_NEW_CARD, DELETE_CARD } from '../constants/actionType';

export const setCards = (card) => ({
  type: SET_CARD,
  data: { card },
});

export const changeCard = (newCard) => ({
  type: SET_NEW_CARD,
  data: { newCard },
});

export const deleteCard = () => ({
  type: DELETE_CARD,
});

export const fetchCards = () => async (dispatch) => {
  try {
    const res = await api.cardApi.getAllCards();
    dispatch(setCards(res));
  } catch (error) {}
};

export const createCardThunk = (cardData) => async (dispatch) => {
  try {
    const res = await api.cardApi.createCard(cardData);
    dispatch(fetchCards());
  } catch (error) {}
};

export const editCardThunk = (cardId, cardData) => async (dispatch) => {
  try {
    const res = await api.cardApi.editCard(cardId, cardData);
    dispatch(fetchCards());
  } catch (error) {}
};

export const deleteCardThunk = (cardId) => async (dispatch) => {
  try {
    const res = await api.cardApi.deleteCard(cardId);
    dispatch(fetchCards());
  } catch (error) {}
};
