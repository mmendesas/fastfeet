import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 130px;
  background: ${props => (props.secondary ? '#ccc' : '#0aa')};
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background: ${props => (props.secondary ? '#aaa' : '#099')};
  }
`;
