import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, Briefcase, Copyright, AlertCircle, Mail, Phone } from 'lucide-react';

const Terms = () => {
  const lastUpdated = "December 2024";

  const sections = [
    {
      icon: Briefcase,
      title: "Services",
      content: [
        "B's DigitalDreams provides web design, development, and related digital services",
        "All services are provided on an as-is basis without warranties of any kind",
        "We reserve the right to refuse service to anyone for any reason",
        "Service details, timelines, and deliverables will be outlined in individual project agreements"
      ]
    },
    {
      icon: Copyright,
      title: "Intellectual Property",
      content: [
        "All content on this website is owned by B's DigitalDreams unless otherwise stated",
        "Upon full payment, clients receive ownership rights to the final deliverables as specified in project agreements",
        "We retain the right to display and link to completed projects in our portfolio",
        "Third-party assets (stock photos, fonts, etc.) are subject to their respective licenses"
      ]
    },
    {
      icon: Clock,
      title: "Project Timeline & Payments",
      content: [
        "Project timelines are estimates and may be subject to change",
        "Payment terms will be outlined in individual project agreements",
        "A non-refundable deposit is typically required to begin work",
        "Final deliverables will be provided after full payment is received"
      ]
    },
    {
      icon: AlertCircle,
      title: "Limitation of Liability",
      content: [
        "We are not liable for any direct, indirect, or consequential damages",
        "Our maximum liability is limited to the amount paid for the specific service",
        "We are not responsible for content provided by clients",
        "We do not guarantee specific business outcomes from our services"
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
              <FileText className="w-8 h-8" />
              <span className="text-lg font-medium">Terms of Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Working Agreement
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Please read these terms carefully before using our services or engaging in a project with us.
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
              These Terms of Service ("Terms") govern your use of the B's DigitalDreams website and services. 
              By accessing our website or engaging our services, you agree to be bound by these Terms. 
              If you disagree with any part of these terms, please do not use our services.
            </p>
          </motion.div>

          {/* Terms Sections */}
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

          {/* Website Use Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-purple-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Website Use</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                You may not use our website for any illegal or unauthorized purpose. You agree not to:
              </p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">Violate any laws or regulations</li>
                <li className="list-disc">Infringe upon our intellectual property rights</li>
                <li className="list-disc">Attempt to gain unauthorized access to any part of the website</li>
                <li className="list-disc">Interfere with the proper functioning of the website</li>
                <li className="list-disc">Collect user information without consent</li>
              </ul>
              <p className="mt-4">
                We reserve the right to terminate your access to the website for violations of these Terms.
              </p>
            </div>
          </motion.div>

          {/* Changes to Terms Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h3>
            <p className="text-gray-600">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting 
              to the website. Your continued use of the website after any changes indicates your acceptance of the modified Terms.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Questions About Our Terms?</h3>
            <p className="text-gray-600 mb-8">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:nwabethroseonuoha@gmail.com?subject=Terms of Service Inquiry"
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

export default Terms;
