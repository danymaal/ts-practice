import React, { FC, useState } from 'react';

const Events: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAG');
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log('Dropped');
  };

  return (
    <div>
      <input value={value} onChange={changeHandler} />
      <button onClick={clickHandler}>Something</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: '200px', height: '200px', background: 'teal' }}></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: '200px',
          height: '200px',
          background: isDrag ? 'black' : 'red',
          marginTop: '10px',
        }}></div>
    </div>
  );
};

export default Events;
