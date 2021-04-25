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
  },
  manageCategoryWrapper: {
    padding: theme.spacing(1),
  },
}));
