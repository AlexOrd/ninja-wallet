import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AvatarEdit from 'react-avatar-edit';

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UserPhoto = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState({ preview: null });
  const styles = useStyles();

  const changeFileButtonHandle = () => {
    setOpen(true);
  };
  const updatePhotoHandler = () => {
    if (!props.profilePhoto) {
      dispatch(props.createPhoto(photo));
    } else {
      dispatch(props.updatePhoto(props.avatarId, photo));
    }
    setOpen(false);
  };
  const closeFileEditDialog = () => {
    setPhoto({ preview: null });
    setOpen(false);
  };
  const onCrop = (preview) => {
    setPhoto(preview);
  };
  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert('File is too big!');
      elem.target.value = '';
    }
  };
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box className={styles.boxAvatar}>
        <Avatar alt="Avatar" src={props.profilePhoto} className={styles.avatar} />
      </Box>
      <Box className={styles.fileInputBox}>
        <Button variant="contained" color="primary" onClick={changeFileButtonHandle}>
          Select Photo
        </Button>
      </Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeFileEditDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{'Please edit your photo'}</DialogTitle>
        <DialogContent>
          <AvatarEdit
            width={250}
            height={250}
            onCrop={onCrop}
            onClose={closeFileEditDialog}
            onBeforeFileLoad={onBeforeFileLoad}
            src={props.profilePhoto}
          />
          <img src={photo} alt="Preview" />
        </DialogContent>
        <DialogActions>
          <Button onClick={updatePhotoHandler} color="secondary">
            Update
          </Button>
          <Button onClick={closeFileEditDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserPhoto;
