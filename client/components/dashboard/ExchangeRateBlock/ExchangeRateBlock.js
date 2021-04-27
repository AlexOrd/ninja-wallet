import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const useStyles = makeStyles(() => ({
  wrapper: {
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      marginRight: 10,
    },
  },
}));

const ExchangeRateBlock = React.memo(() => {
  const classes = useStyles();
  const [data, setData] = React.useState();
  React.useEffect(() => {
    axios
      .get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
      .then(({ data }) => setData(data));
    return () => {};
  }, []);

  return (
    <div className={classes.wrapper}>
      <Typography classes={{ root: classes.title }}>
        <AccountBalanceIcon />
        Exchange rates
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell>Buy</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row) => (
              <TableRow key={row.ccy}>
                <TableCell>{row.ccy}</TableCell>
                <TableCell>{row.buy}</TableCell>
                <TableCell>{row.sale}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
});

export default ExchangeRateBlock;
