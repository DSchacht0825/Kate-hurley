'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold gradient-text mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            I'd love to hear from you. Whether you're interested in music lessons, mindset coaching,
            or just want to connect, reach out today.
          </p>
        </motion.div>

        {/* Contact Form */}
        <div className="mb-16">
          <ContactForm />
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-peach rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gold mb-4">Email</h3>
            <p className="text-white/70 mb-4">Best for detailed inquiries and scheduling</p>
            <a
              href="mailto:iamkatehurley@gmail.com"
              className="text-gold hover:text-peach transition-colors text-lg font-medium"
            >
              iamkatehurley@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-peach rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gold mb-4">Phone</h3>
            <p className="text-white/70 mb-4">For music lessons (text preferred)</p>
            <a
              href="tel:828-777-4585"
              className="text-gold hover:text-peach transition-colors text-lg font-medium block mb-2"
            >
              828-777-4585
            </a>
            <p className="text-white/70 mb-2">For mindset coaching</p>
            <a
              href="tel:303-946-9875"
              className="text-gold hover:text-peach transition-colors text-lg font-medium"
            >
              303-946-9875
            </a>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gold/10 to-peach/10 rounded-2xl p-12 border border-gold/30 text-center mb-16"
        >
          <h2 className="text-3xl font-serif font-bold gradient-text mb-6">
            Connect on Social Media
          </h2>
          <p className="text-white/70 mb-8">
            Follow my journey and stay updated on music, coaching, and inspiration
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com/iamkatehurley"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
              aria-label="Facebook"
            >
              <svg className="w-7 h-7 text-white group-hover:text-navy-dark transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/iamkatehurley"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
              aria-label="Instagram"
            >
              <svg className="w-7 h-7 text-white group-hover:text-navy-dark transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com/channel/UCZrPaM_zqPDNsQ0qQKY7oxg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
              aria-label="YouTube"
            >
              <svg className="w-7 h-7 text-white group-hover:text-navy-dark transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="https://vimeo.com/user11950680"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
              aria-label="Vimeo"
            >
              <svg className="w-7 h-7 text-white group-hover:text-navy-dark transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 text-center"
        >
          <h2 className="text-3xl font-serif font-bold gradient-text mb-6">
            Location
          </h2>
          <p className="text-white/80 text-lg mb-4">
            In-person lessons and coaching available in:
          </p>
          <p className="text-gold text-xl font-semibold mb-6">
            Fairview & Asheville, North Carolina
          </p>
          <p className="text-white/70">
            Online sessions available worldwide via Zoom
          </p>
        </motion.div>
      </div>
    </div>
  );
}
