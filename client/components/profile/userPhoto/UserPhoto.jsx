import React from 'react';
import { Avatar, Box, Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  boxAvatar: {
    maxWidth: '120px',
    maxHeight: '120px',
    marginTop: '-50px',
  },
  avatar: {
    width: '100%',
    height: '100%',
    boxShadow:
      '0 16px 38px -12px rgb(0 0 0 / 56%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)',
    borderRadius: '50%',
  },
  fileInputBox: {
    marginTop: '40px',
  },
  buttonFile: {
    position: 'relative',
    overflow: 'hidden',
  },
  inputFile: {
    position: 'absolute',
    top: 0,
    right: 0,
    minWidth: '100%',
    minHeight: '100%',
    fontSize: '100px',
    textAlign: 'right',
    opacity: 0,
    outline: 'none',
    background: 'white',
    cursor: 'pointer',
    display: 'block',
  },
});

const UserPhoto = (props) => {
  const styles = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box className={styles.boxAvatar}>
        <Avatar alt="Avatar" className={styles.avatar} />
      </Box>
      <Box className={styles.fileInputBox}>
        <Button variant="contained" color="primary" className={styles.buttonFile}>
          Select Photo
          <Input type="file" className={styles.inputFile} />
        </Button>
      </Box>
    </Box>
  );
};

export default UserPhoto;
