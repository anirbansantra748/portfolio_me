import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const fullText = 'Anirban Santra'
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])
  
  useEffect(() => {
    if (!isLoading) {
      let currentIndex = 0
      const typingTimer = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingTimer)
        }
      }, 100)
      return () => clearInterval(typingTimer)
    }
  }, [isLoading, fullText])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="spinner mb-8"></div>
          <motion.h1 
            className="text-2xl font-mono neon-green"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            L0AD1NG...
          </motion.h1>
        </motion.div>
      </div>
    )
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 opacity-20">
          {/* Floating particles effect */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Navigation Menu */}
          <motion.nav 
            className="mb-16 flex justify-center space-x-8 text-sm font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {['Start', 'Work', 'Lab', 'About', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item} /&gt;
              </motion.a>
            ))}
          </motion.nav>

          {/* Main Heading */}
          <motion.div className="mb-12">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="text-gray-400">Hi, my name is </span>
              <br />
              <motion.span 
                className="gradient-text neon-green font-mono"
                animate={{ 
                  textShadow: [
                    '0 0 5px #00ff88',
                    '0 0 20px #00ff88, 0 0 30px #00ff88',
                    '0 0 5px #00ff88'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {displayText}
                <motion.span
                  className="inline-block w-1 h-12 ml-2 bg-green-400"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              i design and develop things
            </motion.p>
          </motion.div>

          {/* Subtitle */}
          <motion.div 
            className="mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Backend-focused <span className="text-green-400 font-semibold">Full Stack Developer</span> experienced in Node.js, MongoDB, microservices, and system design.
              Built scalable real-time platforms for high-traffic systems; solved <span className="text-blue-400 font-semibold">400+ problems</span> on LeetCode.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                'Backend Development',
                'System Design (HLD/LLD)',
                'Microservices Architecture',
                'Real-time Applications',
                'Competitive Programming'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 hover:border-green-400 hover:text-green-400 transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            <motion.a
              href="#work"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold rounded-lg hover:shadow-2xl transition-all duration-300 text-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0, 255, 136, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Let me show You...
              <motion.span 
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="mt-16 flex justify-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            {[
              { name: 'GitHub', url: 'https://github.com/anirbansantra748', icon: 'github' },
              { name: 'LinkedIn', url: 'https://linkedin.com/in/anirban', icon: 'linkedin' },
              { name: 'LeetCode', url: 'https://leetcode.com/u/Anirbansantra/', icon: 'code' }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-gray-700 rounded-full text-gray-400 hover:text-green-400 hover:border-green-400 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2 + index * 0.1 }}
              >
                <span className="text-xl">→</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
      >
        <motion.div 
          className="text-gray-400 text-sm font-mono"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SCROLL
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
