import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import SliderWithCards from './Slider/Slider.jsx';
import TransactionsList from './TransactionsList';
import axios from 'axios';

const cards = [
  {
    transactionIds: [],
    balance: 1500,
    _id: '608065b50c2c4036c8408ffc',
    userId: '608065b50c2c4036c8408ff7',
    cardNumber: '4149499128544440',
    currency: 'usd',
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
    currency: 'usd',
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
    currency: 'usd',
    cardName: 'second card',
    createdAt: '2021-04-21T17:49:44.306Z',
    updatedAt: '2021-04-21T17:49:44.306Z',
    __v: 0,
  },
  {
    transactionIds: [],
    balance: 2222,
    _id: '608065b50c2c4036c8408ffb17u78u76',
    userId: '608065b50c2c4036c8408ff6',
    cardNumber: '4149252324897496',
    currency: 'usd',
    cardName: 'first card114',
    createdAt: '2021-04-21T17:49:44.305Z',
    updatedAt: '2021-04-21T17:49:44.305Z',
    __v: 0,
  },
  {
    transactionIds: [],
    balance: 1500,
    _id: '608065b50c2c4036c8408ffd265564',
    userId: '608065b50c2c4036c8408ff7',
    cardNumber: '4149252324897496',
    currency: 'usd',
    cardName: 'second card32432432234',
    createdAt: '2021-04-21T17:49:44.306Z',
    updatedAt: '2021-04-21T17:49:44.306Z',
    __v: 0,
  },
];

const Dashboard = () => {
  const [transactions, setTransactions] = useState([
    {
      _id: '608065b50c2c4036c8408ffe',
      transactionType: 'Transfer',
      transactionCategory: '608065b50c2c4036c8408ffa',
      userId: '608065b50c2c4036c8408ff7',
      cardId: '608065b50c2c4036c8408ffd',
      merchantName: 'Silpo',
      sum: 1000,
      createdAt: '2021-04-21T17:49:44.306Z',
      updatedAt: '2021-04-21T17:49:44.306Z',
      __v: 0,
    },
    {
      _id: '608065b50c2c4036c8408fff',
      transactionType: 'Second',
      transactionCategory: '608065b50c2c4036c8408ff9',
      userId: '608065b50c2c4036c8408ff7',
      cardId: '608065b50c2c4036c8408ffc',
      merchantName: 'Zdorovie',
      sum: 2000,
      createdAt: '2021-04-21T17:49:44.306Z',
      updatedAt: '2021-04-21T17:49:44.306Z',
      __v: 0,
    },
  ]);
  const [centeredCardId, setCenteredCardId] = useState();

  /* useEffect(() => {
        axios.get('http://localhost:3002/api/card').then(cards => {
            setCenteredCardId(cards[0]?._id)
        })
    }, []) */

  useEffect(() => {
    let isCancalledReq = false;
    if (centeredCardId) {
      /*  axios.get('http://localhost:3002/api/transactions/cardId/' + centeredCardId).then(transactions => {
                 if (!isCancalledReq) {
                     setTransactions(transactions)
                 }
             }).catch(e => console.log(e)) */
    }
    return () => {
      isCancalledReq = true;
    };
  }, [centeredCardId]);

  return (
    <Grid container spacing={4}>
      <Grid item xs={8}>
        <SliderWithCards cards={cards} setCenteredCardId={setCenteredCardId} />
        <TransactionsList data={transactions} />
      </Grid>
      <Grid item xs>
        Categories?
      </Grid>
    </Grid>
  );
};

export default Dashboard;
