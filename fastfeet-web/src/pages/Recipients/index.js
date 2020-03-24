/* eslint-disable no-sparse-arrays */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';

import Form from '../../components/Form';
import Options from '../../components/Options';
import Row from '../../components/Row';
import Column from '../../components/Column';

import { Container, Title } from './styles';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);

  async function loadData(query) {
    const options = query ? { params: { q: query } } : null;
    const response = await api.get('recipients', options);
    setRecipients(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  function handleClickEdit(id) {
    history.push(`/recipients/register/${id}`);
  }

  async function handleClickDelete(id) {
    if (!window.confirm('Você quer mesmo remover esse item?')) {
      toast.error('Item não removido!');
      return;
    }

    try {
      await api.delete(`recipients/${id}`);
      toast.success('Destinatário excluído com sucesso');
    } catch (err) {
      toast.error('Erro ao remover destinatário');
    }

    loadData();
  }

  function handleSearch(data) {
    loadData(data);
  }

  return (
    <Container>
      <Title>Gerenciando Destinatários</Title>
      <Form
        placeholder="Buscar por destinatários"
        onSearch={handleSearch}
        onClick={() => {
          history.push('/recipients/register');
        }}
      />

      {!recipients.length && <p>Nenhum item encontrado.</p>}

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
            <Column>{`${item.street}, ${item.number}   ${item.city} [${item.state}]`}</Column>
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
