import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {  
  font-family: 'League Spartan', sans-serif;
  height: 100vh; 
  background-color: ${({ theme }) => theme.background};

}
`;

export default GlobalStyle;
