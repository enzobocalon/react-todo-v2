import styled from 'styled-components';

interface Props {
  borderRadius?: number;
  status?: boolean;
}

export const Container = styled.div<Props>`
  background-color: hsl(235, 24%, 19%);
  border-radius: ${props => props.borderRadius ? `${props.borderRadius}px` : '0'};
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    border-bottom: 1px solid hsl(237, 14%, 26%);
  }
`;

export const IconBackground = styled.div<Props>`
  min-width: 30px;
  min-height: 30px;
  border-radius: 50%;
  margin: 0 0 0 12px;
  background-color: hsl(233, 14%, 35%);
  background-position: 10px;
  transition: all .3s ease;

  &:hover {
    background-image: ${props => props.status ? 'linear-gradient(90deg,hsl(235,24%,19%), hsl(235,24%,19%))' : 'linear-gradient(90deg,hsl(192, 100%, 67%), hsl(280, 87%, 65%))'};
    background-position: 0px;
    transition: all .3s ease;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div<Props>`
  min-width: 28px;
  min-height: 28px;
  background-image: ${props => props.status ? 'linear-gradient(90deg,hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : 'linear-gradient(90deg,hsl(235,24%,19%), hsl(235,24%,19%))'};
  border-radius: 50%;
  cursor: pointer;
  background-color: hsl(235,24%,19%);
  transition: all .3s ease;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    max-height: 18px;
    max-width: 18px;
    margin-right: 12px;
    cursor: pointer;
  }
`;
