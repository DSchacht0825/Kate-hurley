'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Lessons() {
  const services = [
    {
      title: 'Voice & Singing Lessons',
      icon: '🎤',
      description: 'Master the Voice Color Method, a unique system using colors and visuals to teach vocal technique.',
      features: [
        'Ranked #1 among 3,000+ singing courses',
        'Suitable for beginners through advanced singers',
        'Learn breath control, pitch, tone, and expression',
        'Develop your unique vocal style',
      ],
    },
    {
      title: 'Piano Lessons',
      icon: '🎹',
      description: 'From note reading to composition, discover the joy of creating music at the piano.',
      features: [
        'Note reading and music theory',
        'Chord progressions and harmony',
        'Creative composition methods',
        'Students as young as six have written original songs',
      ],
    },
    {
      title: 'Songwriting Lessons',
      icon: '✍️',
      description: 'Unleash your creativity by writing original songs that tell your story.',
      features: [
        'Lyrical and musical composition',
        'Melody writing techniques',
        'Basic demo recording',
        'Can integrate with voice or piano lessons',
      ],
    },
    {
      title: 'Beginning Guitar',
      icon: '🎸',
      description: 'Start your guitar journey with foundational skills and popular songs.',
      features: [
        'Basic chords and strumming patterns',
        'Learn your favorite songs',
        'Build finger strength and dexterity',
        'Foundation for songwriting',
      ],
    },
  ];

  const pricing = [
    { duration: '30 minutes', price: '$33' },
    { duration: '45 minutes', price: '$48' },
    { duration: '60 minutes', price: '$66' },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold gradient-text mb-6">
            Be-Loved Music Lessons
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Voice, piano, songwriting, and guitar instruction for all ages and skill levels.
            Available in-person in Fairview NC and Asheville NC, or online globally.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold/50 transition-all duration-300 hover-lift"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-serif font-semibold text-gold mb-4">
                {service.title}
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-white/80">
                    <span className="text-gold mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gold/10 to-peach/10 rounded-2xl p-12 border border-gold/30 mb-16"
        >
          <h2 className="text-4xl font-serif font-bold gradient-text mb-8 text-center">
            Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={plan.duration}
                className="bg-navy-dark/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="text-3xl font-bold text-gold mb-2">{plan.price}</div>
                <div className="text-white/70">{plan.duration}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 mb-16"
        >
          <h2 className="text-3xl font-serif font-bold gradient-text mb-6 text-center">
            Experience & Credentials
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-white/80">
            <div>
              <h3 className="text-xl font-semibold text-gold mb-3">Education</h3>
              <p>Music degree with extensive vocal and instrumental training</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gold mb-3">Teaching Experience</h3>
              <p>Over a decade of teaching students of all ages and skill levels</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gold mb-3">Performance</h3>
              <p>14 years of international touring and six solo albums</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gold mb-3">Additional Services</h3>
              <p>Certified life coach, emotional wellness integration, simple demo recordings</p>
            </div>
          </div>
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
            Ready to Start Your Musical Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Reach out via email or text to schedule your first lesson
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:iamkatehurley@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-gold to-peach text-navy-dark font-semibold rounded-full hover:shadow-xl hover:shadow-gold/20 transform hover:scale-105 transition-all duration-300"
            >
              Email: iamkatehurley@gmail.com
            </a>
            <a
              href="sms:828-777-4585"
              className="px-8 py-4 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-navy-dark transition-all duration-300"
            >
              Text: 828-777-4585 (Preferred)
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
