import React from 'react';
import { FormGroup } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getAuthPrivateFS } from '../../../../../selectors/auth';
import { getCommonFetchStatus } from '../../../../../selectors/common';
import { authFetchStatusNames } from '../../../../../utils/auth/names';
import { SettingsSubPart } from '../../common';
import { SettingOption } from './Option';
import {
  doubleAuthenticateStatus,
  notifyAboutSignInStatus,
} from '../../../../../selectors/settings';

const {
  NOTIFY_ABOUT_SIGN_IN_OFF,
  NOTIFY_ABOUT_SIGN_IN_ON,
  DOUBLE_AUTHENTICATE_OFF,
  DOUBLE_AUTHENTICATE_ON,
} = authFetchStatusNames;

export const SecurityOptions = ({ notifyAboutSignInHandler, doubleAuthenticateHandler }) => {
  const notificationAboutSignIn = useSelector(notifyAboutSignInStatus);
  const doubleAuthenticate = useSelector(doubleAuthenticateStatus);
  const commonFetchStatus = useSelector(getCommonFetchStatus);
  const notifyAboutSignInOffFS = useSelector(getAuthPrivateFS(NOTIFY_ABOUT_SIGN_IN_OFF));
  const notifyAboutSignInOnFS = useSelector(getAuthPrivateFS(NOTIFY_ABOUT_SIGN_IN_ON));
  const doubleAuthenticateOffFS = useSelector(getAuthPrivateFS(DOUBLE_AUTHENTICATE_OFF));
  const doubleAuthenticateOnFS = useSelector(getAuthPrivateFS(DOUBLE_AUTHENTICATE_ON));

  return (
    <SettingsSubPart title="Security settings">
      <FormGroup>
        <SettingOption
          label="Notify about sign in"
          initialValue={notificationAboutSignIn}
          handler={notifyAboutSignInHandler}
          commonFetchStatus={commonFetchStatus}
          privateFetchStatuses={{
            statusOn: notifyAboutSignInOffFS,
            statusOff: notifyAboutSignInOnFS,
          }}
        />
        <SettingOption
          label="Double authenticate"
          initialValue={doubleAuthenticate}
          handler={doubleAuthenticateHandler}
          commonFetchStatus={commonFetchStatus}
          privateFetchStatuses={{
            statusOn: doubleAuthenticateOffFS,
            statusOff: doubleAuthenticateOnFS,
          }}
        />
      </FormGroup>
    </SettingsSubPart>
  );
};
