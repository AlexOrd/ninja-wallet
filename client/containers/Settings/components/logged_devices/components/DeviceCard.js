import React from 'react';
import { Box, Card, CardContent, makeStyles, Tooltip, Typography } from '@material-ui/core';
import { getLoginDate } from '../../../../../utils/auth/tools';
import { getIcons } from '../../../../../utils/auth/get_device_info';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import { AuthButton } from '../../../../Authorization/components/common';

export const DeviceCard = ({
  deviceType,
  lastLogin,
  deviceID,
  handleSignOut,
  isCurrentDevice,
  handleSignOutForCurrentDevice,
  browser,
  platform,
}) => {
  const styles = useStyles();

  const signOutHandler = () => {
    if (isCurrentDevice) {
      return handleSignOutForCurrentDevice();
    }
    handleSignOut(deviceID)();
  };

  const deviceIcons = getIcons({ browser, deviceType, platform });

  const DeviceTypeIcon = deviceIcons.device.icon;
  const BrowserIcon = deviceIcons.browser.icon;
  const PlatformIcon = deviceIcons.platform.icon;

  const deviceTypeTooltip = deviceIcons.device.message;
  const browserTooltip = deviceIcons.browser.message;
  const platformTooltip = deviceIcons.platform.message;

  const { loginTime, loginDate } = getLoginDate(lastLogin);

  return (
    <Card variant="outlined" className={isCurrentDevice ? styles.currentDeviceCard : styles.card}>
      <CardContent className={styles.cardContent}>
        <Box>
          <Tooltip title={`login from ${browserTooltip}`}>
            <Box className={styles.iconWrapper}>
              <BrowserIcon />
            </Box>
          </Tooltip>
          <Tooltip title={`login from ${deviceTypeTooltip}`}>
            <Box className={styles.iconWrapper}>
              <DeviceTypeIcon />
            </Box>
          </Tooltip>
          <Tooltip title={`login from ${platformTooltip}`}>
            <Box className={styles.iconWrapper}>
              <PlatformIcon />
            </Box>
          </Tooltip>
        </Box>
        <Box>
          <Typography className={styles.loginDateTitle}>Login to system:</Typography>
          <Box className={styles.loginTimeWrapper}>
            <WatchLaterOutlinedIcon className={styles.loginTimeIcon} />
            <Typography>{loginTime}</Typography>
          </Box>
          <Box className={styles.loginTimeWrapper}>
            <DateRangeOutlinedIcon className={styles.loginTimeIcon} />
            <Typography>{loginDate}</Typography>
          </Box>
        </Box>
        <Tooltip title="sign out from this device">
          <AuthButton
            classes={{ root: styles.signOutButton }}
            onClick={signOutHandler}
            text="sign out"
          />
        </Tooltip>
        {isCurrentDevice && <div className={styles.currentDeviceLabel}>current device</div>}
      </CardContent>
    </Card>
  );
};

function useStyles() {
  return makeStyles({
    card: {
      width: '340px',
      boxShadow: '0 0 5px gray',
      marginRight: '16px',
      marginBottom: '16px',
    },

    currentDeviceCard: {
      width: '340px',
      marginRight: '16px',
      marginBottom: '16px',
      border: '3px solid #1de9b6',
      position: 'relative',
    },

    currentDeviceLabel: {
      position: 'absolute',
      fontSize: '15px',
      zIndex: 999,
      right: '5px',
      bottom: '5px',
      cursor: 'default',
      fontWeight: 500,
      color: '#42a5f5',
      fontWeight: 400,
    },

    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    loginDateTitle: {
      cursor: 'default',
      fontWeight: 600,
      marginBottom: '10px',
    },

    loginDate: {
      color: 'red',
    },

    iconWrapper: {
      marginBottom: '8px',
    },
    loginTimeWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '4px',
    },
    loginTimeIcon: {
      marginRight: '7px',
    },
    signOutButton: {
      backgroundColor: '#ef5350',
      color: '#fff',
      ['&:hover']: {
        backgroundColor: '#f44336',
      },
    },
  })();
}
