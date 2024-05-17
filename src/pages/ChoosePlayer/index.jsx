import React from "react";
import Board from "../../components/Board";
import ButtonTxt from "../../components/ButtonTxt";
import styles from "./style.module.scss";
import Titles from "../../components/Titles";
import PrevButton from "../../components/PrevButton";

export default function ChoosePlayer() {
  return (
    <>
      <div className={styles.hiro}>
        {/* <div className={styles.headContainer}> */}
        <PrevButton />
        <Titles text={"CHOOSE PLAYER"} />
        {/* </div> */}
        <Board boardSize={""} />
        <span className={styles.buttensBar}>
          <ButtonTxt text={"LET'S PLAY"} handleClick={""} />
        </span>
      </div>
    </>
  );
}
