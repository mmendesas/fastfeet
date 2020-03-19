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

    .row {
      padding: 0;
      justify-content: space-between;

      label {
        width: 150px;
        margin-left: 10px;
      }

      label[for='rua'] {
        margin: 0;
        flex: 1;
      }
    }

    .row + .row {
      margin-top: 40px;
      padding: 0;

      label:first-of-type {
        margin: 0;
      }

      label {
        width: 280px;
      }
    }

    label {
      font-weight: bold;
    }

    input {
      height: 44px;
      border-radius: 4px;
      background: #fff;
      color: #333;
      border: 1px solid #ccc;
      padding: 0 15px;
      width: 100%;
      margin: 10px 0;
    }
  }
`;
