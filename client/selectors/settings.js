import { getPrivateFetchStatus } from './common';

export const getVerifiedEmailStatus = (state) => state.settings.isVerifiedEmail;
export const getUserEmail = (state) => state.settings.userEmail;
export const notifyAboutSignInStatus = (state) => state.settings.notifyAboutSignIn;
export const doubleAuthenticateStatus = (state) => state.settings.doubleAuthenticate;
export const verificationBotStatus = (state) => state.settings.isVerifiedBot;
export const getConformCodeForBot = (state) => state.settings.confirmCodeForBot;
export const getDevicesList = (state) => state.settings.devicesListWithOpenedApp;
export const getVerifiedBotStatus = (state) => state.settings.isVerifiedBot;
export const getCurrentDeviceID = (state) => state.settings.currentDeviceID;

export const getSettingsPrivateFS = getPrivateFetchStatus('settings');
