import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getAuthorizationStatus } from '../selectors/auth';

import { isAuthenticated } from '../utils/jwtUtil';

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const isAuthorized = useSelector(getAuthorizationStatus);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
