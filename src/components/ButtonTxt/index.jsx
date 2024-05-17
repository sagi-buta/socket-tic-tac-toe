import React from "react";
import styles from "./style.module.scss";

export default function ButtonTxt({ text }) {
  return (
    <button className={styles.hiro}>
      <span>{text}</span>
    </button>
  );
}
