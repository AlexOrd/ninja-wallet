import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
  formContainer: {
    height: '200px',
  },
});

const CreateCardForm = ({ createCard, card, setCard, updateType }) => {
  const classes = useStyles();

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

  return (
    <form action="" onSubmit={(e) => onSubmit(e)}>
      <Grid
        className={classes.formContainer}
        justify="center"
        alignItems="center"
        md={12}
        container
      >
        <Grid xs={6}>
          <Box>
            <TextField
              className={classes.cardNumber}
              label="Card number"
              variant="outlined"
              onChange={(e) => setCard({ ...card, cardNumber: e.target.value })}
              value={card.cardNumber}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^\d]/g, '').toString().slice(0, 16);
              }}
            />
          </Box>
        </Grid>
        <Grid xs={6}>
          <Box>
            <TextField
              className={classes.cardNumber}
              label="Card name"
              variant="outlined"
              onChange={(e) => setCard({ ...card, cardName: e.target.value })}
              value={card.cardName}
            />
          </Box>
        </Grid>
        <Grid xs={6}>
          <Box>
            <TextField
              className={classes.cardNumber}
              label="Balance"
              variant="outlined"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^\d]/g, '').toString().slice(0, 16);
              }}
              onChange={(e) => setCard({ ...card, balance: e.target.value })}
              value={card.balance}
            />
          </Box>
        </Grid>
        <Grid xs={6}>
          <Box>
            <TextField
              className={classes.cardNumber}
              label="Currency"
              variant="outlined"
              onChange={(e) => setCard({ ...card, currency: e.target.value })}
              value={card.currency}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid xs={12} md={12}>
        <Box className={classes.button} pt={7}>
          <Button type="submit" color="primary" value="submit">
            Update
          </Button>
        </Box>
        <Box className={classes.button} pt={7}>
          <Button color="secondary">Close</Button>
        </Box>
      </Grid>
    </form>
  );
};

export default CreateCardForm;
