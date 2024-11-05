import React from "react";
import { Container } from "./Container";
import styled from "styled-components";
import photo from "../assets/images/photo.webp";

export const About = () => {
  return (
    <section>
      <Container>
        <StyledAbout>
          <div>
            <h2>Hi, I'm Victoria</h2>
            <h3>Junior Frontend Developer</h3>
            <p>
              Personally, I think that Frontend is about creative, challenging
              and you will never be bored. As you known programming require as
              much practice as possible. That's why I'm here and I'm still in my
              way. Now I'm studying React and Vue on my own. I really into
              helping other people and I like to see how people rejoice in the
              goals achieved. This shows me of the importance of helping lifting
              others up.
            </p>
          </div>
          <StyledImg src={photo} />
        </StyledAbout>
      </Container>
    </section>
  );
};

const StyledAbout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px auto;

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h2 {
    font-size: 1.4rem;
  }
  h3 {
    color: #865dff;
    margin: 20px 0;
  }
`;

const StyledImg = styled.img`
  width: 410px;
  height: 410px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 10px #865dff;
`;
