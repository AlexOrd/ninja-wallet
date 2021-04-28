import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Import custom components

const styles = (theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    flexGrow: 1,
    padding: 50,
    paddingRight: 30,
    height: '100%',
    boxSizing: 'border-box',
  },
});

const MainLayout = (props) => {
  const { classes, children } = props;
  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <main className={classes.content}>{children}</main>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element,
};

export default withStyles(styles)(MainLayout);
