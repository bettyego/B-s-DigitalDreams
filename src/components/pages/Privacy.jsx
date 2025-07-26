import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';

const Privacy = () => {
  const lastUpdated = "December 2024";

  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Contact information (name, email, phone number) when you fill out our contact form",
        "Project details and requirements you share with us",
        "Website usage data through analytics (anonymized)",
        "Communication records for project management purposes"
      ]
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        "To respond to your inquiries and provide requested services",
        "To communicate about your projects and provide updates",
        "To improve our website and services based on usage patterns",
        "To send occasional updates about our services (with your consent)"
      ]
    },
    {
      icon: Lock,
      title: "Data Protection",
      content: [
        "We use industry-standard security measures to protect your data",
        "Your information is stored securely and never sold to third parties",
        "We only share information necessary for project completion",
        "You can request deletion of your data at any time"
      ]
    },
    {
      icon: Shield,
      title: "Your Rights",
      content: [
        "Access: You can request a copy of your personal data",
        "Correction: You can ask us to correct inaccurate information",
        "Deletion: You can request deletion of your personal data",
        "Portability: You can request your data in a portable format"
      ]
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8" />
              <span className="text-lg font-medium">Privacy Policy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Privacy Matters
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              We're committed to protecting your privacy and being transparent about how we handle your information.
            </p>
            <p className="text-sm text-purple-200 mt-4">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At B's DigitalDreams, we respect your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website 
              or use our services.
            </p>
          </motion.div>

          {/* Privacy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Cookies Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-purple-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Analytics</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                We use cookies and similar technologies to improve your browsing experience and analyze website traffic. 
                These help us understand how visitors interact with our site and improve our services.
              </p>
              <p>
                You can control cookie settings through your browser preferences. Note that disabling cookies may 
                affect some website functionality.
              </p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Questions About Privacy?</h3>
            <p className="text-gray-600 mb-8">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:bethelmba69@gmail.com?subject=Privacy Policy Inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
              <a
                href="tel:+2348064111501"
                className="inline-flex items-center gap-2 px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
