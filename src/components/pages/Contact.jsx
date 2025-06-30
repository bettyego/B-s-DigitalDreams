import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  AlertCircle
} from 'lucide-react';
import Card from '../ui/Card';
import { sendEmail, validateFormData } from '../../services/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSubmitMessage('');

    // Validate form data
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await sendEmail(formData);

      if (result.success) {
        setIsSubmitted(true);
        setSubmitMessage(result.message);

        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setSubmitMessage('');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            projectType: '',
            budget: ''
          });
        }, 3000);
      } else {
        setSubmitMessage(result.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'nwabethroseonuoha@gmail.com',
      link: 'mailto:nwabethroseonuoha@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+234 806 411 1501',
      link: 'tel:+2348064111501'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nigeria',
      link: null
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/share/1BnLnpmwrw/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=tdcpvow',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: '#',
      color: 'hover:text-blue-400'
    }
  ];

  const projectTypes = [
    'Website Development',
    'E-commerce Store',
    'Portfolio Website',
    'Business Website',
    'Landing Page',
    'Web Application',
    'UI/UX Design',
    'Other'
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Let\'s discuss'
  ];

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
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Create Something
              <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Amazing
              </span>
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can 
              bring your vision to life and create a digital solution that exceeds your expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card padding="lg" className="h-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Me a Message
                </h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                        placeholder="Project subject or title"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell me about your project, goals, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send className="w-4 h-4" />}
                    </button>
                  </form>
                )}
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  I'm always excited to discuss new projects and opportunities. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card padding="md" className="flex items-center gap-4 hover:shadow-lg transition-shadow">
                        <div className="flex-shrink-0 p-3 bg-purple-100 rounded-lg">
                          <Icon className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-purple-600 hover:text-purple-700 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-600">{info.value}</p>
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-gray-100 rounded-lg transition-colors ${social.color} hover:bg-gray-200`}
                        aria-label={`Follow on ${social.name}`}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Contact */}
              <Card padding="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <MessageCircle className="w-8 h-8" />
                  <h3 className="text-xl font-bold">Quick Response</h3>
                </div>
                <p className="mb-4">
                  Need a quick answer? Send me a direct message and I'll respond within a few hours.
                </p>
                <a
                  href={`mailto:nwabethroseonuoha@gmail.com?subject=Quick Message from ${window.location.hostname}&body=Hi Bethel,%0D%0A%0D%0AI'd like to discuss a project with you.%0D%0A%0D%0ABest regards`}
                  className="px-6 py-3 bg-white text-purple-600 hover:bg-purple-50 font-semibold rounded-lg transition-colors text-center"
                >
                  Send Quick Message
                </a>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
