import {
  UPDATE_PRIVATE_FETCH_STATUS,
  UPDATE_COMMON_FETCH_STATUS,
  SET_FETCH_ERROR,
} from './types/common';

export const fetchStatusCreator = (reducerName) => (actionName, dispatch) => (status) => {
  dispatch({ type: UPDATE_PRIVATE_FETCH_STATUS, payload: { reducerName, actionName, status } });
  dispatch({ type: UPDATE_COMMON_FETCH_STATUS, payload: { status } });
};

export const setCommonFetchStatus = (status, dispatch) => {
  const action = { type: UPDATE_COMMON_FETCH_STATUS, payload: { status } };
  if (!dispatch) {
    return action;
  }

  return dispatch(action);
};

export const setPrivateFetchStatus = (reducerName) => (actionName, dispatch) => (status) => {
  const action = {
    type: UPDATE_PRIVATE_FETCH_STATUS,
    payload: { reducerName, actionName, status },
  };

  if (dispatch) {
    return dispatch(action);
  }

  return action;
};

export const setFetchError = (errResponse, dispatch) => {
  let errorName = errResponse ? errResponse.data.error : null;
  const action = { type: SET_FETCH_ERROR, payload: { errorName } };
  if (dispatch) return dispatch(action);
  return action;
};
