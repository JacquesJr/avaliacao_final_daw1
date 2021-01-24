import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 28px;
    font-weight: 300;
    color: #3FA14C;
    text-align: center;
    margin: 18px 0;
  }

  form {
    padding: 12px;
    width: 100%;
    max-width: 700px;
  }
`;