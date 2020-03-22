import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Form from '../../components/Form';
import Badge from '../../components/Badge';
import NameInitials from '../../components/NameInitials';
import Options from '../../components/Options';
import Column from '../../components/Column';
import Row from '../../components/Row';
import Modal from '../../components/Modal';
import Info from './Info';

import { Container, Title } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('orders');
      setOrders(response.data);
    }

    loadOrders();
  }, []);

  function handleClickView(item) {
    setInfo(item);
    setOpen(true);
  }

  function handleClickEdit(id) {}

  function handleClickDelete(id) {}

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
            <Column>{item.recipient.city}</Column>
            <Column>{item.recipient.state}</Column>
            <Column>
              <Badge type="retirada">Cancelado</Badge>
            </Column>
            <Column>
              <>
                <Options
                  show={['view', 'edit', 'delete']}
                  optionsName={['Visualizar', 'Editar', 'Excluir']}
                  onClickView={() => handleClickView(item)}
                  onClickEdit={() => handleClickEdit(item.id)}
                  onClickDel={() => handleClickDelete(item.id)}
                />
              </>
            </Column>
          </Row>
        ))}
      </ul>
      <Modal show={open} onClose={() => setOpen(false)}>
        <Info data={info} />
      </Modal>
    </Container>
  );
}
