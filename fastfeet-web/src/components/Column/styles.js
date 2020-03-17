import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: left;
  padding: 5px;
  font-weight: ${({ header }) => (header ? 'bold' : 'normal')};

  :first-of-type {
    width: 400px;
  }

  :last-of-type {
    width: 100px;
    text-align: center;
  }
`;
