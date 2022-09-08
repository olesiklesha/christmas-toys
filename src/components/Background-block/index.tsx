import React from 'react';
import { SettingsTitle, SettingsBtnContainer } from '../../common-styled-components';
import { BG_ARR } from '../../constants';
import { BGBtn } from './styles';

const BGBlock = () => {
  return (
    <div>
      <SettingsTitle>choose a background</SettingsTitle>
      <SettingsBtnContainer>
        {BG_ARR.map((el) => (
          <BGBtn i={el} key={Date.now() + el} />
        ))}
      </SettingsBtnContainer>
    </div>
  );
};

export default BGBlock;
