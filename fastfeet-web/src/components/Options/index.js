import React, { useState } from 'react';
import { arrayOf, string, func } from 'prop-types';
import { MdCreate, MdDeleteForever, MdRemoveRedEye } from 'react-icons/md';

import { Container, Button, OptionsList, Option } from './styles';

export default function Options({
  show,
  optionsName,
  onClickView,
  onClickEdit,
  onClickDel
}) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  const [view, edit, remove] = show;
  const [
    viewName = 'View',
    editName = 'Edit',
    removeName = 'Remove'
  ] = optionsName;

  return (
    <Container>
      <Button onClick={handleToggleVisible} />
      <OptionsList visible={visible}>
        {view && (
          <Option
            onClick={() => {
              handleToggleVisible();
              onClickView();
            }}
          >
            <MdRemoveRedEye color="#0aa" size={20} />
            <div>{viewName}</div>
          </Option>
        )}
        {edit && (
          <Option
            onClick={() => {
              handleToggleVisible();
              onClickEdit();
            }}
          >
            <MdCreate color="#00a" size={20} />
            <div>{editName}</div>
          </Option>
        )}
        {remove && (
          <Option
            onClick={() => {
              handleToggleVisible();
              onClickDel();
            }}
          >
            <MdDeleteForever color="#f00" size={20} />
            <div>{removeName}</div>
          </Option>
        )}
      </OptionsList>
    </Container>
  );
}

Options.defaultProps = {
  onClickView: () => {},
  onClickEdit: () => {},
  onClickDel: () => {}
};

Options.propTypes = {
  show: arrayOf(string).isRequired,
  optionsName: arrayOf(string).isRequired,
  onClickView: func,
  onClickEdit: func,
  onClickDel: func
};
