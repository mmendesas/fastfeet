import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Content = styled.div`
  width: 900px;
  section {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: space-between;

      button {
        width: 110px;
        margin-right: 20px;
        height: 40px;
      }
    }
  }

  form {
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
  }
`;

export const FormContent = styled.div`
  display: flex;
`;
