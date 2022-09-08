import React from 'react';
import { SettingsBtnContainer, SettingsTitle } from '../../common-styled-components';
import { TreeBtn } from './styles';
import { TREE_ARR } from '../../constants';

const TreeBlock = () => {
  return (
    <div>
      <SettingsTitle>choose a christmas tree</SettingsTitle>
      <SettingsBtnContainer>
        {TREE_ARR.map((el) => (
          <TreeBtn i={el} key={Date.now() + el} />
        ))}
      </SettingsBtnContainer>
    </div>
  );
};

export default TreeBlock;
