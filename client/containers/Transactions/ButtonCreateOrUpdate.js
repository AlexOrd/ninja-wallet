import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginTop: '30px',
      marginLeft: '40%',
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

export default function ButtonCreateOrUpdate(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button
        onClick={() => props.onClick(handleOpen)}
        className={classes.btn}
        variant="contained"
        color="primary"
        size="large"
      >
        {props.isCreating ? 'Create!' : 'Update!'}
      </Button>
      <Modal
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
      </Modal>
    </div>
  );
}
