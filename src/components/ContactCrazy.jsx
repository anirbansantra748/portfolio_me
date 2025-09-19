import React, { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import { Float, Text3D, Box, Sphere } from '@react-three/drei'

// Floating 3D Email Icons
function FloatingElements() {
  const group = useRef()
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1
      group.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.05
    }
  })

  return (
    <group ref={group}>
      {Array.from({ length: 15 }, (_, i) => (
        <Float key={i} speed={2 + Math.random()} rotationIntensity={1} floatIntensity={3}>
          <Sphere
            position={[
              Math.sin(i * 0.4) * 8,
              Math.cos(i * 0.3) * 6,
              Math.sin(i * 0.2) * 4
            ]}
            args={[0.1, 16, 16]}
          >
            <meshStandardMaterial 
              color={i % 4 === 0 ? "#00ff88" : i % 4 === 1 ? "#00aaff" : i % 4 === 2 ? "#aa00ff" : "#ff6600"}
              emissive={i % 4 === 0 ? "#00ff88" : i % 4 === 1 ? "#00aaff" : i % 4 === 2 ? "#aa00ff" : "#ff6600"}
              emissiveIntensity={0.4}
            />
          </Sphere>
        </Float>
      ))}
      
      {/* Rotating Ring */}
      <group rotation={[0, 0, 0]}>
        <Float speed={1} rotationIntensity={0.3}>
          <Box position={[0, 0, 0]} args={[8, 0.1, 0.1]}>
            <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.3} />
          </Box>
          <Box position={[0, 0, 0]} args={[0.1, 8, 0.1]}>
            <meshStandardMaterial color="#00aaff" emissive="#00aaff" emissiveIntensity={0.3} />
          </Box>
        </Float>
      </group>
    </group>
  )
}

// Terminal Contact Form
const TerminalContactForm = () => {
  const [formState, setFormState] = useState('idle') // idle, typing, sending, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [terminalLines, setTerminalLines] = useState([
    '$ ./initiate_contact.sh',
    '> Loading secure communication channel...',
    '> Channel established. Ready for transmission.',
    '',
    '// Enter your details below:'
  ])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormState('sending')
    
    const newLines = [
      ...terminalLines,
      '',
      '> Encrypting message...',
      '> Routing through secure channels...',
      '> Message transmitted successfully!',
      '> Response expected within 24 hours.',
      '> Connection closed.'
    ]
    
    // Simulate sending animation
    for (let i = terminalLines.length; i < newLines.length; i++) {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, newLines[i]])
      }, (i - terminalLines.length) * 500)
    }
    
    setTimeout(() => {
      setFormState('success')
    }, 3000)
  }

  return (
    <div className="bg-black border border-green-400/30 rounded-lg p-6 font-mono">
      {/* Terminal Header */}
      <div className="flex items-center mb-4 border-b border-green-400/30 pb-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 text-green-400">anirban@matrix:~/contact$ secure_message</div>
      </div>

      {/* Terminal Output */}
      <div className="mb-6 h-32 overflow-hidden">
        {terminalLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`${line.startsWith('$') || line.startsWith('>') ? 'text-green-400' : 
                        line.startsWith('//') ? 'text-gray-500' : 'text-yellow-400'}`}
          >
            {line}
          </motion.div>
        ))}
        {formState === 'idle' && (
          <span className="inline-block w-2 h-5 bg-green-400 animate-pulse"></span>
        )}
      </div>

      {/* Contact Form */}
      {formState !== 'success' && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-green-400 text-sm mb-1">NAME_INPUT:</label>
            <input
              type="text"
              required
              className="w-full bg-gray-900 border border-green-400/30 rounded px-3 py-2 text-green-400 font-mono focus:border-green-400 focus:outline-none"
              placeholder="Enter your name..."
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-green-400 text-sm mb-1">EMAIL_ADDRESS:</label>
            <input
              type="email"
              required
              className="w-full bg-gray-900 border border-green-400/30 rounded px-3 py-2 text-green-400 font-mono focus:border-green-400 focus:outline-none"
              placeholder="your.email@domain.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-green-400 text-sm mb-1">MESSAGE_PAYLOAD:</label>
            <textarea
              required
              rows="4"
              className="w-full bg-gray-900 border border-green-400/30 rounded px-3 py-2 text-green-400 font-mono focus:border-green-400 focus:outline-none resize-none"
              placeholder="Compose your message..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
            ></textarea>
          </div>
          
          <motion.button
            type="submit"
            disabled={formState === 'sending'}
            className="w-full bg-green-400 text-black py-3 px-6 rounded font-mono font-bold hover:bg-green-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {formState === 'sending' ? 'TRANSMITTING...' : 'SEND_MESSAGE()'}
          </motion.button>
        </form>
      )}

      {/* Success State */}
      {formState === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="text-green-400 text-4xl mb-4">✓</div>
          <div className="text-green-400 font-mono">MESSAGE_SENT_SUCCESSFULLY</div>
          <div className="text-gray-400 font-mono text-sm mt-2">
            Response incoming within 24 hours...
          </div>
        </motion.div>
      )}
    </div>
  )
}

