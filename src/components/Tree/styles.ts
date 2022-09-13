import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  width: 500px;
  height: 714px;
`;

export const ToyImage = styled.img<{ x: number; y: number }>`
  position: absolute;
  top: ${(p) => `${p.y}px`};
  left: ${(p) => `${p.x}px`};
  width: 60px;
  height: 60px;
  object-fit: contain;
  cursor: grab;
  z-index: 1;
`;
