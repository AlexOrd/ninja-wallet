export const getCommonFetchStatus = (state) => state.fetchStatuses.commonFetchStatus;
export const getAllPrivateFetchStatuses = (state) => state.fetchStatuses;
export const getFetchError = (state) => state.fetchStatuses.fetchError;

export const getPrivateFetchStatus = (reducerName) => (actionName) => (state) => {
  return state.fetchStatuses[reducerName][actionName];
};
