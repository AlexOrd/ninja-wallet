import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Grid, Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useStyles } from './header.styles';
import { MENU_LINKS } from '../../../shared/menu-links';

const DesktopHeader = () => {
  const classes = useStyles();
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className={classes.headerWrapper} position="static">
      <Grid container direction="row">
        <Grid item container alignItems="center" xs={2}>
          <Typography noWrap variant="h6">
            Ninja-wallet
          </Typography>
        </Grid>
        <Grid
          item
          xs={true}
          alignItems="center"
          justify="flex-end"
          spacing={2}
          className={classes.menuContainer}
          container
        >
          {MENU_LINKS.map((link) => (
            <Grid key={link.name} className={classes.link} item>
              <Link underline="none" component={NavLink} to={link.path}>
                {link.name}
              </Link>
            </Grid>
          ))}
        </Grid>

        <Grid item xs="auto">
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default DesktopHeader;
