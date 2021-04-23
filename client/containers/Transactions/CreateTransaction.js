import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { flexbox } from '@material-ui/system';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './Transactions.style';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function FormPropsTextFields() {
  const { type, id } = useParams();
  console.log(type, id);
  console.log('111111');
  const classes = useStyles();
  const isCreating = type === 'create';

  const [transaction, setTransaction] = useState();
  const [cards, setCards] = useState();
  const ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MDgwNzNmNzkyZTQyMjc0YjFiZjQ5MjYiLCJkZXZpY2VJRCI6IjYwODJjNWUyMTRhNjcyN2IzY2Y5YjJmYiIsImlhdCI6MTYxOTE4MzA3NCwiZXhwIjoxNjE5MjY5NDc0fQ.9BeObsYtmNSh-k5q8FIVe_SX4F7tsuOeH73zEdRq2qE';
  const REFRESH_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25maXJtQ29kZSI6IjE2Mjg2OCIsImRldmljZUlEIjoiNjA4MmM1ZTIxNGE2NzI3YjNjZjliMmZiIiwiaWF0IjoxNjE5MTgzMDc0LCJleHAiOjE2MTkxODY2NzR9.cSPf_VtNQRLBDurrxYcWW9Kvn9AkoxLagy846LlrmQs';
  useEffect(() => {
    if (isCreating) {
      const apiUrl = `http://localhost:3000/api/transactions/${id}`;
      axios
        .get(apiUrl, {
          headers: {
            authorization: ACCESS_TOKEN,
            'refresh-token': REFRESH_TOKEN,
          },
        })
        .then((res) => {
          const transaction = res.data.transaction;
          setTransaction(transaction);
        });
    }
    const apiUrl = `http://localhost:3000/api/card`;
    axios
      .get(apiUrl, {
        headers: {
          authorization: ACCESS_TOKEN,
          'refresh-token': REFRESH_TOKEN,
        },
      })
      .then((res) => {
        const cards = res.data.cards;
        setCards(cards);
      });
  }, []);

  return (
    <Container className={classes.container} maxWidth="sm">
      <Typography className={classes.title} variant="h4">
        {isCreating ? 'Creating' : 'Editing'} Transaction
      </Typography>
      <FormControl className={classes.selectControl}>
        <InputLabel id="card">Card</InputLabel>
        <Select
          labelId="card"
          id="11"
          value={transaction?.cardId._id}
          // onChange={handleChange}
        >
          {cards?.map((card) => {
            return <MenuItem value={card._id}>{card.cardName}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <FormControl className={classes.selectControl}>
        <InputLabel id="category">Category</InputLabel>
        <Select
          labelId="category"
          id="1"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Description" />
        <TextField label="Sum" type="number" />
      </form>
    </Container>
  );
}
