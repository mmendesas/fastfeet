import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  width: 100vw;
`;

export const Content = styled.div`
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 215px;
      height: 30px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #ccc;
    }

    a {
      margin-right: 20px;
      text-transform: uppercase;
      font-weight: bold;
      color: #aaa;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      color: #333;
    }

    a {
      color: #0aa;
    }
  }
`;
