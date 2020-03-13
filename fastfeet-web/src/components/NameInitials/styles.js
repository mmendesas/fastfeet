import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Initials = styled.span`
  width: 30px;
  height: 30px;
  background-color: ${props => lighten(0.4, props.color || '#F00')};
  color: ${props => props.color || '#f00'};

  border-radius: 50%;
  padding: 5px;
  font-size: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.span`
  margin-left: 5px;
`;
