import React from 'react';
import { Container } from './styles';
import { Garland, Tree } from '../index';
import { useAppSelector } from '../../hooks';

const TreeField = () => {
  const { tree, bg } = useAppSelector((state) => state.treeSlice);

  return (
    <Container i={bg}>
      <Tree i={tree} />
      <Garland />
    </Container>
  );
};

export default TreeField;
