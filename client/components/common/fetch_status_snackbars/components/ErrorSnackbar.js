import { Snackbar } from '@material-ui/core';
import React from 'react';
import { errorMessages } from '../../../../utils/fetch_statuses/error_messages';
import Alert from '@material-ui/lab/Alert';
import { AlertTitle } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import { delays } from '../../../../utils/auth/constants';
import { setFetchError } from '../../../../actions/fetch_statuses';

export function ErrorSnackbar({ fetchError }) {
  const dispatch = useDispatch();
  if (!fetchError) return null;

  const { message } = errorMessages.getMessages(fetchError);
  const closeErrorHandler = () => {
    setFetchError(null, dispatch);
  };

  return (
    <Snackbar
      onClose={closeErrorHandler}
      autoHideDuration={delays.BEFORE_HIDE_ERROR_SNACKBAR}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={'open'}
    >
      <Alert severity="error" onClose={closeErrorHandler}>
        <AlertTitle>Error</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
}
