import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import SliderWithCards from './Slider/Slider';
import TransactionsList from './TransactionsList/TransactionsList';
import { axiosInstance } from '../../config/axios';
import ExchangeRateBlock from './ExchangeRateBlock/ExchangeRateBlock';
import SummaryCards from './SummaryCards/SummaryCards';

const Dashboard = () => {
  const [transactions, setTransactions] = useState(null);
  const [centeredCardIdx, setCenteredCardIdx] = useState(0);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    axiosInstance.get('/api/card').then(({ data }) => {
      setCards(data.cards);
    });
  }, []);

  useEffect(() => {
    let isCancalledReq = false;
    const centeredCardId = cards?.[centeredCardIdx]?._id;
    if (centeredCardId) {
      axiosInstance
        .get('/api/transactions/cardId/' + centeredCardId)
        .then(({ data: { data } }) => {
          if (!isCancalledReq) {
            setTransactions(data.transactions);
          }
        })
        .catch((e) => console.log(e));
    }
    return () => {
      isCancalledReq = true;
      setTransactions(null);
    };
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
