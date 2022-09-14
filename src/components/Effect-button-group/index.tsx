import React from 'react';
import { AudioBtn, SnowBtn } from './styles';
import { useAppDispatch } from '../../hooks';
import { toggleSnow } from '../../store/reducers/tree-slice';

const EffectBtnGroup = () => {
  const dispatch = useAppDispatch();
  const handleSnowBtnClick = () => {
    dispatch(toggleSnow());
  };

  return (
    <div>
      <AudioBtn />
      <SnowBtn onClick={handleSnowBtnClick} />
    </div>
  );
};

export default EffectBtnGroup;
