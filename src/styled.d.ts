import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    filter: string;
    font: string;
    fontSizes: {
      xs: string;
      s: string;
      m: string;
      ml: string;
      l: string;
      xl: string;
    };
    colors: {
      primary: string;
      secondary: string;
      transpBg: string;
      text: string;
    };
  }
}
