import styled from 'styled-components';
import darkBg from '../../assets/bg-desktop-dark.jpg';
import lightBg from '../../assets/bg-desktop-light.jpg';

interface Props {
  mode: boolean;
}

export const Container = styled.header<Props>`
  background-image: ${props => props.mode ? `url(${darkBg})` : `url(${lightBg})`};
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 25vh;

  transition: all .3s ease;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentSection = styled.section`
  max-width: 768px;
  width: 100%;
  padding: 24px;
  flex: 1;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    color: white;
    letter-spacing: 10px;
    font-size: 2.5rem;
  }

  img {
    cursor: pointer;
  }
`;

export const Input = styled.input<Props>`
  width: 100%;
  padding: 1rem;
  background-color: transparent;
  border: none;
  color: ${props => props.mode ? 'hsl(234, 39%, 85%)' : 'hsl(236, 9%, 61%)'};
  outline: none;
  font-size: 1rem;
`;
