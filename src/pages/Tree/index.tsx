import React from 'react';
import { BlurContainer, MainContainer } from '../../common-styled-components';
import { TreeField, TreeSettings, TreeToys } from '../../components';
import { Container } from './styles';

const Tree = () => {
  return (
    <MainContainer>
      <BlurContainer>
        <Container>
          <TreeSettings />
          <TreeField />
          <TreeToys />
        </Container>
      </BlurContainer>
    </MainContainer>
  );
};

export default Tree;
