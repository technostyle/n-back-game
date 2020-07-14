import React from "react";
import styles from "./timer.css";

export const GameResults = ({ gameErrors }) => (
  <div className={styles.timer}>{`Errors: ${gameErrors}`}</div>
);
