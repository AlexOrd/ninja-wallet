import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Import custom components
import PrivateRoute from './PrivateRoute';
import MainLayout from '../components/common/layout/MainLayout';
import { NotFound } from '../components/error/not_found/NotFound';
import { ROUTES } from '../shared/routes-list';
import { useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../selectors/auth';
import SettingsPage from '../containers/Settings/Settings';

const AsyncDashboard = loadable(() => import('../containers/dashboard/DashboardContainer'));
const AsyncAuthPage = loadable(() => import('../containers/Authorization/AuthPage'));
// const AsyncSettingsPage = loadable(() => import('../containers/Settings/Settings'));

const AuthRoute = ({ component: Component, ...rest }) => {
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

const Router = () => {
  return (
    <>
      <Switch>
        <AuthRoute path="/auth" component={AsyncAuthPage} />
        <PrivateRoute exact path={ROUTES.categories} component={SettingsPage} />
        <PrivateRoute exact path="/dashboard" layout={MainLayout} component={AsyncDashboard} />
        <Route component={SettingsPage} />
      </Switch>
    </>
  );
};

export default Router;
