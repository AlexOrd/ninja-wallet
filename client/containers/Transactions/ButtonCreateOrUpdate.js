import React from 'react';
import Button from '@material-ui/core/Button';

import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  btn: {
    justifySelf: 'center',
    margin: 'auto',
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
