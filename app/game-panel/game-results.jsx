import React from "react";
import styles from "./game-panel.css";

export const GameResults = ({ gameErrors }) => (
  <div className={styles.gamePanel__item}>{`Errors: ${gameErrors}`}</div>
);
