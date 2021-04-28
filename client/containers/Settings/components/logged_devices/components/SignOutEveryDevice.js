import { Button, makeStyles, Tooltip } from '@material-ui/core';
import React from 'react';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

export function SignOutEveryDevice({ handler: signOutEveryDeviceHandler }) {
  const styles = useStyles();

  return (
    <Tooltip title="Current device will sign out also" arrow={true}>
      <Button onClick={signOutEveryDeviceHandler} className={styles.button} variant="contained">
        <ExitToAppOutlinedIcon className={styles.icon} />
        Sign out from every device
      </Button>
    </Tooltip>
  );
}

function useStyles() {
  return makeStyles({
    icon: {
      marginRight: '10px',
    },
    button: {
      marginLeft: '8px',
      marginTop: '16px',
    },
  })();
}
