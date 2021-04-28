import { makeStyles } from '@material-ui/core';
import { lighten } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: 'auto',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
    '.makeStyles-root-56': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  paper: {
    width: '80%',
    marginBottom: theme.spacing(0),
    margin: 'auto',
  },
  table: {
    // minWidth: 750
  },
  row: {
    color: theme.palette.primary.dark,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  title: {
    margin: 30,
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.primary.dark,
  },
  container: {
    padding: 30,
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  toolbarRoot: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(2),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.primary.light,
          backgroundColor: lighten(theme.palette.primary.dark, 0.85),
        }
      : {
          color: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.dark,
        },
  toolbarTitle: {
    flex: '1 1 100%',
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
  },
  btnLinkOptions: {
    textDecoration: 'none',
    color: theme.palette.primary.dark,
  },
  btnCreate: {
    marginTop: 30,
    marginLeft: '40%',
  },
  popconfirmWrapper: {
    padding: theme.spacing(2, 4, 2),
  },
  btnPop: {
    marginTop: 20,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
