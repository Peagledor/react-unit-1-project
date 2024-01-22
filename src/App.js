import { useState } from "react";
import "./App.css";
import Square from "./Square";
// import logo from "./logo.svg";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""]);
    setPlayer(true);
  }

  return (
    <div className="App">
      <div className="container">
        {squares.map((value, index) => {
          return (
            <Square
            setSquares={setSquares}
            index={index}
            squareValue={value}
            squares={squares}
            player={player}
            setPlayer={setPlayer}
            />
            
            );
          }
          )}
      </div>
          <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
