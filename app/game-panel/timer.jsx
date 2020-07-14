import React from "react";
import styles from "./game-panel.css";

export const Timer = ({ time }) => {
  if (!time) {
    return <div className={styles.gamePanel__item}>Click Start</div>;
  }

  const totalSeconds = Math.floor(time / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds) % 60;

  return (
    <div className={styles.gamePanel__item}>{`${minutes} : ${seconds}`}</div>
  );
};
