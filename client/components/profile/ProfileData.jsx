import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import UserPhoto from './userPhoto/UserPhoto.jsx';

const useStyles = makeStyles({
  cardBasis: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'inherit',
  },
});

const ProfileData = (props) => {
  const styles = useStyles();

  const exportClickHandler = () => {
    props.exportCsv();
  };

  return (
    <Card className={styles.cardBasis}>
      <UserPhoto
        profilePhoto={props.profileInfo.avatarId.image || props.profileInfo.avatarId}
        avatarId={props.profileInfo.avatarId._id}
        createPhoto={props.createPhoto}
        updatePhoto={props.updatePhoto}
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Box mt={3}>
              <Typography variant="overline">First Name: </Typography>
              <Typography component="h2">{props.profileInfo.firstName}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box mt={3}>
              <Typography variant="overline">Last Name: </Typography>
              <Typography component="p">{props.profileInfo.lastName}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box mt={3}>
              <Typography variant="overline">Email: </Typography>
              <Typography component="p">{props.profileInfo.email}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Button color="primary" onClick={exportClickHandler}>
            Export Transactions
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileData;
