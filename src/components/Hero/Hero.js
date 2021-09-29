import React from 'react';
import styled from 'styled-components/macro';
import Picture from '../Picture';

const heroData = {
  src: '/images/hero-img.jpg',
  alt: 'A serious looking cat with cool blue eyes',
  sources: [
    [
      '/images/hero-img.avif',
      '/images/hero-img@2x.avif',
      '/images/hero-img@3x.avif',
    ],
    [
      '/images/hero-img.jpg',
      '/images/hero-img@2x.jpg',
      '/images/hero-img@3x.jpg',
    ],
  ],
};

const Hero = () => {
  return (
    <Wrapper>
      <Picture sources={heroData.sources} src={heroData.src} alt={heroData.alt}>
        <HeroImage alt={heroData.alt} src="/images/hero-img.jpg" />
      </Picture>
      <Swoop alt="" src="/swoop.svg" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: rgb(1, 1, 1);
`;

const HeroImage = styled.img`
  display: block;
  max-width: 500px;
  width: 100%;
  height: 500px;
  max-height: 100%;
  object-fit: cover;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
