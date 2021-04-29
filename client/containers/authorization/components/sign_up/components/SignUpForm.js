import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { AuthForm } from '../../common/AuthForm';
import { AuthInput } from '../../common/AuthInput';
import { NavLink } from 'react-router-dom';
import { AuthButton, DescriptionIcon } from '../../common';
import { AddUser } from '../../../icons';

export const SignUpForm = ({ submitHandler, validate }) => {
  const styles = useStyles();

  return (
    <Box className={styles.box}>
      <DescriptionIcon Icon={AddUser} />
      <Typography className={styles.title} variant="h2">
        Sign up
      </Typography>
      <AuthForm {...{ submitHandler, validate, initialValues: { email: '', password: '' } }}>
        <AuthInput autoFocus={true} name="email" placeholder="email" />
        <AuthInput name="password" placeholder="password" type="password" />
        <AuthButton text="sign up" />
      </AuthForm>
      <Box className={styles.serviceBox}>
        <Box>
          Have already account?{' '}
          <NavLink className={styles.link} to="/auth/sign-in">
            Sign in
          </NavLink>
        </Box>
        <NavLink className={styles.link} to="/auth/restore-password">
          Forget password
        </NavLink>
      </Box>
    </Box>
  );
};

function useStyles() {
  return makeStyles(() => ({
    box: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '-200px',
    },
    title: {
      marginBottom: '15px',
      fontSize: '40px',
    },
    serviceBox: {
      marginTop: '25px',
    },
    link: {
      color: '#90caf9',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        fontWeight: 500,
      },
    },
  }))();
}
