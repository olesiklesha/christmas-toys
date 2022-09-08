import styled, { css } from 'styled-components';
import { GARLAND_COLOR } from '../../constants';

export const GarlandBtn = styled.button<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 20px;
  cursor: pointer;

  & + & {
    margin-left: 8.125%;
  }

  ${(p) => {
    switch (p.color) {
      case GARLAND_COLOR.MULTI:
        return css`
          background: rgb(252, 0, 0);
          background: linear-gradient(
            145deg,
            rgba(252, 0, 0, 1) 0%,
            rgba(255, 158, 0, 1) 28%,
            rgba(249, 255, 0, 1) 52%,
            rgba(0, 255, 4, 1) 69%,
            rgba(228, 0, 235, 1) 100%
          );
          box-shadow: rgb(0 0 0 / 20%) 0 -1px 7px 1px, inset #441313 0 -1px 9px, #ccc 0 2px 12px;
        `;

      case GARLAND_COLOR.RED:
        return css`
          background: rgb(252, 0, 0);
          background: radial-gradient(
            circle,
            rgba(252, 0, 0, 1) 0%,
            rgba(241, 198, 198, 1) 1%,
            rgba(255, 0, 0, 1) 100%
          );
          box-shadow: rgb(0 0 0 / 20%) 0 -1px 7px 1px, inset rgba(252, 0, 0, 1) 0 -1px 9px,
            rgba(252, 0, 0, 1) 0 2px 12px;
        `;

      case GARLAND_COLOR.BLUE:
        return css`
          background: rgb(0, 132, 252);
          background: radial-gradient(
            circle,
            rgba(0, 132, 252, 1) 0%,
            rgba(198, 212, 241, 1) 1%,
            rgba(0, 132, 252, 1) 100%
          );
          box-shadow: rgb(0 0 0 / 20%) 0 -1px 7px 1px, inset rgba(0, 132, 252, 1) 0 -1px 9px,
            rgba(0, 132, 252, 1) 0 2px 14px;
        `;

      case GARLAND_COLOR.YELLOW:
        return css`
          background: rgb(251, 252, 0);
          background: radial-gradient(
            circle,
            rgba(251, 252, 0, 1) 0%,
            rgba(241, 241, 198, 1) 1%,
            rgba(251, 252, 0, 1) 100%
          );
          box-shadow: rgb(0 0 0 / 20%) 0 -1px 7px 1px, inset rgba(251, 252, 0, 1) 0 -1px 9px,
            rgba(251, 252, 0, 1) 0 2px 12px;
        `;

      case GARLAND_COLOR.GREEN:
        return css`
          background: rgb(0, 252, 12);
          background: radial-gradient(
            circle,
            rgba(0, 252, 12, 1) 0%,
            rgba(218, 251, 219, 1) 1%,
            rgba(0, 252, 12, 1) 100%
          );
          box-shadow: rgb(0 0 0 / 20%) 0 -1px 7px 1px, inset rgba(0, 252, 12, 1) 0 -1px 9px,
            rgba(0, 252, 12, 1) 0 2px 12px;
        `;
    }
  }}
`;
