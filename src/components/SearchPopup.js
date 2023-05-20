import React from "react";
import styles from "./SearchPopup.module.scss";
import Input from "./Input";
import Button from "./Button/Button";
function SearchPopup() {
  return (
    <div className={styles.SearchPopup}>
      <form className={styles.SearchFrame}>
        <h2>Search</h2>
        <Input label="Destination" inputSecondary />
        <Input
          placeholder="06/24/2022 to 06/24/2022"
          label="Check-in Date"
          inputSecondary
        />
        <p>Option</p>
        <Input label="Min price per night" inputPrimary />
        <Input label="Max price per night" inputPrimary />
        <Input label="Adult" inputPrimary />
        <Input label="Children" inputPrimary />
        <Input label="Room" inputPrimary />
        <Button
          search
          children="Search"
          onClick={(event) => event.preventDefault()}
        />
      </form>
    </div>
  );
}

export default SearchPopup;
