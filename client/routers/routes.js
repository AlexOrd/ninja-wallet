import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Import custom components
import PrivateRoute from './PrivateRoute';
import RestrictRoute from './RestrictRoute';
import MainLayout from '../components/common/layout/MainLayout';
import NotFound from '../components/error/NotFound';
import { ROUTES } from '../shared/routes-list';
import ManageCategories from '../containers/manage-categories/manage-categories-container';
import CategoriesContainer from '../containers/categories/categories-container';

const AsyncLoginForm = loadable(() => import('../containers/auth/LoginContainer'));
const AsyncSignUpForm = loadable(() => import('../containers/auth/SignUpContainer'));
const AsyncDashboard = loadable(() => import('../containers/dashboard/DashboardContainer'));

const Router = () => (
  <>
    <Switch>
      <RestrictRoute exact path="/" component={AsyncLoginForm} />
      <RestrictRoute exact path="/signup" component={AsyncSignUpForm} />

      <Route exact path={ROUTES.categories} component={ManageCategories} />
      <Route exact path={ROUTES.categoriesStats} component={CategoriesContainer} />

      <PrivateRoute exact path="/dashboard" layout={MainLayout} component={AsyncDashboard} />

      <Route component={NotFound} />
    </Switch>
  </>
);

export default Router;
