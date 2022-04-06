import React, { useState } from "react";
import "./Cell.css";

/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

const Cell = (props) => {
  // const [isLit, setIsLit] = useState(false);
  let Lit = props.isLit
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  const handleClick = () => {
    // call up to the board to flip cells around this cell
    // this.props.flipCellsAroundMe();
    
    console.log(Lit)
  };

  let classes = "Cell" + (Lit ? " Cell-lit" : "");
  return <td className={classes} onClick={handleClick} />;
};

export default Cell;
