import React from "react";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle.styled";
import { EducationList } from "./EducationList.styled";

const Education = () => {
  return (
    <section>
      <Container>
        <SectionTitle>Education</SectionTitle>
        <EducationList marker={"🎓"}>
          <li>Francisk Skorina Gomel State University</li>
          <li>Udemy</li>
          <li>RSSchool</li>
          <li>
            Streamline Language School
            <EducationList>
              <li>English (B2 level)</li>
              <li>German (A1 level)</li>
            </EducationList>
          </li>
        </EducationList>
      </Container>
    </section>
  );
};

export default Education;
