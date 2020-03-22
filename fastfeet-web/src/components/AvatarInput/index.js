import React, { useState, useRef, useEffect } from 'react';
import { string } from 'prop-types';
import { useField } from '@unform/core';

import { Container } from './styles';
import api from '../../services/api';

export default function AvatarInput({ name }) {
  const ref = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'dataset.file'
      });
    }
  }, [fieldName, ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);
    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={preview || 'https://pipdigz.co.uk/p3/img/placeholder-square.png'}
          alt="avatar preview"
        />
        <input
          type="file"
          name="avatar_id"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  name: string.isRequired
};
