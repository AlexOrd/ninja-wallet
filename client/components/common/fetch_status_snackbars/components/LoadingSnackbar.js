import React from 'react';
import { Box, CircularProgress, makeStyles, Snackbar } from '@material-ui/core';
import { commonFetchStatuses } from '../../../../utils/auth/constants';
import MuiAlert from '@material-ui/lab/Alert';

export function LoadingSnackbar({ fetchStatus }) {
  const styles = useStyles();
  const LoadingMessage = () => {
    return (
      <Box className={styles.loadingMessageWrapper}>
        <CircularProgress className={styles.loadingCircle} size="25px" />
        Loading...
      </Box>
    );
  };
  const isLoading = fetchStatus === commonFetchStatuses.LOADING;
  if (!isLoading) return null;
  return (
    <Snackbar
      className={styles.snackBar}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={'open'}
    >
      <MuiAlert severity="info" icon={false} classes={{ root: styles.alert }}>
        <LoadingMessage />
      </MuiAlert>
    </Snackbar>
  );
}

function useStyles() {
  return makeStyles((theme) => {
    return {
      loadingMessageWrapper: {
        display: 'flex',
        alignItems: 'center',
      },
      loadingCircle: {
        marginRight: '15px',
      },
      snackBar: {},
      alert: {
        backgroundColor: '#64b5f6',
        width: '180px',
        color: '#424242',
        fontSize: '15px',
      },
    };
  })();
}
