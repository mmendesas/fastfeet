import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  height: 60px;
  margin: 10px 0;
`;

export const Line = styled.View`
  border-width: 1px;
  border-color: #008080;
  margin: 0 55px;
  top: 8px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  top: -15px;

  padding: 15px 30px;
`;

export const Step = styled.View`
  max-width: 60px;
  align-items: center;
  height: 80px;
`;

export const Bullet = styled.Text`
  background-color: ${({ fill }) => (fill ? '#008080' : '#fff')};
  width: 14px;
  height: 14px;
  border-radius: 7px;

  border-width: 2px;
  border-color: #008080;
`;

export const Title = styled.Text`
  text-align: center;
  margin-top: 5px;
  color: #777;
  font-size: 10px;
`;
