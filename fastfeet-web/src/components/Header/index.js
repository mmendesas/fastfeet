import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '../../assets/fastfeet-logo.svg';
import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="fastfeet" />
          <NavLink to="/orders">Encomendas</NavLink>
          <NavLink to="/deliveryman">Entregadores</NavLink>
          <NavLink to="/recipients">Destinatários</NavLink>
          <NavLink to="/delivery-problems">Problemas</NavLink>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Admin Fastfeet</strong>
              <NavLink to="/" onClick={handleSignOut}>
                sair do sistema
              </NavLink>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
