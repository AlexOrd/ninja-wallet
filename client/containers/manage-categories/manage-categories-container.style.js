import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  listItemWrapper: {
    '& input': {
      height: '1rem',
    },
  },
  categoryColorInput: {
    width: '1em !important',
    height: '1em !important',
    padding: '0 !important',
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
