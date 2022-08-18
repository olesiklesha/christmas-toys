import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import linkIcon from '../../assets/icons/tree.svg';

export const NavContainer = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const CustomHeader = styled.header`
  max-width: 1600px;
  margin: 0 auto;
  height: 70px;
  padding: 0 10px;
`;

export const CustomLink = styled(NavLink)`
  font-size: ${(p) => p.theme.fontSizes.m};
  text-decoration: none;
  text-transform: uppercase;
`;

export const IconLink = styled(NavLink)`
  display: block;
  width: 48px;
  height: 55px;
  background-image: url(${linkIcon});
  background-size: cover;
`;
