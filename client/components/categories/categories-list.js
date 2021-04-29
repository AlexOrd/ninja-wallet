import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Button,
  Grid,
  Link,
  ListItemIcon,
  ListItemSecondaryAction,
  Typography,
} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import Select from '@material-ui/core/Select';

const sortByDateOptions = [
  {
    id: 'today',
    label: 'today',
    from: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
    to: new Date().getTime(),
  },
  {
    id: 'last7days',
    label: 'last 7 days',
    from: new Date().getTime() - 24 * 60 * 60 * 1000 * 7, // -7 days
    to: new Date().getTime(),
  },
  {
    id: 'last30days',
    label: 'last 30 days',
    from: new Date().getTime() - 24 * 60 * 60 * 1000 * 30,
    to: new Date().getTime(),
  },
  {
    id: 'allTime',
    label: 'All time',
  },
  {
    id: 'custom',
    label: 'custom',
  },
];

const CategoriesList = ({
  classes,
  allCategoriesSum,
  categories,
  activeCategory,
  filterByDate,
}) => {
  const [selectedCustomDate, setSelectedCustomDate] = useState([new Date(), new Date()]);
  const [sortByDateType, setSortByDateType] = useState('allTime');

  const calcPersentage = (categorySum) => {
    const persentage = (categorySum / allCategoriesSum) * 100;
    if (persentage) {
      return persentage < 1 ? '<1%' : persentage.toFixed(0) + '%';
    } else {
      return '0%';
    }
  };

  const handleApplyFilterByDate = () => {
    const selectedOption = sortByDateOptions.find((option) => option.id === sortByDateType);
    const datesForSort =
      sortByDateType === 'allTime'
        ? { from: null, to: null }
        : sortByDateType === 'custom'
        ? {
            from: selectedCustomDate.length > 0 ? selectedCustomDate[0].getTime() : null,
            to: selectedCustomDate.length > 1 ? selectedCustomDate[1].getTime() : null,
          }
        : { from: selectedOption.from, to: selectedOption.to };

    filterByDate(datesForSort.from, datesForSort.to);
  };

  return categories.length > 0 ? (
    <>
      <Grid
        className={classes.filtersWrapper}
        direction="row"
        container
        justify="space-between"
        alignItems="center"
        alignContent="center"
      >
        <Grid xs={true} justify="flex-end" spacing={2} container direction="row" item>
          <Grid
            item
            alignItems="flex-end"
            justify="center"
            spacing={2}
            direction="column"
            container
            xs={true}
          >
            <Grid item xs={12}>
              <Select
                native
                value={sortByDateType}
                onChange={(e) => setSortByDateType(e.target.value)}
                inputProps={{
                  name: 'age',
                  id: 'age-native-simple',
                }}
              >
                {sortByDateOptions.map((option) => (
                  <option ket={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Grid>

            {sortByDateType === 'custom' && (
              <Grid item xs={12}>
                <DateRangePicker onChange={setSelectedCustomDate} value={selectedCustomDate} />
              </Grid>
            )}
          </Grid>
          <Grid item xs="auto">
            <Grid container justify="flex-end" aligncontent="center">
              <Button color="primary" onClick={handleApplyFilterByDate} variant="contained">
                apply
              </Button>
            </Grid>
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
                  className={classes.categoryItem}
                  secondary={category.description || null}
                  primary={category.name}
                />
                <ListItemSecondaryAction>
                  <Typography variant="h6">
                    {category.expensesSum}$ ({calcPersentage(category.expensesSum)})
                  </Typography>
                </ListItemSecondaryAction>
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
