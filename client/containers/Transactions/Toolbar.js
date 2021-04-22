import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(2),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.primary.dark,
          backgroundColor: lighten(theme.palette.primary.dark, 0.85),
        }
      : {
          color: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.dark,
        },
  title: {
    flex: '1 1 100%',
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        Transactions
      </Typography>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default EnhancedTableToolbar;
