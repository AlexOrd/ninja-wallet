import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from './auth';
import { settingsReducer } from './settings';
import { fetchStatusesReducer } from './fetch_statuses';

// Import custom components
import cardReducer from './cardReducer';
import monobankReducer from './monobankReducer';
import categoriesReducer from './categoriesReducer';
import dashboardReducer from './dashboardReducer';

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    authorization: authReducer,
    settings: settingsReducer,
    fetchStatuses: fetchStatusesReducer,
    form: formReducer, // ← redux-form
    auth: authReducer,
    card: cardReducer,
    monobank: monobankReducer,
    categories: categoriesReducer,
    dashboard: dashboardReducer,
  });

const rootReducer = (state, action) => {
  if (action === 'LOG_OUT_SUCCESS') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
