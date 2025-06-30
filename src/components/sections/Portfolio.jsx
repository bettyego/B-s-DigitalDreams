import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';
import Card from '../ui/Card';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce Store",
      description: "A modern online store with Stripe integration, admin dashboard, and inventory management.",
      image: "/web1.jpg",
      category: "ecommerce",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://your-ecommerce-url.com",
      githubUrl: "https://github.com/yourusername/ecommerce",
      featured: true
    },
    {
      id: 2,
      title: "Interior Design Portfolio",
      description: "A sleek, minimalistic portfolio showcasing an interior designer's work with image galleries.",
      image: "/web2.jpg",
      category: "portfolio",
      tech: ["React", "TailwindCSS", "Framer Motion"],
      liveUrl: "https://your-interior-site.com",
      githubUrl: "https://github.com/yourusername/interior",
      featured: true
    },
    {
      id: 3,
      title: "Logistics Tracker",
      description: "Web application for shipment tracking, quote requests, and user authentication.",
      image: "/web3.jpg",
      category: "webapp",
      tech: ["React", "Firebase", "TailwindCSS"],
      liveUrl: "https://your-logistics-url.com",
      githubUrl: "https://github.com/yourusername/logistics",
      featured: false
    },
    {
      id: 4,
      title: "Restaurant Website",
      description: "Modern restaurant website with online menu, reservations, and contact system.",
      image: "/web4.webp",
      category: "business",
      tech: ["React", "Next.js", "Sanity CMS"],
      liveUrl: "https://your-restaurant-url.com",
      githubUrl: "https://github.com/yourusername/restaurant",
      featured: false
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description: "Property listing platform with search filters, virtual tours, and agent profiles.",
      image: "/web5.webp",
      category: "webapp",
      tech: ["React", "Node.js", "PostgreSQL"],
      liveUrl: "https://your-realestate-url.com",
      githubUrl: "https://github.com/yourusername/realestate",
      featured: true
    },
    {
      id: 6,
      title: "Creative Agency",
      description: "Portfolio website for a creative agency with stunning animations and case studies.",
      image: "/graphic1.jpeg",
      category: "portfolio",
      tech: ["React", "GSAP", "TailwindCSS"],
      liveUrl: "https://your-agency-url.com",
      githubUrl: "https://github.com/yourusername/agency",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'ecommerce', name: 'E-commerce', count: projects.filter(p => p.category === 'ecommerce').length },
    { id: 'portfolio', name: 'Portfolio', count: projects.filter(p => p.category === 'portfolio').length },
    { id: 'webapp', name: 'Web Apps', count: projects.filter(p => p.category === 'webapp').length },
    { id: 'business', name: 'Business', count: projects.filter(p => p.category === 'business').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring modern web applications, 
            e-commerce solutions, and creative digital experiences.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Filter className="w-4 h-4" />
              {category.name}
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeFilter === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="group overflow-hidden h-full" padding="none">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        <button
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="inline-flex items-center gap-2 px-3 py-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 text-sm font-medium rounded-lg transition-colors hover:bg-white/30"
                        >
                          <Eye className="w-4 h-4" />
                          Live Demo
                        </button>
                        <button
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          className="p-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg transition-colors hover:bg-white/30"
                        >
                          <Github className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-lg transition-colors"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="p-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-colors"
          >
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
