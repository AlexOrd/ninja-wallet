import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getAuthorizationStatus } from '../selectors/auth';
import { ROUTES } from '../shared/routes-list';

export const RootRoute = ({ component: Component, ...rest }) => {
  const isAuthorized = useSelector(getAuthorizationStatus);

  return (
    <Route
      {...rest}
      render={() =>
        isAuthorized ? <Redirect to={ROUTES.dashboard} /> : <Redirect to={ROUTES.authorization} />
      }
    />
  );
};
