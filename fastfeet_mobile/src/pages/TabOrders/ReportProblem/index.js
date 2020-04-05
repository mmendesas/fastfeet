/* eslint-disable camelcase */
import React, { useRef } from 'react';
import { Alert } from 'react-native';
import { Form } from '@unform/mobile';
import { useRoute, useNavigation } from '@react-navigation/native';

import Background from '~/components/Background';
import Button from '~/components/Button';
import Input from '~/components/Input';

import api from '~/services/api';

export default function ReportProblem() {
  const route = useRoute();
  const { navigate } = useNavigation();
  const formRef = useRef();

  const { order_id } = route.params;

  async function handleSubmit(data) {
    try {
      await api.post(`delivery/${order_id}/problems`, data);
      Alert.alert('Problema enviado com sucesso');
      navigate('Order');
    } catch (error) {
      Alert.alert('Erro ao enviar o problema');
    }
  }

  return (
    <Background>
      <Form id="myform" ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="description"
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          multiline
          style={{
            height: 400,
            borderColor: '#eee',
            borderWidth: 1,
            padding: 30,
            marginBottom: 30,
            justifyContent: 'flex-start',
          }}
        />
        <Button bgColor="#0aa" onPress={() => formRef.current.submitForm()}>
          Enviar
        </Button>
      </Form>
    </Background>
  );
}
