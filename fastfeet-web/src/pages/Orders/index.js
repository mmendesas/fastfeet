import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';

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

  async function loadOrders(query) {
    const options = query ? { params: { q: query } } : null;
    const response = await api.get('orders', options);
    setOrders(response.data);
  }

  useEffect(() => {
    loadOrders();
  }, []);

  function handleClickView(item) {
    setInfo(item);
    setOpen(true);
  }

  function handleClickEdit(id) {
    history.push(`/orders/register/${id}`);
  }

  async function handleClickDelete(id) {
    if (!window.confirm('Você quer mesmo remover esse item?')) {
      toast.error('Item não removido!');
      return;
    }

    try {
      await api.delete(`orders/${id}`);
      toast.success('Encomenda excluída com sucesso');
    } catch (err) {
      toast.error('Erro ao remover encomenda');
    }

    loadOrders();
  }

  function handleSearch(data) {
    loadOrders(data);
  }

  return (
    <Container>
      <Title>Gerenciando Encomendas</Title>
      <Form
        placeholder="Buscar por encomendas"
        onSearch={handleSearch}
        onClick={() => {
          history.push('/orders/register');
        }}
      />

      {!orders.length && <p>Nenhum item encontrado.</p>}

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
