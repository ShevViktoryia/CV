import styled from "styled-components";
import sprite from "../assets/images/sprite.svg";

type LogoPropsType = {
  iconId: string;
};

export const Logo = (props: LogoPropsType) => {
  return (
    <StyledLogo>
      <use xlinkHref={`${sprite}#${props.iconId}`}></use>
    </StyledLogo>
  );
};

const StyledLogo = styled.svg`
  height: 50px;
`;
