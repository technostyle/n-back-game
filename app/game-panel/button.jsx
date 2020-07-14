import React from "react";
import styles from "./game-panel.css";

export const Button = ({ text, onClick, disabled }) => (
  <button
    className={`${styles.gamePanel__item} ${disabled ? "" : styles.clickable}`}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);
