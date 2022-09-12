import React from 'react';
import './styles.scss';
import { useAppSelector } from '../../hooks';
import { GARLAND } from '../../constants';

const Garland = () => {
  const { color, isOn } = useAppSelector((state) => state.treeSlice.garland);
  const { line2, line3, line4, line5, line6, line7, line8, line1 } = GARLAND;
  return (
    <div className={`garland-container ${isOn ? '' : 'hide'}`}>
      <ul className="light-rope">
        {line1.map((el, i) => (
          <li className={color} key={Date.now() + 'line1' + el + i} />
        ))}
      </ul>
      <ul className="light-rope">
        {line2.map((el, i) => (
          <li className={color} key={Date.now() + 'line2' + el + i} />
        ))}
      </ul>
      <ul className="light-rope">
        {line3.map((el, i) => (
          <li className={color} key={Date.now() + 'line3' + el + i} />
        ))}
      </ul>
      <ul className="light-rope">
        {line4.map((el, i) => (
          <li className={color} key={Date.now() + 'line4' + el + i} />
        ))}
      </ul>
      <ul className="light-rope">
        {line5.map((el, i) => (
          <li className={color} key={Date.now() + 'line5' + el + i} />
        ))}
      </ul>
      <ul className="light-rope">
        {line6.map((el, i) => (
          <li className={color} key={Date.now() + 'line6' + el + i} />
        ))}
      </ul>
      <ul className="light-rope">
        {line7.map((el, i) => (
          <li className={color} key={Date.now() + 'line7' + el + i} />
        ))}
      </ul>
      <ul className="light-rope">
        {line8.map((el, i) => (
          <li className={color} key={Date.now() + 'line8' + el + i} />
        ))}
      </ul>
    </div>
  );
};

export default Garland;
