import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Play } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Hero = () => {
  const { preferences } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-800 via-purple-700 to-purple-600 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-transparent" />
      
      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full blur-xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-40 left-10 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                👋 Welcome to B's DigitalDreams
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  Onuoha-Mba Bethel
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl leading-relaxed"
            >
              <strong className="text-white">B's DigitalDreams</strong> – Where Vision Meets Reality! 
              I craft stunning, responsive, and professional websites that captivate audiences and 
              drive business growth. Let's transform your digital presence together.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-800 hover:bg-purple-50 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Explore My Work
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                Get Started
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-purple-200"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for projects
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <a href="#" className="hover:text-white transition-colors">
                  Download CV
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={preferences.animations ? {
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                } : {}}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <img
                  src="/her.JPG"
                  alt="Onuoha-Mba Bethel - Web Developer"
                  className="w-80 h-96 md:w-96 md:h-[28rem] object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                  loading="eager"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80 blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-60 blur-sm" />
              
              {/* Stats overlay */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-xs text-purple-200">Projects Done</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