// Social Links Matrix
const SocialMatrix = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🔗',
      url: 'https://github.com/anirbansantra748',
      color: 'from-gray-400 to-gray-600',
      command: 'git clone https://github.com/anirbansantra748'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/anirban-santra-a9ab0b241',
      color: 'from-blue-400 to-blue-600',
      command: 'curl -X GET linkedin.com/in/anirban-santra'
    },
    {
      name: 'LeetCode',
      icon: '🧠',
      url: 'https://leetcode.com/u/Anirbansantra/',
      color: 'from-orange-400 to-orange-600',
      command: 'leetcode --user Anirbansantra --stats'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:anirbansantra748@gmail.com',
      color: 'from-red-400 to-red-600',
      command: 'sendmail anirbansantra748@gmail.com'
    }
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {socialLinks.map((link, i) => (
        <motion.a
          key={link.name}
          href={link.url}
          target={link.name !== 'Email' ? '_blank' : undefined}
          rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
          className="group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="bg-black/60 border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-all group">
            <div className="flex items-center space-x-4 mb-3">
              <div className="text-2xl">{link.icon}</div>
              <div className="text-green-400 font-mono font-bold">{link.name}</div>
            </div>
            <div className="text-gray-400 font-mono text-xs mb-2">
              $ {link.command}
            </div>
            <div className={`h-2 bg-gradient-to-r ${link.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}></div>
          </div>
        </motion.a>
      ))}
    </div>
  )
}

// Animated Background Pattern
const AnimatedPattern = () => {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1
      })
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = '#00ff88'
        ctx.globalAlpha = 0.6
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-20" />
}

// Main Contact Component
const ContactCrazy = () => {
  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background */}
      <AnimatedPattern />
      
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 15] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} color="#00ff88" intensity={0.8} />
          <pointLight position={[-10, -10, -10]} color="#00aaff" intensity={0.5} />
          <FloatingElements />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl md:text-8xl font-bold font-mono mb-6">
            <span className="text-gray-600">CONTACT</span>{' '}
            <span 
              className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              style={{ filter: 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.5))' }}
            >
              MATRIX
            </span>
          </h2>
          <motion.div
            className="text-green-400 font-mono text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
          >
            &gt;&gt; INITIALIZING_SECURE_COMMUNICATION_CHANNEL...
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-mono text-green-400 mb-4">DIRECT_MESSAGE.EXE</h3>
              <p className="text-gray-400 font-mono text-sm mb-6">
                Initialize secure communication protocol to send encrypted messages directly to my terminal.
              </p>
            </div>
            <TerminalContactForm />
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Social Matrix */}
            <div>
              <h3 className="text-2xl font-mono text-green-400 mb-6">SOCIAL_NETWORKS.DAT</h3>
              <SocialMatrix />
            </div>

            {/* Status Info */}
            <motion.div
              className="bg-black/60 border border-green-400/30 rounded-lg p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="font-mono">
                <div className="text-green-400 text-lg mb-4">SYSTEM_STATUS.LOG</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400">ONLINE</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-400">AVAILABLE_FOR_OPPORTUNITIES</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-yellow-400">RESPONSE_TIME: &lt; 24h</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-400">TIMEZONE: IST (UTC+5:30)</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fun Quote */}
            <motion.div
              className="bg-gradient-to-r from-green-400/20 via-blue-400/20 to-purple-400/20 border border-green-400/30 rounded-lg p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <div className="text-center">
                <div className="text-green-400 font-mono text-lg mb-2">MOTIVATION.TXT</div>
                <div className="text-yellow-400 font-mono text-sm italic">
                  "Let's build something INSANE together! 🚀"
                </div>
                <div className="text-gray-500 font-mono text-xs mt-2">
                  - function collaborate() → return amazing_projects;
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Animation */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <div className="text-green-400 font-mono text-sm">
            <span className="animate-pulse">█</span> END_OF_TRANSMISSION <span className="animate-pulse">█</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCrazy