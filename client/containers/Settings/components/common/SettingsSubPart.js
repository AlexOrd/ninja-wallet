import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

export const SettingsSubPart = ({ title, children }) => {
  const styles = useStyles();
  return (
    <Box className={styles.subPart}>
      {title && (
        <div className={styles.info}>
          <Typography variant="h2" className={styles.titles}>
            {title}
          </Typography>
        </div>
      )}

      {children}
    </Box>
  );
};

function useStyles() {
  return makeStyles((theme) => {
    return {
      titles: {
        fontSize: '30px',
        marginBottom: '10px',
        fontWeight: 500,
      },
      subPart: {
        paddingBottom: '35px',
      },
      info: {
        marginBottom: '45px',
        borderBottom: `1px solid ${theme.palette.divider}`,
        width: '100%',
        paddingBottom: '7px',
      },
    };
  })();
}
