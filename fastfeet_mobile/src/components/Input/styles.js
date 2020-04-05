import styled from 'styled-components/native';

export const Container = styled.View`
  height: 46px;
  background: #fff;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#aaa',
})`
  flex: 1;
  font-size: 16px;
  padding: 0 20px;
  color: #333;
  height: 100%;
`;
