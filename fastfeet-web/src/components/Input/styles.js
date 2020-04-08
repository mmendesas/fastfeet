import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;

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
    margin-top: 10px;
  }
`;

export const ErrorMsg = styled.span`
  margin-top: 5px;
  font-size: 12px;
  color: #f00;

  overflow: hidden;
  max-width: 30ch;
`;
