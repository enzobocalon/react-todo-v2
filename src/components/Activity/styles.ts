import styled from 'styled-components';

export const Container = styled.div`
  background-color: hsl(235, 24%, 19%);
  border-radius: 8px;
  display: flex;
  align-items: center;
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
