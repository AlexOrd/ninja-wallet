import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(247, 255, 249)',
    margin: '0px',
    padding: '0px',
  },
}));

const Transactions = ({ card, setTransaction, openCardCreator }) => {
  const classes = useStyles();

  return (
    <List m={0} p={0} component="nav" aria-label="secondary mailbox folders">
      {card?.transactions.map((transaction) => (
        <ListItem key={transaction._id} alignItems="center" button>
          <ListItemText
            onClick={() => (setTransaction(transaction), openCardCreator('transaction'))}
          >
            {transaction.merchantName}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default Transactions;
