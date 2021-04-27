import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { flexbox } from '@material-ui/system';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './Transactions.style';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
import ButtonCreateOrUpdate from './ButtonCreateOrUpdate';

import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';

export default function CreateOrUpdateTransaction() {
  const { type, id } = useParams();
  const classes = useStyles();
  const isCreating = type === 'create';
  const [isRedirected, setIsRedirected] = useState(false);
  const [transaction, setTransaction] = useState(null);
  const [categories, setCategories] = useState(null);
  const [category, setCategory] = useState(null);
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState(null);
  const [sum, setSum] = useState(null);
  const [description, setDescription] = useState(null);
  const [merchant, setMerchant] = useState(null);

  const ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MDg1MTc1OTk3NmVhODgzOTQzNTNlNGUiLCJkZXZpY2VJRCI6IjYwODgzMWViY2M5OTQ5NmZiYzYwNDEwMyIsImlhdCI6MTYxOTUzODQxMSwiZXhwIjoxNjE5NjI0ODExfQ.6qiTfxMu339Nqjc_hsWHgXhH3x1eWgg04gDCGLQg3o0';
  const REFRESH_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25maXJtQ29kZSI6Ijc1MTgxOSIsImRldmljZUlEIjoiNjA4ODMxZWJjYzk5NDk2ZmJjNjA0MTAzIiwiaWF0IjoxNjE5NTM4NDExLCJleHAiOjE2MTk1NDIwMTF9.VaZK2-0HuKy_yzVYBlL-fV_1NUiSyuoodSM1j6daiM4';

  useEffect(() => {
    if (!isCreating) {
      const apiUrlTransaction = `http://localhost:3000/api/transactions/${id}`;
      axios
        .get(apiUrlTransaction, {
          headers: {
            authorization: ACCESS_TOKEN,
            'refresh-token': REFRESH_TOKEN,
          },
        })
        .then((res) => {
          const transaction = res.data.transaction;
          console.log(transaction);
          setTransaction(transaction);
          setMerchant(transaction.merchantName);
          setDescription(transaction.transactionType);
          setSum(transaction.sum);
          setCard(transaction.cardId._id);
          setCategory(transaction.transactionCategory);
        });
    }

    const apiUrlCards = `http://localhost:3000/api/card`;
    axios
      .get(apiUrlCards, {
        headers: {
          authorization: ACCESS_TOKEN,
          'refresh-token': REFRESH_TOKEN,
        },
      })
      .then((res) => {
        const cards = res.data.cards;
        setCards(cards);
      });
    const apiUrlCategories = `http://localhost:3000/api/categories`;
    axios
      .get(apiUrlCategories, {
        headers: {
          authorization: ACCESS_TOKEN,
          'refresh-token': REFRESH_TOKEN,
        },
      })
      .then((res) => {
        const categories = res.data.data.categories;
        console.log(res.data.data.categories);
        setCategories(categories);
      });
  }, []);

  const handleChangeCard = (event) => {
    setCard(event.target.value);
  };
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleChangeMerchant = (event) => {
    setMerchant(event.target.value);
  };
  const handleChangeSum = (event) => {
    setSum(event.target.value);
  };

  const validateField = (field) => field !== '' && field !== null;

  const createTransaction = (success) => {
    console.log(validateField(sum), sum);
    if (
      validateField(description) &&
      validateField(category) &&
      validateField(card) &&
      validateField(merchant) &&
      validateField(sum)
    ) {
      const newTransaction = {
        transactionType: description,
        transactionCategory: category,
        cardId: card,
        merchantName: merchant,
        sum: sum,
      };

      const apiUrlCreate = `http://localhost:3000/api/transactions`;

      axios
        .post(
          apiUrlCreate,
          newTransaction,

          {
            headers: {
              authorization: ACCESS_TOKEN,
              'refresh-token': REFRESH_TOKEN,
            },
          }
        )
        .then((res) => {
          setIsRedirected(true);
          console.log(res.data);
        })
        .finally(() => {
          success();
        });
    } else {
      alert('You did not fill all fields!');
    }
  };

  const editTransaction = (success) => {
    console.log(validateField(sum), sum);
    if (
      validateField(description) &&
      validateField(category) &&
      validateField(card) &&
      validateField(merchant) &&
      validateField(sum)
    ) {
      const editedTransaction = {
        transactionType: description,
        transactionCategory: category,
        transactionCard: card,
        merchantName: merchant,
        sum: sum,
      };

      const apiUrlEdit = `http://localhost:3000/api/transactions/${id}`;
      console.log(id);
      axios
        .patch(apiUrlEdit, editedTransaction, {
          headers: {
            authorization: ACCESS_TOKEN,
            'refresh-token': REFRESH_TOKEN,
          },
        })
        .then((res) => {
          console.log(res.data);
          setIsRedirected(true);
        })
        .finally(() => {
          success();
        });
    } else {
      alert('You did not fill all fields!');
    }
  };

  const handleSubmitBtnClick = (success) => {
    console.log(isCreating);
    if (isCreating) {
      createTransaction(success);
    } else {
      editTransaction(success);
    }
  };
  if (isRedirected) {
    return <Redirect to="/transactions" />;
  }
  return (
    <Container className={classes.container} maxWidth="sm">
      <Typography className={classes.title} variant="h4">
        {isCreating ? 'Creating' : 'Editing'} Transaction
      </Typography>
      <FormControl required className={classes.selectControl}>
        <InputLabel id="card">Card</InputLabel>
        <Select
          // defaultValue={transaction?.cardId._id}
          labelId="card"
          id="11"
          onChange={handleChangeCard}
          value={card}
        >
          {cards?.map((card) => {
            return <MenuItem value={card._id}>{card.cardName}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <FormControl required className={classes.selectControl}>
        <InputLabel id="category">Category</InputLabel>
        <Select labelId="category" id="1" value={category} onChange={handleChangeCategory}>
          {categories?.map((category) => {
            return <MenuItem value={category._id}>{category.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
      {/* <FormControl className={classes.root}>
        <InputLabel htmlFor="component-simple">Description</InputLabel>
        <Input id="component-simple" value={description} onChange={handleChangeDescription} />
      </FormControl>
      <FormControl className={classes.root}>
        <InputLabel htmlFor="component-simple2">Merchant</InputLabel>
        <Input id="component-simple2" defaultValue="" value={merchant} onChange={handleChangeMerchant} />
      </FormControl >
      <FormControl className={classes.root}>
        <InputLabel htmlFor="component-simple3">Sum</InputLabel>
        <Input id="component-simple3" value={sum} onChange={handleChangeSum} />
      </FormControl> */}

      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-helperText"
          value={description || ''}
          label="Description"
          onChange={handleChangeDescription}
        />
        <TextField
          required
          value={merchant || ''}
          label="Merchant"
          onChange={handleChangeMerchant}
        />
        <TextField required value={sum || ''} label="Sum" onChange={handleChangeSum} />
      </form>
      <ButtonCreateOrUpdate
        isCreating={isCreating}
        onClick={(success) => handleSubmitBtnClick(success)}
      />
    </Container>
  );
}
