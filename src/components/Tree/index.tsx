import React, { FC, useState } from 'react';
import { Image, ToyImage } from './styles';
import maps from '../../data/maps.json';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  finishDrag,
  IDraggableItem,
  setTarget,
  toggleAboveDropZone,
} from '../../store/reducers/dnd-slice';

const Tree: FC<{ i: number }> = ({ i }) => {
  const dispatch = useAppDispatch();
  const { displaced } = useAppSelector((state) => state.dndSlice);
  const [cords, setCords] = useState({
    cordX: 0,
    cordY: 0,
  });

  const handleDragOver = (e: React.DragEvent<HTMLAreaElement>) => {
    e.preventDefault();
    dispatch(toggleAboveDropZone(true));
  };

  const handleDragLeave = () => {
    dispatch(toggleAboveDropZone(false));
  };

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>, el: IDraggableItem) => {
    setCords({
      cordX: e.clientX - e.currentTarget.getBoundingClientRect().left,
      cordY: e.clientY - e.currentTarget.getBoundingClientRect().top,
    });
    dispatch(
      setTarget({
        onDrag: true,
        num: el.target,
        x: el.x,
        y: el.y,
      })
    );
  };

  const dragEndHandler = (e: React.DragEvent<HTMLImageElement>, el: IDraggableItem) => {
    e.preventDefault();
    dispatch(
      finishDrag({
        target: el.target,
        y: e.pageY - cords.cordY - 70,
        x: e.pageX - cords.cordX,
      })
    );
    setCords({ cordX: 0, cordY: 0 });
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
            onDragStart={(e) => handleDragStart(e, el)}
            onDragEnd={(e) => dragEndHandler(e, el)}
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
