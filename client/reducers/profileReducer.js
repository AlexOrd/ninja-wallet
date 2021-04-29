import {
  UPDATE_PROFILE_SUCCESS,
  FETCH_PROFILE_SUCCESS,
  UPDATE_PHOTO_SUCCESS,
  CREATE_PHOTO_SUCCESS,
} from '../constants/actionType';

const initialState = {
  firstName: null,
  lastName: null,
  email: null,
  avatarId: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_SUCCESS:
      return { ...state, ...action.profile };
    case UPDATE_PROFILE_SUCCESS:
      return { ...state, ...action.profile };
    case UPDATE_PHOTO_SUCCESS:
      console.log('UPDATE', action.avatarId);
      return { ...state, avatarId: action.avatarId };
    case CREATE_PHOTO_SUCCESS:
      return { ...state, avatarId: action.payload };
    default:
      return state;
  }
};

export default profileReducer;
