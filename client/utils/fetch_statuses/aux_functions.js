import { commonFetchStatuses } from '../auth/constants';

export const isSuccessFetchStatus = (status) => status === commonFetchStatuses.SUCCEEDED;
