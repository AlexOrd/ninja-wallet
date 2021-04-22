import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStyles } from './Transactions.style';

const valueArr = [2345567875558888, 3344555577778888, 1111222233338888];
export default function Filter(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id={props.label}>{props.label}</InputLabel>
        <Select
          label={props.label}
          id={props.id}
          // value={props.label}
          onChange={handleChange}
        >
          {valueArr.map((el) => {
            return <MenuItem value={el}>{el}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
