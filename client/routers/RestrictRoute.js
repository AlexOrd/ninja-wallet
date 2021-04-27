import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getAuthorizationStatus } from '../selectors/auth';

import { isAuthenticated } from '../utils/jwtUtil';

const RestrictRoute = ({ component: Component, ...rest }) => {
  const isAuthorized = useSelector(getAuthorizationStatus);

  console.log('isAuthorized', isAuthorized);
  return (
    <Route
      {...rest}
      render={(props) => (isAuthorized ? <Redirect to="/dashboard" /> : <Component {...props} />)}
    />
  );
};

export default RestrictRoute;
