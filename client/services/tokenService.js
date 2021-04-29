import { push } from 'connected-react-router';

import { isAuthenticated } from '../utils/auth/for_tokens';

export const verifyToken = () => {
  return (dispatch) => {
    if (isAuthenticated()) {
      dispatch(push('/dashboard'));
    }
  };
};
