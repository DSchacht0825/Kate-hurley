'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-dark to-navy-dark/80">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,165,116,0.1),transparent_50%)]"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,205,178,0.1),transparent_50%)]"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            <span className="gradient-text">Kate Hurley</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-3xl text-white/90 mb-8 font-light"
          >
            Music Educator & Mindset Coach
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Bringing light and love through voice, piano, songwriting lessons, and mindset coaching.
            Discover the treasures within you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/lessons"
                className="px-8 py-4 bg-gradient-to-r from-gold to-peach text-navy-dark font-semibold rounded-full hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 inline-block"
              >
                Explore Music Lessons
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/coaching"
                className="px-8 py-4 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-navy-dark transition-all duration-300 inline-block"
              >
                Mindset Coaching
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-gold rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-navy-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4"
            >
              What I Offer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              Personalized guidance for your musical and personal growth journey
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Voice Lessons */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-gradient-to-br from-gold to-peach rounded-full flex items-center justify-center mb-6"
              >
                <svg className="w-8 h-8 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-serif font-semibold text-gold mb-4">Voice & Singing</h3>
              <p className="text-white/70 mb-6">
                Master the Voice Color Method, a unique system using colors and visuals to develop your vocal technique.
              </p>
              <Link href="/lessons" className="text-gold hover:text-peach transition-colors font-medium">
                Learn More →
              </Link>
            </motion.div>

            {/* Piano & Songwriting */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-gradient-to-br from-gold to-peach rounded-full flex items-center justify-center mb-6"
              >
                <svg className="w-8 h-8 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-serif font-semibold text-gold mb-4">Piano & Songwriting</h3>
              <p className="text-white/70 mb-6">
                From note reading to composing original songs, unleash your creativity through piano and songwriting.
              </p>
              <Link href="/lessons" className="text-gold hover:text-peach transition-colors font-medium">
                Learn More →
              </Link>
            </motion.div>

            {/* Mindset Coaching */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-gradient-to-br from-gold to-peach rounded-full flex items-center justify-center mb-6"
              >
                <svg className="w-8 h-8 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-serif font-semibold text-gold mb-4">Mindset Coaching</h3>
              <p className="text-white/70 mb-6">
                Transform your story one thought at a time. Certified life coaching for personal breakthroughs.
              </p>
              <Link href="/coaching" className="text-gold hover:text-peach transition-colors font-medium">
                Learn More →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6"
              >
                About Kate
              </motion.h2>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                After 13 years of touring globally and sharing music from German castles to Indian villages,
                I found my true calling in teaching and coaching.
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Music is a catalyst for my students to discover the treasures within them. Combined with
                mindset coaching, I help people transform their stories, one thought at a time.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-3 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-navy-dark transition-all duration-300"
              >
                Read My Story
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-gold/30 shadow-2xl shadow-gold/20 relative">
                <Image
                  src="/kate.jpg"
                  alt="Kate Hurley"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold/20 to-peach/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-peach/20 to-gold/20 rounded-full blur-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold/10 to-peach/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
              Ready to Begin?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Whether you're discovering your voice or transforming your mindset,
              let's start this journey together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-gold to-peach text-navy-dark font-semibold rounded-full hover:shadow-xl hover:shadow-gold/20 transform hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </Link>
              <a
                href="mailto:iamkatehurley@gmail.com"
                className="px-8 py-4 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-navy-dark transition-all duration-300"
              >
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
