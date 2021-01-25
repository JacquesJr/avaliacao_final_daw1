import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: auto;
`;

export const Text = styled.h1`
  font-weight: 300;
  text-align: center;
`;
