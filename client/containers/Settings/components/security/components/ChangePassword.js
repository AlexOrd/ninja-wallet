import React from 'react';
import { SettingsSubPart } from '../../common';
import { authValidators } from '../../../../../utils/auth/validation';
import { AuthButton, AuthForm, AuthInput } from '../../../../Authorization/components/common';
import { useSelector } from 'react-redux';
import { commonFetchStatuses } from '../../../../../utils/auth/constants';
import { makeStyles, Typography } from '@material-ui/core';
import { getSettingsPrivateFS } from '../../../../../selectors/settings';
import { settingsFetchStatusNames } from '../../../../../utils/settings/names';

const { CHANGE_PASSWORD } = settingsFetchStatusNames;

export function ChangePassword({ handleChangePassword }) {
  const styles = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  // const submitHandler = ({ oldPassword, newPassword, confirmPassword }) => {
  //   handleChangePassword(oldPassword, newPassword, confirmPassword);
  // };
  const changePasswordFS = useSelector(getSettingsPrivateFS(CHANGE_PASSWORD));
  const validate = authValidators.changePassword;

  React.useEffect(() => {
    if (changePasswordFS === commonFetchStatuses.SUCCEEDED) {
      setActiveStep((prevState) => prevState + 1);
    }
  }, [changePasswordFS]);

  const initialValues = { oldPassword: '', newPassword: '', confirmPassword: '' };
  return (
    <SettingsSubPart title="Change password">
      {activeStep === 0 && (
        <AuthForm {...{ initialValues, validate, submitHandler: handleChangePassword }}>
          <AuthInput name="oldPassword" placeholder="old password" type="password" />
          <AuthInput name="newPassword" placeholder="new password" type="password" />
          <AuthInput name="confirmPassword" placeholder="new password" type="password" />
          <AuthButton text="change" />
        </AuthForm>
      )}
      {activeStep === 1 && (
        <Typography className={styles.successUpdated}>Password was updated</Typography>
      )}
    </SettingsSubPart>
  );
}

function useStyles() {
  return makeStyles({
    successUpdated: {
      fontSize: '25px',
      color: '#4caf50',
    },
  })();
}
