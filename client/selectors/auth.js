import { getPrivateFetchStatus } from './common';

export const getFetchError = (state) => state.authorization.error;
export const getEmailProviderError = (state) => state.authorization.isEmailError;
export const getAuthPrivateFS = getPrivateFetchStatus('authorization');
export const getRestorePasswordCredentials = (state) => state.authorization.restorePassword;
export const getAuthorizationStatus = (state) => state.authorization.isAuthorized;
