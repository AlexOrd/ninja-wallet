import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import SliderWithCards from './Slider/Slider';
import TransactionsList from './TransactionsList/TransactionsList';
import ExchangeRateBlock from './ExchangeRateBlock/ExchangeRateBlock';
import SummaryCards from './SummaryCards/SummaryCards';
import { getAllCards, getCardTransactions, getSummaryInfo } from '../../actions/dashboardActions';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [centeredCardIdx, setCenteredCardIdx] = useState(0);
  const cards = useSelector(({ dashboard }) => dashboard.cards.data);
  const transactions = useSelector(({ dashboard }) => dashboard.transactions.data);

  useEffect(() => {
    dispatch(getAllCards());
    dispatch(getSummaryInfo());
  }, []);

  useEffect(() => {
    const centeredCardId = cards?.[centeredCardIdx]?._id;
    if (centeredCardId) {
      dispatch(getCardTransactions(centeredCardId, 5));
    }
  }, [centeredCardIdx, cards]);

  const selectedCard = cards?.[centeredCardIdx];
  return (
    <div>
      <SummaryCards />
      <Grid container spacing={5}>
        <Grid item xs={7}>
          <SliderWithCards cards={cards} setCenteredCardIdx={setCenteredCardIdx} />
          <TransactionsList data={transactions} cards={cards} selectedCard={selectedCard} />
        </Grid>
        <Grid item xs={5}>
          <ExchangeRateBlock />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
