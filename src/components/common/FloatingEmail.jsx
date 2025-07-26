import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X, Send, MessageCircle, Phone } from 'lucide-react';
import { quickEmail } from '../../utils/emailUtils';

const FloatingEmail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show floating button after user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const emailOptions = [
    {
      icon: MessageCircle,
      label: 'Project Inquiry',
      description: 'Discuss a new project',
      action: () => quickEmail.projectInquiry(),
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: Send,
      label: 'Quick Quote',
      description: 'Get a price estimate',
      action: () => quickEmail.quickQuote(),
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Phone,
      label: 'Consultation',
      description: 'Schedule a call',
      action: () => quickEmail.consultation(),
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-72"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-900">Get In Touch</h3>
                <p className="text-sm text-gray-600">bethelmba69@gmail.com</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Email Options */}
            <div className="space-y-2">
              {emailOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.button
                    key={option.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      option.action();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
                  >
                    <div className={`p-2 rounded-lg text-white ${option.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Quick Contact */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    quickEmail.general();
                    setIsOpen(false);
                  }}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors"
                >
                  Send Email
                </button>
                <a
                  href="tel:+2348064111501"
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium transition-colors text-center"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Response Time */}
            <p className="text-xs text-gray-500 text-center mt-3">
              Usually responds within 24 hours
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-colors"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="mail"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification Dot */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
          />
        )}
      </motion.button>
    </div>
  );
};

export default FloatingEmail;
