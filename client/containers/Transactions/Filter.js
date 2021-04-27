import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStyles } from './Transactions.style';
import axios from 'axios';

export default function Filter(props) {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState();
  const [card, setCard] = useState();
  const [cards, setCards] = useState();

  const ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MDg1MTc1OTk3NmVhODgzOTQzNTNlNGUiLCJkZXZpY2VJRCI6IjYwODgzMWViY2M5OTQ5NmZiYzYwNDEwMyIsImlhdCI6MTYxOTUzODQxMSwiZXhwIjoxNjE5NjI0ODExfQ.6qiTfxMu339Nqjc_hsWHgXhH3x1eWgg04gDCGLQg3o0';
  const REFRESH_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25maXJtQ29kZSI6Ijc1MTgxOSIsImRldmljZUlEIjoiNjA4ODMxZWJjYzk5NDk2ZmJjNjA0MTAzIiwiaWF0IjoxNjE5NTM4NDExLCJleHAiOjE2MTk1NDIwMTF9.VaZK2-0HuKy_yzVYBlL-fV_1NUiSyuoodSM1j6daiM4';
  useEffect(() => {
    const apiUrlCards = 'http://localhost:3000/api/card';
    axios
      .get(apiUrlCards, {
        headers: {
          authorization: ACCESS_TOKEN,
          'refresh-token': REFRESH_TOKEN,
        },
      })
      .then((res) => {
        const allCards = res.data.cards;
        setCards(allCards);
      });
    const apiUrlCategories = 'http://localhost:3000/api/categories';
    axios
      .get(apiUrlCategories, {
        headers: {
          authorization: ACCESS_TOKEN,
          'refresh-token': REFRESH_TOKEN,
        },
      })
      .then((res) => {
        const allCategories = res.data.categories;
        setCategories(allCategories);
      });
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id={props.label}>{props.label}</InputLabel>
        <Select
          label={props.label}
          id={props.id}
          // value={props.label}
          onChange={handleChange}
        >
          {props.type === 'Card'
            ? cards?.map((el) => {
                return <MenuItem value={el._id}>{el.cardName}</MenuItem>;
              })
            : categories?.map((el) => {
                return <MenuItem value={el._id}>{el.name}</MenuItem>;
              })}
        </Select>
      </FormControl>
    </div>
  );
}
