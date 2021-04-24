import React from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  arrowNext: {
    position: 'absolute',
    top: '50%',
    borderRadius: '50%',
    right: -45,
    minWidth: 40,
    height: 40,
  },
  arrowPrev: {
    position: 'absolute',
    top: '50%',
    borderRadius: '50%',
    left: -45,
    minWidth: 40,
    height: 40,
  },
}));

const SliderArrow = ({ onClick, next }) => {
  const classes = useStyles();

  return (
    <Button onClick={onClick} classes={{ root: classes[next ? 'arrowNext' : 'arrowPrev'] }}>
      {next ? <NavigateNextIcon /> : <NavigateBeforeIcon />}
    </Button>
  );
};

export default SliderArrow;
