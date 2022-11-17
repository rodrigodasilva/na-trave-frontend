import { createGlobalStyle } from "styled-components";

import { colors, fontSizes, radii } from "./tokens";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", 'Roboto', "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 16px;
  }

  html,
  body {
    height: 100%;
    
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  svg {
    fill: currentColor;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  a {
    text-decoration: none;
  }

  #root {
    isolation: isolate;
    height: 100%;
  }

  :root {
    ${colors}
    ${fontSizes}
    ${radii}

    --shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
    --max-width: 700px;
  }

  .my-40 { margin: 40px 0; }
  .mb-16 { margin-bottom: 16px; }
  .mb-8 { margin-bottom: 8px; }
  .mb-12 { margin-bottom: 12px; }
  .mb-18 { margin-bottom: 18px; }
  .mb-24 { margin-bottom: 24px; }
  .mb-32 { margin-bottom: 32px; }
  .mb-40 { margin-bottom: 40px; }
  .mr-8 { margin-right: 8px; }
  .mr-12 { margin-right: 12px; }
  .mx-auto { margin: 0 auto; }

  .block {display: block; }
  .flex	{ display: flex; }

  .flex-row	{ flex-direction: row; }
  .flex-col	{ flex-direction: column; }

  .flex-wrap { flex-wrap: wrap; }

  .content-center	{ align-content: center; }
  .content-start	{ align-content: flex-start; }
  .content-end	{ align-content: flex-end; }

  .justify-start	{ justify-content: flex-start; }
  .justify-end	{ justify-content: flex-end; }  
  .justify-center	{ justify-content: center; }
  .justify-between	{ justify-content: space-between; }

  .items-start	{ align-items: flex-start; }
  .items-end	{ align-items: flex-end; }

  .items-center	{ align-items: center; }  
  .self-center	{ align-self: center; }

  .w-full	{ width: 100%; }

  .text-center	{ text-align: center; }
  .text-left	{ text-align: left; }

  .cursor-pointer { cursor: pointer }
`;

export default GlobalStyles;
