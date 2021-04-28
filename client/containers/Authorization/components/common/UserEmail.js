import React from 'react';
import { AuthForm } from './AuthForm';
import { AuthInput } from './AuthInput';
import { AuthButton } from './AuthButton';
import { Box, Typography, makeStyles } from '@material-ui/core';

export const UserEmail = ({ submitHandler, validate, title, placeholder = 'your email' }) => {
  const styles = useStyles();

  return (
    <Box className={styles.box}>
      {title && (
        <Typography className={styles.title} variant="h2">
          {title}
        </Typography>
      )}
      <AuthForm {...{ submitHandler, validate, initialValues: { email: '' }, autoFocus: true }}>
        <AuthInput name="email" placeholder={placeholder} />
        <AuthButton text="send" />
      </AuthForm>
    </Box>
  );
};

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
