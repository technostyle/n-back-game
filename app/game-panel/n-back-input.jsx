import React, { useState } from "react";
import { MAX_N_BACK } from "./constants";
import styles from "./timer.css";

const arrayFromOneToN = n => {
  const res = [];
  for (let i = 1; i <= n; i++) {
    res.push(i);
  }

  return res;
};

const fromOneToN = arrayFromOneToN(MAX_N_BACK);

export const NBackInput = ({ onChange }) => {
  const [value, setValue] = useState(1);

  const onSelect = event => {
    const newValue = event.target.value;
    if (value !== newValue) setValue(newValue);
    onChange(newValue);
  };

  const options = fromOneToN.map(nBack => (
    <option value={nBack} key={nBack}>
      {nBack}
    </option>
  ));
  return (
    <div className={styles.timer}>
      <label>
        n-back:
        <select name="n-backs" onChange={onSelect} value={value}>
          {options}
        </select>
      </label>
    </div>
  );
};
