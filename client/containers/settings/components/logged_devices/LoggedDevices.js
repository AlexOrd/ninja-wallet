import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { SignOutEveryDevice, DeviceCard } from './components';
import { SettingsSubPart } from '../common';
import { getCurrentDeviceID } from '../../../../selectors/settings';
import { getDevicesList } from '../../../../selectors/settings';
import { getCommonFetchStatus } from '../../../../selectors/common';
import {
  signOutCurrentDevice,
  signOutEveryDevice,
  signOutSomeDevice,
} from '../../../../actions/auth';

export function LoggedDevices() {
  const dispatch = useDispatch();
  const devicesList = useSelector(getDevicesList);
  const fetchStatus = useSelector(getCommonFetchStatus);
  const currentDeviceID = useSelector(getCurrentDeviceID);

  const handleSignOut = (deviceID) => () => dispatch(signOutSomeDevice(deviceID));
  const handleSignOutForCurrentDevice = () => dispatch(signOutCurrentDevice());
  const handleSignOutEveryDevice = () => dispatch(signOutEveryDevice());

  return (
    <SettingsSubPart title="Logged devices">
      <Grid container={true} direction="row">
        {devicesList.map(({ _id, deviceType, lastLogin, browser, platform }) => {
          return (
            <DeviceCard
              key={_id}
              {...{
                browser,
                platform,
                deviceType,
                lastLogin,
                fetchStatus,
                handleSignOut,
                handleSignOutForCurrentDevice,
                deviceID: _id,
                isCurrentDevice: _id === currentDeviceID,
              }}
            />
          );
        })}
      </Grid>
      {devicesList.length > 1 && <SignOutEveryDevice handler={handleSignOutEveryDevice} />}
    </SettingsSubPart>
  );
}
