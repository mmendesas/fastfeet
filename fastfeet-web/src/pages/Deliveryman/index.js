/* eslint-disable no-sparse-arrays */
import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Form from '../../components/Form';
import NameInitials from '../../components/NameInitials';
import Options from '../../components/Options';
import Row from '../../components/Row';
import Column from '../../components/Column';

import { Container, Title } from './styles';

export default function Deliveryman() {
  const [deliveryman, setDeliveryman] = useState([]);

  useEffect(() => {
    async function loadDeliveryman() {
      const response = await api.get('deliveryman');
      setDeliveryman(response.data);
    }
    loadDeliveryman();
  }, []);

  return (
    <Container>
      <Title>Gerenciando Entregradores</Title>
      <Form placeholder="Buscar por entregadores" onClick={() => {}} />

      <ul>
        <Row header>
          {['ID', 'Foto', 'Nome', 'Email', 'Açoes'].map(item => (
            <Column key={item} header>
              {item}
            </Column>
          ))}
        </Row>
        {deliveryman.map(item => (
          <Row key={item.id}>
            <Column>{`#${String(item.id).padStart(2, '0')}`}</Column>
            <Column>
              <NameInitials name={item.name} showName={false} />
            </Column>
            <Column>{item.name}</Column>
            <Column>{item.email}</Column>
            <Column>
              <Options
                show={[, 'edit', 'delete']}
                optionsName={[, 'Editar', 'Excluir']}
              />
            </Column>
          </Row>
        ))}
      </ul>
    </Container>
  );
}
