import React from "react";
import { SectionTitle } from "./SectionTitle.styled";
import { SkillList } from "./SkillList.styled";
import SkillCard from "./SkillCard";
import { Container } from "./Container";

const Skills = () => {
  return (
    <section>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <SkillList>
          <SkillCard cardId="html" />
          <SkillCard cardId="css" />
          <SkillCard cardId="js" />
          <SkillCard cardId="vscode" />
          <SkillCard cardId="ts" />
          <SkillCard cardId="nails" />
          <SkillCard cardId="react" />
          <SkillCard cardId="sass" />
          <SkillCard cardId="bootstrap" />
          <SkillCard cardId="express" />
          <SkillCard cardId="git" />
          <SkillCard cardId="github" />
        </SkillList>
      </Container>
    </section>
  );
};

export default Skills;
