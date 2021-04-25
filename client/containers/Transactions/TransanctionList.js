import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TransactionTableHead from './TransactionTableHead';
import TransactionsToolbar from './TransactionsToolbar';
import { withStyles } from '@material-ui/core/styles';
import { useStyles } from './Transactions.style';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import LongMenu from './Options';
import moment from 'moment';
import axios from 'axios';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const StyledTable = withStyles((theme) => ({
  root: {
    '& .Mui-selected': {
      backgroundColor: theme.palette.primary.light,
    },
    '& .Mui-selected:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}))(Table);

export default function TransactionsList() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('date');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [transactions, setTransactions] = React.useState();
  const ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MDg1MTc1OTk3NmVhODgzOTQzNTNlNGUiLCJkZXZpY2VJRCI6IjYwODUxNzU5OTc2ZWE4ODM5NDM1M2U0ZiIsImlhdCI6MTYxOTMzNTAwMSwiZXhwIjoxNjE5NDIxNDAxfQ.iiUJP8GaYJVbg0ReDk1TDnvvsfVF-uZPlLDUZiuAyOg';
  const REFRESH_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25maXJtQ29kZSI6IjhjZmYyNWY3LTRiYmEtNDFlMC1iNmE5LWYxZjNiYzM1MjcyYyIsImRldmljZUlEIjoiNjA4NTE3NTk5NzZlYTg4Mzk0MzUzZTRmIiwiaWF0IjoxNjE5MzM1MDAxLCJleHAiOjE2MTkzMzg2MDF9.rc3SdPEpNqZCNYFNF1OMuBKpfopqx0cSfsSc0MfI0dA';
  useEffect(() => {
    const apiUrl = 'http://localhost:3000/api/transactions';
    axios
      .get(apiUrl, {
        headers: {
          authorization: ACCESS_TOKEN,
          'refresh-token': REFRESH_TOKEN,
        },
      })
      .then((res) => {
        const allTransactions = res.data.transactions;
        setTransactions(allTransactions);
      });
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (description) => selected.indexOf(description) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, transactions?.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TransactionsToolbar />
        <TableContainer>
          <StyledTable
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <TransactionTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={transactions?.length}
            />
            {transactions && (
              <TableBody>
                {stableSort(transactions, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.description);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        tabIndex={-1}
                        key={row.description}
                        selected={isItemSelected}
                        padding="2"
                        className={classes.row}
                      >
                        <TableCell component="th" id={labelId} scope="row" padding="2">
                          {row.transactionType}
                        </TableCell>
                        <TableCell align="right">{moment(row.createdAt).format('L')}</TableCell>
                        <TableCell align="right">{row.cardId.cardName}</TableCell>
                        <TableCell align="right">{row.transactionCategory?.name}</TableCell>
                        <TableCell align="right">{row.sum}</TableCell>

                        <TableCell align="right">
                          {' '}
                          <LongMenu />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            )}
          </StyledTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={transactions?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
