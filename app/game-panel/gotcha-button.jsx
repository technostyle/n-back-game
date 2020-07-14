import React from "react";
import styles from "./timer.css";

export const GotchaButton = ({ gotcha }) => (
  <div className={styles.timer} onClick={gotcha}>
    Nback
  </div>
);
