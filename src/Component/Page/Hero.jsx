import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-800 to-purple-600 text-white flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-32 py-16">
      {/* Left content */}
      <motion.div
        className="md:w-2/3 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Hi, I'm Onuoha-Mba Bethel
        </h1>
        <p className="text-lg text-purple-100 mb-8 max-w-2xl">
          <strong>B's DigitalDreams</strong> – Where Vision Meets Reality! We craft stunning,
          responsive, and professional websites that captivate audiences and drive business growth.
          With expert craftsmanship and a collaborative process, we bring your vision to life with
          bespoke website design, responsive web development, and a user-centric approach.
          Let's work together to elevate your online presence and achieve your goals – contact{" "}
          <strong>B's DigitalDreams</strong> today!
        </p>
        <Link
          to="/portfolio"
          className="inline-block bg-white text-purple-800 px-8 py-4 rounded-xl font-semibold hover:bg-purple-200 transition"
        >
          Explore My Work
        </Link>
      </motion.div>

      {/* Right image */}
      <motion.div
        className="md:w-1/3 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src="/her.JPG" 
          alt="Onuoha-Mba Bethel"
          className="w-80 h-60 object-cover shadow-2xl border-4 border-white"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
