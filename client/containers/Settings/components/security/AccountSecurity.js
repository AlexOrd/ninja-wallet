import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../../../actions/settings';
import { SecurityOptions, ChangePassword } from './components';
import { TelegramBot } from './components/TelegramBot';
import { getConformCodeForBot, getVerifiedBotStatus } from '../../../../selectors/settings';
import {
  getVerificationCodeForBot,
  disconnectTelegramBot,
  setNotifyAboutSignIn,
  setDoubleAuthenticate,
} from '../../../../actions/settings/security';

export function AccountSecurity() {
  const dispatch = useDispatch();
  const handleChangePassword = ({ oldPassword, newPassword, confirmPassword }) => {
    dispatch(changePassword(oldPassword, newPassword, confirmPassword));
  };

  const notifyAboutSignInHandler = (value) => () => dispatch(setNotifyAboutSignIn(value));
  const doubleAuthenticateHandler = (value) => () => dispatch(setDoubleAuthenticate(value));
  const disconnectTelegramBotHandler = () => dispatch(disconnectTelegramBot);
  const getVerifiedCodeForBotHandler = () => dispatch(getVerificationCodeForBot);

  const confirmCodeForBot = useSelector(getConformCodeForBot);
  const isConnectedBot = useSelector(getVerifiedBotStatus);

  return (
    <>
      <ChangePassword {...{ handleChangePassword }} />
      <TelegramBot
        {...{
          getVerifiedCodeForBotHandler,
          disconnectTelegramBotHandler,
          confirmCodeForBot,
          isConnectedBot,
        }}
      />
      {isConnectedBot && (
        <SecurityOptions
          {...{
            notifyAboutSignInHandler,
            doubleAuthenticateHandler,
          }}
        />
      )}
    </>
  );
}
