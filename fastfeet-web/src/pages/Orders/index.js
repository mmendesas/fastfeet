import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Form from '../../components/Form';
import Badge from '../../components/Badge';
import NameInitials from '../../components/NameInitials';
import Options from '../../components/Options';
import Column from '../../components/Column';
import Row from '../../components/Row';
import Modal from '../../components/Modal';

import { Container, Title, ModalContent, Image } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('orders');
      setOrders(response.data);
    }

    loadOrders();
  }, []);

  function handleClickView(item) {
    console.log(item);
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
            <Column>Rio do Sul</Column>
            <Column>Santa Catarina</Column>
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
      <Modal show onClose={() => setOpen(false)}>
        <ModalContent>
          <h3>Informacoes da encomenda</h3>
          <p>Rua betthove, 1729</p>
          <p>Diadema - SP</p>
          <p>06123123</p>
          <hr />
          <h3>Datas</h3>
          <p>
            <strong>Retirada:</strong> 25/01/2020
          </p>
          <p>
            <strong>Entrega:</strong> 25/01/2020
          </p>
          <hr />
          <h3>Assinatura do Destinatario</h3>
          <img
            src="https://pipdigz.co.uk/p3/img/placeholder-square.png"
            alt="signature"
          />
        </ModalContent>
      </Modal>
    </Container>
  );
}
