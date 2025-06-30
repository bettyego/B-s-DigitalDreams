import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 px-6 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Let’s Work Together</h2>
        <p className="text-center text-purple-200 mb-10">
          Have a project or idea? Fill out the form and let’s create something amazing.
        </p>

        <form className="bg-white/10 p-6 rounded-xl backdrop-blur-md shadow-lg space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-white/20 placeholder-white text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-white/20 placeholder-white text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded bg-white/20 placeholder-white text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-300"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded bg-white/20 placeholder-white text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-300"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-3 rounded font-semibold shadow-md"
          >
            Send Message
          </button>
        </form>

        <p className="text-center text-sm mt-8 text-purple-200">
          We respond to all inquiries within 24 hours.
        </p>
      </div>
    </section>
  );
};

export default Contact;
