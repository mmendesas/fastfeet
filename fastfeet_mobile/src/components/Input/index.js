/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';
import { oneOfType, object, array, string } from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

function Input({ style, icon, ...props }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="#333" />}
      <TInput {...props} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  icon: string,
  style: oneOfType([object, array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
