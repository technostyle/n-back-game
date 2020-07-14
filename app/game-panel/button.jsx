import React from "react";
import styles from "./timer.css";

export const Button = ({ text, onClick }) => (
  <div className={styles.timer} onClick={onClick}>
    {text}
  </div>
);
