import styled from 'styled-components/native';

export const Title = styled.Text`
  align-self: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding: 15px;
`;

export const Item = styled.View`
  background-color: #fff;
  padding: 25px 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin: 5px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #999999;
`;

export const Date = styled.Text`
  font-size: 12px;
  color: #c1c1c1;
`;
