/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react';
import { oneOfType, object, array, string } from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useField } from '@unform/core';

import { Container, TInput } from './styles';

function Input({ name, style, icon, ...props }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '' } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
    });
  }, [fieldName, registerField]);

  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="#333" />}
      <TInput ref={inputRef} defaultValue={defaultValue} {...props} />
    </Container>
  );
}

Input.propTypes = {
  name: string.isRequired,
  icon: string,
  style: oneOfType([object, array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default Input;
