import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SignIn, SignUp, RestorePassword, WarnSnackbar } from './components';
import { FetchStatusSnackBars } from '../../components/common/fetch_status_snackbars/FetchStatusSnackBars';
import { getEmailProviderError } from '../../selectors/auth';

function AuthPage() {
  const styles = useStyles();
  const [showWarnAboutSkip, setShowWarnAboutSkip] = React.useState(false);
  const isEmailError = useSelector(getEmailProviderError);

  return (
    <Box className={styles.root}>
      <Switch>
        <Route
          path="/auth/sign-up"
          render={() => (
            <SignUp
              {...{
                isEmailError,
                setShowWarnAboutSkip,
                showWarnAboutSkip,
              }}
            />
          )}
        />
        <Route path="/auth/sign-in" component={SignIn} />
        <Route path="/auth/restore-password" component={RestorePassword} />
        <Redirect to="/auth/sign-up" />
      </Switch>
      <FetchStatusSnackBars reducerName="authorization" />
      {showWarnAboutSkip && (
        <WarnSnackbar text="You can do it later from settings but we strongly recommend to do it now" />
      )}
    </Box>
  );
}

function useStyles() {
  return makeStyles({
    root: {
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },

    errorMessage: {
      width: '30%',
      height: '40px',
      backgroundColor: 'red',
      marginTop: '25px',
    },
  })();
}

export default AuthPage;
