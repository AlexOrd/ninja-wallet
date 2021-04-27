import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Import custom components
import PrivateRoute from './PrivateRoute';
import RestrictRoute from './RestrictRoute';
import MainLayout from '../components/common/layout/MainLayout';
import { NotFound } from '../components/error/not_found/NotFound';
import { ROUTES } from '../shared/routes-list';

// const AsyncLoginForm = loadable(() => import('../containers/auth/LoginContainer'));
// const AsyncSignUpForm = loadable(() => import('../containers/auth/SignUpContainer'));
const AsyncDashboard = loadable(() => import('../containers/dashboard/DashboardContainer'));
const AsyncAuthPage = loadable(() => import('../containers/Authorization/AuthPage'));
const AsyncSettingsPage = loadable(() => import('../containers/Settings/Settings'));

const Router = () => (
  <>
    <Switch>
      {/* <RestrictRoute exact path="/" component={AsyncLoginForm} /> */}
      {/* <RestrictRoute exact path="/signup" component={AsyncSignUpForm} /> */}
      <Route path={ROUTES.auth} component={AsyncAuthPage} />
      {/* <RestrictRoute path={ROUTES.auth} component={AsyncAuthPage} /> */}
      <RestrictRoute path={ROUTES.settings} component={AsyncSettingsPage} />
      <RestrictRoute exact path={ROUTES.categories} component={() => 'categories'} />

      <PrivateRoute exact path="/dashboard" layout={MainLayout} component={AsyncDashboard} />
      {/* <Redirect to='auth' /> */}
      <Route component={NotFound} />
    </Switch>
  </>
);

export default Router;
