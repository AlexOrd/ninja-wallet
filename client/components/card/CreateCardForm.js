import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Link, Box, Grid, Button } from '@material-ui/core';

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

const CreateCardForm = ({
  createCard,
  card,
  setCard,
  updateType,
  monobankToken,
  setMonobankToken,
  openCardCreator,
  submitMonobankToken,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();

    if (updateType === 'create') {
      return createCard(card, updateType);
    }
    if (updateType === 'update') {
      return createCard(card, updateType, card._id);
    }
  };

  return (
    <div>
      {(updateType === 'create' && (
        <CreateSimpleCard
          onSubmit={(e) => onSubmit(e, updateType)}
          setCard={setCard}
          card={card}
          openCardCreator={openCardCreator}
        />
      )) ||
        (updateType === 'update' && (
          <CreateSimpleCard
            onSubmit={(e) => onSubmit(e, updateType)}
            setCard={setCard}
            card={card}
            openCardCreator={openCardCreator}
          />
        )) ||
        (updateType === 'monobank' && (
          <CreateMonoBankCard
            monobankToken={monobankToken}
            setMonobankToken={setMonobankToken}
            submitMonobankToken={submitMonobankToken}
            openCardCreator={openCardCreator}
          />
        ))}
    </div>
  );
};

const CreateSimpleCard = ({ onSubmit, setCard, card, openCardCreator }) => {
  const classes = useStyles();

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
        <Button type="submit" color="primary" value="submit">
          Update
        </Button>
        <Button color="secondary" onClick={() => openCardCreator('close')}>
          Close
        </Button>
      </Grid>
    </form>
  );
};

const CreateMonoBankCard = ({
  monobankToken,
  setMonobankToken,
  submitMonobankToken,
  openCardCreator,
}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.formContainer} justify="center" alignItems="center" xs={12} container>
      <Grid item xs={12}>
        <Box>
          <Link href="https://api.monobank.ua/">Get monobank token</Link>
        </Box>
        <Box>
          <TextField
            fullWidth
            className={classes.cardNumber}
            label="Monobank token"
            variant="outlined"
            onChange={(e) => setMonobankToken(e.target.value)}
            value={monobankToken}
          />
        </Box>
        <br />
        <Box>
          <Button
            onClick={() => (submitMonobankToken(monobankToken), openCardCreator('monobank_cards'))}
            color="primary"
          >
            Send Token
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CreateCardForm;
