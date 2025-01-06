"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    padding: 40px 120px;
    font-family: "Nunito Sans", sans-serif;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.text};
    box-sizing: border-box;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  .main-content {
    max-width: ${({ theme }) => theme.maxWidth.desktop}
  }

  h1 {
    font-weight: 800;
    font-size: 72px
  }

  h2 {
    position: relative;
    padding-bottom: 20px;
    &::after {
      content: "";
      bottom: 0;
      left: 0;
      height: 4px;
      width: 80px;
      background: rgba(84, 84, 212, 1);
      position: absolute;
    }
  }

    
  .btn-primary {
    background-color: ${({ theme }) => theme.colors.brand} !important;
    border-color: ${({ theme }) => theme.colors.brand} !important;
  }

  .btn-primary:hover {
    background-color: rgba(107, 107, 241, 1) !important; 
    box-shadow: 5px 5px 20px rgba(84, 84, 212, 0.75);
  }

  .header {
    max-width:  ${({ theme }) => theme.maxWidth.desktop};
    height: 60px;
  }

  .language-switcher {
    background-color: transparent
  }

  .language-switcher img {
    transition: transform 0.2s;
  }

  .language-switcher:hover {
    background-color:rgba(84, 84, 212, 0.15);
    img {
      transform: scale(1.1);
    }
  }

  .hero-section {
    margin-top: 80px;
    h3 {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 300;
    font-size: 26px;
    line-height: 34px;
    position: relative;
    padding-top: 24px;
    margin-top: 24px;

    &::before {
      content: "";
      top: 0;
      left: 0;
      height: 4px;
      width: 80px;
      background: rgba(84, 84, 212, 1);
      position: absolute;
    }
  }

    &::before {
      content: "";
      position: absolute;
      top: 231px;
      left: -401px;
      width: 108%;
      height: 35%;
      background: linear-gradient( rgba(84, 84, 212, 0.27), rgba(84, 84, 212, 0.1134));
      filter: blur(300px);
      transform: rotate(30deg); /* Adjust rotation angle */
      z-index: -1;
      border-radius: 233px;
    }
  }


  .section-first-column {
    width: 347px;
    margin-right: 80px;
  }


  .contact-section {
    margin-top: 80px;

    .contact-list {
      list-style: none;
      padding: 0;
      font-size: 20px;
      line-height: 28px;

    img {
      margin-right: 16px;
    }

    li {
      padding-top: 20px;
    }
    }
  }
`;

export default GlobalStyle;
