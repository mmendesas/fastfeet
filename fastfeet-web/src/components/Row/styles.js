import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;

  margin: 20px 0;
  height: 57px;
  background: ${({ header }) => (header ? 'transparent' : '#fff')};
  border-radius: 4px;
  border: 0;
  padding: 0px 10px;
`;
