import { useState } from "react";
import "./App.css";
import Hiro from "./components/Hiro";
import DataContext from "./context/DataContext";
import X from "../src/assets/X.png";
import O from "../src/assets/O.png";

function App() {
  const [playArr, setPlayArr] = useState([]);
  const playerX = { name: "x", symbol: "x", img: X };
  const playerO = { name: "o", symbol: "o", img: O };
  const [activePlayer, setActivePlayer] = useState(playerX);

  const valuesprovider = {
    playerO,
    playerX,
    activePlayer,
    setActivePlayer,
    playArr,
    setPlayArr,
  };
  return (
    <>
      <DataContext.Provider value={valuesprovider}>
        <Hiro />
      </DataContext.Provider>
    </>
  );
}

export default App;
