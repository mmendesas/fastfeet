import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Form from '../../components/Form';
import { Container, Title } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('orders');
      setOrders(response.data);
    }

    loadOrders();
  }, []);

  return (
    <Container>
      <Title>Gerenciando Encomendas</Title>
      <Form placeholder="Buscar por encomendas" onClick={() => {}} />
    </Container>
  );
}
