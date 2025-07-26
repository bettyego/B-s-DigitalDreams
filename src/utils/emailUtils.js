/**
 * Email utility functions for B's DigitalDreams
 * Primary email: bethelmba69@gmail.com
 */

import { trackSocialClick } from './analytics';

// Primary email configuration
export const EMAIL_CONFIG = {
  PRIMARY: 'bethelmba69@gmail.com',
  BACKUP: 'nwabethroseonuoha@gmail.com', // Keep as backup
  RESPONSE_TIME: '24 hours',
  BUSINESS_HOURS: 'Mon-Fri 9AM-6PM WAT'
};

// Email templates for different purposes
export const EMAIL_TEMPLATES = {
  PROJECT_INQUIRY: {
    subject: 'Project Inquiry - B\'s DigitalDreams',
    body: `Hi Bethel,

I'm interested in discussing a project with you. I found your portfolio website and would love to explore how we can work together.

Project Details:
- Type: [Please specify - Website, E-commerce, Portfolio, etc.]
- Timeline: [When do you need this completed?]
- Budget: [Your budget range]

Looking forward to hearing from you!

Best regards,
[Your Name]`
  },

  QUICK_QUOTE: {
    subject: 'Quick Quote Request - B\'s DigitalDreams',
    body: `Hi Bethel,

I need a quick quote for a project. Here are the details:

Project Type: [Website/E-commerce/Portfolio/Other]
Requirements: [Brief description of what you need]
Timeline: [When do you need this?]
Budget Range: [Your budget expectations]

Please let me know if you need any additional information.

Best regards,
[Your Name]`
  },

  CONSULTATION: {
    subject: 'Consultation Request - B\'s DigitalDreams',
    body: `Hi Bethel,

I'd like to schedule a consultation to discuss my project needs.

Preferred Contact Method: [Email/Phone/Video Call]
Availability: [Your available times]
Project Overview: [Brief description of your project]

Looking forward to our discussion!

Best regards,
[Your Name]`
  },

  GENERAL_INQUIRY: {
    subject: 'General Inquiry - B\'s DigitalDreams',
    body: `Hi Bethel,

I have a question about your services.

[Your message here]

Best regards,
[Your Name]`
  },

  COLLABORATION: {
    subject: 'Collaboration Opportunity - B\'s DigitalDreams',
    body: `Hi Bethel,

I'm reaching out regarding a potential collaboration opportunity.

About Me/My Company: [Brief introduction]
Collaboration Type: [Partnership/Referral/Joint Project]
Details: [Describe the opportunity]

I'd love to discuss this further with you.

Best regards,
[Your Name]`
  }
};

/**
 * Create a mailto URL with encoded subject and body
 * @param {string} template - Template key from EMAIL_TEMPLATES
 * @param {Object} customData - Custom data to replace placeholders
 * @returns {string} Formatted mailto URL
 */
export const createMailtoUrl = (template = 'PROJECT_INQUIRY', customData = {}) => {
  const emailTemplate = EMAIL_TEMPLATES[template] || EMAIL_TEMPLATES.PROJECT_INQUIRY;
  
  let subject = emailTemplate.subject;
  let body = emailTemplate.body;

  // Replace placeholders with custom data
  if (customData.subject) {
    subject = customData.subject;
  }
  
  if (customData.body) {
    body = customData.body;
  }

  // Replace common placeholders
  Object.keys(customData).forEach(key => {
    const placeholder = `[${key}]`;
    body = body.replace(new RegExp(placeholder, 'g'), customData[key] || '');
  });

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  
  return `mailto:${EMAIL_CONFIG.PRIMARY}?subject=${encodedSubject}&body=${encodedBody}`;
};

/**
 * Open email client with specified template
 * @param {string} template - Template key
 * @param {Object} customData - Custom data for the email
 * @param {string} trackingLabel - Label for analytics tracking
 */
export const openEmailClient = (template = 'PROJECT_INQUIRY', customData = {}, trackingLabel = 'Email') => {
  const mailtoUrl = createMailtoUrl(template, customData);
  
  // Track the email action
  trackSocialClick(trackingLabel, EMAIL_CONFIG.PRIMARY);
  
  // Open email client
  window.location.href = mailtoUrl;
};

/**
 * Copy email address to clipboard
 * @param {string} email - Email address to copy
 * @returns {Promise<boolean>} Success status
 */
export const copyEmailToClipboard = async (email = EMAIL_CONFIG.PRIMARY) => {
  try {
    await navigator.clipboard.writeText(email);
    trackSocialClick('Email Copy', email);
    return true;
  } catch (err) {
    console.error('Failed to copy email:', err);
    
    // Fallback for older browsers
    try {
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      trackSocialClick('Email Copy Fallback', email);
      return true;
    } catch (fallbackErr) {
      console.error('Fallback copy failed:', fallbackErr);
      return false;
    }
  }
};

/**
 * Validate email address format
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Get email display name
 * @param {string} email - Email address
 * @returns {string} Display name
 */
export const getEmailDisplayName = (email = EMAIL_CONFIG.PRIMARY) => {
  if (email === EMAIL_CONFIG.PRIMARY) {
    return 'Bethel (Primary)';
  }
  if (email === EMAIL_CONFIG.BACKUP) {
    return 'Bethel (Backup)';
  }
  return email;
};

/**
 * Quick email functions for common actions
 */
export const quickEmail = {
  // Project inquiry
  projectInquiry: (projectType = '', timeline = '', budget = '') => {
    openEmailClient('PROJECT_INQUIRY', {
      'Please specify - Website, E-commerce, Portfolio, etc.': projectType,
      'When do you need this completed?': timeline,
      'Your budget range': budget
    }, 'Project Inquiry');
  },

  // Quick quote
  quickQuote: (projectType = '', requirements = '', timeline = '', budget = '') => {
    openEmailClient('QUICK_QUOTE', {
      '[Website/E-commerce/Portfolio/Other]': projectType,
      '[Brief description of what you need]': requirements,
      '[When do you need this?]': timeline,
      '[Your budget expectations]': budget
    }, 'Quick Quote');
  },

  // Consultation request
  consultation: (contactMethod = '', availability = '', overview = '') => {
    openEmailClient('CONSULTATION', {
      '[Email/Phone/Video Call]': contactMethod,
      '[Your available times]': availability,
      '[Brief description of your project]': overview
    }, 'Consultation Request');
  },

  // General inquiry
  general: (message = '') => {
    openEmailClient('GENERAL_INQUIRY', {
      '[Your message here]': message
    }, 'General Inquiry');
  },

  // Collaboration
  collaboration: (introduction = '', type = '', details = '') => {
    openEmailClient('COLLABORATION', {
      '[Brief introduction]': introduction,
      '[Partnership/Referral/Joint Project]': type,
      '[Describe the opportunity]': details
    }, 'Collaboration');
  }
};

// Export default configuration
export default {
  EMAIL_CONFIG,
  EMAIL_TEMPLATES,
  createMailtoUrl,
  openEmailClient,
  copyEmailToClipboard,
  isValidEmail,
  getEmailDisplayName,
  quickEmail
};
