import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 20px 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  width: 130px;
  background: #0aa;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;

  svg {
    margin: 0 10px;
  }

  &:hover {
    background: #099;
  }
`;

export const Search = styled.div`
  background: #fff;
  border-radius: 4px;
  width: 250px;
  border: 1px solid #ddd;
  height: 30px;
  padding-left: 10px;
  font-size: 14px;
  height: 36px;

  display: flex;
  align-items: center;

  input {
    width: 100%;
    border: 0;
    padding: 0 8px;
  }
`;
