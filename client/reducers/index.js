import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from './auth';
import { settingsReducer } from './settings';
import { fetchStatusesReducer } from './fetch_statuses';

// Import custom components
import categoriesReducer from './categoriesReducer';

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    authorization: authReducer,
    settings: settingsReducer,
    fetchStatuses: fetchStatusesReducer,
    form: formReducer, // ← redux-form
    auth: authReducer,
    categories: categoriesReducer,
  });

const rootReducer = (state, action) => {
  if (action === 'LOG_OUT_SUCCESS') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
