import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100px;
  background-color: ${lighten(0.4, '#F00')};
  color: #f00;

  border-radius: 30px;
  padding: 5px 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #f00;
`;
