import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";

const Header = () => {
  return (
    <StyledHeader>
      <Container> </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
  box-shadow: 0 0 7px 6px rgba(0, 0, 0, 0.5);
`;

export default Header;
