import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Content = styled.div`
  padding: 20px;
  line-height: 24px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`;
