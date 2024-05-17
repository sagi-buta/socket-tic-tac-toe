import React, { useContext, useState } from "react";
import styles from "./style.module.scss";
import DataContext from "../../context/DataContext";

export default function Box({ handleClick, v }) {
  const context = useContext(DataContext);
  // const [displaySymbol, setDisplaySymbol] = useState(false);

  // function handleClick(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   if (displaySymbol) {
  //     return false;
  //   }
  //   if (playArr) {
  //     console.log("names", v, playArr, e.target.name);
  //     let pos = { ...playArr[v.locX][v.locY], symbol: activePlayer.img };
  //     let newPArr = playArr;
  //     newPArr[v.locX][v.locY] = pos;
  //     setPlayArr(newPArr);
  //     console.log("names22", v, playArr, e.target.name, pos);
  //     setDisplaySymbol(!displaySymbol);
  //   }

  //   context.setActivePlayer(
  //     context.activePlayer.symbol == "x" ? context.playerO : context.playerX
  //   );
  // }

  return (
    <>
      <button onClick={() => handleClick()} className={styles.box}>
        {v.img && <img src={v.img} alt="" />}
      </button>
    </>
  );
}
