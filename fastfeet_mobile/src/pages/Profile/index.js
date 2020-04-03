import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';

import { Container, Content, Info, Row } from './styles';
import { signOut } from '~/store/modules/auth/actions';

import NameInitials from '~/components/NameInitials';
import TextLabel from '~/components/TextLabel';
import Button from '~/components/Button';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const usedDate = format(parseISO(profile.created_at), 'dd/MM/yyyy');

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <NameInitials name={profile.name} big />
        <Info>
          <Row>
            <TextLabel label="Nome completo" value={profile.name} big />
          </Row>
          <Row>
            <TextLabel label="Email" value={profile.email} big />
          </Row>
          <Row>
            <TextLabel label="Data de cadastro" value={usedDate} big />
          </Row>
          <Button bgColor="#E74040" onPress={handleLogout}>
            Logout
          </Button>
        </Info>
      </Content>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={32} color={tintColor} />
  ),
};
