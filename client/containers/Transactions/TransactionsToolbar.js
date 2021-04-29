import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import { useStyles } from './Transactions.style';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';

const TransactionsToolbar = (props) => {
  const classes = useStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.toolbarRoot, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <Typography className={classes.toolbarTitle} variant="h6" id="tableTitle" component="div">
        Transactions
      </Typography>

      <Link to="/transactions/create">
        <Tooltip title="Add" aria-label="add">
          <Fab color="primary" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </Link>
    </Toolbar>
  );
};

TransactionsToolbar.propTypes = {
  numSelected: PropTypes.number,
};

export default TransactionsToolbar;
