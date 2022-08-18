import React from 'react';
import { CustomHeader, CustomLink, IconLink, NavContainer } from './styles';
import { AppRoutes } from '../../constants';

const Header = () => {
  return (
    <CustomHeader>
      <NavContainer>
        <IconLink to={AppRoutes.MAIN} />
        <CustomLink to={AppRoutes.TOYS}>toys</CustomLink>
        <CustomLink to={AppRoutes.TREE}>Christmas tree</CustomLink>
      </NavContainer>
    </CustomHeader>
  );
};

export default Header;
