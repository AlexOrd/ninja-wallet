import React from 'react';
import { withStyles } from '@material-ui/core';

export const StyledMain = withStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      height: '90vh',
      overflow: 'auto',
    },
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0),
  },
}))(({ classes, children }) => <main className={classes.root}>{children}</main>);
