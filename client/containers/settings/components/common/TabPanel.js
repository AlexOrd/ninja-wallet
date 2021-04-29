import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box, makeStyles } from '@material-ui/core';

export function TabPanel({ children, value, index, ...other }) {
  const styles = useStyles();

  return (
    <div
      className={styles.tabPanel}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function useStyles() {
  return makeStyles(() => ({
    tabPanel: {
      width: '100%',
    },
  }))();
}
