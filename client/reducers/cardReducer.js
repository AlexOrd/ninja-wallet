import { SET_CARD, SET_NEW_CARD, DELETE_CARD } from '../constants/actionType';

const initialState = {
  card: [],
  newCard: null,
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD: {
      return { ...state, card: action.data.card };
    }
    case SET_NEW_CARD: {
      return { ...state, newCard: action.data.newCard };
    }
    case DELETE_CARD: {
      return { ...state, updatedCard: null };
    }
    default: {
      return { ...state };
    }
  }
};

export default cardReducer;
