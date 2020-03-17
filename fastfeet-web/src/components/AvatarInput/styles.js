import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 150px;
      height: 150px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
      border-radius: 50%;
    }

    input {
      display: none;
    }
  }
`;
