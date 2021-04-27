import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cards from 'react-credit-cards';
import './style.css';
import OtherCardInfo from './OtherCardInfo';
import Grid from '@material-ui/core/Grid';
import CreateCardForm from './CreateCardForm';
import { Box, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

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
  statementsMonobankData,
  getStatementsDataForMonobankCard,
}) => {
  const [isMonoCard, setIsMonoCard] = useState(false);
  const [monbankTransactions, setMonbankTransactions] = useState([]);
  const userMonobankAccounts = useSelector((state) => state.monobank.userMonobankAccounts);
  const monobankLocalCardsIds = useSelector((state) => state.monobank.monobankLocalCardsIds);

  const classes = useStyles();

  useEffect(() => {
    if (monobankLocalCardsIds.length > 0) {
      setIsMonoCard(monobankLocalCardsIds.includes(card._id));
    }
  }, [card, monobankLocalCardsIds]);

  useEffect(() => {
    if (isMonoCard && userMonobankAccounts) {
      const monobankAccount = userMonobankAccounts.find((data) => data.card === card._id);

      // if (!monobankToken) {
      //   setMonobankToken(monobankAccount.monobankToken);
      // }

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

      setMonbankTransactions(
        statementsMonobankData.filter(
          (statement) => statement.monobankAccountId === monobankAccount._id
        )
      );
    }
  }, [
    isMonoCard,
    statementsMonobankData,
    // monobankToken,
    userMonobankAccounts,
  ]);

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
          <OtherCardInfo isMonoCard={isMonoCard} card={card} />
        </Box>
      </Grid>

      {isAdded && (
        <Grid justify="center" alignItems="center" md={12}>
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

export default CardItems;
