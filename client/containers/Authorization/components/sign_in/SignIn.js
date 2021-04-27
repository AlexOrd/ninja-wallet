import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import { delays } from '../../../../utils/auth/constants';
import { AuthForm, AuthInput, AuthButton, DescriptionIcon } from '../common';
import { signIn } from '../../../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { authValidators } from '../../../../utils/auth/validation';
import { User } from '../../icons';
import { getAuthPrivateFS } from '../../../../selectors/auth';
import { authFetchStatusNames } from '../../../../utils/auth/names';
import { isSuccessFetchStatus } from '../../../../utils/fetch_statuses/aux_functions';

export const SignIn = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const { push } = useHistory();

  const signInFS = useSelector(getAuthPrivateFS(authFetchStatusNames.SIGN_IN));

  const submitHandler = ({ email, password }) => dispatch(signIn(email, password));

  React.useEffect(() => {
    if (isSuccessFetchStatus(signInFS))
      setTimeout(() => {
        push('/app');
      }, delays.AFTER_SIGN_IN);
  }, [signInFS]);

  return (
    <Box className={styles.box}>
      <DescriptionIcon Icon={User} />
      <Typography className={styles.title} variant="h2">
        Sign in
      </Typography>
      <AuthForm
        {...{
          submitHandler,
          initialValues: { email: '', password: '' },
          validate: authValidators.authData,
        }}
      >
        <AuthInput autoFocus={true} placeholder="email" name="email" />
        <AuthInput placeholder="password" name="password" type="password" />
        <AuthButton text="sign in" />
      </AuthForm>
      <Box className={styles.serviceBox}>
        <Box>
          Don`t have account?
          <NavLink className={styles.link} to="/auth/sign-up">
            Register
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
  return makeStyles({
    box: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
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
  })();
}
