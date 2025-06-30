import React from 'react';
import Hero from '../sections/Hero';
import Portfolio from '../sections/Portfolio';
import Services from '../sections/Services';
import Testimonials from '../sections/Testimonials';
import { useTheme } from '../../context/ThemeContext';

const Home = () => {
  const { isLoading } = useTheme();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main id="main-content">
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
    </main>
  );
};

export default Home;
