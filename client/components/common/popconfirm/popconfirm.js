import { Button, Grid, Popover, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './popconfirm.style';

const PopConfirm = ({ id, open, anchorEl, label, handleClose, onConfirm }) => {
  const classes = useStyles();

  const handleConfirm = () => {
    onConfirm();
    handleClose();
  };

  const handleCancel = () => {
    handleClose();
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Grid className={classes.popconfirmWrapper}>
        <Grid xs={12} item>
          <Typography>{label}</Typography>
        </Grid>
        <Grid container spacing={2} justify="center" item xs={12}>
          <Grid item xs="auto">
            <Button onClick={handleCancel} size="small" color="secondary" variant="outlined">
              No
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button onClick={handleConfirm} size="small" color="primary" variant="contained">
              Yes
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Popover>
  );
};

export default PopConfirm;
