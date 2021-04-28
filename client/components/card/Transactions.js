import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, Box, ListItem, ListItemText, Checkbox } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(247, 255, 249)',
    margin: '0px',
    padding: '0px',
  },
}));

const Transactions = ({
  transactions,
  setTransaction,
  openCardCreator,
  applyMonobankTransaction,
}) => {
  const classes = useStyles();

  return (
    <List m={0} p={0} component="nav" aria-label="secondary mailbox folders">
      <ListItem>Card transactions</ListItem>
      {transactions?.map((transaction) => (
        <ListItem key={transaction._id || transaction.id} alignItems="center" button>
          <ListItemText
            onClick={() => (setTransaction(transaction), openCardCreator('transaction'))}
          >
            <Box>Description: {transaction.merchantName || transaction.description}</Box>
            <Box>Payment price: {transaction.amount} </Box>
            {transaction.id !== undefined && (
              <Checkbox
                color="primary"
                onClick={() =>
                  applyMonobankTransaction({
                    transactionId: transaction.id,
                    transactionSum: transaction.amount,
                    transactionDescription: transaction.description,
                  })
                }
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            )}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default Transactions;
