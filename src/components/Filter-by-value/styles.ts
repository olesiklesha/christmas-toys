import styled from 'styled-components';
import ball from '../../assets/icons/ball.svg';
import bell from '../../assets/icons/bell.svg';
import cone from '../../assets/icons/cone.svg';
import snowflake from '../../assets/icons/snowflake.svg';
import figure from '../../assets/icons/toy.svg';

export const ShapesCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  & + label::before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    flex-grow: 0;
    background-color: transparent;
    background-size: cover;
    background-position: center;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  &:checked + label::before {
    filter: invert(42%) sepia(77%) saturate(401%) hue-rotate(141deg) brightness(96%) contrast(92%);
  }
`;

export const ShapesCBWrapper = styled.div`
  &:nth-of-type(1) ${ShapesCheckbox} + label::before {
    background-image: url(${ball});
  }

  &:nth-of-type(2) ${ShapesCheckbox} + label::before {
    background-image: url(${bell});
  }

  &:nth-of-type(3) ${ShapesCheckbox} + label::before {
    background-image: url(${cone});
  }

  &:nth-of-type(4) ${ShapesCheckbox} + label::before {
    background-image: url(${snowflake});
  }

  &:nth-of-type(5) ${ShapesCheckbox} + label::before {
    background-image: url(${figure});
  }
`;

export const SizesCheckbox = styled(ShapesCheckbox)`
  & + label::before {
    background-image: url(${ball});
    background-repeat: no-repeat;
  }

  &:checked + label::before {
    filter: invert(42%) sepia(77%) saturate(401%) hue-rotate(141deg) brightness(96%) contrast(92%);
  }
`;

export const SizesCBWrapper = styled.div`
  &:nth-of-type(1) ${SizesCheckbox} + label::before {
    -webkit-background-size: 40px 40px;
    background-size: 40px 40px;
  }

  &:nth-of-type(2) ${SizesCheckbox} + label::before {
    -webkit-background-size: 35px 35px;
    background-size: 35px 35px;
  }

  &:nth-of-type(3) ${SizesCheckbox} + label::before {
    -webkit-background-size: 30px 30px;
    background-size: 30px 30px;
  }
`;

export const ColorsCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + label {
    display: block;
    user-select: none;
    position: relative;
  }

  & + label::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    flex-grow: 0;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  & + label::after {
    content: '';
    display: none;
    position: absolute;
    top: 8px;
    left: 11px;
    width: 7px;
    height: 12px;
    border: solid #000;
    border-width: 0 4px 4px 0;
    transform: rotate(45deg);
    cursor: pointer;
  }

  &:checked + label::after {
    display: block;
  }
`;

export const ColorsCBWrapper = styled.div`
  &:nth-of-type(1) ${ColorsCheckbox} + label::before {
    background-color: #fff;
  }

  &:nth-of-type(2) ${ColorsCheckbox} + label::before {
    background-color: #fdd700;
  }

  &:nth-of-type(3) ${ColorsCheckbox} + label::before {
    background-color: #fd0000;
  }

  &:nth-of-type(4) ${ColorsCheckbox} + label::before {
    background-color: #2199eb;
  }

  &:nth-of-type(5) ${ColorsCheckbox} + label::before {
    background-color: #08aa05;
  }
`;

export const FavouritesCheckbox = styled(ColorsCheckbox)`
  & + label::before {
    border: 2px solid ${(p) => p.theme.colors.secondary};
  }

  & + label::after {
    border: solid #fff;
    border-width: 0 4px 4px 0;
  }
`;
