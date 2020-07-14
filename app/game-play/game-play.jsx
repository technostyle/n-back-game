import React from "react";
import styles from "./game-play.css";

export const GamePlay = ({ lightedCell, userFailure }) => {
  return (
    <div
      className={`${styles.gamePlay} ${
        userFailure ? styles.gamePlay_failure : ""
      }`}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(value => (
        <div
          className={`
          ${styles.box} 
          ${lightedCell === value ? styles.box_active : ""}
          `}
          key={value}
        ></div>
      ))}
    </div>
  );
};
