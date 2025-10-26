'use client';

import { motion } from 'framer-motion';

export default function Coaching() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold gradient-text mb-6">
            Mindset Coaching
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Transform your story, one thought at a time
          </p>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gradient-to-br from-gold/10 to-peach/10 rounded-2xl p-12 border border-gold/30 mb-16"
        >
          <h2 className="text-3xl font-serif font-bold gradient-text mb-6 text-center">
            My Approach
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            As a certified life coach, I help you find the answers that already exist within you through
            active listening and strategic questioning. Together, we explore your thought patterns and
            self-talk to create lasting transformation.
          </p>
          <p className="text-white/90 text-xl leading-relaxed italic font-serif text-center">
            "Together we can change your story, one thought at a time."
          </p>
        </motion.div>

        {/* IDEA Framework */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-serif font-bold gradient-text mb-12 text-center">
            The IDEA Model
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold/50 transition-all duration-300 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-peach rounded-full flex items-center justify-center mb-6 text-navy-dark font-bold text-2xl">
                I
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gold mb-4">Identify</h3>
              <p className="text-white/70">
                Pinpoint the specific challenges and areas you want to focus on in your life.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold/50 transition-all duration-300 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-peach rounded-full flex items-center justify-center mb-6 text-navy-dark font-bold text-2xl">
                D
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gold mb-4">Discover</h3>
              <p className="text-white/70">
                Uncover potential solutions and new perspectives on your challenges.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold/50 transition-all duration-300 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-peach rounded-full flex items-center justify-center mb-6 text-navy-dark font-bold text-2xl">
                E
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gold mb-4">Explore</h3>
              <p className="text-white/70">
                Examine new possibilities and pathways for growth and transformation.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold/50 transition-all duration-300 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-peach rounded-full flex items-center justify-center mb-6 text-navy-dark font-bold text-2xl">
                A
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gold mb-4">Act</h3>
              <p className="text-white/70">
                Take tangible steps toward your goals with clear, actionable plans.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What to Expect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 mb-16"
        >
          <h2 className="text-3xl font-serif font-bold gradient-text mb-8 text-center">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gold mb-4">Focus Areas</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Thought patterns and self-talk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Personal transformation and growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Overcoming limiting beliefs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Creating meaningful life changes</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gold mb-4">Session Details</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Customized to your unique needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Active listening and strategic questioning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Actionable insights and homework</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Can be combined with music lessons</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Pricing & Availability */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gold/10 to-peach/10 rounded-2xl p-12 border border-gold/30 mb-16"
        >
          <h2 className="text-3xl font-serif font-bold gradient-text mb-8 text-center">
            Pricing & Availability
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-navy-dark/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-gold mb-2">Free</div>
                <div className="text-white/70 mb-2">30-minute</div>
                <div className="text-white/60 text-sm">Initial Consultation</div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-navy-dark/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-gold mb-2">$75-100</div>
                <div className="text-white/70 mb-2">50 minutes</div>
                <div className="text-white/60 text-sm">Sliding Scale</div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-navy-dark/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-2xl font-bold text-gold mb-2">Flexible</div>
                <div className="text-white/70 mb-2">Format Options</div>
                <div className="text-white/60 text-sm">In-person, Phone, or Zoom</div>
              </div>
            </div>
          </div>

          <p className="text-center text-white/70 mt-8">
            Available in-person in Asheville, NC or nationwide via phone/Zoom
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-serif font-bold gradient-text mb-6">
            Ready to Transform Your Story?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Schedule your free 30-minute consultation to begin your journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:iamkatehurley@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-gold to-peach text-navy-dark font-semibold rounded-full hover:shadow-xl hover:shadow-gold/20 transform hover:scale-105 transition-all duration-300"
            >
              Email: iamkatehurley@gmail.com
            </a>
            <a
              href="tel:303-946-9875"
              className="px-8 py-4 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-navy-dark transition-all duration-300"
            >
              Call: 303-946-9875
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
