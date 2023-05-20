import React from "react";
import clsx from "clsx";
import styles from "./Image.module.scss";

function Image({
  cityImageStyle,
  HotelTypeStyle,
  HotelListStyle,
  ...ImageProps
}) {
  let props = { ...ImageProps };
  let classese = clsx({
    [styles.cityImageStyle]: cityImageStyle,
    [styles.HotelTypeStyle]: HotelTypeStyle,
  });

  return (
    <div className={classese}>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default Image;
