import styled from "styled-components";

type listPropsType = {
  marker?: string;
  width?: string;
};

export const EducationList = styled.ul<listPropsType>`
  width: ${(props) => props.width || "50%"};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  li {
    list-style: ${(props) => props.marker || "disc"};
    margin: 10px 0;
    padding-left: 20px;
  }
`;
