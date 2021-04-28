import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getAuthorizationStatus } from '../selectors/auth';

const RestrictRoute = ({ component: Component, ...rest }) => {
  const isAuthorized = useSelector(getAuthorizationStatus);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized ? (
          <Redirect
            to={{
              pathname: '/dashboard',
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default RestrictRoute;
