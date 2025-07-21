import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Palette,
  ShoppingCart,
  Search,
  Zap,
  ArrowRight
} from 'lucide-react';
import Card from '../ui/Card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Modern, responsive websites built with the latest technologies and best practices.",
      features: ["React & Next.js", "Performance Optimized", "SEO Ready"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Beautiful, responsive designs that work perfectly on all devices and screen sizes.",
      features: ["Responsive Design", "Touch Optimized", "Cross-Platform"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that creates engaging and intuitive digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration and inventory management.",
      features: ["Payment Gateway", "Inventory System", "Admin Dashboard"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive more organic traffic.",
      features: ["Technical SEO", "Content Strategy", "Analytics"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast websites that provide excellent user experience.",
      features: ["Speed Optimization", "Core Web Vitals", "Caching"],
      color: "from-yellow-500 to-yellow-600"
    }
  ];

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
    <section id="services-section" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services That Drive
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to launch, I provide comprehensive web development services 
            that help businesses establish a strong digital presence and achieve their goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className="h-full group cursor-pointer"
                  hover={true}
                  padding="lg"
                >
                  <div className="text-center">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="text-sm text-gray-500 flex items-center justify-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. 
              I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-purple-600 hover:bg-purple-50 font-semibold rounded-lg transition-colors text-center"
              >
                Get Free Quote
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 border border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors text-center"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
