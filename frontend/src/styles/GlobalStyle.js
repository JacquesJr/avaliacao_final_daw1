import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #E5E5E5;
    color: #3FA14C;
    -webkit-front-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
    outline: none;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      filter: brightness(90%);
    }
  }
`;