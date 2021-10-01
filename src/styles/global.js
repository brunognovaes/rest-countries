import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Nunito Sans", sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.pageBackground};
    color: ${(props) => props.theme.font};
  }
`;

export default GlobalStyle;
