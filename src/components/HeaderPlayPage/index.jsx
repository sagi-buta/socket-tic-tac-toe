import React from "react";
import styles from "./style.module.scss";
import player1 from "../../assets/Player 1.png";
import player2 from "../../assets/Player 2.png";

export default function HeaderPlayPage() {
  return (
    <div className={styles.hiro}>
      <img src={player1} alt="" />
      <img src={player2} alt="" />
    </div>
  );
}
