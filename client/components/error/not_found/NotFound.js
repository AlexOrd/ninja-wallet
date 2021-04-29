import { Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NinjaIcon } from './NinjaIcon';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  iconWrapper: {
    marginTop: '-50px',
  },
  text: {
    color: '#03528f;',
    fontSize: '30px',
  },
  link: {
    fontSize: '35px',
    color: '#40c4ff',
    textDecoration: 'none',
    transition: 'all .3s linear',
    ['&:hover']: {
      textDecoration: 'underline',
    },
  },
});

export function NotFound() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <NinjaIcon />
      </div>
      <Typography className={styles.text}>
        We’re sorry but even our ninja seems to be lost here.
      </Typography>
      <Typography>
        <NavLink className={styles.link} to="/dashboard">
          Home, sweet home
        </NavLink>
      </Typography>
    </div>
  );
}
