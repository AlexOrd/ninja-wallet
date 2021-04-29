import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  Box,
  ListItem,
  ListItemText,
  Checkbox,
  Grid,
  ListItemSecondaryAction,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(247, 255, 249)',
    margin: '0px',
    padding: '0px',
  },
  checkboxBox: {
    display: 'inline-block',
  },
}));

const Transactions = ({
  transactions,
  setTransaction,
  openCardCreator,
  applyMonobankTransaction,
  dismissMonobankTransaction,
}) => {
  const classes = useStyles();

  return (
    <Grid container item xs={12} md={12}>
      <List spacing={2} component="nav" aria-label="secondary mailbox folders">
        <ListItem>Card transactions</ListItem>
        {transactions?.map((transaction) => (
          <ListItem
            className={classes.checkboxBox}
            key={transaction._id || transaction.id}
            alignItems="center"
            button
          >
            <ListItemText
              onClick={() => (setTransaction(transaction), openCardCreator('transaction'))}
            >
              Description: {transaction.merchantName || transaction.description}
              <br />
              Payment price: {transaction.amount}
            </ListItemText>

            {transaction.id !== undefined && (
              <ListItemSecondaryAction>
                <Box className={classes.checkboxBox}>
                  <Checkbox
                    color="primary"
                    defaultChecked
                    onClick={() =>
                      applyMonobankTransaction({
                        transactionId: transaction.id,
                        transactionSum: transaction.amount,
                        transactionDescription: transaction.description,
                      })
                    }
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                  <Checkbox
                    defaultChecked
                    indeterminate
                    inputProps={{ 'aria-label': 'indeterminate checkbox' }}
                    onClick={() => dismissMonobankTransaction(transaction.id)}
                  />
                </Box>
              </ListItemSecondaryAction>
            )}
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default Transactions;
