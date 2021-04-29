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
  list: {
    width: '100%',
  },
}));

const Transactions = ({
  transactions,
  openCardCreator,
  applyMonobankTransaction,
  dismissMonobankTransaction,
}) => {
  const classes = useStyles();

  const lastSixTranaction = transactions?.slice(0, 6);

  return (
    <Grid container direction="row" item xs={12} md={12}>
      <List
        className={classes.list}
        spacing={2}
        component="nav"
        aria-label="secondary mailbox folders"
      >
        <ListItem>Card transactions</ListItem>
        {lastSixTranaction?.map((transaction) => (
          <ListItem
            className={classes.checkboxBox}
            key={transaction._id || transaction.id}
            alignItems="center"
            button
          >
            <Grid container>
              <ListItemText
                onClick={() => {
                  openCardCreator('transaction');
                }}
              >
                Description:{' '}
                {transaction.merchantName || transaction.description || transaction.transactionType}
                <br />
                Payment price: {transaction.amount || transaction.sum}
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
            </Grid>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default Transactions;
