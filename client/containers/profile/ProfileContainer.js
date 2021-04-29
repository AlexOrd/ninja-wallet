import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {
  updateProfile,
  fetchProfile,
  updatePhoto,
  createPhoto,
  exportCsv,
} from '../../actions/profileAction';

import ProfileData from '../../components/profile/ProfileData.jsx';
import ProfileForm from '../../components/profile/ProfileForm.jsx';

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

const checkProps = (obj) => {
  console.log(obj);
  if (!obj.avatarId) {
    obj.avatarId = '';
    return obj;
  } else if (!obj.avatarId._id) {
    obj.avatarId._id = '';
    return obj;
  }
  return obj;
};

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const profileInfo = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  const modified = checkProps(profileInfo);

  const styles = useStyles();

  return (
    <Container>
      <Grid container className={styles.cardMarginTop}>
        <Grid item xs={12} sm={12} md={8} className={styles.cardPaddings}>
          <ProfileForm updateProfile={updateProfile || ''} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={styles.cardPaddings}>
          <ProfileData
            profileInfo={modified || ''}
            createPhoto={createPhoto || ''}
            updatePhoto={updatePhoto || ''}
            exportCsv={exportCsv}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileContainer;
