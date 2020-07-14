import React, { useState, useEffect } from "react";
import styles from "./timer.css";

export const Timer = ({ time, play, stop }) => {
  // const [time, setTime] = useState(startTime);
  // const interval = setInterval(setTime(time - 1), 1000);
  // useEffect(() => {
  //
  // }, time)
  return <div className={styles.timer}>{time}</div>;
};
