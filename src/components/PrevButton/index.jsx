import React from "react";
import prev from "./../../assets/btnSolo.png";
import styles from "./style.module.scss";

export default function PrevButton() {
  return (
    <>
      <div className={styles.hiro}>
        <img src={prev} alt="" className={styles.prev} />
      </div>
    </>
  );
}
