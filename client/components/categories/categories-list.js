import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button, Grid, Link, ListItemIcon, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

const CategoriesList = ({
  classes,
  allCategoriesSum,
  categories,
  activeCategory,
  setSelectedDate,
  selectedDate,
  filterByDate,
}) => {
  const calcPersentage = (categorySum) => {
    const persentage = (categorySum / allCategoriesSum) * 100;
    if (persentage) {
      return persentage < 1 ? '<1 %' : persentage.toFixed(0) + '%';
    } else {
      return '0%';
    }
  };

  return categories.length > 0 ? (
    <>
      <Grid
        className={classes.filtersWrapper}
        direction="row"
        container
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs="auto">
          <Typography variant="body1">Filter by date:</Typography>
        </Grid>
        <Grid xs={true} justify="flex-end" spacing={2} container direction="row" item>
          <Grid item justify="flex-end" container xs={true}>
            <DateRangePicker onChange={setSelectedDate} value={selectedDate} />
          </Grid>
          <Grid item xs="auto">
            <Button onClick={filterByDate} variant="outlined">
              apply
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <List style={{ padding: '0' }} aria-label="secondary mailbox folders">
            {categories.map((category, index) => (
              <ListItem
                key={category._id}
                button
                autoFocus={activeCategory?._id === category._id}
                selected={activeCategory?._id === category._id}
              >
                <ListItemIcon>
                  <FiberManualRecordIcon style={{ color: category.color }} />
                </ListItemIcon>
                <ListItemText
                  secondary={`${category.expensesSum}$ (${calcPersentage(category.expensesSum)})`}
                  primary={category.name}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  ) : (
    <>
      <Typography align="center" variant="h6">
        You don't have any categories
      </Typography>
      <Typography align="center" variant="h6">
        Click <Link>here</Link> and create them
      </Typography>
    </>
  );
};

export default CategoriesList;
