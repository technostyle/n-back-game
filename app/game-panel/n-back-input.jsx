import React, { useState } from "react";
import { arrayFromOneToN } from "common/utils";
import { MAX_N_BACK } from "common/constants";
import styles from "./timer.css";

export const NBackInput = ({ onChange }) => {
  const [value, setValue] = useState(1);

  const onSelect = event => {
    const newValue = event.target.value;
    if (value !== newValue) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  const options = arrayFromOneToN(MAX_N_BACK).map(nBack => (
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
