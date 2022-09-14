import React, { useCallback, useEffect, useState } from 'react';
import { SnowContainer } from './styles';
import { useAppSelector } from '../../hooks';
import Snow from '../../utils/snow';

const SnowBlock = () => {
  const { snow } = useAppSelector((state) => state.treeSlice);
  const [snowAnimation, setSnowAnimation] = useState<Snow | null>(null);

  const measuredRef = useCallback((node: HTMLCanvasElement) => {
    if (node !== null) {
      setSnowAnimation(new Snow(node));
    }
  }, []);

  useEffect(() => {
    if (!snowAnimation) return;
    if (snow) {
      snowAnimation.init();
      snowAnimation.render();
    } else {
      snowAnimation.destroy();
    }
  }, [snow, snowAnimation]);

  return <SnowContainer ref={measuredRef} />;
};

export default SnowBlock;
