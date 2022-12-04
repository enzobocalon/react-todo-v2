import styled from 'styled-components';

interface Props {
  active?: boolean;
  weight?: '400' | '700';
}

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ListContainer = styled.section`
  max-width: 720px;
  width: 100%;
  background-color: hsl(235, 24%, 19%);
  padding: 4px 0;
  top: -29.5px;
  position: absolute;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    width: calc(100% - 48px);
  }
`;

export const List = styled.div`
  max-height: 650px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Text = styled.p`
  padding: 1rem;
  color: hsl(234, 39%, 85%);
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  border-top: 1px solid hsl(237, 14%, 26%);
`;

export const FooterContent = styled.div`
  display: flex;
  gap: 1rem;

  span {
    color: hsl(233, 14%, 35%);
    font-size: 14px;
  }
`;

export const Button = styled.button<Props>`
    background-color: transparent;
    border: none;
    color: ${props => props.active ? 'hsl(220, 98%, 61%)' : 'hsl(233, 14%, 35%)'};
    font-weight: ${props => props.weight ? props.weight : '400'};
    font-size: 14px;
    transition: all .3s ease;
    cursor: pointer;

    &:hover{
      color: hsl(236, 33%, 92%);
      transition: all .3s ease;
    }
`;
