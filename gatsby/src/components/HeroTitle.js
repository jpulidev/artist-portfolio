import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import { FirstTitle } from '../styles/FistTitle';
import { TwoGridSection } from '../styles/TwoGridSection';
import SEO from './SEO';
import homeimage from '../assets/images/img1.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Hero() {
  useEffect(()=> {
    Aos.init({duration:2000});
  }, []);
  return (
    <div>
      <SEO>
        <title>Bienvenidos</title>
      </SEO>
      <TwoGridSection>
        <img src={homeimage} alt="Jhony Luna" data-aos="fade-up-right" />
        <FirstTitle data-aos="fade-up-left">
          <h1>jhony</h1>
          <h1>luna s. </h1>
        </FirstTitle>
      </TwoGridSection>
    </div>
  );
}
