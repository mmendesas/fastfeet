import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Column = styled.div`
  width: 100%;
  text-align: left;
  padding: 5px;
  font-weight: ${({ header }) => (header ? 'bold' : 'normal')};

  :first-of-type {
    width: 400px;
  }
`;

export const Row = styled.li`
  display: flex;
  align-items: center;

  margin: 20px 0;
  height: 40px;
  background: ${({ header }) => (header ? 'transparent' : '#fff')};
  border-radius: 4px;
  border: 0;
  padding: 0px 10px;
`;
