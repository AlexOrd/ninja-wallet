import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

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

export default function OtherCardInfo({ card, isMonoCard }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Balance: {card.balance}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Currency: {card.currency}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Number of transactions : {card.transactions !== undefined && card.transactions.length}
        </Typography>
        {isMonoCard && (
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {' '}
            monobank card
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
