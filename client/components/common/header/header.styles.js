import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '10vh',
    width: '100%',
  },
  mobileMenuContainer: {
    backgroundColor: theme.palette.primary.dark,
    height: '10vh',
    width: '100%',
    position: 'absolute',
    bottom: '0',
  },
  menuContainer: {
    '& svg': {
      color: theme.palette.getContrastText(theme.palette.primary.dark),
    },
  },
  menuItem: {
    '& a': {
      height: '40%',
    },
    '& svg': {
      fontSize: '3rem',
      maxHeight: '80%',
    },
    '& .active-page-dot': {
      color: 'white',
      display: 'none',
    },
    '& .active .active-page-dot': {
      display: 'block',
      position: 'relative',
      fontSize: '.5rem',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  headerWrapper: {
    padding: theme.spacing(1, 2),
  },
  link: {
    textDecoration: 'none',
    '& a': {
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
    '& .active': {
      textDecoration: 'none',
      color: theme.palette.secondary.main,
    },
  },
}));
