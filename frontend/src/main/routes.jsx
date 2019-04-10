import React from 'react';
import { Route, Switch } from "react-router-dom";
import AuthOrApp from './authOrApp';

import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';

export default props => (
    <main>
        <Switch>
            <Route exact path="/" component={AuthOrApp} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/billingCycle/' component={BillingCycle} />
        </Switch>
  </main>
);