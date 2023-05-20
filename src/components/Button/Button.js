import React from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

function Button({
  primary,
  subscribe,
  search,
  availability,
  reserveBottom,
  reserve,
  to,
  href,
  children,
  onClick,
  ...PassProps
}) {
  let Comp = "button";
  let props = { onClick, ...PassProps };
  if (to) {
    props.to = to;
    Comp = Link;
  }
  // else if (href) {
  //   props.href = href;
  //   Comp = "a";
  // }
  let classes = clsx(
    styles.light,
    { [styles.primary]: primary },
    { [styles.subscribe]: subscribe },
    { [styles.search]: search },
    { [styles.availability]: availability },
    { [styles.reserveBottom]: reserveBottom },
    { [styles.reserve]: reserve }
  );
  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
