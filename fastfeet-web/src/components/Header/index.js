import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '../../assets/fastfeet-logo.svg';

export default function Header() {
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
              <Link to="/logout">sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
