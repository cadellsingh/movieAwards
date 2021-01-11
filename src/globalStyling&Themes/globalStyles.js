import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: Montserrat, Helvetica, Arial, sans-serif;
      background-color: ${({ theme }) => theme.backgroundColor};
      color: ${({ theme }) => theme.color}; 
      transition: all .50s linear;
    }
`;
