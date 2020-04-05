import React from 'react';
import { oneOfType, arrayOf, element } from 'prop-types';

import { Container, Strip, Content } from './styles';

export default function Background({ children }) {
  return (
    <Container>
      <Strip />
      <Content>{children}</Content>
    </Container>
  );
}

Background.propTypes = {
  children: oneOfType([element, arrayOf(element)]).isRequired,
};
