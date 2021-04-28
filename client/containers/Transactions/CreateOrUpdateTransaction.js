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
import { axiosInstance } from '../../config/axios';

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

  useEffect(() => {
    if (!isCreating) {
      const apiUrlTransaction = `/api/transactions/${id}`;
      axiosInstance.get(apiUrlTransaction).then((res) => {
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

    const apiUrlCards = `/api/card`;
    axiosInstance.get(apiUrlCards).then((res) => {
      const cards = res.data.cards;
      setCards(cards);
    });
    const apiUrlCategories = `/api/categories`;
    axiosInstance.get(apiUrlCategories).then((res) => {
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

      const apiUrlCreate = `/api/transactions`;

      axiosInstance
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

      const apiUrlEdit = `/api/transactions/${id}`;
      console.log(id);
      axiosInstance
        .patch(apiUrlEdit, editedTransaction)
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
      <FormControl required={isCreating} className={classes.selectControl}>
        <InputLabel id="card">{isCreating ? 'Card' : ''}</InputLabel>
        <Select labelId="card" id="11" onChange={handleChangeCard} value={card}>
          {cards?.map((card) => {
            return <MenuItem value={card._id || ''}>{card.cardName}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <FormControl required={isCreating} className={classes.selectControl}>
        <InputLabel id="category">{isCreating ? 'Category' : ''}</InputLabel>
        <Select labelId="category" id="1" value={category} onChange={handleChangeCategory}>
          {categories?.map((category) => {
            return <MenuItem value={category._id || ''}>{category.name}</MenuItem>;
          })}
        </Select>
      </FormControl>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-helperText"
          value={description || ''}
          label="Description"
          onChange={handleChangeDescription}
        />
        <TextField
          required={isCreating}
          value={merchant || ''}
          label="Merchant"
          onChange={handleChangeMerchant}
        />
        <TextField required={isCreating} value={sum || ''} label="Sum" onChange={handleChangeSum} />
      </form>
      <ButtonCreateOrUpdate
        isCreating={isCreating}
        onClick={(success) => handleSubmitBtnClick(success)}
        className={classes.btnCreate}
      />
    </Container>
  );
}
