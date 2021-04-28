import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEmail, VerifyEmail } from './components';
import { authValidators } from '../../../../utils/auth/validation';
import { changeEmail, verificationEmail } from '../../../../actions/settings/user_email';
import { getUserEmail, getVerifiedEmailStatus } from '../../../../selectors/settings';

export function EmailSettings() {
  const dispatch = useDispatch();

  const userEmail = useSelector(getUserEmail);
  const isVerifiedEmail = useSelector(getVerifiedEmailStatus);

  const changeEmailHandler = ({ email }) => dispatch(changeEmail(email));
  const verifyEmail = ({ verifyCode }) => dispatch(verificationEmail(verifyCode));

  return (
    <>
      <ChangeEmail
        {...{
          userEmail,
          changeEmail: changeEmailHandler,
          verifyEmail,
          newEmailValidator: authValidators.email,
          codeValidator: authValidators.verificationCode,
        }}
      />
      {!isVerifiedEmail && <VerifyEmail submitHandler={verifyEmail} {...{ isVerifiedEmail }} />}
    </>
  );
}
