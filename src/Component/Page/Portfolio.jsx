import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "E-commerce Store",
    description: "A responsive and modern online store with Stripe integration and admin dashboard.",
    link: "https://your-ecommerce-url.com",
    tech: ["React", "TailwindCSS", "Node.js", "MongoDB"]
  },
  {
    title: "Interior Design Website",
    description: "A sleek, minimalistic site showcasing an interior designer’s work with galleries and inquiry form.",
    link: "https://your-interior-site.com",
    tech: ["React", "TailwindCSS", "EmailJS"]
  },
  {
    title: "Logistics Tracker",
    description: "Web app with shipment tracking, quote requests, and user authentication.",
    link: "https://your-logistics-url.com",
    tech: ["React", "TailwindCSS", "Firebase"]
  },
];

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-24 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 tracking-wide">
          Website Projects by <span className="text-purple-700">B's DigitalDreams</span>
        </h2>

        <div className=" grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-pink-100 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <p className="text-sm text-gray-500 mb-1 font-medium">Tech Stack:</p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-purple-200 text-purple-800 px-3 py-1 text-xs rounded-full shadow-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-purple-700 font-medium hover:underline"
                >
                  Visit Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
