/* eslint-disable camelcase */
import React from 'react';
import { shape } from 'prop-types';

import { Container, Title } from './styles';

// eslint-disable-next-line react/prop-types
const Datetime = ({ title, date }) => (
  <p>
    <strong>{title}:</strong> {date || '-- / -- / --'}
  </p>
);

export default function Info({ data }) {
  const { recipient = {}, signature = {}, start_date, end_date } = data;
  const { street, number, city, state, zipcode } = recipient;

  return (
    <Container>
      <Title>Informações da encomenda</Title>
      <p>
        {street}, {number}
      </p>
      <p>
        {city} - {state}
      </p>
      <p>{zipcode}</p>
      <hr />
      <Title>Datas</Title>
      <Datetime title="Retirada" date={start_date} />
      <Datetime title="Entrega" date={end_date} />
      <hr />
      <Title>Assinatura do Destinatário</Title>
      <img
        src={
          signature?.url ||
          'https://pipdigz.co.uk/p3/img/placeholder-square.png'
        }
        alt="signature"
      />
    </Container>
  );
}

Info.propTypes = {
  data: shape({}).isRequired
};
