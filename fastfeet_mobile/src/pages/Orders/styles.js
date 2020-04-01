import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 0 30px;
`;

export const Header = styled.View`
  height: 138px;
  flex-direction: row;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex: 1;
  padding-left: 10px;
`;

export const Username = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const Avatar = styled.Image`
  height: 68px;
  width: 68px;
  border-radius: 34px;
  background: #eee;
`;

export const InfoView = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Tab = styled.View`
  flex-direction: row;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 10 },
})``;
