import React from 'react';
import { SettingsTitle } from '../../common-styled-components';
import { COLORS_ARR } from '../../constants';
import { GarlandBtn, InputToggle, LabelToggle, SwitchTarget, SwitchToggle } from './styles';

const GarlandBlock = () => {
  return (
    <div>
      <SettingsTitle>Fairy lights</SettingsTitle>
      <div>
        {COLORS_ARR.map((el) => (
          <GarlandBtn color={el} key={el} />
        ))}
        <LabelToggle>
          <InputToggle type="checkbox" />
          <SwitchToggle />
          <SwitchTarget />
        </LabelToggle>
      </div>
    </div>
  );
};

export default GarlandBlock;
