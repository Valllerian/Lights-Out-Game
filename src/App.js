import React, { Component } from "react";
import Board from "./Board/Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */



function App() {
  return (
    <div className="App flex h-screen justify-center items-center">
      <Board />
    </div>
  );
}

export default App;
