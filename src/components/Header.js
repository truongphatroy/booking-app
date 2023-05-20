import React from "react";
import InputSearchBar from "./InputSearchBar";
import "../components/Button/Button";
import styles from "../UI/Nav.module.scss";
import Button from "../components/Button/Button";
function Header() {
  return (
    <div className={styles.HomeStyle}>
      <div className={styles.nav}>
        <div className={styles.header}>
          <p className={styles.headerContent}>
            A lifetime of discounts? It's Genius.
          </p>
          <p className={styles.headerSub}>
            Get rewarded for your travels - unlock instant savings of 10% or
            more with a free account.
          </p>
          {/* <button className={styles.headerBtn}>Sign in/Register</button> */}
          <Button primary children={"Sign in/Register"}></Button>
          <InputSearchBar />
        </div>
      </div>
    </div>
  );
}
export default Header;
