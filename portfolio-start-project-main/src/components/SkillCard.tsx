import React from "react";
import { Icon } from "./Icon";

type cardPropsType = {
  cardId: string;
};

const SkillCard = (props: cardPropsType) => {
  return (
    <li key={props.cardId}>
      <Icon iconId={props.cardId} />
    </li>
  );
};

export default SkillCard;
