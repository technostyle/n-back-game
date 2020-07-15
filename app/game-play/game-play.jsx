import React from "react";
import { arrayFromOneToN } from "common/utils";
import styles from "./game-play.css";

const Box = ({ isLighted }) => (
  <div className={`${styles.box} ${isLighted ? styles.box_active : ""}`}></div>
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
      {arrayFromOneToN(9).map(cell => (
        <Box isLighted={cell === lightedCell} key={cell} />
      ))}
    </div>
  );
};
