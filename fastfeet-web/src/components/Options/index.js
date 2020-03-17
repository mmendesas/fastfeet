import React, { useState } from 'react';
import { MdCreate, MdDeleteForever, MdRemoveRedEye } from 'react-icons/md';

import { Container, Button, OptionsList, Option } from './styles';

export default function Options() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Button onClick={handleToggleVisible} />
      <OptionsList visible={visible}>
        <Option>
          <MdRemoveRedEye color="#0aa" size={20} />
          <div>Visualizar</div>
        </Option>
        <Option>
          <MdCreate color="#00a" size={20} />
          <div>Editar</div>
        </Option>
        <Option>
          <MdDeleteForever color="#f00" size={20} />
          <div>Excluir</div>
        </Option>
      </OptionsList>
    </Container>
  );
}
