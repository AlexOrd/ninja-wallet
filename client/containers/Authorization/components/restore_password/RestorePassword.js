import React from 'react';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CheckIcon from '@material-ui/icons/Check';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { makeStyles } from '@material-ui/core';
import { Done } from '../common';
import { NewPassword, RestoreSessionEnded } from './components';
import { AuthStepper, VerifyCode, UserEmail } from '../common';
import { useDispatch, useSelector } from 'react-redux';
import { commonFetchStatuses } from '../../../../utils/auth/constants';
import { authFetchStatusNames, fetchErrorsNames } from '../../../../utils/auth/names';
import { authValidators } from '../../../../utils/auth/validation';
import { setFetchError } from '../../../../actions/fetch_statuses';
import { isSuccessFetchStatus } from '../../../../utils/fetch_statuses/aux_functions';
import {
  getAuthPrivateFS,
  getFetchError,
  getRestorePasswordCredentials,
} from '../../../../selectors/auth';
import {
  createNewPassword,
  requestVerify,
  resendRestorePasswordCode,
  resetRestoreSession,
  verificationCode,
} from '../../../../actions/auth';

const { EXPIRED_RESTORE_PASSWORD_SESSION } = fetchErrorsNames;
const { SUCCEEDED } = commonFetchStatuses;
const {
  GET_REST_PASSWORD_CREDENTIALS,
  CREATE_NEW_PASSWORD,
  VERIFY_REST_REST_PASSWORD_CONFIRM_CODE,
} = authFetchStatusNames;

const stepperIcons = {
  1: <AlternateEmailIcon />,
  2: <VerifiedUserIcon />,
  3: <VpnKeyIcon />,
  4: <CheckIcon />,
};
const steps = ['Email', 'Verification', 'New password', 'Done'];

export const RestorePassword = () => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const [isExpiredRestSession, setRestSessionExpiredStatus] = React.useState(false);

  const { token, allowChangePassword } = useSelector(getRestorePasswordCredentials);
  const fetchError = useSelector(getFetchError);
  const getCredentialsFetchStatusFS = useSelector(getAuthPrivateFS(GET_REST_PASSWORD_CREDENTIALS));
  const createNewPasswordFS = useSelector(getAuthPrivateFS(CREATE_NEW_PASSWORD));
  const verifyRestPasswordConfirmCodeFS = useSelector(
    getAuthPrivateFS(VERIFY_REST_REST_PASSWORD_CONFIRM_CODE)
  );

  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);
  const resendCodeHandler = () => dispatch(resendRestorePasswordCode(token));
  const requestVerifyCodeHandler = ({ email }) => dispatch(requestVerify(email));
  const verifyCodeHandler = (token) => ({ verifyCode }) => {
    dispatch(verificationCode(token, verifyCode));
  };
  const newPasswordHandler = (token) => ({ newPassword, confirmationPassword }) => {
    dispatch(createNewPassword(token, newPassword, confirmationPassword));
  };
  const handleReset = () => {
    dispatch(resetRestoreSession());
    setRestSessionExpiredStatus(false);
    setActiveStep(0);
  };

  React.useEffect(() => setFetchError(null, dispatch), []); //!?
  React.useEffect(() => {
    if (fetchError === EXPIRED_RESTORE_PASSWORD_SESSION) {
      setRestSessionExpiredStatus(true);
    }
  }, [fetchError]);
  React.useEffect(() => {
    if (isSuccessFetchStatus(getCredentialsFetchStatusFS) && activeStep === 0) {
      setActiveStep(1);
    }

    if (isSuccessFetchStatus(verifyRestPasswordConfirmCodeFS) && activeStep === 1) {
      setActiveStep(2);
    }

    if (isSuccessFetchStatus(createNewPasswordFS) && activeStep === 2) {
      setActiveStep(3);
    }
  }, [getCredentialsFetchStatusFS, verifyRestPasswordConfirmCodeFS, createNewPasswordFS]);

  if (isExpiredRestSession) return <RestoreSessionEnded {...{ handleReset }} />;
  return (
    <>
      <div className={styles.buttonsWrapper}>
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
      {activeStep === 0 && (
        <UserEmail
          {...{
            submitHandler: requestVerifyCodeHandler,
            validate: authValidators.email,
            title: 'Your email',
          }}
        />
      )}

      {activeStep === 1 && (
        <VerifyCode
          {...{
            handleReset,
            submitHandler: verifyCodeHandler(token),
            resendCodeHandler,
            validate: authValidators.verificationCode,
            title: 'Check out verification code',
          }}
        />
      )}

      {activeStep === 2 && (
        <NewPassword
          {...{
            handleReset,
            allowChangePassword,
            submitHandler: newPasswordHandler(token),
            validate: authValidators.newPassword,
          }}
        />
      )}

      {activeStep === 3 && <Done />}

      <AuthStepper {...{ activeStep, steps, icons: stepperIcons }} />
    </>
  );
};

function useStyles() {
  return makeStyles({
    buttonsWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
  })();
}
