import { createGlobalStyle } from 'styled-components';

import theme from './theme';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: ${theme.font};
    color: ${theme.colors.text}
  }

  html, body {
    width: 100%;
    height: 100%;
  }
  
  body {
    background-color: ${theme.colors.primary};
    
    & > #root {
      width: 100%;
      height: 100%;
      padding: 0 10px;
    }
  }
`;
