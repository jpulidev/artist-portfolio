import { createGlobalStyle } from 'styled-components';
import stripes from '../assets/images/stripes.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #000;
    --yellow: #F1D311;
    --white: #fff;
    --grey: #E1EAA0;
    --blue:#28456B;
    --cerulean:#0498E2;
    --mint:#F0EABB;
    --chathams:#125988;
    --fondo:#f9f3f1;

  }
  html {
   
    background-size: 450px;
    background-attachment: fixed;
    font-size: 10px;
    background-color:var(--fondo);
  }
  body {
    font-size: 2rem;
    background-color:var(--fondo);
   
  }
  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }
  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }
  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--black) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
  hr {
    border: 0;
    height: 8px;
    background-image: url(${stripes});
    background-size: 1500px;
  }
  img {
    max-width: 100%;
  }
  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }


`;

export default GlobalStyles;
