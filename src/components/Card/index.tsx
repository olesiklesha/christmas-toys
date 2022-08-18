import React, { FC } from 'react';
import { IToy } from '../../models';

const Card: FC<IToy> = ({ name }) => {
  return <div>{name}</div>;
};

export default Card;
