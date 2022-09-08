import styled from 'styled-components';
import a from '../../assets/images/tree/1.png';
import b from '../../assets/images/tree/2.png';
import c from '../../assets/images/tree/3.png';
import d from '../../assets/images/tree/4.png';
import f from '../../assets/images/tree/5.png';
import g from '../../assets/images/tree/6.png';

export const TreeBtn = styled.button<{ i: number }>`
  display: block;
  width: 115px;
  height: 115px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  cursor: pointer;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  background-image: url(${(p) => {
    switch (p.i) {
      case 1:
        return a;

      case 2:
        return b;

      case 3:
        return c;

      case 4:
        return d;

      case 5:
        return f;

      case 6:
        return g;
    }
  }});
`;
