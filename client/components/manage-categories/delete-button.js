import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import PopConfirm from '../common/popconfirm/popconfirm';

export const DeleteButton = ({ deleteCategory }) => {
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSubmit = () => {
    deleteCategory();
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <IconButton aria-describedby={id} edge="end" aria-label="delete">
      <DeleteIcon fontSize="large" onClick={handleClick} />
      <PopConfirm
        label="Do you want to delete this category with all transactions in the category?"
        id={id}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        onConfirm={() => deleteCategory()}
      />
    </IconButton>
  );
};
