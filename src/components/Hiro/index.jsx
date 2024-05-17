import React from "react";
import styles from "./style.module.scss";
import Board from "../Board";
import ChoosePlayer from "../../pages/ChoosePlayer";
import PlayBoard from "../../pages/PlayBoard";
import Menu from "../../pages/Menu";

export default function Hiro() {
  return (
    <div className={styles.hiro}>
      {/* <Menu /> */}
      {/* <ChoosePlayer /> */}
      <PlayBoard />
    </div>
  );
}
