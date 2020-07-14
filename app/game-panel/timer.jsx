import React, { useState, useEffect } from "react";
import styles from "./timer.css";

const SECOND = 1000;

export const Timer = ({ time }) => {
  if (!time) {
    return <div className={styles.timer}>Click Start</div>;
  }
  const totalSeconds = Math.floor(time / SECOND);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds) % 60;

  return <div className={styles.timer}>{`${minutes} : ${seconds}`}</div>;
};
