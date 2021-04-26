import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import PopConfirm from '../common/popconfirm/popconfirm';
import EditIcon from '@material-ui/icons/Edit';

export const EditButton = ({ isEditMode, disableEditMode, handleClickOnEditIcon }) => {
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    if (isEditMode) {
      setAnchorEl(event.currentTarget);
    } else {
      handleClickOnEditIcon();
    }
  };

  const handleClose = () => {
    disableEditMode();
    setAnchorEl(null);
  };

  const onSubmit = () => {
    handleClickOnEditIcon();
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <IconButton aria-describedby={id} edge="end" aria-label="delete">
      <EditIcon onClick={handleClick} />
      <PopConfirm
        label="Do you want save your changes?"
        id={id}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        onConfirm={onSubmit}
      />
    </IconButton>
  );
};
