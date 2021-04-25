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
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ButtonCreateOrUpdate from './ButtonCreateOrUpdate';

export default function CreateOrUpdateTransaction() {
  const { type, id } = useParams();
  const classes = useStyles();
  const isCreating = type === 'create';

  const [transaction, setTransaction] = useState();
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState();
  const [card, setCard] = useState();
  const [cards, setCards] = useState();
  const [sum, setSum] = useState();
  const [description, setDescription] = useState();
  const [merchant, setMerchant] = useState();

  const ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MDg1MTc1OTk3NmVhODgzOTQzNTNlNGUiLCJkZXZpY2VJRCI6IjYwODUxNzU5OTc2ZWE4ODM5NDM1M2U0ZiIsImlhdCI6MTYxOTMzNTAwMSwiZXhwIjoxNjE5NDIxNDAxfQ.iiUJP8GaYJVbg0ReDk1TDnvvsfVF-uZPlLDUZiuAyOg';
  const REFRESH_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25maXJtQ29kZSI6IjhjZmYyNWY3LTRiYmEtNDFlMC1iNmE5LWYxZjNiYzM1MjcyYyIsImRldmljZUlEIjoiNjA4NTE3NTk5NzZlYTg4Mzk0MzUzZTRmIiwiaWF0IjoxNjE5MzM1MDAxLCJleHAiOjE2MTkzMzg2MDF9.rc3SdPEpNqZCNYFNF1OMuBKpfopqx0cSfsSc0MfI0dA';

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
          setTransaction(transaction);
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

  const createTransaction = () => {
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
        console.log(res.data);
      });
  };

  const editTransaction = () => {
    const editedTransaction = {
      transactionType: description,
      transactionCategory: category,
      transactionCard: card,
      merchantName: merchant,
      sum: sum,
    };

    const apiUrlEdit = `http://localhost:3000/api/transactions/edit${id}`;
    axios
      .patch(apiUrlEdit, {
        headers: {
          authorization: ACCESS_TOKEN,
          'refresh-token': REFRESH_TOKEN,
        },
        body: {
          editedTransaction,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  const handleSubmitBtnClick = () => {
    if (isCreating) {
      createTransaction();
    } else {
      editTransaction();
    }
  };
  return (
    <Container className={classes.container} maxWidth="sm">
      <Typography className={classes.title} variant="h4">
        {isCreating ? 'Creating' : 'Editing'} Transaction
      </Typography>
      <FormControl className={classes.selectControl}>
        <InputLabel id="card">Card</InputLabel>
        <Select labelId="card" id="11" value={transaction?.cardId._id} onChange={handleChangeCard}>
          {cards?.map((card) => {
            return <MenuItem value={card._id}>{card.cardName}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <FormControl className={classes.selectControl}>
        <InputLabel id="category">Category</InputLabel>
        <Select labelId="category" id="1" value={category?._id} onChange={handleChangeCategory}>
          {categories?.map((category) => {
            console.log(categories);
            return <MenuItem value={category._id}>{category.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Description" onChange={handleChangeDescription} />
        <TextField label="Merchant" onChange={handleChangeMerchant} />
        <TextField label="Sum" type="number" onChange={handleChangeSum} />
      </form>
      <ButtonCreateOrUpdate isCreating={isCreating} onClick={handleSubmitBtnClick} />
    </Container>
  );
}
