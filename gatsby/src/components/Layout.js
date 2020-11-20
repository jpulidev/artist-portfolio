import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyle';
import Typography from '../styles/Typography';

const ContentStyles = styled.div`
  padding: 0px;
  ::before {
    content: '' !important;
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;

    background: url(https://jhonylunart.com/wp-content/uploads/2020/09/noisy-texture-20x100-o12-d15-c-f7edf0-t1.png);

    animation: 1s infinite noise;

    pointer-events: none;
  }

  @keyframes noise {
    0%,
    100% {
      background-position: 0 0;
    }

    10% {
      background-position: -5% -10%;
    }

    20% {
      background-position: -15% 5%;
    }

    30% {
      background-position: 7% -25%;
    }

    40% {
      background-position: 20% 25%;
    }

    50% {
      background-position: -25% 10%;
    }

    60% {
      background-position: 15% 5%;
    }

    70% {
      background-position: 0% 15%;
    }

    80% {
      background-position: 25% 35%;
    }

    90% {
      background-position: -10% 10%;
    }
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <ContentStyles>
        <Typography />
        <Nav />
        {children}
        <Footer />
      </ContentStyles>
    </>
  );
}
