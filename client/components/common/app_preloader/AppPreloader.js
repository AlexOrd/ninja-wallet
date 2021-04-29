import React from 'react';
import { CircularProgress, makeStyles, Typography } from '@material-ui/core';

export function AppPreloader() {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <div>
        <CircularProgress size="150px" />
        <Typography className={styles.text}>Loading...</Typography>
      </div>
    </div>
  );
}

function useStyles() {
  return makeStyles(() => {
    return {
      text: {
        fontSize: '35px',
        marginTop: '20px',
      },

      wrapper: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    };
  })();
}
