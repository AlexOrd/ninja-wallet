import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { resendVerifyEmailCode } from '../../../../../actions/settings';
import { getSettingsPrivateFS } from '../../../../../selectors/settings';
import { delays } from '../../../../../utils/auth/constants';
import { invokeAfterDelay } from '../../../../../utils/auth/tools';
import { isSuccessFetchStatus } from '../../../../../utils/fetch_statuses/aux_functions';
import { settingsFetchStatusNames } from '../../../../../utils/settings/names';
import { VerifyCode, UserEmail, AuthButton } from '../../../../authorization/components';
import { SettingsSubPart } from '../../common';

const { CHANGE_EMAIL, VERIFY_EMAIL } = settingsFetchStatusNames;

export function ChangeEmail({
  userEmail,
  changeEmail,
  verifyEmail,
  newEmailValidator,
  codeValidator,
  isEmailError,
}) {
  const dispatch = useDispatch();
  const styles = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const [isVisibleUpdateForms, setVisibleUpdateForms] = React.useState(false);

  const changeEmailFS = useSelector(getSettingsPrivateFS(CHANGE_EMAIL));
  const verifyEmailFS = useSelector(getSettingsPrivateFS(VERIFY_EMAIL));

  const resendVerificationCode = () => dispatch(resendVerifyEmailCode);

  React.useEffect(() => {
    if (isSuccessFetchStatus(changeEmailFS) && activeStep === 0) {
      invokeAfterDelay(() => setActiveStep(1), delays.BETWEEN_STEPS);
    }

    if (isSuccessFetchStatus(verifyEmailFS) && activeStep === 1) {
      invokeAfterDelay(() => setActiveStep(2), delays.BETWEEN_STEPS);
    }
  }, [changeEmailFS, verifyEmailFS]);

  return (
    <SettingsSubPart title="Change email">
      <Typography className={styles.currentEmail}>
        <span className={styles.currentEmailTitle}>Current email:</span>
        <span className={styles.currentEmailValue}>{userEmail}</span>
      </Typography>
      <AuthButton
        classes={{ root: styles.changeEmailBtn }}
        text="Change email"
        variant="outlined"
        onClick={() => setVisibleUpdateForms(!isVisibleUpdateForms)}
      />
      {isVisibleUpdateForms && (
        <Box>
          {activeStep === 0 && (
            <UserEmail
              {...{
                submitHandler: changeEmail,
                validate: newEmailValidator,
              }}
            />
          )}

          {activeStep === 1 && (
            <VerifyCode
              {...{
                submitHandler: verifyEmail,
                validate: codeValidator,
                resendCodeHandler: resendVerificationCode,
                isEmailError,
              }}
            />
          )}
          {activeStep === 2 && <h1>Success</h1>}
        </Box>
      )}
    </SettingsSubPart>
  );
}

function useStyles() {
  return makeStyles(() => {
    return {
      currentEmail: {
        marginBottom: '20px',
      },

      currentEmailTitle: {
        fontSize: '22px',
        marginRight: '15px',
      },
      currentEmailValue: {},
      changeEmailBtn: {
        backgroundColor: '#a5d6a7',
        ['&:hover']: {
          backgroundColor: '#81c784',
        },
      },
    };
  })();
}
