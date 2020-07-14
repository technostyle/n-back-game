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
import { arrayFromOtoN, randInt, clearTimeouts } from "common/utils";

const ROUNDS = 20;
const ROUND_TIME = LIGHT_SQUARE_TIME + NO_ACTIVE_SQUARE_TIME;
const activeBlocksSequence = arrayFromOtoN(ROUNDS).map(() => randInt(0, 8));
// TODO: join round timeouts and userFailureTimeout?
const timeouts = [];
const userFailureTimeouts = [];
let timeLeftInterval = null;
// ---------------

let time = 0;

export const App = () => {
  const [activeCell, setActiveCell] = useState(null);
  const [prevNBack, setPrevNBack] = useState(null);
  const [gameErrors, setGameErrors] = useState(0);
  const [userFailure, setUserFailure] = useState(false);
  const [shouldGotcha, setShouldGotcha] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  const clearAsync = () => {
    clearTimeouts(timeouts);
    clearTimeouts(userFailureTimeouts);
    if (timeLeftInterval) {
      clearInterval(timeLeftInterval);
    }
  };

  const resetGame = () => {
    clearAsync();
    setActiveCell(null);
    setPrevNBack(null);
    setUserFailure(false);
    setShouldGotcha(false);
    setGameErrors(0);
    setTimeLeft(null);
  };

  useEffect(() => clearAsync, []);

  const addUserError = () => {
    setUserFailure(true);
    setGameErrors(gameErrors + 1);
    userFailureTimeouts.push(
      setTimeout(() => setUserFailure(false), USER_FAILURE_TIME)
    );
  };

  useEffect(() => {
    // activeCell is not reset to null after box highlight
    // and user did not click to reset shouldGotcha to false
    if (!activeCell && shouldGotcha) {
      addUserError();
    }
  }, [shouldGotcha, activeCell]);

  useEffect(() => {
    if (timeLeft && timeLeft < 1000) {
      setTimeLeft(null);
      clearInterval(timeLeftInterval);
    }
  }, [timeLeft]);

  const startGame = gameSettings => {
    const { nBack } = gameSettings;
    resetGame();
    let gameTime = ROUNDS * ROUND_TIME;
    setTimeLeft(gameTime);
    timeLeftInterval = setInterval(() => {
      gameTime -= 1000;
      setTimeLeft(gameTime);
    }, 1000);

    for (let i = 0; i < ROUNDS; i++) {
      time += LIGHT_SQUARE_TIME;
      timeouts.push(
        setTimeout(() => {
          if (i >= nBack) {
            setPrevNBack(activeBlocksSequence[i - nBack]);
          }
          setActiveCell(activeBlocksSequence[i]);
          setShouldGotcha(
            activeBlocksSequence[i - nBack] === activeBlocksSequence[i]
          );
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
    if (prevNBack !== activeCell) {
      addUserError();
    } else {
      setShouldGotcha(false);
    }
  };

  const stopGame = () => resetGame();

  return (
    <div className={styles.container}>
      <GamePlay lightedCell={activeCell} userFailure={userFailure} />
      <GamePanel
        timeLeft={timeLeft}
        startGame={startGame}
        stopGame={stopGame}
        gotcha={onGotchaClick}
        gameErrors={gameErrors}
      />
    </div>
  );
};
