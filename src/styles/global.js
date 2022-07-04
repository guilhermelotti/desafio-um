import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    html {
      font-size: 62.5%;
    }

    body,
    input,
    textarea,
    button {
      font-family: "Inter";
    }
  `}
`;

export default GlobalStyles;
