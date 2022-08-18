import { DefaultTheme } from 'styled-components';

const font = 'Helvetica Neue, serif';
const filter = 'blur(5px)';
const primary = '#121C1E';
const secondary = '#278D9F';
const transpBg = 'rgba(31, 112, 127, 0.3)';
const text = '#ffffff';

// export default {
//   filter,
//   font,
//   fontSizes: {
//     xs: 16,
//     s: 18,
//     m: 20,
//     ml: 22,
//     l: 30,
//     xl: 40,
//   },
//   colors: {
//     primary,
//     secondary,
//     transpBg,
//     text,
//   },\
// };

const theme: DefaultTheme = {
  filter,
  font,
  colors: {
    primary,
    secondary,
    text,
    transpBg,
  },
  fontSizes: {
    xs: '16px',
    s: '18px',
    m: '20px',
    ml: '22px',
    l: '30px',
    xl: '40px',
  },
};

export default theme;
