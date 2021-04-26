import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cards from 'react-credit-cards';
import './style.css';
import OtherCardInfo from './OtherCardInfo';
import Grid from '@material-ui/core/Grid';
import CreateCardForm from './CreateCardForm';
import Box from '@material-ui/core/Box';

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
  setUpdateType,
}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container alignContent="flex-start" alignItems="justify">
      <Grid item>
        <Box m={3} className="container">
          <Cards
            name={'' || card.cardName}
            // number={'553435******3232'}
            number={'' || card.cardNumber}
            expiry={'' || card.thru}
            cvc={'' || card.cvc}
          />
        </Box>
      </Grid>
      <Grid item>
        <Box m={3}>
          <OtherCardInfo card={card} />
        </Box>
      </Grid>
      <Box>
        <button onClick={() => (openCardCreator(), setUpdateType('update'))}>Edit card</button>
      </Box>
      {!isAdded ? (
        ''
      ) : (
        <div>
          <Grid md={12}>
            <CreateCardForm
              createCard={createCard}
              card={card}
              setCard={setCard}
              updateType={updateType}
              // setCard={value => setCard(value)}
              // card={card}
              // onSubmit={onSubmit}
              // handleSubmit={handleSubmit}
            />
          </Grid>
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
        </div>
      )}
    </Grid>
  );
};

export default CardItems;
