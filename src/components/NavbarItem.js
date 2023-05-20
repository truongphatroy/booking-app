import React from "react";

import GlobalStyles from "../UI/GlobalStyles.scss";
import styles from "../UI/Nav.module.scss";

function NavbarItem(props) {
  // console.log(props.active);
  const styleNavbarItem = props.active
    ? `${styles.navigation} ${styles.navActive}`
    : `${styles.navigation}`;

  return (
    <div className={styleNavbarItem}>
      <span className={`fa + ${props.icon}`}></span>
      <span className={styles.navbarItemContent}>{props.type}</span>
    </div>
  );
}

export default NavbarItem;
