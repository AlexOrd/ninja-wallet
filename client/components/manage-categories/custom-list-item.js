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

  const submitCategoryEdit = () => {
    editCategory(category._id, {
      name: categoryName,
      color: color,
    });
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
    createCategory({ name: categoryName, color: color });
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
            category={category}
            deleteCategory={deleteCategory}
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
          <input
            className={classes.categoryColorInput}
            value={category.color}
            onChange={(e) => setColor(e.target.value)}
            type="color"
          />
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
            <input
              className={classes.categoryColorInput}
              value={category.color}
              onChange={(e) => setColor(e.target.value)}
              type="color"
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
