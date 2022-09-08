import React from 'react';
import { BGBlock, EffectBtnGroup, TreeBlock } from '..';
import { Container } from './styles';

const TreeSettings = () => {
  return (
    <Container>
      <EffectBtnGroup />
      <TreeBlock />
      <BGBlock />
    </Container>
  );
};

export default TreeSettings;
