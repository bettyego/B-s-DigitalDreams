/**
 * Utility functions for file downloads
 */
import { trackDownload } from './analytics';

/**
 * Download CV/Resume file
 * @param {string} filename - Name of the file to download
 */
export const downloadCV = (filename = 'Onuoha-Mba-Bethel-CV.pdf') => {
  try {
    // Create a temporary link element
    const link = document.createElement('a');
    
    // Set the file path (place your CV in the public folder)
    link.href = `/cv/${filename}`;
    
    // Set download attribute with filename
    link.download = filename;
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Track download event
    trackDownload(filename, 'CV');
    
    console.log('CV download initiated:', filename);
  } catch (error) {
    console.error('Error downloading CV:', error);
    alert('Sorry, there was an error downloading the CV. Please try again.');
  }
};

/**
 * Download portfolio as PDF
 * @param {string} filename - Name of the portfolio file
 */
export const downloadPortfolio = (filename = 'Bs-DigitalDreams-Portfolio.pdf') => {
  try {
    const link = document.createElement('a');
    link.href = `/portfolio/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Track download event
    trackDownload(filename, 'Portfolio');
    
    console.log('Portfolio download initiated:', filename);
  } catch (error) {
    console.error('Error downloading portfolio:', error);
    alert('Sorry, there was an error downloading the portfolio. Please try again.');
  }
};

/**
 * Open CV in new tab for viewing
 * @param {string} filename - Name of the CV file
 */
export const viewCV = (filename = 'Onuoha-Mba-Bethel-CV.pdf') => {
  try {
    window.open(`/cv/${filename}`, '_blank');
    
    // Track view event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'view', {
        event_category: 'CV',
        event_label: filename,
      });
    }
  } catch (error) {
    console.error('Error viewing CV:', error);
    alert('Sorry, there was an error opening the CV. Please try again.');
  }
};

/**
 * Share CV via Web Share API (if supported)
 * @param {string} filename - Name of the CV file
 */
export const shareCV = async (filename = 'Onuoha-Mba-Bethel-CV.pdf') => {
  try {
    if (navigator.share) {
      await navigator.share({
        title: "Onuoha-Mba Bethel's CV",
        text: 'Check out my professional CV and experience',
        url: `${window.location.origin}/cv/${filename}`,
      });
    } else {
      // Fallback: copy link to clipboard
      const url = `${window.location.origin}/cv/${filename}`;
      await navigator.clipboard.writeText(url);
      alert('CV link copied to clipboard!');
    }
  } catch (error) {
    console.error('Error sharing CV:', error);
  }
};

/**
 * Check if file exists before download
 * @param {string} url - URL to check
 * @returns {Promise<boolean>} - Whether file exists
 */
export const checkFileExists = async (url) => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('Error checking file:', error);
    return false;
  }
};

/**
 * Download with progress tracking (for large files)
 * @param {string} url - File URL
 * @param {string} filename - Download filename
 * @param {Function} onProgress - Progress callback
 */
export const downloadWithProgress = async (url, filename, onProgress) => {
  try {
    const response = await fetch(url);
    const reader = response.body.getReader();
    const contentLength = +response.headers.get('Content-Length');
    
    let receivedLength = 0;
    const chunks = [];
    
    while (true) {
      const { done, value } = await reader.read();
      
      if (done) break;
      
      chunks.push(value);
      receivedLength += value.length;
      
      if (onProgress) {
        onProgress(receivedLength / contentLength);
      }
    }
    
    const blob = new Blob(chunks);
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    
  } catch (error) {
    console.error('Error downloading with progress:', error);
    throw error;
  }
};

export default {
  downloadCV,
  downloadPortfolio,
  viewCV,
  shareCV,
  checkFileExists,
  downloadWithProgress,
};
