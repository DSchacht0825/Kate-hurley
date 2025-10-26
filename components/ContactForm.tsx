'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formDataToSend = new FormData(form);

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try emailing directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-gold/20 to-peach/20 backdrop-blur-sm rounded-2xl p-12 border border-gold/50 text-center"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-gold to-peach rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-serif font-bold gradient-text mb-4">
          Thank You!
        </h3>
        <p className="text-white/80 text-lg mb-6">
          Your message has been received. I'll get back to you as soon as possible!
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-navy-dark transition-all duration-300"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
    >
      <h2 className="text-3xl font-serif font-bold gradient-text mb-2 text-center">
        Send Me a Message
      </h2>
      <p className="text-white/70 text-center mb-8">
        Fill out the form below and I'll get back to you soon
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Netlify form detection */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot field for spam prevention */}
        <p className="hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-white/90 font-medium mb-2">
            Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-navy-dark/50 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors"
            placeholder="Your full name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-white/90 font-medium mb-2">
            Email <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-navy-dark/50 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-white/90 font-medium mb-2">
            Phone <span className="text-white/50 text-sm">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-navy-dark/50 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors"
            placeholder="(123) 456-7890"
          />
        </div>

        {/* Interest Dropdown */}
        <div>
          <label htmlFor="interest" className="block text-white/90 font-medium mb-2">
            I'm interested in <span className="text-gold">*</span>
          </label>
          <select
            id="interest"
            name="interest"
            required
            value={formData.interest}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-navy-dark/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23D4A574' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem',
            }}
          >
            <option value="" disabled>Select an option...</option>
            <option value="Voice Lessons">Voice Lessons</option>
            <option value="Piano Lessons">Piano Lessons</option>
            <option value="Songwriting Lessons">Songwriting Lessons</option>
            <option value="Guitar Lessons">Guitar Lessons</option>
            <option value="Mindset Coaching">Mindset Coaching</option>
            <option value="Music Lessons + Coaching">Music Lessons + Coaching</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-white/90 font-medium mb-2">
            Message <span className="text-gold">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 bg-navy-dark/50 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors resize-none"
            placeholder="Tell me about your goals, experience level, or any questions you have..."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-4 bg-gradient-to-r from-gold to-peach text-navy-dark font-semibold rounded-full hover:shadow-xl hover:shadow-gold/20 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>

      <p className="text-white/50 text-sm text-center mt-6">
        Or reach out directly via email or phone using the contact information above
      </p>
    </motion.div>
  );
}
