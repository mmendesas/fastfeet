import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import AsyncSelect from 'react-select/async';
import { string, func } from 'prop-types';

import { Container, ErrorMsg } from './styles';

export default function Select({ name, label, loadOptions }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'select.state.value'
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={name}>
        {label && label}
        <AsyncSelect
          cacheOptions
          ref={selectRef}
          className="select"
          defaultValue={defaultValue}
          loadOptions={loadOptions}
        />
        {error && <ErrorMsg>{error}</ErrorMsg>}
      </label>
    </Container>
  );
}

Select.defaultProps = {
  label: null
};

Select.propTypes = {
  label: string,
  name: string.isRequired,
  loadOptions: func.isRequired
};
