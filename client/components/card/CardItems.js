import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Cards from 'react-credit-cards';
import './style.css';
import OtherCardInfo from './OtherCardInfo';
import Grid from '@material-ui/core/Grid';
import CreateCardForm from './CreateCardForm';
import { Box, Button, List, ListItem, ListItemText } from '@material-ui/core';

import { fetchUserInfo, createMonobankThunk } from '../../actions/monobankAction';

const useStyles = makeStyles({
  root: {
    margin: '0',
    padding: '0',
  },
});

const CardItems = ({
  isAdded,
  card,
  setCard,
  error,
  createCard,
  openCardCreator,
  updateType,
  openType,
  monobankToken,
  setMonobankToken,
  submitMonobankToken,
  monobankData,
}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container alignContent="flex-start" alignItems="justify">
      <Grid md={6} container justify="center" item>
        <Grid item>
          <Box m={3} className="container">
            <Cards
              name={'' || card.cardName}
              number={'' || card.cardNumber}
              expiry={'' || card.thru}
              cvc={'' || card.cvc}
            />
          </Box>
        </Grid>
        {!isAdded && (
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              alignContent="center"
              onClick={() => openCardCreator('update')}
            >
              Edit card
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid md={6} item>
        <Box m={3}>
          <OtherCardInfo card={card} />
        </Box>
      </Grid>

      {isAdded && (
        <Grid justify="center" alignItems="center" md={12}>
          {monobankData.clientId ? (
            <MonobankCards monobankData={monobankData} monobankToken={monobankToken} />
          ) : (
            <CreateCardForm
              createCard={createCard}
              card={card}
              setCard={setCard}
              updateType={updateType}
              openType={openType}
              monobankToken={monobankToken}
              setMonobankToken={setMonobankToken}
              submitMonobankToken={submitMonobankToken}
            />
          )}
          {error !== undefined ? (
            <Grid md={12}>
              {error.data.details.map(({ message }) => (
                <ul>
                  <li>{message}</li>
                </ul>
              ))}
            </Grid>
          ) : (
            ''
          )}
        </Grid>
      )}
    </Grid>
  );
};

const MonobankCards = ({ monobankData, monobankToken }) => {
  const dispatch = useDispatch();

  const createMonobankAccout = (cardInfo) => {
    const createdAccount = {
      monobankToken: monobankToken,
      monobankAccountId: cardInfo.id,
      cardNumber: cardInfo.maskedPan[0],
    };
    dispatch(createMonobankThunk(createdAccount, monobankToken));
    console.log(createdAccount);
  };

  return (
    <List>
      <ListItem>Card owner: {monobankData.name}</ListItem>
      Cards:
      {monobankData.accounts.map((cardInfo) => (
        <ListItem>
          <ListItemText>
            {cardInfo.maskedPan[0]}
            <button onClick={() => createMonobankAccout(cardInfo)}>Create monobank account</button>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default CardItems;
