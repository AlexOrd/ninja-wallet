import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { delays } from '../../../../utils/auth/constants';
import { successMessages } from '../../../../utils/fetch_statuses/success_message';

export function SuccessSnackbar({ allFetchStatuses, reducerName }) {
  const [snowMessage, setShowMessage] = React.useState(true);
  const [message, setMessage] = React.useState('');
  const closeMessageHandler = () => setShowMessage(false);

  React.useEffect(() => {
    const messageText = successMessages.getSuccessMessage(allFetchStatuses, reducerName);
    if (messageText) {
      setMessage(messageText);
      setShowMessage(true);
    }
  }, [allFetchStatuses]);

  if (!message || !snowMessage) return null;
  return (
    <Snackbar
      onClose={closeMessageHandler}
      autoHideDuration={delays.BEFORE_HIDE_SUCCESS_SNACKBAR}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={'open'}
    >
      <Alert severity="success">{message}</Alert>
    </Snackbar>
  );
}
