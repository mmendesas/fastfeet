import styled from 'styled-components';

export const Container = styled.div`
  img {
    margin-bottom: 30px;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;

  div {
    & + div {
      margin-top: 20px;
    }

    label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  button {
    margin-top: 20px;
    width: 100%;
  }
`;
