import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Working with B's DigitalDreams was an absolute pleasure. The website they created for our startup exceeded all expectations. The attention to detail and modern design really helped us stand out in the market.",
      project: "Corporate Website"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Restaurant Owner",
      company: "Chen's Kitchen",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Our restaurant's online presence was completely transformed. The new website is beautiful, fast, and has significantly increased our online orders. Bethel's expertise in web development is truly impressive.",
      project: "Restaurant Website"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Interior Designer",
      company: "Rodriguez Designs",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The portfolio website created for my interior design business is stunning. It perfectly showcases my work and has helped me attract high-quality clients. The user experience is seamless and professional.",
      project: "Portfolio Website"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "E-commerce Manager",
      company: "Fashion Forward",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Our e-commerce platform was built with incredible attention to detail. The shopping experience is smooth, the admin panel is intuitive, and our sales have increased by 40% since launch.",
      project: "E-commerce Platform"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
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
            Client Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Clients
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what some of my amazing clients 
            have to say about working with B's DigitalDreams.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-purple-200">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-purple-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-purple-600 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].company} • {testimonials[currentIndex].project}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-purple-600 w-8'
                    : 'bg-purple-200 hover:bg-purple-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
            { number: "2+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
