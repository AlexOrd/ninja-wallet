import React from 'react';
import { Button, makeStyles, Tooltip, Typography } from '@material-ui/core';

export function SkipButton(props) {
  const styles = useStyles();
  const { handler, showWarningMessage, buttonText = 'skip', warnText = 'Are you sure?' } = props;
  const [isVisibleWarningMessage, setVisibleWarningMessage] = React.useState(false);
  const skipHandler = () => {
    if (!showWarningMessage) {
      return handler();
    }

    if (showWarningMessage && isVisibleWarningMessage) {
      return handler();
    }

    setVisibleWarningMessage(true);
  };

  return (
    <>
      {isVisibleWarningMessage && (
        <Tooltip placement="left" title={`if "yes" just click ${buttonText}`}>
          <Typography className={styles.warnMessage}>{warnText}</Typography>
        </Tooltip>
      )}
      <Button onClick={skipHandler}>{buttonText}</Button>
    </>
  );
}

function useStyles() {
  return makeStyles((theme) => {
    return {
      warnMessage: {
        color: theme.palette.warning.main,
        cursor: 'default',
      },
    };
  })();
}
