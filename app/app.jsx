import React, { useState, useEffect } from "react";
import {
  ACTIVE_SQUARE_TIME,
  DEFAULT_GAME_SETTINGS,
  LIGHT_SQUARE_TIME,
  MAX_N_BACK,
  NO_ACTIVE_SQUARE_TIME,
  USER_FAILURE_TIME
} from "common/constants";
import { GamePlay } from "./game-play";
import { GamePanel } from "./game-panel";
import styles from "./app.css";
import { arrayFromOtoN, randInt } from "common/utils";

// const interval = setInterval(setActiveCell(lightBlocksSequence.pop()), LIGHT_SQUARE_TIME)

const ROUNDS = 20;
const ROUND_TIME = LIGHT_SQUARE_TIME + NO_ACTIVE_SQUARE_TIME;
const activeBlocksSequence = arrayFromOtoN(ROUNDS).map(() => randInt(0, 8));
// TODO: join round timeouts and userFailureTimeout?
const timeouts = [];
const clearTimeouts = () => {
  timeouts.forEach(clearTimeout);
  while (timeouts.length) {
    timeouts.pop();
  }
};
let userFailureTimeout = null;
const resetUserFailureTimeout = () => clearTimeout(userFailureTimeout);
// ---------------

let time = 0;

export const App = () => {
  // const [gameSettings, setGameSettings] = useState(DEFAULT_GAME_SETTINGS);

  // useEffect(() => () => clearTimeouts())

  const [activeCell, setActiveCell] = useState(null);
  const [lightedCell, setLightedCell] = useState(null);
  const [prevNBack, setPrevNBack] = useState(null);
  const [gameResult, setGameResult] = useState(null);
  const [userFailure, setUserFailure] = useState(false);

  const startGame = gameSettings => {
    const { nBack } = gameSettings;
    clearTimeouts();
    resetUserFailureTimeout();
    console.log({ gameSettings });

    for (let i = 0; i < ROUNDS; i++) {
      time += LIGHT_SQUARE_TIME;
      timeouts.push(
        setTimeout(() => {
          if (i >= nBack) {
            setPrevNBack(activeBlocksSequence[i - nBack]);
          }
          setActiveCell(activeBlocksSequence[i]);
        }, i * ROUND_TIME)
      );
      timeouts.push(
        setTimeout(() => {
          setActiveCell(null);
        }, i * ROUND_TIME + ACTIVE_SQUARE_TIME)
      );
    }
  };

  const onGotchaClick = () => {
    console.log({ prevNBack, activeCell });
    if (prevNBack !== activeCell) {
      setUserFailure(true);
      userFailureTimeout = setTimeout(
        () => setUserFailure(false),
        USER_FAILURE_TIME
      );
    }
  };

  return (
    <div className={styles.container}>
      <GamePlay lightedCell={activeCell} userFailure={userFailure} />
      <GamePanel startGame={startGame} gotcha={onGotchaClick} />
    </div>
  );
};
