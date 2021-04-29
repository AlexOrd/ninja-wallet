import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TransactionInfo({ transaction }) {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center">
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Merchant name: {transaction.merchantName}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Transaction type: {transaction.transactionType}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Created at: {transaction.createdAt}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Transaction sum: {transaction.sum}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
