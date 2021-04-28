import React from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core';
import { verificationEmail, resendVerifyEmailCode } from '../../../../actions/settings/user_email';
import { signUp } from '../../../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { delays } from '../../../../utils/auth/constants';
import { SignUpForm } from './components';
import { Done, VerifyCode, AuthStepper } from '../common';
import { authValidators } from '../../../../utils/auth/validation';
import { getAuthPrivateFS, getEmailProviderError } from '../../../../selectors/auth';
import { invokeAfterDelay } from '../../../../utils/auth/tools';
import { isSuccessFetchStatus } from '../../../../utils/fetch_statuses/aux_functions';
import { authFetchStatusNames } from '../../../../utils/auth/names';
import { settingsFetchStatusNames } from '../../../../utils/settings/names';

const { SIGN_UP } = authFetchStatusNames;
const { VERIFY_EMAIL } = settingsFetchStatusNames;
const stepperIcons = {
  1: <PersonAddIcon />,
  2: <VerifiedUserIcon />,
  3: <CheckIcon />,
};

export function SignUp({ setVisibleWarnMessage, isVisibleWarnMessage }) {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = React.useState(0);
  const styles = useStyles();
  const steps = ['Sign up', 'Verification', 'Done'];

  const nextStep = () => setActiveStep((prev) => prev + 1);

  const signUpFS = useSelector(getAuthPrivateFS(SIGN_UP));
  const verifyEmailFS = useSelector(getAuthPrivateFS(VERIFY_EMAIL));
  const isEmailError = useSelector(getEmailProviderError);

  const resendCodeHandler = () => dispatch(resendVerifyEmailCode);
  const signUpHandler = ({ email, password }) => dispatch(signUp(email, password));
  const verifyEmailHandler = ({ verifyCode }) => dispatch(verificationEmail(verifyCode));

  React.useEffect(() => {
    if (isSuccessFetchStatus(signUpFS) && activeStep === 0) {
      invokeAfterDelay(() => setActiveStep(1), delays.BETWEEN_STEPS);
    }

    if (isSuccessFetchStatus(verifyEmailFS) && activeStep === 1) {
      invokeAfterDelay(() => setActiveStep(2), delays.BETWEEN_STEPS);
    }
  }, [signUpFS, verifyEmailFS]);

  return (
    <>
      {activeStep === 0 && (
        <SignUpForm
          {...{
            submitHandler: signUpHandler,
            validate: authValidators.authData,
          }}
        />
      )}

      {activeStep === 1 && (
        <VerifyCode
          {...{
            isEmailError,
            resendCodeHandler,
            submitHandler: verifyEmailHandler,
            skipStep: nextStep,
            validate: authValidators.verificationCode,
            setVisibleWarnMessage,
            isVisibleWarnMessage,
            title: 'Check out verification code',
          }}
        />
      )}

      {activeStep === 2 && <Done />}
      <AuthStepper {...{ activeStep, steps, icons: stepperIcons }} />
    </>
  );
}

function useStyles() {
  return makeStyles(() => ({
    buttonsWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
  }))();
}
