import styled from 'styled-components';

interface Props {
  borderRadius?: number;
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

export const Icon = styled.div`
  min-width: 28px;
  min-height: 28px;
  margin: 0 0 0 12px;
  border: 1px solid hsl(233, 14%, 35%);
  border-radius: 50%;
  cursor: pointer;
`;

export const Content = styled.div`
  flex: 1;
`;
