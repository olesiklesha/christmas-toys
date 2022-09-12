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

export const ToyImage = styled.div<{ i: string }>`
  width: 60px;
  height: 60px;
  background-size: contain;
  background-image: url(${(p) =>
    `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/christmas-task/assets/toys/${p.i}.png`});
  cursor: grab;
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
