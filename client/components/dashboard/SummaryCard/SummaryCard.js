import React from 'react';
import { Avatar, Box, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpIcon from '@material-ui/icons/ArrowUpward';

import MoneyIcon from '@material-ui/icons/Money';
import { red, indigo } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  difference: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: 16,
  },
}));

const SummaryCard = ({ title, sum, icon, difference }) => {
  const classes = useStyles();

  return (
    <Card style={{ marginRight: 20, minWidth: 300 }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Typography color="textSecondary" gutterBottom variant="h6">
              {title}
            </Typography>
            <Typography color="textPrimary" variant="h6">
              {sum}
            </Typography>
            {difference && (
              <div className={classes.difference}>
                <span
                  className={classes.difference}
                  style={{ color: difference < 0 ? 'red' : 'green' }}
                >
                  {difference < 0 ? <ArrowDownwardIcon /> : <ArrowUpIcon />}
                  {difference}
                </span>
                <span className={classes.text}>since last month</span>
              </div>
            )}
          </Grid>
          <Grid item xs={3}>
            <Avatar sx={{ backgroundColor: indigo[600], height: 56, width: 56 }}>{icon}</Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
