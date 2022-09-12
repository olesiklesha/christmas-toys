import React, { FC } from 'react';
import { Image } from './styles';
import maps from '../../data/maps.json';

const Tree: FC<{ i: number }> = ({ i }) => {
  return (
    <>
      <map name="tree-map">
        <area shape="poly" coords={maps[i - 1]} alt="tree" />
      </map>
      <Image
        useMap="#tree-map"
        src={`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/christmas-task/assets/tree/${i}.png`}
      />
    </>
  );
};

export default Tree;
