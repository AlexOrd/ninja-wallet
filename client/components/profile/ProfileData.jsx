import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import UserPhoto from './userPhoto/UserPhoto.jsx';

const useStyles = makeStyles({
  cardBasis: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'inherit',
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProfileData = () => {
  const [open, setOpen] = useState(false);
  const styles = useStyles();

  const deleteClickHandler = () => {
    setOpen(true);
  };
  const closeDialogHandler = () => {
    setOpen(false);
  };

  return (
    <Card className={styles.cardBasis}>
      <UserPhoto />
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Box mt={3}>
              <Typography variant="overline">First Name: </Typography>
              <Typography component="h2">Andrew</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box mt={3}>
              <Typography variant="overline">Last Name: </Typography>
              <Typography component="p">Kinal</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box mt={3}>
              <Typography variant="overline">Email: </Typography>
              <Typography component="p">testemail@email.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box mt={3}>
              <Typography variant="overline">Last login: </Typography>
              <Typography component="p">25/05/2050</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box mt={3}>
              <Typography variant="overline">Transactions: </Typography>
              <Typography component="p">10</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box mt={3}>
              <Typography variant="overline">Profile created At: </Typography>
              <Typography component="p">25/05/2050</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Button color="primary" onClick={deleteClickHandler}>
            Delete Profile
          </Button>
        </Box>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={closeDialogHandler}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {'Do you want to delete your profile?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              If you delete profile, you won't have an opportunity to restore it and use our
              application.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialogHandler} color="secondary">
              Cancel
            </Button>
            <Button onClick={closeDialogHandler} color="primary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ProfileData;
