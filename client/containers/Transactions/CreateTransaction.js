import React from 'react';
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
// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),

//     minWidth: 120,
//     width: '100%',

//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "100%",

//     },
//   },
//   title: {
//     margin: 30,
//     display: 'flex',
//     justifyContent: 'center',
//     color: theme.palette.primary.dark
//   },
//   container: {
//     padding:30,

//   }

// }));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
      <Typography className={classes.title} variant="h4">
        Creating Transaction
      </Typography>
      <FormControl className={classes.selectControl}>
        <InputLabel id="card">Card</InputLabel>
        <Select
          labelId="card"
          id="11"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.selectControl}>
        <InputLabel id="category">Category</InputLabel>
        <Select
          labelId="category"
          id="1"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Description" />
        <TextField label="Sum" type="number" />
      </form>
    </Container>
  );
}
