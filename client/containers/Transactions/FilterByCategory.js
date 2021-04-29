import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStyles } from './Transactions.style';
import axios from 'axios';
import { axiosInstance } from '../../config/axios';

export default function FilterByCategory(props) {
  const classes = useStyles();

  const handleChangeCategory = (event) => {
    props.setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id={props.label}>{props.label}</InputLabel>
        <Select
          label={props.label}
          id={props.id}
          value={props.category || ''}
          onChange={handleChangeCategory}
        >
          <MenuItem value="">All</MenuItem>;
          {props.categories?.map((el) => {
            return (
              <MenuItem key={el._id} value={el._id}>
                {el.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
