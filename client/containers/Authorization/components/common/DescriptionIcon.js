import { makeStyles } from '@material-ui/core';
import React from 'react';

export function DescriptionIcon({ Icon, width = 60, height = 60, ...rest }) {
  const styles = useStyles();
  return (
    <div className={styles.iconWrapper}>
      <Icon width={`${width}px`} height={`${height}px`} {...rest} />
    </div>
  );
}

function useStyles() {
  return makeStyles({
    iconWrapper: {
      padding: '40px',
      display: 'block',
      backgroundColor: '#b2dfdb',
      borderRadius: '50%',
      marginBottom: '15px',
      position: 'relative',
      boxSizing: 'border-box',
    },
  })();
}
