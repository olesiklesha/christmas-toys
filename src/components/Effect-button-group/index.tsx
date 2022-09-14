import React, { useEffect } from 'react';
import { AudioBtn, SnowBtn } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleMusic, toggleSnow } from '../../store/reducers/tree-slice';
import music from '../../assets/audio/music.mp3';

const audio = new Audio();
audio.src = music;
audio.loop = true;

const EffectBtnGroup = () => {
  const { music: isMusicOn } = useAppSelector((state) => state.treeSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isMusicOn) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isMusicOn]);

  const handleSnowBtnClick = () => {
    dispatch(toggleSnow());
  };

  const handleAudioBtnClick = () => {
    dispatch(toggleMusic());
  };

  return (
    <div>
      <AudioBtn onClick={handleAudioBtnClick} />
      <SnowBtn onClick={handleSnowBtnClick} />
    </div>
  );
};

export default EffectBtnGroup;
