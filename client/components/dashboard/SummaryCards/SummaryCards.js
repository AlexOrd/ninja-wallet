import { makeStyles } from '@material-ui/core';
import React from 'react';
import SummaryCard from '../SummaryCard/SummaryCard';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoneyIcon from '@material-ui/icons/Money';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  footer: {
    marginBottom: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const SummaryCards = () => {
  const classes = useStyles();
  const data = useSelector(({ dashboard }) => dashboard.summaryData.data);

  if (!data) {
    return null;
  }
  return (
    <div className={classes.footer}>
      <SummaryCard
        icon={<InsertChartIcon />}
        sum={data.transactionsCount}
        difference={data.transactionsDifference}
        title={'Transactions'}
        color="rgb(110, 52, 235)"
      />
      <SummaryCard
        icon={<AttachMoneyIcon />}
        sum={data.transactionsSum}
        difference={data.transactionsSumDifference}
        title={'Transactions sum'}
        color="rgb(68, 230, 32)"
      />
      <SummaryCard
        icon={<MoneyIcon />}
        sum={data.categoriesCount}
        title={'Categories'}
        color="rgb(52, 235, 235)"
      />
    </div>
  );
};

export default SummaryCards;
