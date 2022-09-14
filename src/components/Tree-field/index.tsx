import React from 'react';
import { Container } from './styles';
import { Garland, SnowBlock, Tree } from '../index';
import { useAppSelector } from '../../hooks';

const TreeField = () => {
  const { tree, bg } = useAppSelector((state) => state.treeSlice);

  return (
    <Container i={bg}>
      <Tree i={tree} />
      <Garland />
      <SnowBlock />
    </Container>
  );
};

export default TreeField;
