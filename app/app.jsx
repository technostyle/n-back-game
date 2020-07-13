import React from "react";

import { GamePlay } from "./game-play";
import { GamePanel } from "./game-panel";
import styles from "./app.css";

export const App = () => {
  return (
    <div className={styles.container}>
      <GamePlay gameSettings={{ nBack: 1 }} />
      <GamePanel />
    </div>
  );
};
