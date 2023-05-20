import React from "react";
import NavbarItem from "./NavbarItem";
import "../UI/GlobalStyles.scss";
import Button from "./Button/Button";
import styles from "../UI/Nav.module.scss";

const NavbarDatas = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];

function Navbar() {
  return (
    <div className={styles.HomeStyle}>
      <div className={styles.nav}>
        <div className={styles.navBar}>
          <div className={styles.logoAndBtn}>
            <h1>Booking Website</h1>
            <div className={styles.NavbarBtnStyle}>
              <Button children={"Register"}></Button>
              <Button children={"Login"}></Button>
            </div>
          </div>
          <div className={styles.navigationBar}>
            {NavbarDatas.map((navBarData) => (
              <NavbarItem
                key={Math.random().toString()}
                type={navBarData.type}
                icon={navBarData.icon}
                active={navBarData.active}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
