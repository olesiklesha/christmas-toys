import React from 'react';
import { SettingsBtnContainer, SettingsTitle } from '../../common-styled-components';
import { TreeBtn } from './styles';
import { TREE_ARR } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { setTree } from '../../store/reducers/tree-slice';

const TreeBlock = () => {
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent) => {
    const number = Number(e.currentTarget.getAttribute('data-attr')?.split('-')[1]);
    dispatch(setTree(number));
  };

  return (
    <div>
      <SettingsTitle>choose a christmas tree</SettingsTitle>
      <SettingsBtnContainer>
        {TREE_ARR.map((el) => (
          <TreeBtn i={el} key={Date.now() + el} data-attr={'tree-' + el} onClick={handleClick} />
        ))}
      </SettingsBtnContainer>
    </div>
  );
};

export default TreeBlock;
