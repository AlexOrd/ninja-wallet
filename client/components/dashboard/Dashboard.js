import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import SliderWithCards from './Slider/Slider';
import TransactionsList from './TransactionsList';
import { axiosInstance } from '../../config/axios';
import ExchangeRateBlock from './ExchangeRateBlock/ExchangeRateBlock';
import FooterWithSummaryCards from './FooterWithSummaryCards/FooterWithSummaryCards';
const a = [
  {
    transactionIds: [],
    balance: 1500,
    _id: '608065b50c2c4036c8408ffc',
    userId: '608065b50c2c4036c8408ff7',
    cardNumber: '4149252324897496',
    currency: 'dollar',
    cardName: 'second card',
    createdAt: '2021-04-21T17:49:44.305Z',
    updatedAt: '2021-04-21T17:49:44.305Z',
    __v: 0,
  },
  {
    transactionIds: [],
    balance: 2222,
    _id: '608065b50c2c4036c8408ffb',
    userId: '608065b50c2c4036c8408ff6',
    cardNumber: '4149252324897496',
    currency: 'dollar',
    cardName: 'first card',
    createdAt: '2021-04-21T17:49:44.305Z',
    updatedAt: '2021-04-21T17:49:44.305Z',
    __v: 0,
  },
  {
    transactionIds: [],
    balance: 1500,
    _id: '608065b50c2c4036c8408ffd',
    userId: '608065b50c2c4036c8408ff7',
    cardNumber: '4149252324897496',
    currency: 'dollar',
    cardName: 'second card',
    createdAt: '2021-04-21T17:49:44.306Z',
    updatedAt: '2021-04-21T17:49:44.306Z',
    __v: 0,
  },
];

const Dashboard = () => {
  const [transactions, setTransactions] = useState(null);
  const [centeredCardIdx, setCenteredCardIdx] = useState(0);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    axiosInstance.get('/api/card').then(({ data }) => {
      setCards(a); //(data.cards)
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

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <SliderWithCards cards={cards} setCenteredCardIdx={setCenteredCardIdx} />
          <TransactionsList data={transactions} cards={cards} />
        </Grid>
        <Grid item xs={4}>
          <ExchangeRateBlock />
        </Grid>
      </Grid>
      <FooterWithSummaryCards />
    </div>
  );
};

export default Dashboard;
