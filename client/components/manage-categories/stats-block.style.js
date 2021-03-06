import { makeStyles } from '@material-ui/core';
import { grayColor } from '../../shared/custom-material-theme/jss/material-dashboard-react';

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    color: grayColor[2],
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontSize: '1.4em',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: grayColor[1],
      fontWeight: '400',
      lineHeight: '1',
    },
  },
  cardCategory: {
    color: grayColor[0],
    margin: '0',
    marginTop: '0',
    paddingTop: '10px',
    marginBottom: '0',
  },
  stats: {
    color: grayColor[0],
    display: 'inline-flex',
    fontSize: '12px',
    lineHeight: '22px',
    '& svg': {
      top: '4px',
      width: '16px',
      height: '16px',
      position: 'relative',
      marginRight: '3px',
      marginLeft: '3px',
    },
    '& .fab,& .fas,& .far,& .fal,& .material-icons': {
      top: '4px',
      fontSize: '16px',
      position: 'relative',
      marginRight: '3px',
      marginLeft: '3px',
    },
  },
}));

export default useStyles;
