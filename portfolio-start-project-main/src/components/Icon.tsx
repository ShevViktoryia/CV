import React from "react";
import sprite from "../assets/images/sprite.svg";

type iconPropsType = {
  iconId: string;
};

export const Icon = (props: iconPropsType) => {
  return (
    <svg
      width="105"
      height="105"
      viewBox="0 0 105 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${sprite}#${props.iconId}`}></use>
    </svg>
  );
};
