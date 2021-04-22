import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Filter from './Filter';
import { withStyles, makeStyles } from '@material-ui/core/styles';

function EnhancedTableHead(props) {
  const { classes, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.dark,
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
      id: 'description',
      numeric: false,
      disablePadding: true,
      label: 'Description',
    },
    { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
    { id: 'card', numeric: true, disablePadding: false, label: 'Card' },
    {
      id: 'category',
      numeric: false,
      disablePadding: false,
      label: 'Category',
    },
    { id: 'amount', numeric: true, disablePadding: false, label: 'Amount' },
  ];

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
            {headCell.label === 'Card' || headCell.label === 'Category' ? (
              <Filter id={headCell.id} label={headCell.label} />
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

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
export default EnhancedTableHead;