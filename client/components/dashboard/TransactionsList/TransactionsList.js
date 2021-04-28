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
  Typography,
} from '@material-ui/core';
import Wallpaper from '@material-ui/icons/Wallpaper';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Skeleton } from '@material-ui/lab';
import { Link } from 'react-router-dom';

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
  header: {
    fontSize: 26,
  },
  alertMsg: {
    color: '#721c24',
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
  },
});

const TransactionsList = ({ data, classes, cards, selectedCard }) => {
  if (!cards || !cards.length) {
    return null;
  }
  data = data?.slice(0, 5);
  return (
    <div className={classes.container}>
      <Card style={{ width: '100%' }}>
        <CardHeader
          classes={{ title: classes.header }}
          title={`Latest transactions on card "${selectedCard?.cardName}"`}
        />
        <Divider />
        <CardContent classes={{ root: classes.card }}>
          <List>
            {data &&
              !!data.length &&
              data.map((item, i) => (
                <ListItem divider={i < data.length - 1} key={item._id}>
                  <ListItemIcon>
                    <Avatar>
                      <Wallpaper />
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={item.transactionType}
                    secondary={'Merchant name: ' + item.merchantName}
                  />
                  <ListItemSecondaryAction>
                    <span className={classes.redSum}>-{item.sum}</span>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}

            {data && !data.length && (
              <>
                <ListItem>
                  <Skeleton variant="circle" width={40} height={40} style={{ marginRight: 15 }} />
                  <Skeleton variant="rect" height={40} width={'100%'} />
                </ListItem>
                <Typography classes={{ root: classes.alertMsg }}>
                  You do not have any transactions on this card
                </Typography>
              </>
            )}

            {!data &&
              Array(3)
                .fill(0)
                .map((_, idx) => (
                  <ListItem key={idx}>
                    <Skeleton variant="circle" width={40} height={40} style={{ marginRight: 15 }} />
                    <Skeleton variant="rect" height={40} width={'100%'} />
                  </ListItem>
                ))}
          </List>
        </CardContent>
        <Divider />
        <CardActions className={classes.actions}>
          <Link to="/transactions">
            <Button color="primary" size="small" variant="text">
              View all <ArrowRightIcon />
            </Button>
          </Link>
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
