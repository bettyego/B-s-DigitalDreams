import React from 'react';
import Hero from '../sections/Hero';
import Portfolio from '../sections/Portfolio';
import Services from '../sections/Services';
import Testimonials from '../sections/Testimonials';
import { useTheme } from '../../context/ThemeContext';
import { usePageSEO } from '../../hooks/useSEO';

const Home = () => {
  const { isLoading } = useTheme();

  // Add SEO for home page
  usePageSEO();

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
