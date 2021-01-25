import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex: 1;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;

    form {
      width: 400px;
      height: 600px;
      padding: 40px 21px;
      text-align: center;
      background: #F6FFF7;
      border-radius: 4px;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);

      div {
        margin-bottom: 24px;
      }

      button {
        margin-bottom: 81px;
      }

      h1 {
        margin-bottom: 70px;
        font-weight: 300;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #3FA14C;
        margin-top: 24px;
        text-decoration: none;
        transition: opacity 0.2s;

        svg {
          margin-right: 7px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
`;

export const Background = styled.div`
  flex: 1;
  background: url("https://iftm.edu.br/10anos/img/logo-iftm.png") no-repeat center;
  background-size: 100%;
`;