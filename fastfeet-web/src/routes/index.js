import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Orders from '../pages/Orders';
import Deliveryman from '../pages/Deliveryman';
import Recipients from '../pages/Recipients';
import Problems from '../pages/Problems';
import DeliverymanRegister from '../pages/Deliveryman/Register';
import RecipientsRegister from '../pages/RecipientsRegister';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/orders" component={Orders} isPrivate />
      <Route path="/delivery-problems" component={Problems} isPrivate />

      <Route
        path="/deliveryman/register/:id"
        component={DeliverymanRegister}
        isPrivate
      />
      <Route
        path="/deliveryman/register"
        component={DeliverymanRegister}
        isPrivate
      />
      <Route path="/deliveryman" component={Deliveryman} isPrivate />

      <Route
        path="/recipients-register"
        component={RecipientsRegister}
        isPrivate
      />
      <Route path="/recipients" component={Recipients} isPrivate />
    </Switch>
  );
}
