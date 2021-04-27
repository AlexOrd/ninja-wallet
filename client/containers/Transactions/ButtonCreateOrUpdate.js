import React from 'react';
import Button from '@material-ui/core/Button';

import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  btn: {
    justifySelf: 'center',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  paper: {
    backgroundColor: theme.palette.info.light,
    border: '1px solid transparent',
    borderRadius: '8px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    color: '#fff',
  },
  btnModal: {
    display: 'flex',
    justifyContent: 'center',
    justifySelf: 'center',
    marginTop: '30px',
  },
  btnLink: {
    textDecoration: 'none',
    color: '#fff',
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ButtonCreateOrUpdate(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    props.onClick(() => setOpen(true));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button
        onClick={handleClick}
        className={classes.btn}
        variant="contained"
        color="primary"
        size="large"
      >
        {props.isCreating ? 'Create!' : 'Update!'}
      </Button>
      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
              {props.isCreating
                ? 'Transaction successfully created!'
                : 'Transaction successfully updated!'}
            </h2>
            <Button className={classes.btnModal} variant="contained" color="primary" size="large">
              <Link className={classes.btnLink} to="/transactions">
                Go back to list!
              </Link>
            </Button>
          </div>
        </Fade>
      </Modal> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {props.isCreating
            ? 'Transaction successfully created!'
            : 'Transaction successfully updated!'}
        </Alert>
      </Snackbar>
    </div>
  );
}
