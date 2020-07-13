import React from "react";
import ReactDOM from "react-dom";
import styles from "./style.css";

console.log({ styles });
const App = () => <h1 className={styles.red}> Hello world </h1>;

ReactDOM.render(<App />, document.getElementById("root"));
