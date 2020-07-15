import React from "react";
import styles from "./game-panel.css";

export const Button = ({ text, onClick, disabled, gotcha }) => (
  <button
    className={`
      ${styles.gamePanel__item} ${disabled ? "" : styles.clickable} 
      ${gotcha ? styles.gamePanel__gotcha : ""}
    `}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);
