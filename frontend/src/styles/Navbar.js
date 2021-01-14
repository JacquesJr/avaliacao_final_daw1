import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #DDFFE2;
  width: 5em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageLogo = styled.div`
  margin: 32px 0;
  cursor: pointer;

  svg {
    height: 52px;
    width: 42px;
  }
`;

export const Option = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  cursor: pointer;
  transition: filter 0.4s;
  user-select: none;
  
  &:hover {
    filter: brightness(0.8);
    background: #DDFFE230;
  }
`;

export const Text = styled.span`
  font-size: 0.9em;
  font-weight: 300;
`;