import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0 40px;
`;

export const Block = styled.div`
  position: relative;
  width: 500px;
  height: 320px;
  padding: 10px 20px;
  background-color: ${(p) => p.theme.colors.transpBg};
  border-radius: 20px;
`;

export const BlockTitle = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.m};
  margin: 10px 0 20px;
  text-transform: uppercase;
  font-weight: 500;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  height: 60px;
  font-size: ${(p) => p.theme.fontSizes.s};
`;
