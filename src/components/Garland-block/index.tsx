import React from 'react';
import { SettingsTitle } from '../../common-styled-components';
import { COLORS_ARR } from '../../constants';
import {
  Container,
  GarlandBtn,
  InputToggle,
  LabelToggle,
  SwitchTarget,
  SwitchToggle,
} from './styles';

const GarlandBlock = () => {
  return (
    <div>
      <SettingsTitle>Fairy lights</SettingsTitle>
      <Container>
        {COLORS_ARR.map((el) => (
          <GarlandBtn color={el} key={el} />
        ))}
        <LabelToggle>
          <InputToggle type="checkbox" />
          <SwitchToggle />
          <SwitchTarget />
        </LabelToggle>
      </Container>
    </div>
  );
};

export default GarlandBlock;
