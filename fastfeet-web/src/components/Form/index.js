import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { string, func } from 'prop-types';

import Button from '../Button';

import { Container, Search } from './styles';

export default function Form({ placeholder = '', onClick, onSearch }) {
  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      onSearch(e.target.value);
    }
  }
  return (
    <Container>
      <Search>
        <FaSearch color="#ccc" size={20} />
        <input
          type="search"
          placeholder={placeholder}
          onKeyPress={handleKeyPress}
        />
      </Search>
      <Button onClick={onClick} Icon={FaPlus}>
        Cadastrar
      </Button>
    </Container>
  );
}

Form.defaultProps = {
  placeholder: '',
  onSearch: () => {}
};

Form.propTypes = {
  placeholder: string,
  onClick: func.isRequired,
  onSearch: func
};
