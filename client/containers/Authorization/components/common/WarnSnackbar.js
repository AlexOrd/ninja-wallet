import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
import { AlertTitle } from '@material-ui/lab';

export function WarnSnackbar({ text }) {
  const [showWarn, setShowWarn] = React.useState(true);

  if (!showWarn) return null;
  return (
    <Snackbar
      onClose={() => setShowWarn(false)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      autoHideDuration={10000}
      open={'open'}
    >
      <Alert severity="warning" onClose={() => setShowWarn(false)}>
        <AlertTitle>Warning</AlertTitle>
        {text}
      </Alert>
    </Snackbar>
  );
}
