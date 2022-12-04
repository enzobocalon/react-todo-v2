import styled from 'styled-components';
import darkBg from '../../assets/bg-desktop-dark.jpg';

export const Container = styled.header`
  background-image: url(${darkBg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 25vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentSection = styled.section`
  max-width: 768px;
  width: 100%;
  padding: 20px;
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

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background-color: transparent;
  border: none;
  color: hsl(234, 39%, 85%);
  outline: none;
  font-size: 1rem;
`;
