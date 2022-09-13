import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 84px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const ToyImage = styled.img<{ isDraggable: boolean }>`
  width: 60px;
  height: 60px;
  object-fit: contain;
  cursor: ${(p) => (p.isDraggable ? 'grab' : 'auto')};
`;

export const Counter = styled.span`
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #24c5db;
  bottom: 5px;
  right: 5px;
  text-align: center;
  line-height: 22px;
`;
