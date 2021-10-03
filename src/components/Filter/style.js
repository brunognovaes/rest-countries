import styled from "styled-components";

export const Select = styled.select`
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.element};
  padding: 10px;
  color: ${(props) => props.theme.font};
`;

export const Option = styled.option`
  border: none;
`;
