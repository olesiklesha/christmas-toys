import styled from 'styled-components';
import audioIcon from '../../assets/icons/audio.svg';
import snowIcon from '../../assets/icons/snow.svg';

export const AudioBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${audioIcon});
`;

export const SnowBtn = styled(AudioBtn)`
  background-image: url(${snowIcon});
  margin-left: 20px;
`;
