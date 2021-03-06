import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {
  Button,
  Grid,
  Link,
  Typography,
  IconButton,
  AppBar,
  MenuItem,
  Menu,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useStyles } from './header.styles';
import { MENU_LINKS } from '../../../shared/menu-links';
import { useDispatch, useSelector } from 'react-redux';
import { signOutCurrentDevice } from '../../../actions/auth';
import { getAuthorizationStatus } from '../../../selectors/auth';
import { Link as RouterLink } from 'react-router-dom';

const DesktopHeader = () => {
  const classes = useStyles();
  const isAuthorized = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();
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
          <RouterLink to="/dashboard" className={classes.logoLink}>
            <Typography variant="h6" noWrap>
              Ninja-wallet
            </Typography>
          </RouterLink>
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
          {isAuthorized &&
            MENU_LINKS.map((link) => (
              <Grid key={link.name} className={classes.link} item>
                <Link underline="none" component={NavLink} to={link.path}>
                  <Typography>{link.name}</Typography>
                </Link>
              </Grid>
            ))}

          {!isAuthorized && (
            <>
              <Grid className={classes.link} item>
                <Link underline="none" component={NavLink} to={'/auth/sign-up'}>
                  sign up
                </Link>
              </Grid>
              <Grid className={classes.link} item>
                <Link underline="none" component={NavLink} to={'/auth/sign-in'}>
                  sign in
                </Link>
              </Grid>
            </>
          )}

          {isAuthorized && (
            <Button
              className={classes.signOut}
              onClick={() => {
                dispatch(signOutCurrentDevice());
              }}
            >
              sign out
            </Button>
          )}
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
