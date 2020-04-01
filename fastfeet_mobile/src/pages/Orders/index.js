import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

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
} from './styles';

const data = [1, 2, 3, 4, 5];

export default function Orders() {
  return (
    <Container>
      <Header>
        <NameInitials name="Gaspar Antunes" />
        {/* <Avatar source={{ uri: 'https://api.adorable.io/avatar/50' }} /> */}
        <UserInfo>
          <Text>Bem vindo de volta,</Text>
          <Username>Gaspar Antunes</Username>
        </UserInfo>

        <TouchableOpacity onPress={() => {}}>
          <Icon name="exit-to-app" size={32} color="#f00" />
        </TouchableOpacity>
      </Header>

      <InfoView>
        <Title>Entregas</Title>
        <Tab>
          <TextLink active border onPress={() => {}}>
            Pendentes
          </TextLink>
          <TextLink onPress={() => {}}>Entregues</TextLink>
        </Tab>
      </InfoView>
      <List
        data={data}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <OrderCard data={item} />}
      />
    </Container>
  );
}
