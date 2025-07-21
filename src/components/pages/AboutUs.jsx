import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePageSEO } from '../../hooks/useSEO';
import {
  Code,
  Palette,
  Zap,
  Heart,
  Award,
  Users,
  CheckCircle,
  Download
} from 'lucide-react';
import Card from '../ui/Card';
import { downloadCV } from '../../utils/downloadUtils';

const AboutUs = () => {
  // Add SEO for about page
  usePageSEO();

  const skills = [
    { name: 'React & Next.js', level: 95, color: 'bg-blue-500' },
    { name: 'JavaScript/TypeScript', level: 90, color: 'bg-yellow-500' },
    { name: 'TailwindCSS', level: 95, color: 'bg-cyan-500' },
    { name: 'Node.js', level: 85, color: 'bg-green-500' },
    { name: 'UI/UX Design', level: 88, color: 'bg-purple-500' },
    { name: 'MongoDB', level: 80, color: 'bg-green-600' },
  ];

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Creating visually stunning interfaces that provide exceptional user experiences.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building lightning-fast websites that load quickly and perform seamlessly.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Bringing genuine enthusiasm and dedication to every project I work on.',
    },
  ];

  const achievements = [
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '2+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                About B's DigitalDreams
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Crafting Digital
                <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}Experiences
                </span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Hi, I'm Onuoha-Mba Bethel, a passionate web developer and designer 
                dedicated to creating beautiful, functional, and user-centered digital solutions 
                that help businesses thrive in the digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={downloadCV}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 hover:bg-purple-50 font-semibold rounded-lg transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <img
                  src="/graphic2.webp"
                  alt="Onuoha-Mba Bethel - Web Developer"
                  className="w-96 h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Available for projects</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Technical
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proficient in modern web technologies and frameworks, 
              constantly learning and adapting to industry best practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Core
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide my work and define the quality of solutions I deliver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full" padding="lg">
                    <div className="inline-flex p-4 bg-purple-100 rounded-2xl mb-6">
                      <Icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Achievements & Milestones
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Numbers that reflect my commitment to excellence and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-purple-200 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. 
              I'm always excited to take on new challenges and bring ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-colors text-center"
              >
                Start a Project
              </Link>
              <a
                href="tel:+2348064111501"
                className="px-8 py-4 border border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold rounded-lg transition-colors text-center"
              >
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
