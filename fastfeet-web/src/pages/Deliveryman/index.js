/* eslint-disable no-sparse-arrays */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';

import { deleteDeliverymanRequest } from '../../store/modules/deliveryman/actions';

import Form from '../../components/Form';
import NameInitials from '../../components/NameInitials';
import Options from '../../components/Options';
import Row from '../../components/Row';
import Column from '../../components/Column';

import { Container, Title, Image } from './styles';

export default function Deliveryman() {
  const dispatch = useDispatch();
  const [deliveryman, setDeliveryman] = useState([]);

  async function loadData(query) {
    const options = query ? { params: { q: query } } : null;
    const response = await api.get('deliveryman', options);
    setDeliveryman(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  function handleClickEdit(id) {
    history.push(`/deliveryman/register/${id}`);
  }

  function handleClickDelete(id) {
    if (!window.confirm('Você quer mesmo remover esse item?')) {
      toast.error('Item não removido!');
      return;
    }

    dispatch(deleteDeliverymanRequest(id));
    loadData();
  }

  function handleSearch(data) {
    loadData(data);
  }

  return (
    <Container>
      <Title>Gerenciando Entregadores</Title>
      <Form
        placeholder="Buscar por entregadores"
        onSearch={handleSearch}
        onClick={() => {
          history.push('/deliveryman/register');
        }}
      />

      {!deliveryman.length && <p>Nenhum item encontrado.</p>}

      <ul>
        <Row header>
          {['ID', 'Foto', 'Nome', 'Email', 'Ações'].map(item => (
            <Column key={item} header>
              {item}
            </Column>
          ))}
        </Row>
        {deliveryman.map(item => (
          <Row key={item.id}>
            <Column>{`#${String(item.id).padStart(2, '0')}`}</Column>
            <Column>
              {item.avatar_id ? (
                <Image src={item.avatar.url} />
              ) : (
                <NameInitials name={item.name} showName={false} />
              )}
            </Column>
            <Column>{item.name}</Column>
            <Column>{item.email}</Column>
            <Column>
              <Options
                show={[, 'edit', 'delete']}
                optionsName={[, 'Editar', 'Excluir']}
                onClickEdit={() => handleClickEdit(item.id)}
                onClickDel={() => handleClickDelete(item.id)}
              />
            </Column>
          </Row>
        ))}
      </ul>
    </Container>
  );
}
