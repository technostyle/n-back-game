import React, { useState } from "react";
import { NBackInput } from "./n-back-input";
import { StartButton } from "./start-button";
import { Timer } from "./timer";
import styles from "./game-panel.css";
import { GotchaButton } from "game-panel/gotcha-button";

export const GamePanel = ({ startGame, gotcha }) => {
  const [nBack, setNBack] = useState(1);

  const start = () => {
    const settings = { nBack };
    startGame(settings);
  };

  return (
    <div className={styles.gamePanel}>
      <NBackInput onChange={setNBack} />
      <StartButton onClick={start} />
      <Timer time="23.23.12" />
      <GotchaButton gotcha={gotcha} />
    </div>
  );
};
