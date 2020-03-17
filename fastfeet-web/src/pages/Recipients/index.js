/* eslint-disable no-sparse-arrays */
import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Form from '../../components/Form';
import Options from '../../components/Options';
import Row from '../../components/Row';
import Column from '../../components/Column';

import { Container, Title } from './styles';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('recipients');
      setRecipients(response.data);
    }
    loadData();
  }, []);

  return (
    <Container>
      <Title>Gerenciando Destinatários</Title>
      <Form placeholder="Buscar por destinatários" onClick={() => {}} />

      <ul>
        <Row header>
          {['ID', 'Nome', 'Endereço', 'Açoes'].map(item => (
            <Column key={item} header>
              {item}
            </Column>
          ))}
        </Row>
        {recipients.map(item => (
          <Row key={item.id}>
            <Column>{`#${String(item.id).padStart(2, '0')}`}</Column>
            <Column>{item.name}</Column>
            <Column>rua das portas, 1320, jardim sul (trocar)</Column>
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
