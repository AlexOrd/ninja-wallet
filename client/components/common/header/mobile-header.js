import React from 'react';
import { NavLink } from 'react-router-dom';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Grid } from '@material-ui/core';
import { useStyles } from './header.styles';
import { MENU_LINKS } from '../../../shared/menu-links';

const MobileHeader = () => {
  const classes = useStyles();

  return (
    <Grid
      alignItems="center"
      justify="space-around"
      className={`${classes.mobileMenuContainer} ${classes.menuContainer}`}
      container
    >
      {MENU_LINKS.map((link) => (
        <Grid key={link.name} className={classes.menuItem} item>
          <NavLink to={link.path}>
            <Grid align="center" container>
              <Grid item xs={12}>
                {link.icon}
              </Grid>
              <Grid item xs={12}>
                <FiberManualRecordIcon className="active-page-dot" />
              </Grid>
            </Grid>
          </NavLink>
        </Grid>
      ))}
    </Grid>
  );
};

export default MobileHeader;
