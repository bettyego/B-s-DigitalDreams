import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageCircle,
  Phone,
  Calendar
} from 'lucide-react';
import { trackSocialClick } from '../../utils/analytics';

const EmailComponent = ({ 
  variant = 'default', 
  size = 'medium',
  showSubject = true,
  customSubject = '',
  customMessage = '',
  className = ''
}) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const email = 'bethelmba69@gmail.com';
  
  // Default email content
  const defaultSubject = customSubject || 'Project Inquiry - B\'s DigitalDreams';
  const defaultMessage = customMessage || `Hi Bethel,

I'm interested in discussing a project with you. I found your portfolio website and would love to explore how we can work together.

Looking forward to hearing from you!

Best regards`;

  // Create mailto URL
  const createMailtoUrl = (subject = defaultSubject, message = defaultMessage) => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedMessage = encodeURIComponent(message);
    return `mailto:${email}?subject=${encodedSubject}&body=${encodedMessage}`;
  };

  // Copy email to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      trackSocialClick('Email Copy', email);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  // Handle email click
  const handleEmailClick = (type = 'default') => {
    trackSocialClick(`Email ${type}`, email);
    window.open(createMailtoUrl(), '_blank');
  };

  // Size configurations
  const sizeConfig = {
    small: {
      button: 'px-3 py-2 text-sm',
      icon: 'w-4 h-4',
      text: 'text-sm'
    },
    medium: {
      button: 'px-4 py-3 text-base',
      icon: 'w-5 h-5',
      text: 'text-base'
    },
    large: {
      button: 'px-6 py-4 text-lg',
      icon: 'w-6 h-6',
      text: 'text-lg'
    }
  };

  const config = sizeConfig[size];

  // Variant: Simple Email Link
  if (variant === 'link') {
    return (
      <a
        href={createMailtoUrl()}
        onClick={() => handleEmailClick('link')}
        className={`inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors ${config.text} ${className}`}
      >
        <Mail className={config.icon} />
        {email}
      </a>
    );
  }

  // Variant: Button
  if (variant === 'button') {
    return (
      <button
        onClick={() => handleEmailClick('button')}
        className={`inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors ${config.button} ${className}`}
      >
        <Mail className={config.icon} />
        Send Email
      </button>
    );
  }

  // Variant: Icon Only
  if (variant === 'icon') {
    return (
      <button
        onClick={() => handleEmailClick('icon')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative p-3 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-full transition-colors ${className}`}
      >
        <Mail className={config.icon} />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap"
            >
              Send Email
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    );
  }

  // Variant: Card (Default)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-purple-100 rounded-xl">
          <Mail className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Get In Touch</h3>
          <p className="text-sm text-gray-600">Let's discuss your project</p>
        </div>
      </div>

      {/* Email Display */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">{email}</span>
          <button
            onClick={copyToClipboard}
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            title="Copy email address"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Check className="w-4 h-4 text-green-600" />
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Copy className="w-4 h-4 text-gray-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        {/* Primary Email Button */}
        <button
          onClick={() => handleEmailClick('primary')}
          className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors"
        >
          <Send className="w-4 h-4" />
          Send Email
        </button>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => handleEmailClick('quick-quote')}
            className="flex flex-col items-center gap-1 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-gray-600" />
            <span className="text-xs text-gray-600">Quick Quote</span>
          </button>
          
          <a
            href="tel:+2348064111501"
            onClick={() => trackSocialClick('Phone', '+2348064111501')}
            className="flex flex-col items-center gap-1 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4 text-gray-600" />
            <span className="text-xs text-gray-600">Call Now</span>
          </a>
          
          <button
            onClick={() => handleEmailClick('consultation')}
            className="flex flex-col items-center gap-1 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Calendar className="w-4 h-4 text-gray-600" />
            <span className="text-xs text-gray-600">Consultation</span>
          </button>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-xs text-gray-500 mt-4 text-center">
        Usually responds within 24 hours
      </p>
    </motion.div>
  );
};

export default EmailComponent;
