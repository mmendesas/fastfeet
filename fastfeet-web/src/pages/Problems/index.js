/* eslint-disable no-sparse-arrays */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

import Options from '../../components/Options';
import Row from '../../components/Row';
import Column from '../../components/Column';
import Modal from '../../components/Modal';

import { Container, Title, Content } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});

  async function loadData() {
    const response = await api.get('delivery-problems');
    setProblems(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  function handleClickView(item) {
    setInfo(item);
    setOpen(true);
  }

  async function handleClickDelete(id) {
    if (!window.confirm('Você quer mesmo remover esse item?')) {
      toast.error('Item não removido!');
      return;
    }

    try {
      await api.delete(`problem/${id}/cancel-delivery`);
      toast.success('Encomenda cancelada com sucesso');
    } catch (err) {
      toast.error('Erro ao cancelar encomenda');
    }

    loadData();
  }

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
                show={['view', , 'delete']}
                optionsName={['Visualizar', , 'Cancelar Encomenda']}
                onClickView={() => handleClickView(item)}
                onClickDel={() => handleClickDelete(item.id)}
              />
            </Column>
          </Row>
        ))}
      </ul>
      <Modal show={open} onClose={() => setOpen(false)}>
        <Content>
          <h3>Visualizar Encomenda</h3>
          {info.description}
        </Content>
      </Modal>
    </Container>
  );
}
