import styled, { css } from 'styled-components';
import { GARLAND_COLOR } from '../../constants';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

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

export const LabelToggle = styled.label`
  display: inline-block;
  width: 70px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  margin-left: auto;
`;

export const SwitchToggle = styled.div`
  position: relative;
  width: 70px;
  height: 32px;
  border-radius: 20px;
  border: 1px solid gray;
  overflow: hidden;

  &::before,
  &::after {
    position: absolute;
    display: block;
    padding-right: 10px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    line-height: 30px;
    font-weight: 700;
    transition: 0.3s;
  }

  &::before {
    content: 'On';
    padding-left: 8px;
    background-color: #278d9f;
    color: #fff;
    transform: translateX(-100%);
  }

  &::after {
    content: 'Off';
    background-color: rgba(31, 112, 127, 0.3);
    color: #278d9f;
    text-align: right;
  }
`;

export const SwitchTarget = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px 0 0 2px;
  background: #fff;
  border-radius: 20px;
  position: absolute;
  top: 3px;
  bottom: 0;
  right: 42px;
  transition: all 0.4s;
`;

export const InputToggle = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${SwitchToggle} {
    &:after {
      transform: translateX(100%);
    }

    &:before {
      transform: translateX(0);
    }
  }

  &:checked ~ ${SwitchTarget} {
    transform: translateX(38px);
  }
`;
