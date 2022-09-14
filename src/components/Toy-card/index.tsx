import React, { FC, useEffect, useState } from 'react';
import { IToy } from '../../models';
import { Container, Counter, ToyImage } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { finishDrag, setTarget } from '../../store/reducers/dnd-slice';

const ToyCard: FC<IToy> = ({ count, num }) => {
  const [counter, setCounter] = useState(+count);
  const { displaced } = useAppSelector((state) => state.dndSlice);

  useEffect(() => {
    const elInArr = displaced.filter((el) => el.target === num).length;
    setCounter(+count - elInArr);
  }, [displaced]);

  const [cords, setCords] = useState({
    cordX: 0,
    cordY: 0,
  });

  const dispatch = useAppDispatch();

  const dragStartHandler = (e: React.DragEvent<HTMLImageElement>) => {
    setCords({
      cordX: e.clientX - e.currentTarget.getBoundingClientRect().left,
      cordY: e.clientY - e.currentTarget.getBoundingClientRect().top,
    });
    dispatch(setTarget({ onDrag: false, num }));
  };

  const dragEndHandler = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
    dispatch(
      finishDrag({
        target: num,
        y: e.pageY - cords.cordY - 70,
        x: e.pageX - cords.cordX,
      })
    );
  };

  const currentNum = +num + 1;

  return (
    <Container>
      <ToyImage
        isDraggable={Boolean(counter)}
        src={`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/christmas-task/assets/toys/${currentNum}.png`}
        draggable={Boolean(counter)}
        onDragStart={(e) => dragStartHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}
      />
      <Counter>{counter}</Counter>
    </Container>
  );
};

export default ToyCard;
