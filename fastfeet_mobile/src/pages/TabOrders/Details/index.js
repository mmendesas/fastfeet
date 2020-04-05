/* eslint-disable camelcase */
import React from 'react';
import { View } from 'react-native';
import { shape, number } from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import Background from '~/components/Background';

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
  const { order_id } = route.params;
  const { navigate } = useNavigation();

  return (
    <Background>
      <Box>
        <Header>
          <Icon name="local-shipping" size={32} color="#008080" />
          <Title>Informações da entrega</Title>
        </Header>
        <Label>DESTINATÁRIO</Label>
        <TextInfo>Ludwig Beethoven</TextInfo>
        <Label>ENDEREÇO DA ENTREGA</Label>
        <TextInfo>Rua x, 123, caracas - SP, 05001-100</TextInfo>
        <Label>PRODUTO</Label>
        <TextInfo>Sacola</TextInfo>
      </Box>

      <Box>
        <Header>
          <Icon name="event" size={32} color="#008080" />
          <Title>Situação da entrega</Title>
        </Header>
        <Label>STATUS</Label>
        <TextInfo>Pendente</TextInfo>
        <Row>
          <View>
            <Label>DATA DE RETIRADA</Label>
            <TextInfo>14/01/2020</TextInfo>
          </View>
          <View>
            <Label>DATA DE RETIRADA</Label>
            <TextInfo>14/01/2020</TextInfo>
          </View>
        </Row>
      </Box>

      <Options>
        <Button onPress={() => navigate('ReportProblem', { order_id: 1 })}>
          <Icon name="cancel" size={32} color="#E74040" />
          <ButtonText>Informar Problema</ButtonText>
        </Button>
        <Button onPress={() => navigate('ShowProblem', { order_id: 1 })}>
          <Icon name="error-outline" size={32} color="#E7BA40" />
          <ButtonText>Visualizar Problemas</ButtonText>
        </Button>
        <Button onPress={() => navigate('ConfirmDelivery', { order_id: 1 })}>
          <Icon name="check-circle" size={32} color="#008080" />
          <ButtonText>Confirmar Entrega</ButtonText>
        </Button>
      </Options>
    </Background>
  );
}

Details.propTypes = {
  route: shape({
    params: shape({
      order_id: number.isRequired,
    }).isRequired,
  }).isRequired,
};
