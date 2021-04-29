import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { SadSmile } from '../../../icons';
import { AuthButton, DescriptionIcon } from '../../common';

export const RestoreSessionEnded = ({ handleReset }) => {
  const styles = useStyles();

  return (
    <Box className={styles.wrapper}>
      <DescriptionIcon Icon={SadSmile} width={120} height={120} />
      <Typography className={styles.title}>
        We apologize, but your restore password session ended
      </Typography>
      <AuthButton text="Restart" onClick={handleReset} />
      <div className={styles.linksWrapper}>
        <NavLink className={styles.link} to="/auth/sign-up">
          Sign up
        </NavLink>
        <NavLink className={styles.link} to="/auth/sign-in">
          Sign in
        </NavLink>
      </div>
    </Box>
  );
};

function useStyles() {
  return makeStyles({
    title: {
      fontSize: '25px',
      marginBottom: '25px',
    },

    link: {
      margin: '10px',
      color: '#90caf9',
      textDecoration: 'none',
      fontSize: '20px',
      '&:hover': {
        textDecoration: 'underline',
        fontWeight: 500,
      },
    },

    linksWrapper: {
      marginTop: '15px',
    },

    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })();
}
