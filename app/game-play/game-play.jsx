import React from "react";
import styles from "./game-play.css";

export const GamePlay = ({ lightedCell }) => {
  return (
    <div className={styles.gamePlay}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(value => (
        <div
          className={`${styles.box} ${
            lightedCell === value ? styles.box_active : ""
          }`}
          key={value}
        ></div>
      ))}
    </div>
  );
};
