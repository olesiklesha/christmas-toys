import styled from 'styled-components';

export const SnowContainer = styled.canvas`
  position: absolute;
  display: flex;
  justify-content: center;
  height: calc(100vh - 130px);
  width: 800px;
  top: 0;
  left: 50%;
  margin-left: -400px;
  pointer-events: none;
  z-index: 90;
  overflow: hidden;
`;
