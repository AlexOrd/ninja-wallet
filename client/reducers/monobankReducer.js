import { SET_MONOBANK_ACCOUT, SET_NEW_MONOBANK_ACCOUNT } from '../constants/actionType';

const initialState = {
  monobankInfo: [],
  newMonobankAccount: null,
};

const monobankReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MONOBANK_ACCOUT: {
      return { ...state, monobankInfo: action.data.monobankInfo };
    }
    case SET_NEW_MONOBANK_ACCOUNT: {
      return { ...state, newMonobankAccount: action.data.newMonobankAccount };
    }
    default: {
      return { ...state };
    }
  }
};

export default monobankReducer;
