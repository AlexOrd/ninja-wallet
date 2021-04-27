import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth/for_tokens';

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  console.log('isAuthenticated', isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
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
