import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  position: relative;

  border: 0;

  &::after {
    content: '•••';
    font-size: 20px;
    letter-spacing: 2px;
  }
`;

export const Dot = styled.span`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: #ccc;
`;

export const OptionsList = styled.div`
  z-index: 2;
  background-color: #fff;
  position: absolute;
  width: 120px;
  left: calc(50% - 60px);
  top: calc(100%);

  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #eee;

  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #eee;
  }
`;

export const Option = styled.div`
  & + div {
    margin-top: 5px;
    border-top: 1px solid #eee;
  }

  cursor: pointer;
  padding: 5px;
  font-size: 14px;
  display: flex;
  align-items: center;
  align-self: flex-start;

  div {
    padding-left: 5px;
  }
`;
