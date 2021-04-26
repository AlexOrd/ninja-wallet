import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import {
  fetchCards,
  createCardThunk,
  editCardThunk,
  deleteCardThunk,
  changeCard,
} from '../../actions/cardAction';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CardList from '../../components/card/CardList';
import CardItems from '../../components/card/CardItems';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    margin: '0',
    padding: '0',
  },
  gridList: {
    display: 'inline-block',
    maxHeight: '100%',
    'box-shadow': '0 0 10px rgba(0,0,0,0.2)',
  },
  cardItem: {
    padding: '20px',
  },
  girdContainer: {
    height: '100%',
  },
  addCard: {
    backgroundColor: 'rgba(0, 170, 217)',
  },
});

const cardType = {
  cardNumber: '',
  cardName: '',
  balance: '',
  currency: '',
};

const CardComponent = () => {
  const classes = useStyles();
  const [card, setCard] = useState(cardType);
  const [isAdded, setAdded] = useState(false);
  const [updateType, setUpdateType] = useState('');
  const cards = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchCards() !== undefined) dispatch(fetchCards());
  }, []);

  const cardsData = cards.card.card.cards === undefined ? [] : cards.card.card.cards;

  const createCard = (card, updateType, cardId) => {
    if (updateType === 'create') {
      return dispatch(createCardThunk(card));
    }
    if (updateType === 'update') {
      return dispatch(editCardThunk(cardId, card));
    }
  };

  const deleteCard = (cardId) => {
    // console.log('xxxxxxxxxxxxxx')
    // console.log(cardId, 'hello')
    dispatch(deleteCardThunk(cardId));
  };

  const toLocalStorage = () => {
    let auth =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MDg1OTI4ZDcyYTZjMjExYmM2NDAyNWIiLCJkZXZpY2VJRCI6IjYwODU5Mjk2NzJhNmMyMTFiYzY0MDI1ZCIsImlhdCI6MTYxOTM2NjU1MCwiZXhwIjoxNjE5NDUyOTUwfQ.dawG4xWM1eQlJfVLR4FzakhwhooNv4M_0RGiMgufnWs';
    let refresh =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25maXJtQ29kZSI6IjIyMjc3NCIsImRldmljZUlEIjoiNjA4NTkyOTY3MmE2YzIxMWJjNjQwMjVkIiwiaWF0IjoxNjE5MzY2NTUwLCJleHAiOjE2MTkzNzAxNTB9.rh_1bcb861magj7_32T5XITjjcNNFKVEYErCS0tQSBs';
    return localStorage.setItem('accessToken', auth), localStorage.setItem('refreshToken', refresh);
  };
  toLocalStorage();

  const openCardCreator = () => {
    if (updateType === 'create') {
      setAdded(true);
      setCard(cardType);
      console.log('xxx');
      return;
    }
    if (updateType === 'update') {
      setAdded(true);
      // setCard(card)
      console.log(card);
      return;
    }
  };

  const switchCard = (card) => {
    setAdded(false);
    setCard(card);
  };

  console.log(updateType);

  return (
    <div>
      <Container className={classes.container} maxWidth="lg">
        <Box component="div" className={classes.box}>
          <Grid className={classes.girdContainer} container item>
            <Grid className={classes.gridList} md={4} container item>
              <h3>Your card</h3>
              <ListItem
                className={classes.addCard}
                onClick={() => (openCardCreator(), setUpdateType('create'))}
                button
              >
                <ListItemText primary="+Add card" />
              </ListItem>
              <br />

              <CardList cards={cardsData} switchCard={switchCard} deleteCard={deleteCard} />
            </Grid>
            <Grid container md={8} item>
              <CardItems
                className={classes.cardItem}
                card={card}
                createCard={createCard}
                openCardCreator={openCardCreator}
                setUpdateType={setUpdateType}
                updateType={updateType}
                // onSubmit={onSubmit}
                setCard={setCard}
                isAdded={isAdded}
                // error={error}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default CardComponent;
