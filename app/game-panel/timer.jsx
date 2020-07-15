import React from "react";
import styles from "./game-panel.css";

const displayTwoDigits = integer => (integer > 9 ? integer : `0${integer}`);

export const Timer = ({ time }) => {
  if (!time) {
    return <div className={`${styles.gamePanel__item} ${styles.gamePanel__timer}`}>00 : 00</div>;
  }

  const totalSeconds = Math.floor(time / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds) % 60;

  return (
    <div className={`${styles.gamePanel__item} ${styles.gamePanel__timer}`}>
      {`${displayTwoDigits(minutes)} : ${displayTwoDigits(seconds)}`}
    </div>
  );
};
