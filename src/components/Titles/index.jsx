import React from "react";
import styles from "./style.module.scss";

export default function Titles({ text }) {
  return <div className={styles.title}>{text}</div>;
}
