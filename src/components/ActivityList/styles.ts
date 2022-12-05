import styled from 'styled-components';

interface Props {
  active?: boolean;
  weight?: '400' | '700';
  mode?: boolean;
}

export const Container = styled.main<Props>`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  height: 75vh;
  background-color: ${props => props.mode ? 'hsl(235, 21%, 11%)' : 'hsl(236, 33%, 92%)'};
`;

export const ListContainer = styled.section<Props>`
  max-width: 720px;
  width: 100%;
  background-color: ${props => props.mode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)'};
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

export const Text = styled.p<Props>`
  padding: 1rem;
  color: ${props => props.mode ? 'hsl(234, 39%, 85%)':'hsl(236, 9%, 61%)'};
`;

export const Footer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  border-top: 1px solid ${props => props.mode ? 'hsl(237, 14%, 26%)' : 'hsl(235, 19%, 35%)'};
`;

export const FooterContent = styled.div<Props>`
  display: flex;
  gap: 1rem;

  span {
    color: ${props => props.mode ? 'hsl(233, 14%, 35%)':'hsl(236, 9%, 61%)'};
    font-size: 14px;
  }
`;

export const Button = styled.button<Props>`
    background-color: transparent;
    border: none;
    color: ${props => props.active ? 'hsl(220, 98%, 61%)' : props.mode ? 'hsl(233, 14%, 35%)' : 'hsl(236, 9%, 61%)'};
    font-weight: ${props => props.weight ? props.weight : '400'};
    font-size: 14px;
    transition: all .3s ease;
    cursor: pointer;

    &:hover{
      color: ${props => props.mode ? 'hsl(236, 33%, 92%)' : 'hsl(235, 19%, 35%)'};
      transition: all .3s ease;
    }
`;
