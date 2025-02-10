'use client';
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #fff;
  }

  body, button, input {
    font-family: 'Nunito', serif;
  }

  a {
    text-decoration: none;
  }
`;
