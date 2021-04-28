import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { commonFetchStatuses } from '../../../../utils/auth/constants';
import { useSelector } from 'react-redux';
import { getCommonFetchStatus } from '../../../../selectors/common';

export function AuthButton({ text = 'Submit', ...rest }) {
  const fetchStatus = useSelector(getCommonFetchStatus);
  const isLoading = fetchStatus === commonFetchStatuses.LOADING;
  const styles = useStyles();

  return (
    <Button classes={{ root: styles.root }} disabled={isLoading} type="submit" {...rest}>
      {text}
    </Button>
  );
}

function useStyles() {
  return makeStyles((theme) => {
    return {
      root: {
        // backgroundColor: '#bbdefb',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main),
        boxShadow: '0 0 5px #bbdefb',
        ['&:hover']: {
          backgroundColor: '#bbdefb',
          boxShadow: '0 0 6px gray',
        },
      },
    };
  })();
}
