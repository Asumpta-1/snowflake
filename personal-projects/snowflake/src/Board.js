import React, { useState } from "react";
import Square from "./Square";
import "./App.css";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const squareValue = squares.slice();
    if (xIsNext) {
      squareValue[i] = "X";
    } else {
      squareValue[i] = "O";
    }

    setSquares(squareValue);
    setXIsNext(!xIsNext);
  }
  function calculateWinner(squares) {
    const possibleWinners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < possibleWinners.length; i++) {
      const [a, b, c] = possibleWinners[i];
      if (squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="mainDiv">
      <div>{status}</div>
      <div className="br">
        <Square onHandleClick={() => handleClick(0)} value={squares[0]} />
        <Square onHandleClick={() => handleClick(1)} value={squares[1]} />
        <Square onHandleClick={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className="br">
        <Square onHandleClick={() => handleClick(3)} value={squares[3]} />
        <Square onHandleClick={() => handleClick(4)} value={squares[4]} />
        <Square onHandleClick={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className="br">
        <Square onHandleClick={() => handleClick(6)} value={squares[6]} />
        <Square onHandleClick={() => handleClick(7)} value={squares[7]} />
        <Square onHandleClick={() => handleClick(8)} value={squares[8]} />
      </div>
    </div>
  );
}

export default Board;
