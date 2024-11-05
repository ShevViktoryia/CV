import styled from "styled-components";

export const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: fit-content;
  }
  li a {
    color: whitesmoke;
    text-decoration: none;
    margin-left: 20px;
    transition: 0.8s;
  }
  li a:hover {
    color: #865dff;
    text-shadow: 0 0 10px #865dff;
    border-bottom: 3px solid #865dff;
  }
`;
