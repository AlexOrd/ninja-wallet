import {
  SET_MONOBANK_ACCOUT,
  SET_NEW_MONOBANK_ACCOUNT,
  ADD_DATA_TO_STATEMENTS,
  SET_USER_MONOBANK_ACCOUNTS,
  SET_STATEMENT_DATA,
  REMOVE_MONOBANK_TRANSACTION,
} from '../constants/actionType';

const initialState = {
  monobankInfo: [],
  newMonobankAccount: null,
  userMonobankAccounts: [],
  statementsData: [], // array of transactions from monobank cards
  monobankLocalCardsIds: [],
};

const monobankReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MONOBANK_ACCOUT: {
      return { ...state, monobankInfo: action.data.monobankInfo };
    }
    case SET_NEW_MONOBANK_ACCOUNT: {
      return { ...state, newMonobankAccount: action.data.newMonobankAccount };
    }
    // case SET_STATEMENT_DATA: {
    //   return { ...state, statementsData: action.data.statementsData };
    // }
    case ADD_DATA_TO_STATEMENTS: {
      const statementsMonobankAccountsIds = state.statementsData.map(
        (statement) => statement.monobankAccountId
      );

      if (statementsMonobankAccountsIds.includes(action.data.monobankAccountId)) {
        const newStatementsData = state.statementsData.map((statement) => {
          if (statement.monobankAccountId === action.data.monobankAccountId) {
            return {
              monobankAccountId: action.data.monobankAccountId,
              statements: action.data.statements,
            };
          }
          return statement;
        });
      } else {
        return {
          ...state,
          statementsData: [
            ...state.statementsData,
            {
              monobankAccountId: action.data.monobankAccountId,
              statements: action.data.statements,
            },
          ],
        };
      }
    }
    case SET_USER_MONOBANK_ACCOUNTS: {
      return {
        ...state,
        userMonobankAccounts: action.data.userMonobankAccounts,
        monobankLocalCardsIds: action.data.userMonobankAccounts.map((account) => account.card),
      };
    }
    case REMOVE_MONOBANK_TRANSACTION: {
      const transactionId = action.data.transactionId;
      const monobankUserDataId = action.data.monobankUserDataId;
      const newStatementsData = state.statementsData.map((statement) => {});
      return {};
    }
    default: {
      return { ...state };
    }
  }
};

export default monobankReducer;
