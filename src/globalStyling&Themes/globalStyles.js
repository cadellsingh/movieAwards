import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: Montserrat, Helvetica, Arial, sans-serif;
      background-color: #000000;
      color: white;
    }
`;
