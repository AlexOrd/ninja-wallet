import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  TextField,
  Box,
  FormControl,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Button,
  Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ProfileForm = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const styles = useStyles();

  const fn = React.createRef();
  const ln = React.createRef();

  const updateClickHandler = () => {
    dispatch(props.updateProfile({ firstName: fn.current.value, lastName: ln.current.value }));
    fn.current.value = '';
    ln.current.value = '';
    setOpen(true);
  };
  const closeSnackHandle = () => {
    setOpen(false);
  };

  return (
    <Card className={styles.cardBasis}>
      <CardHeader
        title="Edit Profile"
        subheader="Update your profile"
        color="primary"
        className={styles.cardHeader}
      ></CardHeader>
      <CardContent>
        <Grid container justify="space-around">
          <Grid item xs={12} sm={12} md={5}>
            <FormControl>
              <TextField id="firstName" inputRef={fn} label="First Name" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <FormControl>
              <TextField id="lastName" inputRef={ln} label="Last Name" />
            </FormControl>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Button color="primary" onClick={updateClickHandler}>
            Update Profile
          </Button>
        </Box>
        <Snackbar open={open} autoHideDuration={6000} onClose={closeSnackHandle}>
          <Alert onClose={closeSnackHandle} severity="success">
            Profile is updated!
          </Alert>
        </Snackbar>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
