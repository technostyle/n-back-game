import React from "react";
import styles from "./game-panel.css";

const displayTwoDigits = integer => (integer > 9 ? integer : `0${integer}`);

export const Timer = ({ time }) => {
  if (!time) {
    return <div className={styles.gamePanel__item}>Click Start</div>;
  }

  const totalSeconds = Math.floor(time / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds) % 60;

  return (
    <div className={styles.gamePanel__item}>
      {`${displayTwoDigits(minutes)} : ${displayTwoDigits(seconds)}`}
    </div>
  );
};
