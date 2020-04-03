import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 6px;
  margin: 15px 0;

  box-shadow: 1px 1px 2px #ccc;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #008080;
  font-size: 16px;
  padding-left: 5px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  padding: 15px;

  align-items: center;
`;

export const Details = styled.View`
  height: 70px;
  background-color: #f8f9fd;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: flex-end;

  padding: 15px 20px;
`;
