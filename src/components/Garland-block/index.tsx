import React from 'react';
import { SettingsTitle } from '../../common-styled-components';
import { COLORS_ARR, GARLAND_COLOR } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  Container,
  GarlandBtn,
  InputToggle,
  LabelToggle,
  SwitchTarget,
  SwitchToggle,
} from './styles';
import { setGarlandColor, toggleGarland } from '../../store/reducers/tree-slice';

const GarlandBlock = () => {
  const { isOn } = useAppSelector((state) => state.treeSlice.garland);
  const dispatch = useAppDispatch();

  const handleCheckBoxChange = () => {
    dispatch(toggleGarland());
  };

  const handleClick = (e: React.MouseEvent) => {
    const color = e.currentTarget.getAttribute('data-attr') as GARLAND_COLOR;
    dispatch(setGarlandColor(color));
  };

  return (
    <div>
      <SettingsTitle>Fairy lights</SettingsTitle>
      <Container>
        {COLORS_ARR.map((el) => (
          <GarlandBtn color={el} key={el} data-attr={el} onClick={handleClick} />
        ))}
        <LabelToggle>
          <InputToggle type="checkbox" checked={isOn} onChange={handleCheckBoxChange} />
          <SwitchToggle />
          <SwitchTarget />
        </LabelToggle>
      </Container>
    </div>
  );
};

export default GarlandBlock;
