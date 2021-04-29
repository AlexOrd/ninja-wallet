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
const AsyncAuthPage = loadable(() => import('../containers/authorization/AuthPage')); //import('../containers/authorization/AuthPage'));
const AsyncSettingsPage = loadable(() => import('../containers/settings/Settings'));

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
        <PrivateRoute exact path="/card" layout={MainLayout} component={CardComponent} />

        <Route exact path="/transactions" component={TransactionList} />
        <Route exact path="/transactions/view/:id" component={View} />
        <Route path="/transactions/:type/:id?" component={CreateOrUpdateTransaction} />

        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Router;
