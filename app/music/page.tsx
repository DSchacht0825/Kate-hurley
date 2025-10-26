'use client';

import { motion } from 'framer-motion';

export default function Music() {
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
            Music
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            13 years of touring, six solo albums, and countless songs that carry stories of hope,
            love, and transformation
          </p>
        </motion.div>

        {/* Journey */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 mb-16"
        >
          <h2 className="text-3xl font-serif font-bold gradient-text mb-6">
            A Musical Journey
          </h2>
          <div className="space-y-4 text-white/80 text-lg leading-relaxed">
            <p>
              From 2002 to 2015, I traveled the world sharing my music—from intimate performances
              in German castles to heartfelt concerts in Indian villages. Each song became a bridge
              between cultures and hearts.
            </p>
            <p>
              My six solo albums capture different seasons of life, exploring themes of identity,
              faith, love, and the unexpected beauty of life's journey.
            </p>
          </div>
        </motion.div>

        {/* Live From Julian - Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gold/20 to-peach/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-gold/40 shadow-2xl shadow-gold/20">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6 text-center"
            >
              Live From Julian
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-8 text-center max-w-3xl mx-auto leading-relaxed"
            >
              A worship album recorded June 7-10, 2019, in Julian, California—four days of
              grueling and exhilarating collaboration
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-navy-dark/50 rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-serif font-semibold text-gold mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  The Musicians
                </h3>
                <p className="text-white/70 leading-relaxed mb-3">
                  Approximately a dozen musicians collaborated to record 13 original compositions
                </p>
                <p className="text-white/60 text-sm">
                  Featuring: Nick Heward, Nathan Dickerson, Emma Wallace, Brian Smith,
                  Libby Oertel, JC Holborn, Yvonne Araugo-Shacht, Aeron Brown, and Alicia Rasmussen
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-navy-dark/50 rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-serif font-semibold text-gold mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Production Team
                </h3>
                <ul className="space-y-2 text-white/70">
                  <li><span className="text-gold">Engineering/Production:</span> Josh Rasmussen</li>
                  <li><span className="text-gold">Mixing:</span> Aaron Strumpel</li>
                  <li><span className="text-gold">Videography:</span> Matthew Linderman (Mustard Seed Cinema)</li>
                  <li><span className="text-gold">Venue:</span> The Julian Project (Hosted by Gregg and Marill Parker)</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-navy-dark/50 rounded-2xl p-6 border border-white/10 mb-8"
            >
              <h3 className="text-xl font-serif font-semibold text-gold mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                How to Get the Album
              </h3>
              <p className="text-white/70 mb-4">
                Individual singles are available on Spotify and iTunes. The complete album is
                available as a zip file for a $10 PayPal donation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://open.spotify.com/artist/YOUR_SPOTIFY_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-gold to-peach text-navy-dark font-semibold rounded-full hover:shadow-xl hover:shadow-gold/20 transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Listen on Spotify
                </a>
                <a
                  href="mailto:iamkatehurley@gmail.com?subject=Live From Julian Album Request"
                  className="px-6 py-3 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-navy-dark transition-all duration-300 text-center"
                >
                  Request Full Album ($10)
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-white/60 text-sm italic">
                Includes 8-minute documentary video, music videos, and photo gallery from the recording week
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-serif font-bold gradient-text mb-12 text-center">
            Other Special Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-gold/10 to-peach/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/30"
            >
              <h3 className="text-2xl font-serif font-semibold text-gold mb-4">
                Songwriting Workshops
              </h3>
              <p className="text-white/80 leading-relaxed">
                Taught songwriting workshops around the world, helping people discover their
                unique voice and tell their stories through music.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-gold/10 to-peach/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/30"
            >
              <h3 className="text-2xl font-serif font-semibold text-gold mb-4">
                Refugee Music Lessons
              </h3>
              <p className="text-white/80 leading-relaxed">
                Offered free music lessons to refugees in San Diego, using music as a healing
                tool and a way to build community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-gold/10 to-peach/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/30"
            >
              <h3 className="text-2xl font-serif font-semibold text-gold mb-4">
                Eden Heart Album
              </h3>
              <p className="text-white/80 leading-relaxed">
                Recorded an album featuring music by unhoused individuals from a San Francisco
                shelter, giving voice to stories often unheard.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Listen */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 text-center"
        >
          <h2 className="text-3xl font-serif font-bold gradient-text mb-6">
            Listen & Connect
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Find my music on your favorite streaming platforms
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://youtube.com/channel/UCZrPaM_zqPDNsQ0qQKY7oxg"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-gold to-peach text-navy-dark font-semibold rounded-full hover:shadow-xl hover:shadow-gold/20 transform hover:scale-105 transition-all duration-300"
            >
              YouTube
            </a>
            <a
              href="https://vimeo.com/user11950680"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-navy-dark transition-all duration-300"
            >
              Vimeo
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
