import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Form from '../../components/Form';
import Badge from '../../components/Badge';
import NameInitials from '../../components/NameInitials';
import Options from '../../components/Options';
import Column from '../../components/Column';
import Row from '../../components/Row';

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

      <ul>
        <Row header>
          {[
            'ID',
            'Destinatario',
            'Entregador',
            'Cidade',
            'Estado',
            'Status',
            'Açoes'
          ].map(item => (
            <Column key={item} header>
              {item}
            </Column>
          ))}
        </Row>
        {orders.map(item => (
          <Row key={item.id}>
            <Column>{`#${String(item.id).padStart(2, '0')}`}</Column>
            <Column>{item.recipient.name}</Column>
            <Column>
              <NameInitials name={item.deliveryman.name} />
            </Column>
            <Column>Rio do Sul</Column>
            <Column>Santa Catarina</Column>
            <Column>
              <Badge type="retirada">Cancelado</Badge>
            </Column>
            <Column>
              <Options
                show={['view', 'edit', 'delete']}
                optionsName={['Visualizar', 'Editar', 'Excluir']}
              />
            </Column>
          </Row>
        ))}
      </ul>
    </Container>
  );
}
