import "assets/fonts/font.css";

import { normalize } from "polished";
import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Proxima Nova;
    background-color: #fff;
    color: #000;
  }

  #root {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
  }

  a {
    text-decoration: none;
  }

  fieldset {
    outline: none;
    border: none;
  }

  option {
    font-family: acumin-pro;
  }

  .tooltip {
    width: 300px;
    border-radius: 12px !important;
    font-family: acumin-pro;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: 0.2px;
  }
`;

export default GlobalStyle;
