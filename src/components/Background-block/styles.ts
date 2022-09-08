import styled from 'styled-components';
import a from '../../assets/images/bg/1.jpg';
import b from '../../assets/images/bg/2.jpg';
import c from '../../assets/images/bg/3.jpg';
import d from '../../assets/images/bg/4.jpg';
import e from '../../assets/images/bg/5.jpg';
import f from '../../assets/images/bg/6.jpg';
import g from '../../assets/images/bg/7.jpg';
import h from '../../assets/images/bg/8.jpg';
import i from '../../assets/images/bg/9.jpg';
import j from '../../assets/images/bg/10.jpg';

export const BGBtn = styled.button<{ i: number }>`
  display: block;
  width: 65px;
  height: 65px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  cursor: pointer;
  background-size: cover;
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
        return e;

      case 6:
        return f;

      case 7:
        return g;

      case 8:
        return h;

      case 9:
        return j;

      case 10:
        return i;
    }
  }});
`;
