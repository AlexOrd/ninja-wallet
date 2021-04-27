import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TransactionInfo from './TransactionInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(247, 255, 249)',
    margin: '0px',
    padding: '0px',
  },
}));

const Transactions = ({ card }) => {
  const classes = useStyles();
  const [currentTransaction, setCurrentTransaction] = useState({});

  return (
    <List
      m={0}
      p={0}
      component="nav"
      className={classes.root}
      aria-label="secondary mailbox folders"
    >
      {card.transactions !== undefined
        ? card.transactions[0].map((transaction) => (
            <ListItem key={transaction._id} alignItems="center" button>
              <ListItemText onClick={() => setCurrentTransaction(transaction)}>
                {transaction.merchantName}
              </ListItemText>
              {currentTransaction._id === transaction._id && (
                <ListItemText>
                  <TransactionInfo transaction={currentTransaction} />
                </ListItemText>
              )}
            </ListItem>
          ))
        : ''}
    </List>
  );
};

export default Transactions;
