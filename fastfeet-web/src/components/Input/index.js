/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { string } from 'prop-types';

import { Container } from './styles';

export default function Input({ name, label, ...props }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={name}>
        {label && label}
        <input ref={inputRef} defaultValue={defaultValue} {...props} />
      </label>
    </Container>
  );
}

Input.defaultProps = {
  label: null
};

Input.propTypes = {
  label: string,
  name: string.isRequired
};
