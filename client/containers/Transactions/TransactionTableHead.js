import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import FilterByCard from './FilterByCard';
import FilterByCategory from './FilterByCategory';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { axiosInstance } from '../../config/axios';

function TransactionTableHead(props) {
  const { classes, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const [categories, setCategories] = useState();
  const [cards, setCards] = useState();
  const [category, setCategory] = useState();
  const [card, setCard] = useState();

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.info.light,
      fontSize: 16,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const headCells = [
    {
      id: 'transactionType',
      numeric: false,
      disablePadding: true,
      label: 'Description',
    },
    { id: 'createdAt', numeric: false, disablePadding: false, label: 'Date' },
    { id: 'cardId', numeric: true, disablePadding: false, label: 'Card' },
    {
      id: 'transactionCategory',
      numeric: false,
      disablePadding: false,
      label: 'Category',
    },
    { id: 'sum', numeric: true, disablePadding: false, label: 'Amount' },
  ];

  useEffect(() => {
    axiosInstance.get('/api/card').then((res) => {
      const allCards = res.data.cards;
      setCards(allCards);
    });
    axiosInstance.get('/api/categories').then((res) => {
      const allCategories = res.data.data.categories;
      setCategories(allCategories);
    });
  }, []);

  useEffect(() => {
    props.setFilterByCategory(category);
  }, [category]);

  useEffect(() => {
    props.setFilterByCard(card);
  }, [card]);

  return (
    <TableHead>
      <StyledTableRow>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.label === 'Description' ? 'left' : 'right'}
            padding="2"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label === 'Card' ? (
              <FilterByCard
                cards={cards}
                id={headCell.id}
                label={headCell.label}
                type={headCell.label}
                card={card}
                setCard={setCard}
              />
            ) : headCell.label === 'Category' ? (
              <FilterByCategory
                categories={categories}
                id={headCell.id}
                label={headCell.label}
                type={headCell.label}
                category={category}
                setCategory={setCategory}
              />
            ) : (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            )}
          </StyledTableCell>
        ))}
        <StyledTableCell></StyledTableCell>
      </StyledTableRow>
    </TableHead>
  );
}
TransactionTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
export default TransactionTableHead;
