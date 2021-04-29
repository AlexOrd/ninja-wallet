import React from 'react';
import { useField } from 'formik';
import { Box, makeStyles, TextField, Tooltip } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { commonFetchStatuses } from '../../../../utils/auth/constants';
import { useSelector } from 'react-redux';
import { getCommonFetchStatus } from '../../../../selectors/common';

export const AuthInput = (props) => {
  const [field, meta] = useField(props);
  const { touched, error } = meta;

  const [isVisiblePassword, setPasswordVisibility] = React.useState(false);
  const [isFieldUsed, setFieldUsedStatus] = React.useState(false);

  const fetchStatus = useSelector(getCommonFetchStatus);
  const handleVisibilitySwitcher = () => setPasswordVisibility(!isVisiblePassword);

  const isLoading = fetchStatus === commonFetchStatuses.LOADING;

  if (!isFieldUsed && field.value) {
    setFieldUsedStatus(true);
  }

  const isVisibleError = Boolean(touched && error);
  const styles = useStyles();
  return (
    <Tooltip title={error} placement="right" arrow={true} open={isVisibleError}>
      <Box className={styles.inputWrapper}>
        <TextField
          error={isVisibleError}
          disabled={isLoading}
          className={styles.textField}
          variant="outlined"
          {...field}
          {...props}
          type={isVisiblePassword ? 'text' : props.type}
        />

        {props.type === 'password' && isFieldUsed && (
          <button
            type="button"
            disabled={isLoading}
            onClick={handleVisibilitySwitcher}
            className={styles.visibleSwitcher}
          >
            {isVisiblePassword ? (
              <VisibilityIcon fontSize="small" />
            ) : (
              <VisibilityOffIcon fontSize="small" />
            )}
          </button>
        )}
      </Box>
    </Tooltip>
  );
};

function useStyles() {
  return makeStyles({
    form: {
      display: 'flex',
      width: '350px',
      flexDirection: 'column',
    },
    textField: {
      marginBottom: '15px',
      width: '100%',
    },
    inputWrapper: {
      width: '100%',
      display: 'flex',
      position: 'relative',
    },
    visibleSwitcher: {
      position: 'absolute',
      right: '10px',
      top: '18px',
      border: 'none',
      margin: 0,
      padding: 0,
      cursor: 'pointer',
      outline: 'none',
      backgroundColor: 'transparent',
      color: '#bdbdbd',
      transition: 'all .6s linear',
      '&:hover': {
        color: '#616161',
      },
    },
    icon: {
      position: 'absolute',
      left: '10px',
      top: '18px',
      border: 'none',
      margin: 0,
      padding: 0,
    },
    test: {
      backgroundColor: 'red',
    },
  })();
}
