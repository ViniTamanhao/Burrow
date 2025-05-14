import { createGlobalStyle } from "styled-components";
import { Theme } from "./themes"; // Import the Theme type

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

const GlobalStyles = createGlobalStyle`
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;

    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s ease, color 0.3s ease; // Add a subtle transition
  }
`;

export default GlobalStyles;
