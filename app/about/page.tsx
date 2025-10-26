'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-5xl md:text-6xl font-serif font-bold gradient-text mb-12 text-center"
          >
            Kate's Story
          </motion.h1>

          {/* Kate's Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-12 flex justify-center relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3, transition: { duration: 0.3 } }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold/30 shadow-2xl shadow-gold/20"
            >
              <Image
                src="/kate.jpg"
                alt="Kate Hurley"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            {/* Floating sparkle effects */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-8 w-3 h-3 bg-gold rounded-full shadow-lg shadow-gold/50"
            />
            <motion.div
              animate={{
                y: [0, 15, 0],
                x: [0, -10, 0],
                rotate: [0, -180, -360]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-12 left-12 w-2 h-2 bg-peach rounded-full shadow-lg shadow-peach/50"
            />
            <motion.div
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-20 left-8 w-2 h-2 bg-gold/60 rounded-full shadow-lg shadow-gold/30"
            />
          </motion.div>

          <div className="prose prose-lg prose-invert max-w-none">
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -2 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 mb-8"
            >
              <h2 className="text-3xl font-serif font-semibold text-gold mb-6">
                Rooted in Music
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                I grew up in a small Colorado mountain town, where three childhood treasures shaped my life:
                an old upright piano I played for hours, a peach journal for recording my thoughts, and a
                big wheel I rode with my brother Will.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                These simple joys planted seeds that would grow into a life dedicated to music, writing,
                and bringing light to others.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 mb-8"
            >
              <h2 className="text-3xl font-serif font-semibold text-gold mb-6">
                A Journey Around the World
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                After years of writing songs privately, I began touring in 2002. For 13 incredible years,
                I performed globally—from German castles to Indian villages, sharing music that connected
                hearts across cultures.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                I taught songwriting workshops worldwide and offered free music lessons to refugees in San Diego.
                One of my most meaningful projects was recording an album featuring music by unhoused individuals
                from a San Francisco shelter.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Music became my way of bringing light and love to every person I encountered.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 mb-8"
            >
              <h2 className="text-3xl font-serif font-semibold text-gold mb-6">
                Finding Home in Teaching
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                Eventually, I transitioned to teaching piano, voice, beginner guitar, and songwriting lessons.
                This became my dream job—a way to help others discover the treasures that lie within them.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                I believe music is a catalyst for transformation. Every lesson is an opportunity for my students
                to know themselves more deeply and express their unique gifts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 mb-8"
            >
              <h2 className="text-3xl font-serif font-semibold text-gold mb-6">
                Writing & Mindset Coaching
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                I authored <em>Getting Naked Later: Making Sense of the Unexpected Single Life</em> in 2013,
                published by Harvest House. Currently, I'm developing <em>Prodigal Mind: Change Your Story,
                One Thought at a Time</em> and maintain a blog at prodigalmind.org.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                As a certified life coach, I help people transform their thought patterns and self-talk.
                Together, we discover answers that already exist within them, changing their story one thought
                at a time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.7, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.03, rotate: 1, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-gold/10 to-peach/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gold/30"
            >
              <h2 className="text-3xl font-serif font-semibold text-gold mb-6">
                Life Today
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                At 45, I married Justin and embraced life with him and his four children—my greatest joy
                in recent years.
              </p>
              <p className="text-white/90 text-xl leading-relaxed italic font-serif">
                "I always intend for my motivation to be to bring light and love to whomever is in my
                presence every day."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
