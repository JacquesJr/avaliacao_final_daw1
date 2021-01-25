import styled from 'styled-components';

export const Container = styled.div`
  background: #FFF;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 0.4px solid #3FA14C;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #444;
    font-weight: 300;

    &::placeholder {
      color: #3FA14C;
      font-weight: 300;
    }
  }
  
  svg {
    margin-right: 16px;
  }
`;