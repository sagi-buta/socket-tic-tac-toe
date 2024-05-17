import React from "react";
import styles from "./style.module.scss";
import logo from "./../../assets/Logo.png";
import ButtonTxt from "../../components/ButtonTxt";

export default function Menu() {
  return (
    <>
      <div className={styles.hiro}>
        <div className={styles.headlogo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.btnBar}>
          <ButtonTxt text={"PLAY SOLO"} />
          <ButtonTxt text={"PLAY WITH A FRIEND"} />
        </div>
      </div>
    </>
  );
}
