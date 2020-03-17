import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Orders from '../pages/Orders';
import Deliveryman from '../pages/Deliveryman';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/orders" component={Orders} isPrivate />
      <Route path="/deliveryman" component={Deliveryman} isPrivate />
    </Switch>
  );
}
