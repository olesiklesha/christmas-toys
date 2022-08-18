import styled from 'styled-components';
import { Container } from '../../common-styled-components';
import { Link } from 'react-router-dom';

export const CustomContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${(p) => p.theme.fontSizes.xl};
  width: 600px;
  height: 250px;
  border: 2px solid ${(p) => p.theme.colors.secondary};
  background-color: ${(p) => p.theme.colors.transpBg};
  border-radius: 10px;
  backdrop-filter: ${(p) => p.theme.filter};
`;

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 60px;
  border: 2px solid ${(p) => p.theme.colors.secondary};
  background-color: ${(p) => p.theme.colors.transpBg};
  border-radius: 30px;
  font-size: ${(p) => p.theme.fontSizes.ml};
  text-decoration: none;
  color: inherit;
  backdrop-filter: ${(p) => p.theme.filter};
  transition: 0.3s ease-in-out;

  &:hover {
    color: $border;
  }
`;
