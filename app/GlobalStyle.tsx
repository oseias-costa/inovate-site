"use client";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
  --color-blue : #00264B;
  --color-gray: #666666;
  --color-gray-light: #D9D9D9;
}

* {
  margin: 0;
  padding: 0;
  border: none;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

h1, h2, h3, h4 {
  font-family: var(--font-geometos);
}


`

