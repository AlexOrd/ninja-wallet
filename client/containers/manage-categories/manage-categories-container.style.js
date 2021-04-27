import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  addCategoryIcon: {
    fontSize: '3em',
  },
  categoryColorInput: {
    width: '1.5em',
    height: '1.5em !important',
    border: 'unset',
  },
  categoryColorPreview: {
    width: '1.5em',
    height: '1.5em',
    borderRadius: '50%',
    boxShadow: '0 0 5px rgba(0, 0, 3px, 0.2)',
  },
  manageCategoryWrapper: {
    padding: theme.spacing(1),
  },
  viewAnalyticsLinkWrapper: {
    padding: theme.spacing(1),
  },
}));
