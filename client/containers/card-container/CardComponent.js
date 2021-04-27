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
import Transactions from '../../components/card/Transactions';
import TransactionInfo from '../../components/card/TransactionInfo';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0',
    padding: '0',
  },
  gridList: {
    display: 'inline-block',
    padding: '0',
    maxHeight: '100%',
  },
  cardItem: {
    padding: '20px',
  },
  girdContainer: {
    height: 'auto',
  },
  container: {
    padding: theme.spacing(1),
  },
  addCard: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
}));

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

  const sortedCardsByDate = [...cardsData].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  // console.log(cardsData)
  const sortedCardsByTotalSum = [...cardsData].sort(
    (a, b) =>
      b.transactions.reduce((acc, curr) => acc + curr.sum, 0) -
      a.transactions.reduce((acc, curr) => acc + curr.sum, 0)
  );

  const createCard = (card, updateType, cardId) => {
    if (updateType === 'create') {
      return dispatch(createCardThunk(card));
    }
    if (updateType === 'update') {
      return dispatch(editCardThunk(cardId, card));
    }
  };

  const deleteCard = (cardId) => {
    dispatch(deleteCardThunk(cardId));
  };

  const openCardCreator = (type) => {
    if (type === 'create') {
      setAdded(true);
      setCard(cardType);
      setUpdateType('create');
      return;
    }
    if (type === 'update') {
      setAdded(true);
      setUpdateType('update');
      return;
    }
  };

  const switchCard = (card) => {
    setAdded(false);
    setCard(card);
  };

  const toLocalStorage = () => {
    let auth =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MDg1OTI4ZDcyYTZjMjExYmM2NDAyNWIiLCJkZXZpY2VJRCI6IjYwODZkMzU2YTE1M2RhMTgyZGI2MGJkMSIsImlhdCI6MTYxOTQ0ODY2MiwiZXhwIjoxNjE5NTM1MDYyfQ.fKXTnMS3c9W6fS0aRd4m5JdTMxAjwlR9mT0DnAzUBzs';
    let refresh =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25maXJtQ29kZSI6IjQxODcyNCIsImRldmljZUlEIjoiNjA4NmQzNTZhMTUzZGExODJkYjYwYmQxIiwiaWF0IjoxNjE5NDQ4NjYyLCJleHAiOjE2MTk0NTIyNjJ9.tc7gVEhAG1DkUYcLBiwloMkhs_x4ffd5XZICHSpB_3Y';
    return localStorage.setItem('accessToken', auth), localStorage.setItem('refreshToken', refresh);
  };
  toLocalStorage();

  return (
    <Container className={classes.container} maxWidth="lg">
      <Box component="div" className={classes.box}>
        <Grid className={classes.girdContainer} spacing={2} container>
          <Grid item xs={3}>
            <Paper style={{ height: '100%' }} variant="outlined">
              <Container className={classes.gridList}>
                <h3>Your cards</h3>
                <ListItem
                  className={classes.addCard}
                  onClick={() => openCardCreator('create')}
                  button
                >
                  <ListItemText primary="+Add card" />
                </ListItem>

                <CardList
                  cards={sortedCardsByDate}
                  switchCard={switchCard}
                  deleteCard={deleteCard}
                />
              </Container>
            </Paper>
          </Grid>

          <Grid container xs={true} md={6} item>
            <CardItems
              className={classes.cardItem}
              card={card}
              createCard={createCard}
              openCardCreator={openCardCreator}
              setUpdateType={setUpdateType}
              updateType={updateType}
              setCard={setCard}
              isAdded={isAdded}
            />
          </Grid>
          <Grid container xs="auto" md={2} item>
            <Paper style={{ height: '100%' }} variant="outlined">
              <Transactions card={card} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CardComponent;
