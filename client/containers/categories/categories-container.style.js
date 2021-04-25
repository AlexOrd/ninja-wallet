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
}));
