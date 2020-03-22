import React from 'react';
import { MdChevronLeft } from 'react-icons/md';

import Button from '../Button';
import history from '../../services/history';

export default function BackButton() {
  return (
    <Button Icon={MdChevronLeft} disabled onClick={() => history.goBack()}>
      Voltar
    </Button>
  );
}
