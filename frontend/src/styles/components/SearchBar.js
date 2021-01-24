import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #FFF;
  border-radius: 4px;

  padding: 2px 10px;
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 12px;

  input {
    flex: 1;
    height: 100%;
    background: transparent;
    border: 0;
    font-weight: 300;
    color: #444;

    &::placeholder {
      color: #3FA14C80;
    }
  }

  svg {
    margin-right: 4px;
  }
`;