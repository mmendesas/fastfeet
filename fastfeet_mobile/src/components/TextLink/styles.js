import styled, { css } from 'styled-components/native';

export const MText = styled.Text`
  padding-bottom: 4px;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.active ? '#008080' : '#555')};
`;

export const Container = styled.TouchableOpacity`
  align-items: center;

  ${({ active, border }) =>
    active &&
    border &&
    css`
      border-bottom-color: #008080;
      border-bottom-width: 1px;
      margin-bottom: 10px;
    `}
`;
