import styled from "styled-components";

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.pageBackground};
`;