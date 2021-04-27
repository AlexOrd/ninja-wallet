import {
  Grid,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  Popover,
  TextField,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { DeleteButton } from './delete-button';
import { EditButton } from './edit-button';
import InputColor from 'react-input-color';
import Skeleton from '@material-ui/lab/Skeleton';

const CustomListItem = ({
  category,
  classes,
  handleNewCategoryChange,
  editCategory,
  createCategory,
  type,
  deleteCategory,
  deleteNewCategory,
}) => {
  const [color, setColor] = useState(category.color || '#5e72e4');
  const [isEditMode, setEditMode] = useState(type === 'create' ? true : false);
  const [categoryName, setCategoryName] = useState(category.name);
  const [isLoading, setLoading] = useState(false);

  const handleCategoryDelete = () => {
    setLoading(true);
    deleteCategory(() => setLoading(false));
  };

  const submitCategoryEdit = () => {
    setLoading(true);
    editCategory(
      category._id,
      {
        name: categoryName,
        color: color,
      },
      () => setLoading(false)
    );
  };

  const disableEditChanges = () => {
    setCategoryName(category.name);
    setEditMode(false);
  };

  const handleClickOnEditIcon = () => {
    if (isEditMode) {
      submitCategoryEdit();
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  const handleSave = () => {
    setLoading(true);
    createCategory({ name: categoryName, color: color }, () => setLoading(false));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (type === 'create') {
      handleSave();
    }
  };

  useEffect(() => {
    if (type === 'create') {
      handleNewCategoryChange({ name: categoryName, color: color?.hex ? color.hex : color });
    }
  }, [categoryName, color]);

  if (isLoading) {
    return <Skeleton height="48px" animation="wave" />;
  }

  return (
    <ListItem selected={isEditMode} className={classes.listItemWrapper}>
      <form onSubmit={handleFormSubmit}>
        <ListItemText>
          {isEditMode ? (
            <TextField
              required
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          ) : (
            <span>{category.name}</span>
          )}
        </ListItemText>
        {type === 'create' ? (
          <ListItemActionsNewCategory
            classes={classes}
            handleSave={handleSave}
            setColor={setColor}
            category={category}
            deleteNewCategory={deleteNewCategory}
          />
        ) : (
          <ListItemActionsExistedCategory
            handleClickOnEditIcon={handleClickOnEditIcon}
            isEditMode={isEditMode}
            classes={classes}
            setColor={setColor}
            color={color}
            category={category}
            deleteCategory={handleCategoryDelete}
            disableEditMode={disableEditChanges}
          />
        )}
      </form>
    </ListItem>
  );
};

const ListItemActionsNewCategory = ({ classes, setColor, category, deleteNewCategory }) => {
  return (
    <ListItemSecondaryAction>
      <Grid container alignItems="center">
        <Grid item>
          <InputColor
            initialValue={category.color}
            color={category?.color?.hex}
            placement="left"
            onChange={(color) => {
              setColor(color);
            }}
          />
          {/* <input
            className={classes.categoryColorInput}
            value={category.color}
            onChange={(e) => setColor(e.target.value)}
            type="color"
          /> */}
        </Grid>
        <Grid item>
          <IconButton type="submit" edge="end" aria-label="edit">
            <SaveIcon style={{ color: green[500] }} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={deleteNewCategory} edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </ListItemSecondaryAction>
  );
};

const ListItemActionsExistedCategory = ({
  isEditMode,
  classes,
  color,
  setColor,
  category,
  deleteCategory,
  handleClickOnEditIcon,
  disableEditMode,
}) => {
  return (
    <ListItemSecondaryAction>
      <Grid container alignItems="center">
        <Grid container alignItems="center" item xs={true}>
          {isEditMode ? (
            <InputColor
              initialValue={category.color}
              color={category?.color?.hex}
              placement="left"
              onChange={(color) => setColor(color.hex)}
            />
          ) : (
            <div
              style={{ backgroundColor: category.color }}
              className={classes.categoryColorPreview}
            ></div>
          )}
        </Grid>
        <Grid item>
          <EditButton
            disableEditMode={disableEditMode}
            handleClickOnEditIcon={handleClickOnEditIcon}
            isEditMode={isEditMode}
          />
        </Grid>
        <Grid item>
          <DeleteButton deleteCategory={deleteCategory} />
        </Grid>
      </Grid>
    </ListItemSecondaryAction>
  );
};

export default CustomListItem;
