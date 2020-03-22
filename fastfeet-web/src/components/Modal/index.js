import React from 'react';
import { bool, oneOfType, element, object, func } from 'prop-types';

import { Container, Content } from './styles';

export default function Modal({ show, onClose, children }) {
  return (
    <Container show={show} onClick={onClose}>
      <Content onClick={e => e.stopPropagation()}>{children}</Content>
    </Container>
  );
}
Modal.defaultProps = {
  children: null
};

Modal.propTypes = {
  show: bool.isRequired,
  onClose: func.isRequired,
  children: oneOfType([element, object, func])
};
