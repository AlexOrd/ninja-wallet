import { Container, withStyles } from '@material-ui/core';

export const StyledAppContainer = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    padding: '0',
  },
}))(Container);
