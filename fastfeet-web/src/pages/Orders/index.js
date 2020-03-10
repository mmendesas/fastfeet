import React from 'react';
import api from '../../services/api';

export default function Orders() {
  api.get('orders');

  return <h1>Orders</h1>;
}
