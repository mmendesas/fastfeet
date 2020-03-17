import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { string, func } from 'prop-types';

import Button from '../Button';

import { Container, Search } from './styles';

export default function Form({ placeholder = '', onClick }) {
  return (
    <Container>
      <Search>
        <FaSearch color="#ccc" size={20} />
        <input type="search" placeholder={placeholder} />
      </Search>
      <Button onClick={onClick}>
        <FaPlus color="#FFF" size={18} />
        Cadastrar
      </Button>
    </Container>
  );
}

Form.defaultProps = {
  placeholder: ''
};

Form.propTypes = {
  placeholder: string,
  onClick: func.isRequired
};
