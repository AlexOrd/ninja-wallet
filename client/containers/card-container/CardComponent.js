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

import { fetchUserInfo } from '../../actions/monobankAction';

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
  addMono: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.getContrastText(theme.palette.secondary.dark),
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
  const [transaction, setTransaction] = useState({});
  const [monobankToken, setMonobankToken] = useState('');
  const [openType, setOpenType] = useState('');
  const cards = useSelector((state) => state.card.card.cards);
  const monobank = useSelector((state) => state.monobank.monobankInfo.data);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchCards() !== undefined) dispatch(fetchCards());
  }, []);

  // useEffect(() => {

  const submitMonobankToken = (token) => {
    if (fetchUserInfo(token) !== undefined) dispatch(fetchUserInfo(token));
  };
  // }, [])

  const cardsData = cards === undefined ? [] : cards;
  const monobankData = monobank === undefined ? {} : monobank.monobankInfo;

  const sortedCards = cardsData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  console.log(monobankData);

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

  const openCardCreator = (type, typeCreator) => {
    if (type === 'create' && typeCreator === 'simple') {
      setAdded(true);
      setCard(cardType);
      setUpdateType('create');
      setOpenType(typeCreator);
      return;
    }
    if (type === 'update' && typeCreator === 'simple') {
      setAdded(true);
      setUpdateType('update');
      setOpenType(typeCreator);
      return;
    }
    if (type === 'create' && typeCreator === 'monobank') {
      setAdded(true);
      setOpenType(typeCreator);
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
                <h3>Your card</h3>
                <ListItem
                  className={classes.addCard}
                  onClick={() => openCardCreator('create', 'simple')}
                  button
                >
                  <ListItemText primary="+Add card" />
                </ListItem>
                <ListItem
                  className={classes.addMono}
                  onClick={() => openCardCreator('create', 'monobank')}
                  button
                >
                  <ListItemText primary="+Add monobank card" />
                </ListItem>

                <CardList cards={sortedCards} switchCard={switchCard} deleteCard={deleteCard} />
              </Container>
            </Paper>
          </Grid>

          <Grid container xs={true} md={7} item>
            <CardItems
              className={classes.cardItem}
              card={card}
              createCard={createCard}
              openCardCreator={openCardCreator}
              setUpdateType={setUpdateType}
              updateType={updateType}
              setCard={setCard}
              isAdded={isAdded}
              openType={openType}
              monobankToken={monobankToken}
              setMonobankToken={setMonobankToken}
              submitMonobankToken={submitMonobankToken}
            />
          </Grid>
          <Grid container xs="auto" md={2} item>
            <Paper style={{ height: '100%' }} variant="outlined">
              <Transactions card={card} setTransaction={setTransaction} />
            </Paper>
          </Grid>
          <Grid xs={12} container item>
            {transaction._id && (
              <Grid container justify="center" item>
                <TransactionInfo transaction={transaction} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Box>
      {/* <Box></Box> */}
    </Container>
  );
};

export default CardComponent;
