import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { AuthInput } from '../../common/AuthInput';
import { AuthForm } from '../../common/AuthForm';
import { AuthButton } from '../../common/AuthButton';

export function NewPassword({ submitHandler, validate, handleReset }) {
  const styles = useStyles();

  return (
    <Box className={styles.box}>
      <Typography className={styles.title} variant="h2">
        New password
      </Typography>
      <AuthForm
        {...{
          submitHandler,
          handleReset,
          validate,
          initialValues: { newPassword: '', confirmationPassword: '' },
        }}
      >
        <AuthInput name="newPassword" placeholder="new password" type="password" />
        <AuthInput name="confirmationPassword" placeholder="new password" type="password" />
        <AuthButton text="change" />
      </AuthForm>
    </Box>
  );
}

function useStyles() {
  return makeStyles({
    box: {
      width: '300px',
      padding: '35px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '12px',
    },
    title: {
      marginBottom: '15px',
      fontSize: '40px',
    },
  })();
}
