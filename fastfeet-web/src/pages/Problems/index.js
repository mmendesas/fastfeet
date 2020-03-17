/* eslint-disable no-sparse-arrays */
import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Options from '../../components/Options';
import Row from '../../components/Row';
import Column from '../../components/Column';

import { Container, Title } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('delivery-problems');
      setProblems(response.data);
    }
    loadData();
  }, []);

  return (
    <Container>
      <Title>Problemas na entrega</Title>

      <ul>
        <Row header>
          {['Encomenda', 'Problema', 'Açoes'].map(item => (
            <Column key={item} header>
              {item}
            </Column>
          ))}
        </Row>
        {problems.map(item => (
          <Row key={item.id}>
            <Column>{`#${String(item.id).padStart(2, '0')}`}</Column>
            <Column>{item.description}</Column>
            <Column>
              <Options
                show={['view', 'delete']}
                optionsName={['Visualizar', , 'Cancelar Encomenda']}
              />
            </Column>
          </Row>
        ))}
      </ul>
    </Container>
  );
}
