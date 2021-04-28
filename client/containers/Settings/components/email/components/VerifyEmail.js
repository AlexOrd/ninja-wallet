import React from 'react';
import { makeStyles } from '@material-ui/core';
import { SettingsSubPart } from '../../common';
import { AuthButton, VerifyCode } from '../../../../authorization/components';
import { delays } from '../../../../../utils/auth/constants';
import { useDispatch, useSelector } from 'react-redux';
import { resendVerifyEmailCode, sendVerifyEmailCode } from '../../../../../actions/settings';
import { getSettingsPrivateFS } from '../../../../../selectors/settings';
import { settingsFetchStatusNames } from '../../../../../utils/settings/names';
import { invokeAfterDelay } from '../../../../../utils/auth/tools';
import { isSuccessFetchStatus } from '../../../../../utils/fetch_statuses/aux_functions';

const { SEND_VERIFY_EMAIL_CODE, VERIFY_EMAIL } = settingsFetchStatusNames;

export function VerifyEmail({ submitHandler, isVerifiedEmail }) {
  const dispatch = useDispatch();
  const styles = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const sendVerifyEmailCodeFS = useSelector(getSettingsPrivateFS(SEND_VERIFY_EMAIL_CODE));
  const verifyEmailFS = useSelector(getSettingsPrivateFS(VERIFY_EMAIL));

  const sendVerificationCode = () => dispatch(sendVerifyEmailCode);
  const resendVerificationCode = () => dispatch(resendVerifyEmailCode);

  React.useEffect(() => {
    if (isSuccessFetchStatus(sendVerifyEmailCodeFS) && activeStep === 0) {
      invokeAfterDelay(() => setActiveStep(1), delays.BETWEEN_STEPS);
    }
    if (isSuccessFetchStatus(verifyEmailFS) && activeStep === 1) {
      invokeAfterDelay(() => setActiveStep(2), delays.BETWEEN_STEPS);
    }
  }, [sendVerifyEmailCodeFS, verifyEmailFS]);

  if (isVerifiedEmail) return null;
  return (
    <SettingsSubPart title="Verify email">
      {activeStep === 0 && (
        <AuthButton
          variant="outlined"
          classes={{ root: styles.verifyEmailBtn }}
          onClick={sendVerificationCode}
          text="send verification code"
        />
      )}
      {activeStep === 1 && (
        <VerifyCode {...{ submitHandler, resendCodeHandler: resendVerificationCode }} />
      )}
      {activeStep === 2 && <h1>Verified</h1>}
    </SettingsSubPart>
  );
}

function useStyles() {
  return makeStyles(() => {
    return {
      verifyEmailBtn: {
        backgroundColor: '#a5d6a7',
        ['&:hover']: {
          backgroundColor: '#81c784',
        },
      },
    };
  })();
}
