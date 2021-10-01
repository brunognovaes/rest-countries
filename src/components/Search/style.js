import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background-color: ${(props) => props.theme.element};
  padding: 10px;
  gap: 10px;
  border-radius: 0.3em;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.font};
  ::placeholder {
    color: ${(props) => props.theme.font};
  }
`;

export const Icon = styled.button`
  border: none;
  background-color: transparent;
  width: 25px;
  height: 25px;
`;
