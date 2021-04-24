import React, { useEffect, useState } from 'react';
import { Grid, List, Paper } from '@material-ui/core';
import axios from 'axios';
import { useStyles } from './manage-categories-container.style';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CustomListItem from '../../components/manage-categories/custom-list-item';
import StatsBlock from '../../components/manage-categories/stats-block';
import { useSelector, useDispatch } from 'react-redux';
import {
  editCategoryThunk,
  fetchCategories,
  createCategoryThunk,
  handleNewCategoryChange,
  deleteCategoryThunk,
} from '../../actions/categoriesAction';

const ManageCategories = (props) => {
  const categories = useSelector((state) => state.categories.categories);
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const editCategory = (categoryId, newCategoryData) => {
    dispatch(editCategoryThunk(categoryId, newCategoryData));
  };

  const deleteCategory = (categoryId) => {
    dispatch(deleteCategoryThunk(categoryId));
  };

  return (
    <Grid container className={classes.manageCategoryWrapper}>
      <Grid item xs={6}>
        <StatsBlock categories={categories} />
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <List>
            <CreateNewCategory classes={classes} />
            {categories.map((category) => (
              <CustomListItem
                key={category._id}
                classes={classes}
                editCategory={editCategory}
                category={category}
                deleteCategory={() => deleteCategory(category._id)}
              />
            ))}
          </List>
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

  const createCategory = () => {
    dispatch(createCategoryThunk(newCategoryData));
  };

  return (
    <>
      <Grid container justify="center" item>
        <AddCircleIcon
          color={newCategoryData ? 'disabled' : 'primary'}
          onClick={startCreatingNewCategory}
          fontSize="large"
        />
      </Grid>
      {newCategoryData && (
        <CustomListItem
          type="create"
          handleNewCategoryChange={handleNewCategoryInputChange}
          createCategory={createCategory}
          classes={classes}
          category={newCategoryData}
        />
      )}
    </>
  );
};

export default ManageCategories;
