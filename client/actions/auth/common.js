import { AUTHORIZATION, RESET_RESTORE_SESSION, SET_PERMISSION_REDIRECT } from '../types/auth';

export const resetRestoreSession = () => ({ type: RESET_RESTORE_SESSION });
export const setAuthStatus = (isAuthorized) => ({ type: AUTHORIZATION, payload: { isAuthorized } });
