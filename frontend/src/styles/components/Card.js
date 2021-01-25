import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: #DDFFE1;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 300px;
  height: 200px;
  margin: 5px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 7px;
  }
`;

export const Text = styled.span`
  color: #000;
  font-size: 10px;
`;

export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background: #52D864;
    color: #DDFFE1;
    border-radius: 4px;
    font-size: 10px;
    padding: 2px 4px;

    ${props => 
      (props.status === 'owner' || props.status === 'subscribed') && 
        css`
          background: #EF4444;
          color: #FFF;
        `}
  }

  svg {
    margin-right: 7px;
  }
`;