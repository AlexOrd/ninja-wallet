import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  categoriesPageWrapper: {
    minHeight: 'calc(100vh - 4em)',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    '& .slick-dots': {
      backgroundColor: theme.palette.background.default,
      zIndex: 1,
    },
  },
  chartWrapper: {
    padding: theme.spacing(0, 1, 0),
  },
  categoryItem: {
    '& .MuiListItemText-primary': {
      fontSize: '1.4em',
    },
    '& .MuiListItemText-secondary': {
      fontSize: '1.1em',
    },
  },
  categoriesListContainer: {
    alignSelf: 'flex-end',
    minHeight: 'calc(100vh - 200px - 20px - 4em)',
    maxHeight: 'calc(90vh - 200px - 20px)', // 200 - slider height, 20 - chart sub text
    paddingTop: '25px',
    overflow: 'auto',
    height: '100%',
  },
  filtersWrapper: {
    padding: theme.spacing(0, 1),
  },
  categoryLinkWrapper: {
    '&:hover': {
      textDecoration: 'none !important',
    },
    color: 'black',
  },
}));
