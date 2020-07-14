import React from "react";
import styles from "./game-panel.css";

export const Button = ({ text, onClick }) => (
  <div className={styles.gamePanel__item} onClick={onClick}>
    {text}
  </div>
);
