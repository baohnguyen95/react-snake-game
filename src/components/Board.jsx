import { useState, useEffect } from 'react';
import { Snake } from './Snake';

import '../css/Board.css';

export const Board = () => {
  const [headPos, setHeadPos] = useState([4,5])
  const [playField] = useState([
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
  ]);

  const handleKeyDown = (event) => {
    let newPos = [headPos[0], headPos[1]];
    if (event.key === "ArrowUp") newPos[0] -= 1;
    else if (event.key === "ArrowDown") newPos[0] += 1;
    else if (event.key === "ArrowRight") newPos[1] += 1;
    else if (event.key === "ArrowLeft") newPos[1] -= 1;

    if (newPos[0] >= playField.length || newPos[0] < 0 || newPos[1] >= playField[0].length || newPos[1] < 0) {
      setHeadPos([4,5]);
    } else {
      setHeadPos(newPos);
    };
  }

  return (
    <div 
      className="board"
      onKeyDown={handleKeyDown}
      tabIndex="0"    
    >
      {playField.map((row,rowIndex) => (
        row.map((col,colIndex) => {
          const key = `${rowIndex}-${colIndex}`
          if (rowIndex === headPos[0] && colIndex === headPos[1]) {
            return <Snake key={key}/>
          } else {
            return <div key={key}/>
          }
        } 
      )))}
    </div>
  )
}
