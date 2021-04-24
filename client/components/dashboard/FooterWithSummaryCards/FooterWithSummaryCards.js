import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SummaryCard from '../SummaryCard/SummaryCard';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoneyIcon from '@material-ui/icons/Money';
import { axiosInstance } from '../../../config/axios';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const useStyles = makeStyles(() => ({
  footer: {
    marginTop: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
const FooterWithSummaryCards = () => {
  const classes = useStyles();
  const [data, setData] = useState();
  useEffect(() => {
    axiosInstance.get('/api/summary').then(({ data }) => {
      setData(data.data);
    });
  }, []);
  console.log(data);
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
      />
      <SummaryCard
        icon={<MoneyIcon />}
        sum={data.transactionsSum}
        difference={data.transactionsSumDifference}
        title={'Transactions sum'}
      />
      <SummaryCard icon={<AttachMoneyIcon />} sum={data.categoriesCount} title={'Categories'} />
    </div>
  );
};

export default FooterWithSummaryCards;
