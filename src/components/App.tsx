import React from "react";
import styles from "../assets/scss/app.module.scss";
import Coins from "./Coins";
import Contracts from "./Contracts";
import Contacts from "./Contacts";

const App = () => {
  return (
    <div className={styles.homePage}>
      <Coins />
      <Contracts />
      <Contacts />
    </div>
  );
};

export default App;
