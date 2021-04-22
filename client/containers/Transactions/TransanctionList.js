import React from 'react';
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
import EnhancedTableHead from './TableHead';
import EnhancedTableToolbar from './Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { useStyles } from './Transactions.style';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import LongMenu from './Options';
function createData(description, data, card, category, amount) {
  return { description, data, card, category, amount };
}

const rows = [
  createData('Buying at Silpo', '03-12-21', 5152877665544332, 'Products', 465),
  createData('Buying at apteka Zdorovie', '03-12-21', 5123437665544332, 'Health', 1495),
  createData('Sending money', '03-12-21', 514477665544332, 'Spend', 45),
  createData('Frozen yoghurt', '03-12-21', 5152877665544332, 'Products', 4.0),
  createData('Gingerbread', '03-12-21', 5152877665544332, 'Products', 3.9),
  createData('Honeycomb', '03-12-21', 51528776655443322, 'Spend', 6.5),
  createData('Ice cream sandwich', '03-12-21', 514477665544332, 'Spend', 4.3),
  createData('Jelly Bean', '03-12-21', 5152877665544332, 'Health', 0.0),
  createData('KitKat', '03-12-21', 51528776655443320, 'Health', 7.0),
  createData('Lollipop', '03-12-21', 514477665544332, 'Health', 0.0),
  createData('Marshmallow', '03-12-21', 514477665544332, 'Spend', 2.0),
  createData('Nougat', '03-12-21', 514477665544332, 'Spend', 37.0),
  createData('Oreo', '03-12-21', 514477665544332, 'Spend', 4.0),
];

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

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar />
        <TableContainer>
          <StyledTable
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
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
                        {row.description}
                      </TableCell>
                      <TableCell align="right">{row.data}</TableCell>
                      <TableCell align="right">{row.card}</TableCell>
                      <TableCell align="right">{row.category}</TableCell>
                      <TableCell align="right">{row.amount}</TableCell>

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
          </StyledTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
