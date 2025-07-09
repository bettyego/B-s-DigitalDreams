import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Eye,
  Filter,
  Search,
  Grid,
  List,
  Star
} from 'lucide-react';
import Card from '../ui/Card';
import { downloadPortfolio } from '../../utils/downloadUtils';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: "Website Designing Portfolio",
      description: "A showcase of modern, responsive websites designed for businesses and individuals, highlighting creativity, usability, and brand identity.",
      image: "/web1.jpg",
      category: "ecommerce",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
      liveUrl: "https://b-s-digital-dreams.vercel.app/",
      githubUrl: "https://github.com/yourusername/fashion-store",
      featured: true,
      rating: 5,
      client: "Fashion Forward Inc.",
      year: "2024"
    },
    {
      id: 2,
      title: "An E-commence Website ",
      description: "A full-featured e-commerce platform with seamless shopping experience, secure payments, and intuitive product management for online retailers.",
      image: "/web2.jpg",
      category: "portfolio",
      tech: ["React", "TailwindCSS", "Framer Motion", "Sanity CMS"],
      liveUrl: "https://elcee-stores.vercel.app/",
      githubUrl: "https://github.com/yourusername/interior-portfolio",
      featured: true,
      rating: 5,
      client: "Rodriguez Designs",
      year: "2024"
    },
    {
      id: 3,
      title: "NGO Platform",
      description: "A dynamic website for a non-profit organization, featuring donation integration, event management, and impactful storytelling to drive engagement.",
      image: "/save.webp",
      category: "webapp",
      tech: ["React", "Firebase", "Google Maps API", "TailwindCSS"],
      liveUrl: "https://www.richmarkfoundation.com/",
      githubUrl: "https://github.com/yourusername/logistics-tracker",
      featured: false,
      rating: 4,
      client: "Swift Logistics",
      year: "2023"
    },
    {
      id: 4,
      title: "Mobile Banking System",
      description: "A secure and user-friendly mobile banking platform enabling seamless transactions, account management, and real-time notifications for customers.",
      image: "/banking.jpeg",
      category: "business",
      tech: ["React", "Next.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://blukoak-bank.vercel.app/",
      githubUrl: "https://github.com/yourusername/restaurant",
      featured: false,
      rating: 5,
      client: "Chen's Kitchen",
      year: "2023"
    },
    {
      id: 5,
      title: "Investment Platform",
      description: "A robust investment platform offering portfolio tracking, real-time analytics, and secure transactions for investors and financial advisors.",
      image: "/web5.webp",
      category: "webapp",
      tech: ["React", "Node.js", "PostgreSQL", "AWS S3"],
      liveUrl: "https://pinebridge.vercel.app/",
      githubUrl: "https://github.com/yourusername/realestate",
      featured: true,
      rating: 5,
      client: "Prime Properties",
      year: "2024"
    },
    {
      id: 6,
      title: "Event Planning Website",
      description: "A vibrant event planning website with interactive features for booking, event showcases, and seamless communication between clients and organizers.",
      image: "/event.jpg",
      category: "portfolio",
      tech: ["React", "GSAP", "TailwindCSS", "Contentful"],
      liveUrl: "https://chi-balloon.vercel.app/",
      githubUrl: "https://github.com/yourusername/creative-agency",
      featured: false,
      rating: 4,
      client: "Creative Minds Agency",
      year: "2023"
    },
    {
      id: 7,
      title: "E-commerce Store (MMA's Store)",
      description: "A custom e-commerce solution for MMA's Store, featuring a modern product catalog, shopping cart, and secure checkout for a smooth customer experience.",
      image: "/g1.jpg",
      category: "ecommerce",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
      liveUrl: "https://mma-s-store.vercel.app/",
      githubUrl: "https://github.com/yourusername/mma-s-store",
      featured: false,
      rating: 4,
      client: "MMA's Store",
      year: "2025"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'ecommerce', name: 'E-commerce', count: projects.filter(p => p.category === 'ecommerce').length },
    { id: 'portfolio', name: 'Portfolio', count: projects.filter(p => p.category === 'portfolio').length },
    { id: 'webapp', name: 'Web Apps', count: projects.filter(p => p.category === 'webapp').length },
    { id: 'business', name: 'Business', count: projects.filter(p => p.category === 'business').length },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              My Work
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Featured
              <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Projects
              </span>
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, featuring modern web applications, 
              e-commerce solutions, and creative digital experiences that drive results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Controls */}
          <div className="mb-12">
            {/* Search and View Toggle */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-purple-600 text-white'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition-colors ${
                    viewMode === 'list'
                      ? 'bg-purple-600 text-white'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4">
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
            </div>
          </div>

          {/* Projects Grid/List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${viewMode}-${searchTerm}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={
                viewMode === 'grid'
                  ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-8'
              }
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card 
                    className={`group overflow-hidden h-full ${
                      viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                    }`} 
                    padding="none"
                  >
                    {/* Project Image */}
                    <div className={`relative overflow-hidden ${
                      viewMode === 'list' ? 'md:w-1/3' : ''
                    }`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                          viewMode === 'list' ? 'w-full h-48 md:h-full' : 'w-full h-48'
                        }`}
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
                    <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1">
                          {renderStars(project.rating)}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Project Meta */}
                      <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                        <span>{project.client}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>

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

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Like What You See?
              </h3>
              <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together. 
                I'm always excited to take on new challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-purple-600 hover:bg-purple-50 font-semibold rounded-lg transition-colors text-center"
                >
                  Start a Project
                </Link>
                <button
                  onClick={downloadPortfolio}
                  className="px-8 py-4 border border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
                >
                  Download Portfolio
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
