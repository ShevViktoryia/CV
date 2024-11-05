import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { StyledNav } from "../../components/StyledNav";
import { Logo } from "../../components/Logo";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledContainer>
          <Logo iconId="logo" />
          <StyledNav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Project Examples</a>
              </li>
              <li>
                <a href="#code">Code example</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </StyledNav>
        </StyledContainer>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15vh;
  width: 100%;
  box-shadow: 0 0 7px 6px rgba(0, 0, 0, 0.5);
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
