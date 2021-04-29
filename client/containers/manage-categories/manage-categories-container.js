import React, { useEffect, useState } from 'react';
import { Grid, List, Paper, LinkasMUILink, Typography, Button } from '@material-ui/core';
import axios from 'axios';
import { useStyles } from './manage-categories-container.style';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CustomListItem from '../../components/manage-categories/custom-list-item';
import StatsBlock from '../../components/manage-categories/stats-block';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  editCategoryThunk,
  fetchCategories,
  createCategoryThunk,
  handleNewCategoryChange,
  deleteCategoryThunk,
} from '../../actions/categoriesAction';
import SkeletonCategories from '../../components/categories/skeleton-categories';

const ManageCategories = (props) => {
  const categories = useSelector((state) => state.categories.categories);
  const isLoading = useSelector((state) => state.categories.isLoading);
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const editCategory = (categoryId, newCategoryData, success) => {
    dispatch(editCategoryThunk(categoryId, newCategoryData, success));
  };

  const deleteCategory = (categoryId, success) => {
    dispatch(deleteCategoryThunk(categoryId, success));
  };

  return (
    <Grid container className={classes.manageCategoryWrapper}>
      <Grid item xs={12} md={4}>
        <StatsBlock categories={categories} />
      </Grid>
      <Grid item xs={12} md={true}>
        <Paper>
          <Grid container justify="flex-end">
            <Grid item className={classes.viewAnalyticsLinkWrapper} xs="auto">
              <Button
                size="medium"
                variant="outlined"
                color="primary"
                component={Link}
                to="/categories-stats"
              >
                view categories analytics
              </Button>
            </Grid>
          </Grid>

          <CreateNewCategory classes={classes} />

          {isLoading ? (
            <SkeletonCategories />
          ) : (
            <List>
              {categories.map((category) => (
                <CustomListItem
                  key={category._id}
                  classes={classes}
                  editCategory={editCategory}
                  category={category}
                  deleteCategory={(success) => deleteCategory(category._id, success)}
                />
              ))}
            </List>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

const newCategoryInitialData = {
  name: '',
  color: '#5e72e4',
};

const CreateNewCategory = ({ classes }) => {
  const newCategoryData = useSelector((state) => state.categories.newCategoryData);

  const dispatch = useDispatch();

  const handleNewCategoryInputChange = (newCategoryData) => {
    dispatch(handleNewCategoryChange(newCategoryData));
  };

  const startCreatingNewCategory = () => {
    dispatch(handleNewCategoryChange(newCategoryInitialData));
  };

  const deleteNewCategory = () => {
    dispatch(handleNewCategoryChange(null));
  };

  const createCategory = (success) => {
    dispatch(createCategoryThunk(newCategoryData, success));
  };

  return (
    <>
      <Grid container justify="center" item>
        <AddCircleIcon
          className={classes.addCategoryIcon}
          color={newCategoryData ? 'disabled' : 'primary'}
          onClick={startCreatingNewCategory}
        />
      </Grid>
      {newCategoryData && (
        <CustomListItem
          type="create"
          handleNewCategoryChange={handleNewCategoryInputChange}
          createCategory={createCategory}
          classes={classes}
          category={newCategoryData}
          deleteNewCategory={deleteNewCategory}
        />
      )}
    </>
  );
};

export default ManageCategories;
