import React from "react";
import { NBackInput } from "./n-back-input";
import { StartButton } from "./start-button";
import { Timer } from "./timer";
import styles from "./game-panel.css";

export const GamePanel = () => (
  <div className={styles.gamePanel}>
    <NBackInput onChange={console.log} />
    <StartButton onClick={() => console.log("start")} />
    <Timer time="23.23.12" />
  </div>
);
