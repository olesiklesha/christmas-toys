import styled from 'styled-components';
import startIcon from '../../assets/icons/star.svg';

export const Container = styled.div<{ isSelected: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 304px;
  height: 280px;
  padding-left: 10px;
  border-radius: 10px;
  border: 1px solid ${(p) => p.theme.colors.secondary};
  background-color: ${(p) => p.theme.colors.transpBg};
  cursor: pointer;
  backdrop-filter: ${(p) => p.theme.filter};

  &::after {
    position: absolute;
    content: '';
    display: ${(p) => (p.isSelected ? 'block' : 'none')};
    width: 40px;
    height: 40px;
    background-color: transparent;
    background-image: url(${startIcon});
    background-size: 40px 40px;
    left: 20px;
    bottom: 20px;
    transition: 0.3s ease-in-out;
  }
`;

export const Title = styled.h3`
  width: 100%;
  margin: 20px 0;
  padding-left: 10px;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-stretch: condensed;
`;

export const Picture = styled.div<{ num: string }>`
  width: 90px;
  height: 110px;
  background-image: url(${(p) =>
    `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/christmas-task/assets/toys/${p.num}.png`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TextContainer = styled.div`
  padding-right: 10px;
`;

export const Text = styled.p`
  margin: 0 0 15px 0;
`;
