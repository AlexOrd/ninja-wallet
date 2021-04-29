import {
  FETCH_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PHOTO_SUCCESS,
  CREATE_PHOTO_SUCCESS,
} from '../constants/actionType';
import { axiosInstance } from '../config/axios';
import FileSaver from 'file-saver';

export const fetchProfile = () => {
  return (dispatch) => {
    axiosInstance.get('/api/profile').then((profile) => dispatch(fetchProfileSuccess(profile)));
  };
};
export const updateProfile = (data) => {
  return (dispatch) => {
    axiosInstance
      .put('/api/profile', { ...data })
      .then((profile) => dispatch(updateProfileSuccess(profile)));
  };
};
export const exportCsv = () => {
  axiosInstance
    .get('/api/profile/export', { responseType: 'blob' })
    .then((response) => FileSaver.saveAs(response.data, 'out.csv'));
};

export const updatePhoto = (id, image) => {
  return (dispatch) => {
    axiosInstance
      .put(`/api/userphoto/${id}`, { fileString: image })
      .then((avatar) => dispatch(updatePhotoSuccess(avatar)));
  };
};
export const createPhoto = (photo) => {
  return (dispatch) => {
    axiosInstance
      .post('/api/userphoto', {
        fileString: photo,
      })
      .then((response) => dispatch(createPhotoSuccess(response)));
  };
};

export const updatePhotoSuccess = (payload) => {
  return {
    type: UPDATE_PHOTO_SUCCESS,
    avatarId: payload.data.data.updatedPhoto,
  };
};
export const createPhotoSuccess = (payload) => {
  console.log('CREATE', payload.data.data.updatedUser.avatarId);
  return {
    type: CREATE_PHOTO_SUCCESS,
    payload: payload.data.data.updatedUser.avatarId,
  };
};

export const updateProfileSuccess = (profile) => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    profile: profile.data.data.updated,
  };
};
export const fetchProfileSuccess = (profile) => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    profile: profile.data.data.profile,
  };
};
