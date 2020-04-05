/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import Background from '~/components/Background';

import addZero from '~/helpers/addZero';
import dateToString from '~/helpers/dateToString';

import api from '~/services/api';

import { Title, Item, Description, Date } from './styles';

export default function ReportProblem() {
  const [problems, setProblems] = useState([]);
  const route = useRoute();
  const { order_id } = route.params;

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/delivery/${order_id}/problems`);
      setProblems(response.data);
    }

    loadData();
  }, []);

  return (
    <Background>
      <Title>Encomenda {addZero(order_id)}</Title>

      {problems.map((item) => (
        <Item key={item.id}>
          <Description>{item.description}</Description>
          <Date>{dateToString(item.createdAt)}</Date>
        </Item>
      ))}
    </Background>
  );
}
