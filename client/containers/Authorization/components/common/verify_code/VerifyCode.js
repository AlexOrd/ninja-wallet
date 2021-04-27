import React from 'react';
import { AuthInput } from '../AuthInput';
import { AuthForm } from '../AuthForm';
import { AuthButton } from '../AuthButton';
import { SkipButton } from './components';
import { Box, makeStyles, Typography } from '@material-ui/core';

export const VerifyCode = ({
  submitHandler,
  validate,
  resendCodeHandler,
  skipStep,
  isEmailError,
  title,
  autofocus,
  setShowWarnAboutSkip,
  showWarnAboutSkip,
}) => {
  const styles = useStyles();

  const skipHandler = () => {
    if (!showWarnAboutSkip) {
      return setShowWarnAboutSkip(true);
    }

    return skipStep();
  };

  if (isEmailError) {
    return (
      <Box className={styles.box}>
        <Typography>
          <span className={styles.successRegistration}>
            You are succeeded registered in system,
          </span>
          <span className={styles.mailProviderError}>
            but occurred error with mail provider, you can verify email in settings later
          </span>
        </Typography>
        <SkipButton handler={skipStep} />
      </Box>
    );
  }

  return (
    <Box className={styles.box}>
      {title && (
        <Typography className={styles.title} variant="h2">
          {title}
        </Typography>
      )}
      <AuthForm
        {...{
          submitHandler,
          validate,
          initialValues: { verifyCode: '' },
        }}
      >
        <AuthInput autoFocus={autofocus} name="verifyCode" placeholder="verification code" />
        <AuthButton text="verify" />
      </AuthForm>
      <AuthButton
        classes={{ root: styles.resendCodeBtn }}
        onClick={resendCodeHandler}
        text="resend code"
      />
      {skipStep && typeof skipStep === 'function' && (
        <AuthButton classes={{ root: styles.skipBtn }} onClick={skipHandler} text="skip" />
      )}
    </Box>
  );
};

function useStyles() {
  return makeStyles((theme) => {
    return {
      mailProviderError: {
        color: theme.palette.error.main,
      },

      successRegistration: {
        color: theme.palette.success.main,
        fontWeight: 700,
      },

      title: {
        marginBottom: '15px',
        fontSize: '40px',
        textAlign: 'center',
      },

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

      skipBtn: {
        ['&:hover']: {
          backgroundColor: '#ffebee',
        },
      },

      resendCodeBtn: {
        marginTop: '5px',
        opacity: '.65',
        ['&:hover']: {
          backgroundColor: '#e3f2fd',
          opacity: '1',
        },
      },
    };
  })();
}
