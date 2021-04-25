import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
}));

export default function ButtonCreateOrUpdate(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        onClick={props.onClick}
        className={classes.btn}
        variant="contained"
        color="primary"
        size="large"
      >
        {props.isCreating ? 'Create!' : 'Update!'}
      </Button>
    </div>
  );
}
