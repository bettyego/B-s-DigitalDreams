import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data to send
 * @returns {Promise} - EmailJS response
 */
export const sendEmail = async (formData) => {
  try {
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      project_type: formData.projectType,
      budget: formData.budget,
      to_email: import.meta.env.VITE_CONTACT_EMAIL || 'nwabethroseonuoha@gmail.com',
      reply_to: formData.email,
    };

    // Send email
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    return {
      success: true,
      message: 'Email sent successfully!',
      response,
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again.',
      error,
    };
  }
};

/**
 * Alternative: Send email using Netlify Forms (if deployed on Netlify)
 * @param {Object} formData - Form data to send
 * @returns {Promise} - Fetch response
 */
export const sendEmailNetlify = async (formData) => {
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contact',
        ...formData,
      }).toString(),
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Email sent successfully!',
      };
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Netlify form submission failed:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again.',
      error,
    };
  }
};

/**
 * Alternative: Send email using Formspree
 * @param {Object} formData - Form data to send
 * @returns {Promise} - Fetch response
 */
export const sendEmailFormspree = async (formData) => {
  try {
    const response = await fetch('https://formspree.io/f/your_form_id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Email sent successfully!',
      };
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Formspree submission failed:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again.',
      error,
    };
  }
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - Is valid email
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate form data
 * @param {Object} formData - Form data to validate
 * @returns {Object} - Validation result
 */
export const validateFormData = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.subject || formData.subject.trim().length < 5) {
    errors.subject = 'Subject must be at least 5 characters long';
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export default {
  sendEmail,
  sendEmailNetlify,
  sendEmailFormspree,
  validateEmail,
  validateFormData,
};
