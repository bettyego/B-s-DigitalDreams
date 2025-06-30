import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Mail, ChevronUp } from 'lucide-react';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-tr from-purple-900 to-purple-600 text-white py-12 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Vision */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src="/bettylogo.png" alt="B's DigitalDreams Logo" className="w-12 h-12 rounded-full shadow-lg" />
            <h2 className="text-2xl font-bold tracking-wide">B's DigitalDreams</h2>
          </div>
          <p className="text-sm text-gray-200 leading-relaxed">
            I create modern, responsive, and captivating websites that bring your ideas to life and elevate your online presence.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {['Home', 'AboutUs', 'Portfolio', 'Contact'].map((link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase()}`} className="hover:text-white transition duration-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">What I Do</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>Responsive Website Design</li>
            <li>Landing Pages</li>
            <li>UI/UX Enhancements</li>
            <li>Portfolio Sites</li>
            <li>Business Websites</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-sm text-gray-200 mb-3 flex items-center">
            <Mail className="w-4 h-4 mr-2" /> nwabethroseonuoha@gmail.com
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/share/1BnLnpmwrw/" target="_blank" className="hover:text-purple-300 transition">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=tdcpvow" target="_blank" className="hover:text-purple-300 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-purple-300 transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-purple-700 text-white p-3 rounded-full shadow-lg hover:bg-purple-800 z-50"
        >
          <ChevronUp />
        </button>
      )}

      {/* Bottom Section */}
      <div className="mt-12 text-center border-t border-purple-700 pt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} B's DigitalDreams — Crafted with code and creativity 💜
      </div>
    </footer>
  );
};

export default Footer;
