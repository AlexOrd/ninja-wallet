import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { Success } from '../../icons';
import { useDispatch } from 'react-redux';
import { invokeAfterDelay } from '../../../../utils/auth/tools';
import { setAuthStatus } from '../../../../actions/auth/common';

export function Done({ linkText = 'To app' }) {
  const styles = useStyles();
  const dispatch = useDispatch();

  React.useState(() => {
    dispatch(setAuthStatus(true));
  }, []);

  return (
    <Box className={styles.box}>
      <Success fill="#4caf50" />
      <div className={styles.iconWrapper}></div>
      <NavLink className={styles.link} to="/dashboard">
        {linkText}
      </NavLink>
    </Box>
  );
}

function useStyles() {
  return makeStyles((theme) => {
    return {
      box: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },

      link: {
        fontSize: '28px',
        color: '#90caf9',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },

      iconWrapper: {
        marginBottom: '25px',
        backgroundColor: 'red',
      },
    };
  })();
}
