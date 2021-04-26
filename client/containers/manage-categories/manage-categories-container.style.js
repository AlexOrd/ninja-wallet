import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  listItemWrapper: {
    '& input': {
      height: '1rem',
    },
  },
  categoryColorInput: {
    width: '1.5em',
    height: '1.5em !important',
    border: 'unset',
  },
  categoryColorPreview: {
    width: '1em',
    height: '1em',
    borderRadius: '50%',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  },
  manageCategoryWrapper: {
    padding: theme.spacing(1),
  },
  viewAnalyticsLinkWrapper: {
    padding: theme.spacing(1),
  },
}));
