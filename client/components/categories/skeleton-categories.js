import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react';

const SkeletonCategories = (skeletonCount = 10) => {
  return (
    <Grid container alignContet="flex-start" alignItems="flex-start" item xs={12}>
      {[...new Array(10)].map((value, index) => (
        <Grid key={index} item xs={12}>
          <Skeleton height="70px" animation="wave" />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonCategories;
