import styled from 'styled-components/native';

export const Box = styled.View`
  background: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 2px #ccc;
  margin: 10px 0;
  padding: 20px;
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

  align-items: center;
`;

export const Label = styled.Text`
  margin-top: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
`;

export const TextInfo = styled.Text`
  padding-top: 5px;
  font-size: 14px;
  color: #666;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Options = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #f8f9fd;
  padding: 30px;
  justify-content: center;
  align-items: center;
  flex: 1;
  box-shadow: 1px 1px 2px #ccc;
`;

export const ButtonText = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: #999;
  text-align: center;
`;
