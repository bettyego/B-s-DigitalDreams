import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Heart, ExternalLink, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackSocialClick } from '../../utils/analytics';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Responsive Website Design',
    'Landing Pages',
    'UI/UX Enhancements',
    'Portfolio Sites',
    'Business Websites',
    'E-commerce Solutions',
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/1BnLnpmwrw/',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=tdcpvow',
      icon: Instagram,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/BsDigitalDreams',
      icon: Twitter,
    },
  ];

  // Scroll to Services section and highlight service
  const handleServiceClick = (service) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToService: service } });
    } else {
      const section = document.getElementById('services-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Optionally, highlight the service (implement highlight logic in Services section)
        window.dispatchEvent(new CustomEvent('highlightService', { detail: service }));
      }
    }
  };

  return (
    <footer className="bg-gradient-to-tr from-purple-900 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/bettylogo.png" 
                alt="B's DigitalDreams Logo" 
                className="w-12 h-12 rounded-full shadow-lg"
              />
              <h2 className="text-2xl font-bold tracking-wide">
                B's DigitalDreams
              </h2>
            </div>
            <p className="text-sm text-purple-100 leading-relaxed mb-6">
              Creating modern, responsive, and captivating websites that bring your ideas to life and elevate your online presence.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-purple-200">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href="mailto:bethelmba69@gmail.com?subject=Project Inquiry from Website&body=Hi Bethel,%0D%0A%0D%0AI'm interested in discussing a project with you.%0D%0A%0D%0ABest regards"
                  className="hover:text-white transition-colors"
                  onClick={() => trackSocialClick('Email', 'bethelmba69@gmail.com')}
                >
                  bethelmba69@gmail.com
                </a>
              </div>
              <div className="flex items-center text-sm text-purple-200">
                <Phone className="w-4 h-4 mr-2" />
                <a
                  href="tel:+2348064111501"
                  className="hover:text-white transition-colors"
                  onClick={() => trackSocialClick('Phone', '+2348064111501')}
                >
                  +234 806 411 1501
                </a>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-purple-200 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    {item.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">What I Do</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    className="text-sm text-purple-200 hover:text-white transition-colors duration-300 w-full text-left"
                    onClick={() => handleServiceClick(service)}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-sm text-purple-200 mb-6">
              Follow me on social media for updates and behind-the-scenes content.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackSocialClick(social.name, social.href)}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 group"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-purple-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-purple-200 flex items-center">
              © {currentYear} B's DigitalDreams — Crafted with 
              <Heart className="w-4 h-4 mx-1 text-red-400" />
              and creativity
            </p>
            <div className="flex items-center gap-6 text-xs text-purple-300">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
