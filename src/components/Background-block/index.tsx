import React from 'react';
import { SettingsTitle, SettingsBtnContainer } from '../../common-styled-components';
import { BG_ARR } from '../../constants';
import { BGBtn } from './styles';
import { useAppDispatch } from '../../hooks';
import { setBg } from '../../store/reducers/tree-slice';

const BGBlock = () => {
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent) => {
    const num = Number(e.currentTarget.getAttribute('data-attr')?.split('-')[1]);
    dispatch(setBg(num));
  };

  return (
    <div>
      <SettingsTitle>choose a background</SettingsTitle>
      <SettingsBtnContainer>
        {BG_ARR.map((el) => (
          <BGBtn i={el} key={Date.now() + el} data-attr={'bg-' + el} onClick={handleClick} />
        ))}
      </SettingsBtnContainer>
    </div>
  );
};

export default BGBlock;
