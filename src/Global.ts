import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 18px;
    font-family: 'Josefin Sans', sans-serif;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    width: 100%;
    height: 100vh;
    background-color: hsl(235, 21%, 11%);

    input {
      font-family: 'Josefin Sans', sans-serif;
    }
  }
`;
