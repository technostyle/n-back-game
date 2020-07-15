import React from "react";
import styles from "./game-panel.css";

const displayTwoDigits = integer => (integer > 9 ? integer : `0${integer}`);
const getDisplayTime = ms => {
  const totalSeconds = Number.isInteger(ms) ? Math.floor(ms / 1000) : 0;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds) % 60;

  return `${displayTwoDigits(minutes)} : ${displayTwoDigits(seconds)}`;
};

export const Timer = ({ time }) => (
  <div className={`${styles.gamePanel__item} ${styles.gamePanel__timer}`}>
    {getDisplayTime(time)}
  </div>
);
