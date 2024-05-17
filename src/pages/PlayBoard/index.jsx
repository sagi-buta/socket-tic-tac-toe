import React from "react";
import styles from "./style.module.scss";
import Board from "../../components/Board";
import X from "../../assets/X.png";
import O from "../../assets/O.png";
import HeaderPlayPage from "../../components/HeaderPlayPage";
import ButtonTxt from "../../components/ButtonTxt";

export default function PlayBord() {
  // const [activePlayer, setActivePlayer] = useState();

  return (
    <>
      <div className={styles.hiro}>
        <HeaderPlayPage />

        <Board boardSize={3} />

        <div className={styles.buttensBar}>
          <ButtonTxt text={"BACK"} handleClick={""} />
          {/* <ButtonTxt text={"PLAY AGNE"} handleClick={""} />
          <ButtonTxt text={"BACK TO MAIN"} handleClick={""} /> */}
        </div>
      </div>
    </>
  );
}
