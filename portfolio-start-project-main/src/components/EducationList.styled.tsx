import styled from "styled-components";

type listPropsType = {
  marker?: string;
};

export const EducationList = styled.ul<listPropsType>`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  list-style-type: ${(props) => props.marker || "disc"};
`;
