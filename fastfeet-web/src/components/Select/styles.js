import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin-top: 10px;

  & + div {
    margin-left: 15px;
  }

  label {
    font-weight: bold;

    .select {
      margin-bottom: 5px;
      padding-top: 10px;
      height: 44px;
    }
  }
`;

export const ErrorMsg = styled.span`
  font-size: 12px;
  color: #f00;
`;
