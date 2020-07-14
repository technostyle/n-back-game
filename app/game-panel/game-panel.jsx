import React, { useState } from "react";
import { NBackInput } from "./n-back-input";
import { Button } from "game-panel/button";
import { Timer } from "./timer";
import styles from "./game-panel.css";
import { GameResults } from "./game-results";

export const GamePanel = ({
  startGame,
  stopGame,
  gotcha,
  gameErrors,
  timeLeft
}) => {
  const [nBack, setNBack] = useState(1);

  const start = () => {
    const settings = { nBack };
    startGame(settings);
  };

  return (
    <div className={styles.gamePanel}>
      <NBackInput onChange={setNBack} />
      <Timer time={timeLeft} />
      <Button text="Start" onClick={start} />
      <Button text="Stop" onClick={stopGame} />
      <GameResults gameErrors={gameErrors} />
      <Button text={`${nBack} back`} onClick={gotcha} />
    </div>
  );
};
