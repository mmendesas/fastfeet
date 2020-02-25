import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #0aa;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 400px;
  max-width: 350px;
  text-align: center;
  background: #fff;
  padding: 40px;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    padding-top: 30px;

    label {
      text-align: left;
      margin: 5px 0;
      font-weight: bold;
      color: #333;

      display: flex;
      flex-direction: column;
    }

    input {
      border: 1px solid #ccc;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 5px 0;
      font-size: 14px;
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      font-size: 12px;
    }

    button {
      margin-top: 10px;
      background: #0aa;
      height: 44px;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;

      &:hover {
        background: #099;
      }
    }
  }
`;
