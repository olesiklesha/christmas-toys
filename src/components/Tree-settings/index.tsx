import React from 'react';
import { BGBlock, EffectBtnGroup, GarlandBlock, TreeBlock } from '..';
import { Container } from './styles';

const TreeSettings = () => {
  return (
    <Container>
      <EffectBtnGroup />
      <TreeBlock />
      <BGBlock />
      <GarlandBlock />
    </Container>
  );
};

export default TreeSettings;
