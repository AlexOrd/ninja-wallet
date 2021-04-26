import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { createCardThunk } from '../../actions/cardAction';

const useStyles = makeStyles({
  cardNumber: {
    width: '80%',
    height: '5px',
  },
  cardForm: {
    display: 'inline-block',
  },
  mediumTextField: {
    width: '40%',
  },
  button: {
    textAlign: 'center',
    paddingRight: '10px',
    marginRight: '50px',
  },
});

const CreateCardForm = (/*{ onSubmit, card }*/ { createCard, card, setCard, updateType }) => {
  const classes = useStyles();
  // const { register, handleSubmit } = useForm()

  // console.log(register)

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(card, 'hello');
    if (updateType === 'create') {
      return createCard(card, updateType);
    }
    if (updateType === 'update') {
      console.log(card);
      return createCard(card, updateType, card._id);
    }
  };

  // const helloworld = () => {
  // console.log('')
  // }
  console.log(card);
  // helloworld()

  return (
    <form action="" onSubmit={(e) => onSubmit(e)}>
      <Grid justify="center" container spacing={0}>
        <Grid md={6}>
          <Box pt={7}>
            <TextField
              className={classes.cardNumber}
              label="Card number"
              variant="outlined"
              onChange={(e) => setCard({ ...card, cardNumber: e.target.value })}
              value={card.cardNumber}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^\d]/g, '').toString().slice(0, 16);
              }}
              // inputProps={{ inputmode: 'numeric', pattern: '[0-9]*' }}
            />
          </Box>
          <Box pt={7}>
            <TextField
              className={classes.cardNumber}
              label="Card name"
              variant="outlined"
              // {...register('cardName')}
              onChange={(e) => setCard({ ...card, cardName: e.target.value })}
              value={card.cardName}
            />
          </Box>
        </Grid>
        <Grid md={6} spacing={0}>
          <Box pt={7}>
            <TextField
              className={classes.cardNumber}
              label="Balance"
              variant="outlined"
              // {...register('balance')}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^\d]/g, '').toString().slice(0, 16);
              }}
              onChange={(e) => setCard({ ...card, balance: e.target.value })}
              value={card.balance}
            />
          </Box>
          <Box pt={7}>
            <TextField
              className={classes.cardNumber}
              label="Currency"
              variant="outlined"
              // {...register('currency')}
              onChange={(e) => setCard({ ...card, currency: e.target.value })}
              value={card.currency}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid xs={12} md={12}>
        <Box className={classes.button} pt={7}>
          {/* <input type="submit"  value='submit'/> */}
          {/* Update</Button> */}
          <Button type="submit" color="secondary" value="submit">
            Update
          </Button>
        </Box>
      </Grid>
    </form>
  );
};

export default CreateCardForm;
