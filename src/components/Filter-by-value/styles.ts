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
