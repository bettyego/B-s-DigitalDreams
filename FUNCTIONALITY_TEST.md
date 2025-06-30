# B's DigitalDreams - Functionality Test Guide

This guide helps you test all the implemented features and functionality of the portfolio website.

## 🚀 Getting Started

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

## ✅ Core Functionality Tests

### 1. **Navigation & Routing**
- [ ] Click on each navigation item (Home, About Us, Portfolio, Contact)
- [ ] Verify all pages load correctly
- [ ] Test mobile navigation menu (hamburger icon)
- [ ] Check that active page is highlighted in navigation
- [ ] Test logo click returns to home page

### 2. **Theme Toggle**
- [ ] Click the theme toggle button (Moon/Sun icon) in header
- [ ] Verify theme switches between light and dark modes
- [ ] Check that theme preference is saved (refresh page to test)
- [ ] Verify theme applies to all pages

### 3. **Hero Section**
- [ ] Check hero animations load smoothly
- [ ] Test "Explore My Work" button → should navigate to Portfolio
- [ ] Test "Get Started" button → should navigate to Contact
- [ ] Verify responsive design on different screen sizes

### 4. **Services Section**
- [ ] Verify all service cards display correctly
- [ ] Test hover effects on service cards
- [ ] Check "Learn More" buttons are clickable
- [ ] Test "Get Free Quote" and "View Portfolio" buttons

### 5. **Portfolio Section**
- [ ] Test category filter buttons (All, E-commerce, Portfolio, etc.)
- [ ] Verify project filtering works correctly
- [ ] Test search functionality
- [ ] Switch between Grid and List view modes
- [ ] Test "View Project" and GitHub buttons on project cards
- [ ] Check project overlay effects on hover

### 6. **Testimonials Carousel**
- [ ] Test navigation arrows (Previous/Next)
- [ ] Verify auto-advance functionality (changes every 5 seconds)
- [ ] Test dot indicators at bottom
- [ ] Check testimonial content displays correctly

### 7. **Contact Form**
- [ ] Fill out all required fields and submit
- [ ] Test form validation (try submitting empty fields)
- [ ] Test email validation (enter invalid email)
- [ ] Verify loading state during submission
- [ ] Check success message appears after submission
- [ ] Test form reset after successful submission

### 8. **About Us Page**
- [ ] Check skills progress bars animate on scroll
- [ ] Verify achievement counters display correctly
- [ ] Test "Download CV" and "View Portfolio" buttons
- [ ] Check responsive layout on mobile

### 9. **Portfolio Page**
- [ ] Test advanced filtering and search
- [ ] Switch between grid and list views
- [ ] Test project links open in new tabs
- [ ] Verify "No results" message when search yields no results

### 10. **Contact Page**
- [ ] Test contact form with all fields
- [ ] Verify contact information displays correctly
- [ ] Test social media links
- [ ] Check phone number link opens dialer
- [ ] Test email link opens email client

## 🎨 Visual & Animation Tests

### 1. **Animations**
- [ ] Page load animations
- [ ] Scroll-triggered animations
- [ ] Hover effects on buttons and cards
- [ ] Smooth transitions between pages
- [ ] Loading spinners and micro-interactions

### 2. **Responsive Design**
- [ ] Test on mobile devices (320px - 768px)
- [ ] Test on tablets (768px - 1024px)
- [ ] Test on desktop (1024px+)
- [ ] Check navigation adapts to screen size
- [ ] Verify text remains readable on all devices

### 3. **Accessibility**
- [ ] Test keyboard navigation (Tab through elements)
- [ ] Check focus indicators are visible
- [ ] Test with screen reader (if available)
- [ ] Verify color contrast is sufficient
- [ ] Check alt text on images

## 🔧 Technical Tests

### 1. **Performance**
- [ ] Check page load times
- [ ] Test image loading and optimization
- [ ] Verify smooth scrolling
- [ ] Check for console errors

### 2. **SEO**
- [ ] View page source and check meta tags
- [ ] Verify structured data is present
- [ ] Check Open Graph tags for social sharing
- [ ] Test page titles and descriptions

### 3. **Error Handling**
- [ ] Test 404 page (navigate to non-existent route)
- [ ] Check error boundaries work (if any errors occur)
- [ ] Test form error states
- [ ] Verify graceful degradation

## 📧 Email Integration Setup

To test the contact form email functionality:

1. **Sign up for EmailJS:**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Create a free account
   - Set up an email service (Gmail, Outlook, etc.)
   - Create an email template

2. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Fill in your EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

3. **Test email sending:**
   - Fill out the contact form
   - Submit and check your email inbox
   - Verify you receive the form submission

## 🐛 Common Issues & Solutions

### Issue: Theme toggle not working
**Solution:** Check browser console for errors, ensure ThemeContext is properly imported

### Issue: Contact form not submitting
**Solution:** Verify EmailJS configuration in `.env` file

### Issue: Navigation not working
**Solution:** Check React Router setup and component imports

### Issue: Images not loading
**Solution:** Verify image paths in `public` folder

### Issue: Animations not smooth
**Solution:** Check if `prefers-reduced-motion` is enabled in browser

## 📱 Mobile Testing Checklist

- [ ] Touch interactions work properly
- [ ] Mobile menu opens and closes correctly
- [ ] Forms are easy to fill on mobile
- [ ] Text is readable without zooming
- [ ] Buttons are large enough for touch
- [ ] Scroll performance is smooth

## 🎯 Performance Benchmarks

Target metrics:
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] First Input Delay < 100ms
- [ ] Lighthouse Score > 90

## ✨ Advanced Features

- [ ] Scroll-to-top button appears after scrolling
- [ ] Smooth scroll behavior works
- [ ] Local storage saves user preferences
- [ ] Error boundaries catch and display errors gracefully
- [ ] Loading states provide good user feedback

---

## 🚀 Deployment Testing

Before deploying:
1. Run `npm run build` successfully
2. Test the production build with `npm run preview`
3. Verify all functionality works in production mode
4. Check that environment variables are properly configured for production

---

**Note:** This is a comprehensive test guide. Not all features may be fully implemented yet. Use this as a checklist to ensure all functionality is working as expected.
