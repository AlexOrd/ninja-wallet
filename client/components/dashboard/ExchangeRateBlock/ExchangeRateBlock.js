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

const ccyFlags = {
  USD: 'https://flagpedia.net/data/flags/w1600/us.png',
  EUR:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1024px-Flag_of_Europe.svg.png',
  RUR: 'https://flagpedia.net/data/flags/w1600/ru.png',
  BTC: 'https://images-na.ssl-images-amazon.com/images/I/41270A1ZbvL._AC_SL1280_.jpg',
};

const useStyles = makeStyles(() => ({
  wrapper: {
    marginLeft: 20,
  },
  title: {
    fontSize: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      fontSize: 32,
      marginRight: 10,
    },
  },
  cell: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      width: 28,
      height: 17,
      marginLeft: 10,
    },
  },
}));

const ExchangeRateBlock = React.memo(() => {
  const classes = useStyles();
  const [data, setData] = React.useState();

  React.useEffect(() => {
    axios
      .get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
      .then(({ data }) => setData(data))
      .catch(console.log);
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
                <TableCell classes={{ root: classes.cell }}>
                  {row.ccy}
                  <img src={ccyFlags[row.ccy]} alt="" />
                </TableCell>
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
