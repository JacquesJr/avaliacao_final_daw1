import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Option = styled.div`
  padding: 10px 15px;
  width: 150px;
  text-align: center;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.4s;
  color: #3FA14C;
  background: #DDFFE1;

  &:hover {
    opacity: 0.8;
  }


  ${props => 
    props.isActive && 
    css`
      color: #DDFFE1;
      background: #3FA14C;
    `}

  &:active {
    filter: brightness(90%);
  }

  &:nth-child(1) {
    border-radius: 4px 0 0 4px;
  }
  
  &:nth-last-child(1) {
    border-radius: 0 4px 4px 0;
  }
`;