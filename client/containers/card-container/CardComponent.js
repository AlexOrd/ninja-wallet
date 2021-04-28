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

import {
  fetchUserInfo,
  fetchUserMonobankAccounts,
  getStatementDataThunk,
} from '../../actions/monobankAction';

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
    margin: '30px',
    padding: '30px',
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
    // padding: theme.spacing(1),
  },
  addCard: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  addMono: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.getContrastText(theme.palette.secondary.dark),
  },
  transactionsList: {
    height: '100%',
    width: '100%',
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
  const [monbankTransactions, setMonobankTransactions] = useState(null);
  const statementsMonobankData = useSelector((state) => state.monobank.statementsData);
  const userMonobankAccounts = useSelector((state) => state.monobank.userMonobankAccounts);
  const cards = useSelector((state) => state.card.card.cards);
  const monobankInfo = useSelector((state) => state.monobank.monobankInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchCards() !== undefined) dispatch(fetchCards());
    dispatch(fetchUserMonobankAccounts());
  }, []);

  const submitMonobankToken = (token) => {
    if (token) {
      dispatch(fetchUserInfo(token));
    }
  };

  const cardsData = cards === undefined ? [] : cards;
  const monobankData = monobankInfo === undefined ? {} : monobankInfo;

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
    if (type === 'monobank') {
      setAdded(true);
      setUpdateType('monobank');
      return;
    }
    if (type === 'transaction') {
      setAdded(true);
      setUpdateType('transaction');
      return;
    }
  };

  const switchCard = (card) => {
    setAdded(false);
    setMonobankTransactions(null);
    setCard(card);
  };

  const getStatementsDataForMonobankCard = (
    monobankToken,
    monobankAccountId,
    monobankUserDataId
  ) => {
    // const currentAccount = userMonobankAccounts.find();
    dispatch(getStatementDataThunk(monobankToken, monobankAccountId, monobankUserDataId));
  };

  return (
    // <Container className={classes.container}>
    <Box component="div" className={classes.box}>
      <Grid container>
        <Grid item xs={3}>
          <Paper style={{ height: '100%' }} variant="outlined">
            <Container className={classes.gridList}>
              <h3>Your card</h3>
              <ListItem
                className={classes.addCard}
                onClick={() => openCardCreator('create')}
                button
              >
                <ListItemText primary="+Add card" />
              </ListItem>
              <ListItem
                className={classes.addMono}
                onClick={() => openCardCreator('monobank')}
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
            updateType={updateType}
            setCard={setCard}
            isAdded={isAdded}
            openType={openType}
            monobankToken={monobankToken}
            setMonobankToken={setMonobankToken}
            submitMonobankToken={submitMonobankToken}
            monobankData={monobankData}
            setMonobankTransactions={setMonobankTransactions}
            transaction={transaction}
            getStatementsDataForMonobankCard={getStatementsDataForMonobankCard}
            statementsMonobankData={statementsMonobankData}
            setUpdateType={setUpdateType}
          />
        </Grid>

        <div>
          Monobank:
          {monbankTransactions &&
            monbankTransactions.map((transaction) => (
              <div>
                {transaction.description}
                {transaction.amount}
              </div>
            ))}
        </div>
        {card.transactions !== undefined && card.transactions.length > 0 && (
          <Grid container xs={2} item>
            <Paper className={classes.transactionsList} variant="outlined">
              <Transactions
                card={card}
                openCardCreator={openCardCreator}
                setTransaction={setTransaction}
              />
            </Paper>
          </Grid>
        )}
        <Grid xs={12} container item></Grid>
      </Grid>
    </Box>
  );
};

export default CardComponent;
