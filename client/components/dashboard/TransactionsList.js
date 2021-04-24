import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import Wallpaper from '@material-ui/icons/Wallpaper';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const styles = () => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50,
  },
  root: {
    paddingTop: 0,
  },
  subheader: {
    fontSize: 24,
    backgroundColor: cyan[600],
    color: '#FFFFFF',
  },
  actions: {
    justifyContent: 'flex-end',
  },
  redSum: {
    color: 'red',
    fontSize: 20,
  },
  card: {
    padding: 0,
  },
});

const TransactionsList = ({ data, classes }) => {
  return (
    <div className={classes.container}>
      <Card style={{ width: '50%' }}>
        <CardHeader title="Recent transactions" />
        <Divider />
        <CardContent classes={{ root: classes.card }}>
          <List>
            {data.map((item, i) => (
              <ListItem divider={i < data.length - 1} key={item._id}>
                <ListItemIcon>
                  <Avatar>
                    <Wallpaper />
                  </Avatar>
                </ListItemIcon>
                <ListItemText primary={item.transactionType} secondary={item.merchantName} />
                <ListItemSecondaryAction>
                  <span className={classes.redSum}>-{item.sum}</span>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </CardContent>
        <Divider />
        <CardActions className={classes.actions}>
          <Button color="primary" size="small" variant="text">
            View all <ArrowRightIcon />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

TransactionsList.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array,
};

export default withStyles(styles)(TransactionsList);
