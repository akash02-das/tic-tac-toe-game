import React from "react";
import "./App.css";
import Game from "./components/game";

const App = () => {
  return (
    <div className="app">
      <h1>
        <span className="tic">Tic </span>
        <span className="tac">Tac </span>
        <span className="toe">Toe</span>
      </h1>
      <Game />
    </div>
  );
};

export default App;
