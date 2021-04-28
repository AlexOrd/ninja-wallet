import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Import custom components
import PrivateRoute from './PrivateRoute';
import MainLayout from '../components/common/layout/MainLayout';
import { NotFound } from '../components/error/not_found/NotFound';
import { ROUTES } from '../shared/routes-list';
import { AuthRoute } from './AuthRoute';

const AsyncDashboard = loadable(() => import('../containers/dashboard/DashboardContainer'));
const AsyncAuthPage = loadable(() => import('../containers/authorization/AuthPage'));
const AsyncSettingsPage = loadable(() => import('../containers/settings/Settings'));

const Router = () => {
  return (
    <>
      <Switch>
        <AuthRoute path="/auth" component={AsyncAuthPage} />
        <PrivateRoute
          exact
          path={ROUTES.categories}
          layout={MainLayout}
          component={() => 'categories'}
        />
        <PrivateRoute exact path="/dashboard" layout={MainLayout} component={AsyncDashboard} />
        <PrivateRoute
          exact
          path={ROUTES.settings}
          layout={MainLayout}
          component={AsyncSettingsPage}
        />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Router;
