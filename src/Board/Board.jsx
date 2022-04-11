import React, { useState, useEffect } from "react";
import Cell from "../Cell/Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

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
