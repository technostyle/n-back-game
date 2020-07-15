import React from "react";
import styles from "./game-play.css";

const Box = ({ isLighted }) => (
  <div
    className={`${styles.box} ${isLighted ? styles.box_active : ""}`}
  ></div>
);

export const GamePlay = ({ lightedCell, userFailure, userSuccess }) => {
  return (
    <div
      className={`
        ${styles.gamePlay} 
        ${userFailure ? styles.gamePlay_failure : ""}
        ${userSuccess ? styles.gamePlay_success : ""}
      `}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(cell => (
          <Box isLighted={cell === lightedCell} key={cell}/>
      ))}
    </div>
  );
};
