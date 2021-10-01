import styled from "styled-components";
import tp from "../../styles/typography";

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.element};
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  margin-bottom: 20px;

  p:nth-child(1) {
    font-weight: ${tp.bold};
  }
`;

export const ThemeContainer = styled.label`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
`;

export const Icon = styled.button`
  border: none;
  background-color: transparent;
  width: 25px;
  height: 25px;
`;
