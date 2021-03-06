import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteCardThunk } from '../../actions/cardAction';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0px',
    padding: '0px',
  },
}));

const CardList = ({ cards, switchCard, deleteCard }) => {
  const classes = useStyles();

  const confirmCardDelete = (id) => {
    return confirm('Are you sure you want to delete this card?') && deleteCard(id);
  };

  return (
    <List
      m={0}
      p={0}
      component="nav"
      className={classes.root}
      aria-label="secondary mailbox folders"
    >
      {cards.map((card) => (
        <ListItem key={card._id} alignItems="center" button>
          <ListItemText
            onClick={() => switchCard(card)}
            primary={
              card.cardName === 'monobank'
                ? `${card.cardName}(${card.cardNumber.slice(12, 16)})`
                : card.cardName
            }
          />
          <DeleteIcon onClick={() => confirmCardDelete(card._id)} />
        </ListItem>
      ))}
    </List>
  );
};

export default CardList;
