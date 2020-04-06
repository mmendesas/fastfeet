import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Initials = styled.span`
  width: 36px;
  height: 36px;
  background-color: ${props => props.bgColor || '#f00'};
  color: ${props => props.color || '#f00'};

  border-radius: 50%;
  padding: 5px;
  font-size: 16px;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.span`
  margin-left: 5px;
`;
