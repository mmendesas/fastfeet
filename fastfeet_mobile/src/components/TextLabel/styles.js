import styled from 'styled-components/native';

export const Container = styled.View``;

export const Label = styled.Text`
  color: #777;
  font-size: ${(props) => (props.big ? '16px' : '10px')};
`;

export const Value = styled.Text`
  color: #333;
  font-size: ${(props) => (props.big ? '30px' : '14px')};
  font-weight: bold;
`;
