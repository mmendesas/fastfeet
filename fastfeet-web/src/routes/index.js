import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Orders from '../pages/Orders';
import OrdersRegister from '../pages/Orders/Register';
import Deliveryman from '../pages/Deliveryman';
import DeliverymanRegister from '../pages/Deliveryman/Register';
import Recipients from '../pages/Recipients';
import RecipientsRegister from '../pages/Recipients/Register';
import Problems from '../pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/delivery-problems" component={Problems} isPrivate />

      <Route path="/orders/register/:id" component={OrdersRegister} isPrivate />
      <Route path="/orders/register" component={OrdersRegister} isPrivate />
      <Route path="/orders" component={Orders} isPrivate />

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
        path="/recipients/register/:id"
        component={RecipientsRegister}
        isPrivate
      />
      <Route
        path="/recipients/register"
        component={RecipientsRegister}
        isPrivate
      />
      <Route path="/recipients" component={Recipients} isPrivate />
    </Switch>
  );
}
