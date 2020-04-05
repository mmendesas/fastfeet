/* eslint-disable camelcase */
import React from 'react';
import { View, StatusBar } from 'react-native';
import { shape, object } from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import Background from '~/components/Background';
import dateToString from '~/helpers/dateToString';

import {
  Box,
  Header,
  Title,
  Label,
  TextInfo,
  Row,
  Options,
  Button,
  ButtonText,
} from './styles';

export default function Details({ route }) {
  const { data } = route.params;
  const { navigate } = useNavigation();

  const { id, status, product, recipient, start_date, end_date } = data;
  const { street, city, number, state, zipcode } = recipient;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0aa" />
      <Background>
        <Box>
          <Header>
            <Icon name="local-shipping" size={32} color="#008080" />
            <Title>Informações da entrega</Title>
          </Header>
          <Label>DESTINATÁRIO</Label>
          <TextInfo>{recipient.name}</TextInfo>
          <Label>ENDEREÇO DA ENTREGA</Label>
          <TextInfo>{`${street}, ${number}, ${city} - ${state}, ${zipcode}`}</TextInfo>
          <Label>PRODUTO</Label>
          <TextInfo>{product}</TextInfo>
        </Box>

        <Box>
          <Header>
            <Icon name="event" size={32} color="#008080" />
            <Title>Situação da entrega</Title>
          </Header>
          <Label>STATUS</Label>
          <TextInfo>{status}</TextInfo>
          <Row>
            <View>
              <Label>DATA DE RETIRADA</Label>
              <TextInfo>{dateToString(start_date)}</TextInfo>
            </View>
            <View>
              <Label>DATA DE ENTREGA</Label>
              <TextInfo>{dateToString(end_date)}</TextInfo>
            </View>
          </Row>
        </Box>

        <Options>
          <Button onPress={() => navigate('ReportProblem', { order_id: id })}>
            <Icon name="cancel" size={32} color="#E74040" />
            <ButtonText>Informar Problema</ButtonText>
          </Button>
          <Button onPress={() => navigate('ShowProblem', { order_id: id })}>
            <Icon name="error-outline" size={32} color="#E7BA40" />
            <ButtonText>Visualizar Problemas</ButtonText>
          </Button>
          <Button onPress={() => navigate('ConfirmDelivery', { order_id: id })}>
            <Icon name="check-circle" size={32} color="#008080" />
            <ButtonText>Confirmar Entrega</ButtonText>
          </Button>
        </Options>
      </Background>
    </>
  );
}

Details.propTypes = {
  route: shape({
    params: shape({
      data: object,
    }).isRequired,
  }).isRequired,
};
