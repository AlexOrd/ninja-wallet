import {
  GET_CARDS_SUCCESS,
  GET_TRANSACTIONS_SUCCESS,
  GET_SUMMARY_SUCCESS,
  SET_LOADING_STATUS,
} from '../constants/actionType';

let initialState = {
  cards: {
    data: null,
    isLoading: false,
  },
  transactions: {
    data: null,
    isLoading: false,
  },
  summaryData: {
    data: null,
    isLoading: false,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CARDS_SUCCESS:
      return {
        ...state,
        cards: {
          data: action.payload,
        },
      };
    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: {
          data: action.payload,
          isLoading: false,
        },
      };
    case GET_SUMMARY_SUCCESS:
      return {
        ...state,
        summaryData: {
          data: action.payload,
        },
      };
    case SET_LOADING_STATUS:
      return {
        ...state,
        [action.payload.entity]: {
          data: null,
          isLoading: action.payload.status,
        },
      };
    default:
      return state;
  }
}
