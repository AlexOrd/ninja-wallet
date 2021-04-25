import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ProfileData from '../../components/profile/ProfileData.jsx';
import ProfileForm from '../../components/profile/ProfileForm.jsx';
import { axiosInstance } from '../../config/axios';

const useStyles = makeStyles({
  cardPaddings: {
    padding: '0 15px !important',
  },
  cardMarginTop: {
    marginTop: '70px',
  },
  cardBasis: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'inherit',
  },
  cardHeader: {
    backgroundColor: 'white',
    zIndex: '3',
    margin: '0 15px',
    marginTop: '-20px',
    borderRadius: '3px',
    boxShadow: '0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 0 0 / 40%)',
  },
});

const ProfileContainer = () => {
  const styles = useStyles();

  return (
    <Container>
      <Grid container className={styles.cardMarginTop}>
        <Grid item xs={12} sm={12} md={8} className={styles.cardPaddings}>
          <ProfileForm />
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={styles.cardPaddings}>
          <ProfileData />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileContainer;
