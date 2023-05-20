import React from "react";
// import { useState } from "react";
import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";

import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import "../UI/GlobalStyles.scss";
import "../components/Button/Button";
import styles from "../UI/Nav.module.scss";
import Button from "../components/Button/Button";

function InputSearchBar() {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className={styles.inputBar}>
      <div className={`${styles.inputItem} fa fa-bed`}>
        <input
          className={styles.inputWhere}
          type="text"
          placeholder="Where are you going?"
        ></input>
      </div>
      <div className={`${styles.inputItem} fa fa-calendar`}>
        <input
          value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
            range[0].endDate,
            "MM/dd/yyyy"
          )}`}
          readOnly
          onClick={() => setOpen((open) => !open)}
          className={styles.inputDate}
          type="text"
          placeholder="06/24/2021 to 06/24/2022"
        ></input>

        <div className={styles.calendarMain} ref={refOne}>
          {open && (
            <DateRange
              onChange={(item) => setRange([item.selection])}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={range}
              months={1}
              direction="horizontal"
              // className="calendarElement"
              className={styles.calendarElement}
            />
          )}
        </div>
      </div>
      <div className={`${styles.inputItem} fa fa-female`}>
        <input
          className={styles.inputPeople}
          placeholder="1 adult&nbsp;·&nbsp;0 children&nbsp;·&nbsp;1 room"
        ></input>
      </div>
      <Button
        primary
        children={"Search"}
        to="/Search"
        // refer to search according to path as writen in App.js
        // target="_blank"
      ></Button>
    </div>
  );
}

export default InputSearchBar;
