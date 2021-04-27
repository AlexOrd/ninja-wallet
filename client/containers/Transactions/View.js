import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { axiosInstance } from '../../config/axios';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    width: '50%',
    margin: 'auto',
    backgroundColor: theme.palette.info.light,
    border: '1px solid transparent',
    borderRadius: '8px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    color: '#fff',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    marginBottom: 10,
  },
  pos: {
    marginBottom: 12,
    marginTop: 20,
  },
  btn: {
    backgroundColor: theme.palette.primary.dark,
    padding: '5 25',
  },
  btnLink: {
    textDecoration: 'none',
    color: '#fff',
  },
}));

export default function View(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [transaction, setTransaction] = useState();
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    const apiUrlTransaction = `/api/transactions/${id}`;
    axiosInstance.get(apiUrlTransaction).then((res) => {
      const transaction = res.data.transaction;
      setTransaction(transaction);
    });
  });

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Your Transaction
        </Typography>
        <Typography variant="h5" component="h2">
          {`${
            transaction?.merchant
              ? 'You bought smth at' + transaction?.merchant
              : 'You spent money by ' + transaction?.transactionType
          }`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`Used a card ${transaction?.cardId.cardName} at ${moment(
            transaction?.createdAt
          ).calendar()}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.btn} size="large">
          <Link className={classes.btnLink} to="/transactions">
            Go back!
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
