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
  font-size: 24px;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;

  border-radius: 50%;
  border: 2px solid #eee;
`;
