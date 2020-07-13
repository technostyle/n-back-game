import React from "react";
import styles from "./timer.css";

export const StartButton = ({ onClick }) => (
  <div className={styles.timer} onClick={onClick}>
    Start
  </div>
);
