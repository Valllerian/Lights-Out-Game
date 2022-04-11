import React, { useState, useEffect } from "react";
import Cell from "../Cell/Cell";
import "./Board.css";

// add a function that flips cells;
// on click change on\off style

const Board = () => {
  const [columns, setColumns] = useState(8);
  const [rows, setRows] = useState(8);
  const [hasWon, setHasWon] = useState(false);
  const [board, setBoard] = useState([]);

  useEffect(() => {
    createRows();
  }, []);

  const createColumns = () => {
    var result = [];
    var states = [true, false];
    for (let i = 0; i < columns; i++) {
      result.push(states[Math.floor(Math.random() * 2)]);
    }
    return result;
  };

  const createRows = () => {
    var fullResult = [];
    for (let i = 0; i < rows; i++) {
      fullResult.push(createColumns());
    }
    setBoard(fullResult);
  };

  const handleClick = (e) => {
    e.preventDefault();
    createRows();
  };



  return (
    <div>
      <div>
        <div className="inline-grid grid-cols-8 ">
          {board.map((row) => {
            return (
              <div key={row.length * Math.floor(Math.random() * 999999999)}>
                {row.map((element) => {
                  return (
                    <div key={Math.floor(Math.random() * 999999999)}>
                      {" "}
                      <Cell isLit={element} />
                      {element}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <button onClick={(e) => handleClick(e)}>New Board</button>
      </div>
    </div>
  );
};

export default Board;
