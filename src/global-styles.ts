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
  }

  html, body {
    width: 100%;
    height: 100%;
  }
  
  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }
`;
