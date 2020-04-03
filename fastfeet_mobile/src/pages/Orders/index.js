import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector } from 'react-redux';

import api from '~/services/api';

import NameInitials from '~/components/NameInitials';
import TextLink from '~/components/TextLink';
import OrderCard from '~/components/OrderCard';

import {
  Container,
  Header,
  Avatar,
  UserInfo,
  Username,
  InfoView,
  Title,
  Tab,
  List,
  EmptyMessage,
  EmptyText,
} from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [filterType, setFilterType] = useState('pendente');

  const id = useSelector((state) => state.auth.id);
  const profile = useSelector((state) => state.user.profile);

  function filterOrders(status) {
    let newOrders = [];
    if (status === 'pendente') {
      newOrders = orders.filter((item) =>
        ['pendente', 'retirada'].includes(item.status)
      );
    } else {
      newOrders = orders.filter((item) => item.status === status);
    }
    setFilteredOrders(newOrders);
  }

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/deliveryman/${id}/deliveries`);
      setOrders(response.data);
      setFilteredOrders(response.data);
    }
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        {profile.avatar ? (
          <Avatar source={{ uri: profile.avatar.url }} />
        ) : (
          <NameInitials name={profile.name} />
        )}
        <UserInfo>
          <Text>Bem vindo(a) de volta,</Text>
          <Username>{profile.name}</Username>
        </UserInfo>

        <TouchableOpacity onPress={() => {}}>
          <Icon name="exit-to-app" size={32} color="#f00" />
        </TouchableOpacity>
      </Header>

      <InfoView>
        <Title>Entregas</Title>
        <Tab>
          <TextLink
            active={filterType === 'pendente'}
            border
            onPress={() => {
              filterOrders('pendente');
              setFilterType('pendente');
            }}
          >
            Pendentes
          </TextLink>
          <TextLink
            active={filterType === 'entregues'}
            border
            onPress={() => {
              filterOrders('');
              setFilterType('entregues');
            }}
          >
            Entregues
          </TextLink>
        </Tab>
      </InfoView>

      {!filteredOrders.length ? (
        <EmptyMessage>
          <Icon name="local-shipping" size={50} color="#ccc" />
          <EmptyText>Não há encomendas...</EmptyText>
        </EmptyMessage>
      ) : (
        <List
          data={filteredOrders}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <OrderCard data={item} />}
        />
      )}
    </Container>
  );
}
