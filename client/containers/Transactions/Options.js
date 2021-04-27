import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useStyles } from './Transactions.style';

const StyledIconButton = withStyles((theme) => ({
  root: {
    '& .MuiIconButton-root': {
      padding: 0,
    },
  },
}))(IconButton);
// .MuiIconButton-root
const ITEM_HEIGHT = 48;
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MDg1MTc1OTk3NmVhODgzOTQzNTNlNGUiLCJkZXZpY2VJRCI6IjYwODgzMWViY2M5OTQ5NmZiYzYwNDEwMyIsImlhdCI6MTYxOTUzODQxMSwiZXhwIjoxNjE5NjI0ODExfQ.6qiTfxMu339Nqjc_hsWHgXhH3x1eWgg04gDCGLQg3o0';
const REFRESH_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25maXJtQ29kZSI6Ijc1MTgxOSIsImRldmljZUlEIjoiNjA4ODMxZWJjYzk5NDk2ZmJjNjA0MTAzIiwiaWF0IjoxNjE5NTM4NDExLCJleHAiOjE2MTk1NDIwMTF9.VaZK2-0HuKy_yzVYBlL-fV_1NUiSyuoodSM1j6daiM4';

export default function Options(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteTransaction = () => {
    const apiUrlDelete = `http://localhost:3000/api/transactions/${id}`;

    axios
      .delete(
        apiUrlDelete,

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

  return (
    <div>
      <StyledIconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </StyledIconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '15ch',
          },
        }}
      >
        <MenuItem selected={anchorEl} onClick={handleClose}>
          <Link className={classes.btnLinkOptions} to={`/transactions/view/${props.id}`}>
            View
          </Link>
        </MenuItem>
        <MenuItem selected={anchorEl} onClick={handleClose}>
          <Link className={classes.btnLinkOptions} to={`/transactions/edit/${props.id}`}>
            Edit
          </Link>
        </MenuItem>
        <MenuItem
          className={classes.btnLinkOptions}
          selected={anchorEl}
          onClick={() => {
            handleClose();
            deleteTransaction();
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
}
