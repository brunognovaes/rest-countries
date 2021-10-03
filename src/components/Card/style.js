import styled from "styled-components";
import ty from "../../styles/typography";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 80%;
  align-items: flex-start;
  background-color: ${(props) => props.theme.element};
  border-radius: 0.3em;

  img {
    width: 100%;
    border-radius: 0.3em 0.3em 0 0;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 5px;

  p:nth-child(1) {
    font-weight: ${ty.bold};
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 45px 30px;
  gap: 15px;
`;
