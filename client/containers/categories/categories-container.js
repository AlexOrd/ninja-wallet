import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchCategoriesFilteredByDate } from '../../actions/categoriesAction';
import { useStyles } from './categories-container.style';
import Charts from '../../components/categories/charts/charts-wrapper';
import CategoriesList from '../../components/categories/categories-list';

const CategoriesContainer = (props) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [allCategoriesSum, setAllCategoriesSum] = useState(null);

  useEffect(() => {
    categories.length > 0 &&
      setAllCategoriesSum(categories.reduce((sum, category) => sum + category.expensesSum, 0));
  }, [categories]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const getCategoriesFilteredByDate = () => {
    dispatch(
      fetchCategoriesFilteredByDate(
        selectedDate && selectedDate.length > 0 && (selectedDate[0] || null),
        selectedDate && selectedDate.length > 1 && (selectedDate[1] || null)
      )
    );
  };

  const classes = useStyles();

  return (
    <Grid className={classes.categoriesPageWrapper} container>
      {categories.length > 0 && allCategoriesSum > 0 && (
        <Grid className={classes.chartWrapper} container item direction="row" xs={12} md={12}>
          <Charts
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categoriesData={categories}
          />
        </Grid>
      )}
      <Grid className={classes.categoriesListContainer} item xs={12} md={12}>
        <CategoriesList
          filterByDate={getCategoriesFilteredByDate}
          allCategoriesSum={allCategoriesSum}
          classes={classes}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          activeCategory={activeCategory}
          categories={categories}
        />
      </Grid>
    </Grid>
  );
};

export default CategoriesContainer;
