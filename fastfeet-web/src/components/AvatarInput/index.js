import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';
import api from '../../services/api';

export default function AvatarInput() {
  const { defaultValue, registeredField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registeredField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file'
      });
    }
  }, [ref, registeredField]);

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
          alt=""
        />
        <input
          type="file"
          name="avatar"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ret={ref}
        />
      </label>
    </Container>
  );
}
