import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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
          <img src={logo} alt="fastfeet" srcSet="" />
          <Link to="/orders">Encomendas</Link>
          <Link to="/deliveryman">Entregadores</Link>
          <Link to="/recipients">Destinatários</Link>
          <Link to="/delivery-problems">Problemas</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Admin Fastfeet</strong>
              <Link to="/" onClick={handleSignOut}>
                sair do sistema
              </Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
