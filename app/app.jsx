import React, { useState, useEffect } from "react";
import {
  ACTIVE_SQUARE_TIME,
  ROUND_TIME,
  ROUNDS,
  USER_FAILURE_TIME,
  USER_SUCCESS_TIME
} from "common/constants";
import { GamePlay } from "./game-play";
import { GamePanel } from "./game-panel";
import styles from "./app.css";
import { arrayFromOtoN, randInt, clearTimeouts } from "common/utils";

// TODO: join round timeouts and userFailureTimeout?
const timeouts = [];
const userFailureTimeouts = [];
const userSuccessTimeouts = [];
let timeLeftInterval = null;
// ---------------

const clearAsync = () => {
  clearTimeouts(timeouts);
  clearTimeouts(userFailureTimeouts);
  clearTimeouts(userSuccessTimeouts);
  if (timeLeftInterval) {
    clearInterval(timeLeftInterval);
  }
};

export const App = () => {
  const [play, setPlay] = useState(false);
  const [activeCell, setActiveCell] = useState(null);
  const [prevNBack, setPrevNBack] = useState(null);
  const [gameErrors, setGameErrors] = useState(0);
  const [userFailure, setUserFailure] = useState(false);
  const [userSuccess, setUserSuccess] = useState(false);
  const [shouldGotcha, setShouldGotcha] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  const resetGame = () => {
    clearAsync();
    setPlay(false);
    setActiveCell(null);
    setPrevNBack(null);
    setUserFailure(false);
    setUserSuccess(false);
    setShouldGotcha(false);
    setGameErrors(0);
    setTimeLeft(null);
  };

  useEffect(() => clearAsync, []);

  const addUserError = () => {
    setUserFailure(true);
    setGameErrors(gameErrors + 1);
    setShouldGotcha(false);
    userFailureTimeouts.push(
      setTimeout(() => setUserFailure(false), USER_FAILURE_TIME)
    );
  };

  const addUserSuccess = () => {
    setUserSuccess(true);
    userSuccessTimeouts.push(
      setTimeout(() => setUserSuccess(false), USER_SUCCESS_TIME)
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

  const setCountdown = () => {
    let gameTime = ROUND_TIME * ROUNDS;
    setTimeLeft(gameTime);
    timeLeftInterval = setInterval(() => {
      gameTime -= 1000;
      setTimeLeft(gameTime);
    }, 1000);
  };

  const setRoundStart = (round, prevCell, curCell) => {
    timeouts.push(
      setTimeout(() => {
        setPrevNBack(prevCell);
        setActiveCell(curCell);
        setShouldGotcha(prevCell === curCell);
      }, round * ROUND_TIME)
    );
  };

  const setRoundFinish = round => {
    timeouts.push(
      setTimeout(() => {
        setActiveCell(null);
      }, round * ROUND_TIME + ACTIVE_SQUARE_TIME)
    );
  };

  const setGameStop = () => {
    timeouts.push(setTimeout(() => setPlay(false), ROUNDS * ROUND_TIME));
  };

  const startGame = gameSettings => {
    const { nBack } = gameSettings;
    resetGame();
    setPlay(true);
    setCountdown();

    const activeBlocksSequence = arrayFromOtoN(ROUNDS).map(() => randInt(1, 9));
    for (let round = 0; round < ROUNDS; round++) {
      const prevNBackToSet =
        round >= nBack ? activeBlocksSequence[round - nBack] : null;
      const activeCellToSet = activeBlocksSequence[round];
      setRoundStart(round, prevNBackToSet, activeCellToSet);
      setRoundFinish(round);
    }

    setGameStop();
  };

  const onGotchaClick = () => {
    if (!prevNBack && !activeCell) {
      return;
    }

    if (prevNBack !== activeCell) {
      addUserError();
    } else if (prevNBack === activeCell) {
      addUserSuccess();
      setShouldGotcha(false);
    }
  };

  const stopGame = () => resetGame();

  return (
    <div className={styles.container}>
      <GamePlay
        lightedCell={activeCell}
        userFailure={userFailure}
        userSuccess={userSuccess}
      />
      <GamePanel
        timeLeft={timeLeft}
        startGame={startGame}
        stopGame={stopGame}
        gotcha={onGotchaClick}
        gameErrors={gameErrors}
        play={play}
      />
    </div>
  );
};
