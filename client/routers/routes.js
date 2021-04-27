import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Import custom components
import PrivateRoute from './PrivateRoute';
import RestrictRoute from './RestrictRoute';
import MainLayout from '../components/common/layout/MainLayout';
import TransactionList from '../containers/Transactions/TransanctionList';
import CreateOrUpdateTransaction from '../containers/Transactions/CreateOrUpdateTransaction';
import View from '../containers/Transactions/View';
import NotFound from '../components/error/NotFound';
import { ROUTES } from '../shared/routes-list';

const AsyncLoginForm = loadable(() => import('../containers/auth/LoginContainer'));
const AsyncSignUpForm = loadable(() => import('../containers/auth/SignUpContainer'));
const AsyncDashboard = loadable(() => import('../containers/dashboard/DashboardContainer'));

const Router = () => (
  <>
    <Switch>
      <RestrictRoute exact path="/" component={AsyncLoginForm} />
      <RestrictRoute exact path="/signup" component={AsyncSignUpForm} />

      <RestrictRoute exact path={ROUTES.categories} component={() => 'categories'} />

      <PrivateRoute exact path="/dashboard" layout={MainLayout} component={AsyncDashboard} />

      <Route exact path="/transactions" component={TransactionList} />
      <Route exact path="/transactions/view/:id" component={View} />
      <Route path="/transactions/:type/:id?" component={CreateOrUpdateTransaction} />
    </Switch>
  </>
);

export default Router;
