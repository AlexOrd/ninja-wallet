import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Import custom components
import PrivateRoute from './PrivateRoute';
import MainLayout from '../components/common/layout/MainLayout';
import CardComponent from '../containers/card-container/CardComponent';

import TransactionList from '../containers/Transactions/TransanctionList';
import CreateOrUpdateTransaction from '../containers/Transactions/CreateOrUpdateTransaction';
import View from '../containers/Transactions/View';

import { NotFound } from '../components/error/not_found/NotFound';
import { ROUTES } from '../shared/routes-list';
import ManageCategories from '../containers/manage-categories/manage-categories-container';
import CategoriesContainer from '../containers/categories/categories-container';
import { AuthRoute } from './AuthRoute';
import { RootRoute } from './RootRoute';

const AsyncDashboard = loadable(() => import('../containers/dashboard/DashboardContainer'));
const AsyncProfile = loadable(() => import('../containers/profile/ProfileContainer'));
const AsyncAuthPage = loadable(() => import('../containers/Authorization/AuthPage'));
const AsyncSettingsPage = loadable(() => import('../containers/Settings/Settings'));

const Router = () => {
  return (
    <>
      <Switch>
        <RootRoute exact path={ROUTES.root} />
        <AuthRoute path={ROUTES.authorization} component={AsyncAuthPage} />

        <PrivateRoute
          exact
          path={ROUTES.categories}
          layout={MainLayout}
          component={ManageCategories}
        />
        <PrivateRoute
          exact
          path={ROUTES.categoriesStats}
          layout={MainLayout}
          component={CategoriesContainer}
        />
        <PrivateRoute exact path={ROUTES.profile} layout={MainLayout} component={AsyncProfile} />

        <PrivateRoute
          exact
          path={ROUTES.dashboard}
          layout={MainLayout}
          component={AsyncDashboard}
        />
        <PrivateRoute
          exact
          path={ROUTES.settings}
          layout={MainLayout}
          component={AsyncSettingsPage}
        />
        <PrivateRoute exact path="/card" component={CardComponent} />

        <PrivateRoute exact path="/transactions" component={TransactionList} />
        <PrivateRoute exact path="/transactions/view/:id" component={View} />
        <PrivateRoute path="/transactions/:type/:id?" component={CreateOrUpdateTransaction} />

        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Router;
