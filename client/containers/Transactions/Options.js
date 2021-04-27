import React from 'react';
import { Button, Grid, Popover, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useStyles } from './Transactions.style';
import { axiosInstance } from '../../config/axios';

const StyledIconButton = withStyles((theme) => ({
  root: {
    '& .MuiIconButton-root': {
      padding: 0,
    },
  },
}))(IconButton);
// .MuiIconButton-root
const ITEM_HEIGHT = 48;

export default function Options(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElPopover, setAnchorElPopover] = React.useState(null);

  const handleClickPopover = (event) => {
    setAnchorElPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorElPopover(null);
    handleClose();
  };

  const openPopover = Boolean(anchorElPopover);
  const idPopover = open ? 'simple-popover' : undefined;

  const deleteTransaction = () => {
    const apiUrlDelete = `/api/transactions/${props.id}`;

    axiosInstance.delete(apiUrlDelete).then((res) => {
      console.log(res.data);
      const apiUrl = '/api/transactions';
      axiosInstance.get(apiUrl).then((res) => {
        const allTransactions = res.data.transactions;
        props.setTransactions(allTransactions);
      });
    });
  };

  return (
    <div>
      <StyledIconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </StyledIconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '15ch',
          },
        }}
      >
        <MenuItem selected={anchorEl} onClick={handleClose}>
          <Link className={classes.btnLinkOptions} to={`/transactions/view/${props.id}`}>
            View
          </Link>
        </MenuItem>
        <MenuItem selected={anchorEl} onClick={handleClose}>
          <Link className={classes.btnLinkOptions} to={`/transactions/edit/${props.id}`}>
            Edit
          </Link>
        </MenuItem>
        <MenuItem
          className={classes.btnLinkOptions}
          selected={anchorElPopover}
          onClick={handleClickPopover}
        >
          Delete
        </MenuItem>
        <Popover
          id={idPopover}
          open={openPopover}
          anchorElPopover={anchorElPopover}
          onClose={handleClosePopover}
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
              <Typography>Do you really want to delete this transaction?</Typography>
            </Grid>
            <Grid container spacing={2} justify="center" item xs={12}>
              <Grid item xs="auto">
                <Button
                  className={classes.btnPop}
                  onClick={handleClosePopover}
                  size="small"
                  color="secondary"
                  variant="outlined"
                >
                  No
                </Button>
              </Grid>
              <Grid item xs="auto">
                <Button
                  className={classes.btnPop}
                  onClick={deleteTransaction}
                  size="small"
                  color="primary"
                  variant="contained"
                >
                  Yes
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Popover>
      </Menu>
    </div>
  );
}
