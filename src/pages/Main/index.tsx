import React from 'react';
import { MainContainer } from '../../common-styled-components';
import { CustomContainer, CustomLink, Title } from './styles';
import { AppRoutes } from '../../constants';

const Main = () => {
  return (
    <MainContainer>
      <CustomContainer>
        <Title>
          New Year&apos;s game<span>«Dress up the Christmas tree»</span>
        </Title>
        <CustomLink to={AppRoutes.TOYS}>Start</CustomLink>
      </CustomContainer>
    </MainContainer>
  );
};

export default Main;
