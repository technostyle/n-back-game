import React, { useState } from "react";
import { NBackInput } from "./n-back-input";
import { Button } from "game-panel/button";
import { Timer } from "./timer";
import styles from "./game-panel.css";
import { GotchaButton } from "./gotcha-button";
import { GameResults } from "./game-results";

export const GamePanel = ({ startGame, stopGame, gotcha, gameErrors }) => {
  const [nBack, setNBack] = useState(1);

  const start = () => {
    const settings = { nBack };
    startGame(settings);
  };

  return (
    <div className={styles.gamePanel}>
      <NBackInput onChange={setNBack} />
      <Timer time="23.23.12" />
      <Button text="Start" onClick={start} />
      <Button text="Stop" onClick={stopGame} />
      <GameResults gameErrors={gameErrors} />
      <GotchaButton gotcha={gotcha} />
    </div>
  );
};
