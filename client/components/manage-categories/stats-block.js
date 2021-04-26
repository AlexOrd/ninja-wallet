import React, { useEffect, useState } from 'react';
import Card from '../../shared/custom-material-theme/Card/Card';
import CardHeader from '../../shared/custom-material-theme/Card/CardHeader';
import CardIcon from '../../shared/custom-material-theme/Card/CardIcon';
import { grayColor } from '../../shared/custom-material-theme/jss/material-dashboard-react';
import CardFooter from '../../shared/custom-material-theme/Card/CardFooter';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import useStyles from './stats-block.style';

const StatsBlock = ({ categories }) => {
  const [newestCategory, setNewestCategory] = useState();
  const [mostSpendMoneyCategory, setMostSpendMoneyCategory] = useState();
  const [mostTransactionsCountCategory, setMostTransactionsCountCategory] = useState();

  useEffect(() => {
    if (categories && categories.length > 0) {
      const newestCategory = [...categories].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )[0];
      setNewestCategory(newestCategory);

      const mostSpendMoneyCategory = [...categories].sort(
        (a, b) => b.expensesSum - a.expensesSum
      )[0];
      setMostSpendMoneyCategory(mostSpendMoneyCategory);

      const mostTransactionsCountCategory = [...categories].sort(
        (a, b) => b.transactionsCount - a.transactionsCount
      )[0];
      setMostTransactionsCountCategory(mostTransactionsCountCategory);
    }
  }, [categories]);

  const classes = useStyles();

  return (
    <Grid container direction="column">
      {newestCategory && <NewestCategory classes={classes} newestCategory={newestCategory} />}
      {mostSpendMoneyCategory && (
        <MostSpentMoneyCategory classes={classes} mostSpendMoneyCategory={mostSpendMoneyCategory} />
      )}
      {mostTransactionsCountCategory && (
        <MostTransactionsCount
          classes={classes}
          mostTransactionsCountCategory={mostTransactionsCountCategory}
        />
      )}
    </Grid>
  );
};

const NewestCategory = ({ classes, newestCategory }) => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader color="warning" stats icon>
          <CardIcon color="warning">
            <NewReleasesIcon />
          </CardIcon>
          <p className={classes.cardCategory}>Newest category:</p>
          <h3 className={classes.cardTitle}>{newestCategory.name}</h3>
        </CardHeader>
      </Card>
    </Grid>
  );
};

const MostSpentMoneyCategory = ({ classes, mostSpendMoneyCategory }) => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader color="warning" stats icon>
          <CardIcon color="success">
            <AttachMoneyIcon />
          </CardIcon>
          <p className={classes.cardCategory}>Most spent money in category:</p>
          <h3 className={classes.cardTitle}>{mostSpendMoneyCategory.name}</h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>
            <Typography variant="body2">spent {mostSpendMoneyCategory.expensesSum}$</Typography>
          </div>
        </CardFooter>
      </Card>
    </Grid>
  );
};

const MostTransactionsCount = ({ classes, mostTransactionsCountCategory }) => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader color="warning" stats icon>
          <CardIcon color="info">
            <TrendingUpIcon />
          </CardIcon>
          <p className={classes.cardCategory}>Most transactions count in category:</p>
          <h3 className={classes.cardTitle}>{mostTransactionsCountCategory.name}</h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>
            <Typography variant="body2">
              Transactions count: {mostTransactionsCountCategory.transactionsCount}
            </Typography>
          </div>
        </CardFooter>
      </Card>
    </Grid>
  );
};

export default StatsBlock;
