import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  margin: 0 20px;
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
  font-size: 22px;
`;

export const Avatar = styled.Image`
  height: 68px;
  width: 68px;
  border-radius: 34px;
  background: #eee;
  border-width: 3px;
  border-color: #0aa;
`;

export const InfoView = styled.View`
  margin: 0 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const Tab = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 160px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 10 },
})`
  margin: 0 15px;
`;

export const EmptyMessage = styled.View`
  margin-top: 10px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const EmptyText = styled.Text`
  font-weight: bold;
  color: #ccc;
`;
