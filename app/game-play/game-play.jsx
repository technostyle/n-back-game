import React from "react";
import styles from "./game-play.css";

const clicker = data => () => console.log(data);

export const GamePlay = () => {
  return (
    <div className={styles.gamePlay}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(value => (
        <div className={styles.box} key={value} onClick={clicker(value)}>
          {" "}
        </div>
      ))}
    </div>
  );
};
