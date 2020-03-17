import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;

  .column {
    &:first-of-type {
      width: 100%;
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;
