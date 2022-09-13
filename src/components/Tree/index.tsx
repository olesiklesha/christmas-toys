import React, { FC } from 'react';
import { Image, ToyImage } from './styles';
import maps from '../../data/maps.json';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleAboveDropZone } from '../../store/reducers/dnd-slice';

const Tree: FC<{ i: number }> = ({ i }) => {
  const dispatch = useAppDispatch();
  const { displaced } = useAppSelector((state) => state.dndSlice);
  const handleDragOver = (e: React.DragEvent<HTMLAreaElement>) => {
    e.preventDefault();
    dispatch(toggleAboveDropZone(true));
  };

  const handleDragLeave = () => {
    dispatch(toggleAboveDropZone(false));
  };

  return (
    <div>
      <map name="tree-map">
        <area
          shape="poly"
          coords={maps[i - 1]}
          alt="tree"
          onDragOver={(e) => handleDragOver(e)}
          onDragLeave={handleDragLeave}
        />
      </map>
      {displaced.length > 0 &&
        displaced.map((el) => (
          <ToyImage
            key={el.target + el.x + el.y}
            x={el.x}
            y={el.y}
            src={`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/christmas-task/assets/toys/${el.target}.png`}
          />
        ))}
      <Image
        useMap="#tree-map"
        src={`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/christmas-task/assets/tree/${i}.png`}
      />
    </div>
  );
};

export default Tree;
