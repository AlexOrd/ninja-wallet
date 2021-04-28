import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Cards from 'react-credit-cards';
import './style.css';
import OtherCardInfo from './OtherCardInfo';
import Grid from '@material-ui/core/Grid';
import CreateCardForm from './CreateCardForm';
import TransactionInfo from './TransactionInfo';
import { Box, Button, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { createMonobankThunk, setMonobankAccout } from '../../actions/monobankAction';

const useStyles = makeStyles({
  root: {
    margin: '0',
    padding: '0',
  },
});

const CardItems = ({
  card,
  createCard,
  openCardCreator,
  updateType,
  setCard,
  isAdded,
  openType,
  monobankToken,
  setMonobankToken,
  submitMonobankToken,
  monobankData,
  setMonobankTransactions,
  transaction,
  getStatementsDataForMonobankCard,
  statementsMonobankData,
  setUpdateType,
}) => {
  const [isMonoCard, setIsMonoCard] = useState(false);
  const userMonobankAccounts = useSelector((state) => state.monobank.userMonobankAccounts);
  const monobankLocalCardsIds = useSelector((state) => state.monobank.monobankLocalCardsIds);

  const classes = useStyles();

  useEffect(() => {
    setIsMonoCard(false);
  }, [card._id]);

  useEffect(() => {
    if (isMonoCard && userMonobankAccounts) {
      const monobankAccount = userMonobankAccounts.find((data) => data.card === card._id);

      if (!monobankAccount) {
        return;
      }

      const isStatementDataAlreadyFetched = statementsMonobankData.find(
        (statement) => statement.monobankAccountId === monobankAccount.monobankAccountId
      );

      if (!isStatementDataAlreadyFetched) {
        return getStatementsDataForMonobankCard(
          monobankAccount.monobankToken,
          monobankAccount.monobankAccountId,
          monobankAccount._id
        );
      }

      const cardStatementsMonobankData = statementsMonobankData.filter(
        (statement) => statement.monobankAccountId === monobankAccount.monobankAccountId
      );

      setMonobankTransactions(...cardStatementsMonobankData.map((card) => card.statements));
    }
  }, [
    isMonoCard,
    card._id,
    statementsMonobankData,
    statementsMonobankData.length,
    userMonobankAccounts,
  ]);

  useEffect(() => {
    if (monobankLocalCardsIds.length > 0 && card._id) {
      setIsMonoCard(monobankLocalCardsIds.includes(card._id));
    }
  }, [card._id, isMonoCard, monobankLocalCardsIds]);

  return (
    <Grid className={classes.root} container alignContent="flex-start" alignItems="flex-start">
      <Grid md={6} container justify="center" item>
        <Grid item>
          <Box m={3} className="container">
            <Cards
              name={card.cardName || ''}
              number={card.cardNumber || ''}
              expiry={card.thru || ''}
              cvc={card.cvc || ''}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid md={6} item>
        <Box m={3}>
          <OtherCardInfo isMonoCard={isMonoCard} card={card} />
        </Box>
      </Grid>
      {!isAdded && (
        <Grid xs={12} md={12} container justify="center" item>
          <Button
            variant="contained"
            color="primary"
            aligncontent="center"
            onClick={() => openCardCreator('update')}
          >
            Edit card
          </Button>
        </Grid>
      )}
      {
        <Grid container justify="center" alignItems="center">
          {monobankData?.clientId ? (
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
            // <TransactionInfo  />
          )}
        </Grid>
      }
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
    // console.log(createdAccount)
    dispatch(createMonobankThunk(createdAccount, monobankToken));
    // dispatch(setMonobankAccout({}));
    // console.log(createdAccount);
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
      <button onClick={() => dispatch(setMonobankAccout({}))}>Close</button>
    </List>
  );
};

export default CardItems;
