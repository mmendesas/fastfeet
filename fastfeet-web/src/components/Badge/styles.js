import styled from 'styled-components';

export const Container = styled.div`
  width: 125px;
  background-color: ${props => props.bgColor || '#FAB0B0'};
  color: ${props => props.color || '#DE3B3B'};

  border-radius: 30px;
  padding: 5px 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Dot = styled.span`
  height: 12px;
  width: 12px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: ${props => props.color || '#DE3B3B'};
`;
