import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  align-items: center;
`;

export const Initials = styled.View`
  width: ${(props) => (props.big ? '200px' : '80px')};
  height: ${(props) => (props.big ? '200px' : '80px')};
  border-radius: ${(props) => (props.big ? '100px' : '40px')};

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 128, 128, 0.06);
`;

export const MText = styled.Text`
  color: #0aa;
  font-size: ${(props) => (props.big ? '60px' : '24px')};
`;
