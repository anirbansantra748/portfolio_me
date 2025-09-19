import React, { useState, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import { Float, Box, Sphere, Text as Text3D } from '@react-three/drei'

// Floating 3D Elements
function FloatingCubes() {
  const group = useRef()
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <group ref={group}>
      {Array.from({ length: 20 }, (_, i) => (
        <Float key={i} speed={1 + Math.random()} rotationIntensity={0.5} floatIntensity={2}>
          <Box
            position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20
            ]}
            args={[0.2, 0.2, 0.2]}
          >
            <meshStandardMaterial 
              color={i % 3 === 0 ? "#00ff88" : i % 3 === 1 ? "#00aaff" : "#aa00ff"}
              emissive={i % 3 === 0 ? "#00ff88" : i % 3 === 1 ? "#00aaff" : "#aa00ff"}
              emissiveIntensity={0.3}
            />
          </Box>
        </Float>
      ))}
    </group>
  )
}

// Terminal Command Simulator
const TerminalSimulator = () => {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [displayedText, setDisplayedText] = useState([])
  
  const commands = [
    "// Initializing developer profile...",
    "const anirban = new Developer();",
    "anirban.name = 'Anirban Santra';",
    "anirban.role = 'Backend-focused Full Stack Developer';",
    "anirban.skills = [",
    "  'Node.js', 'MongoDB', 'Microservices',",
    "  'System Design (HLD/LLD)', 'Express.js',",
    "  'React', 'TypeScript', 'Docker'",
    "];",
    "anirban.experience = {",
    "  'SMAK Tech': 'Software Developer Intern',",
    "  'Suvidha Foundation': 'Web Development Intern'",
    "};",
    "anirban.achievements = [",
    "  'Winner - EduSands Hacks Hackathon',",
    "  'Top 15 Finalist - Rebase Hackathon',",
    "  'Solved 400+ problems on LeetCode'",
    "];",
    "anirban.currentlyLearning = 'Next.js & Docker';",
    "anirban.passion = 'Creating INSANE code experiences';",
    "",
    "// Running system diagnostics...",
    "anirban.init(); // → STATUS: READY_TO_CODE",
    "console.log('Welcome to my matrix! 🚀');"
  ]

  useEffect(() => {
    if (currentLine < commands.length) {
      const timer = setTimeout(() => {
        if (currentChar < commands[currentLine].length) {
          setDisplayedText(prev => {
            const newText = [...prev]
            if (!newText[currentLine]) newText[currentLine] = ""
            newText[currentLine] += commands[currentLine][currentChar]
            return newText
          })
          setCurrentChar(prev => prev + 1)
        } else {
          setCurrentLine(prev => prev + 1)
          setCurrentChar(0)
        }
      }, Math.random() * 50 + 25) // Random typing speed for organic feel
      return () => clearTimeout(timer)
    }
  }, [currentLine, currentChar])

  const getLineColor = (line) => {
    if (line.startsWith('//')) return 'text-green-500'
    if (line.includes('const') || line.includes('new')) return 'text-blue-400'
    if (line.includes("'") || line.includes('"')) return 'text-yellow-400'
    if (line.includes('=')) return 'text-purple-400'
    return 'text-green-400'
  }

  return (
    <div className="bg-black rounded-lg border border-green-400/30 p-6 font-mono text-sm overflow-hidden">
      <div className="flex items-center mb-4 border-b border-green-400/30 pb-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 text-green-400">anirban@matrix:~/about$ cat developer.js</div>
      </div>
      <div className="space-y-1 h-96 overflow-hidden">
        {displayedText.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`${getLineColor(line)} ${i === currentLine - 1 ? 'opacity-100' : 'opacity-80'}`}
          >
            <span className="text-gray-600 mr-4">{(i + 1).toString().padStart(2, '0')}</span>
            {line}
            {i === currentLine && (
              <span className="inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse"></span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Skill Matrix
const SkillMatrix = () => {
  const skills = [
    { name: 'JavaScript', level: 90, color: '#f7df1e' },
    { name: 'Node.js', level: 95, color: '#68a063' },
    { name: 'MongoDB', level: 85, color: '#47a248' },
    { name: 'React', level: 88, color: '#61dafb' },
    { name: 'System Design', level: 92, color: '#ff6b6b' },
    { name: 'Docker', level: 75, color: '#2496ed' },
    { name: 'TypeScript', level: 82, color: '#3178c6' },
    { name: 'Express.js', level: 90, color: '#000000' }
  ]

  return (
    <div className="space-y-4">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-green-400 font-mono">{skill.name}</span>
            <span className="text-green-400 font-mono text-sm">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full rounded-full relative overflow-hidden"
              style={{ backgroundColor: skill.color }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Stats Dashboard
const StatsDashboard = () => {
  const stats = [
    { label: 'LeetCode Solved', value: '400+', icon: '🧠', color: 'text-orange-400' },
    { label: 'Projects Built', value: '25+', icon: '🚀', color: 'text-blue-400' },
    { label: 'Technologies', value: '15+', icon: '⚡', color: 'text-green-400' },
    { label: 'Hackathons Won', value: '2', icon: '🏆', color: 'text-yellow-400' }
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2, type: "spring" }}
          whileHover={{ scale: 1.05 }}
          className="bg-black/60 border border-green-400/30 rounded-lg p-4 text-center hover:border-green-400/60 transition-all"
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
          <div className="text-green-400 text-sm font-mono">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

// Matrix Digital Rain Background
const MatrixRain = () => {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}0123456789"
    const matrixArray = matrix.split("")

    const fontSize = 10
    const columns = canvas.width / fontSize

    const drops = []
    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#00ff88'
      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)
    return () => clearInterval(interval)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-20" />
}

// Main About Component
const AboutCrazy = () => {
  const [activeTab, setActiveTab] = useState('terminal')

  const tabs = [
    { id: 'terminal', label: 'TERMINAL.EXE', icon: '💻' },
    { id: 'skills', label: 'SKILLS.DAT', icon: '⚡' },
    { id: 'stats', label: 'STATS.LOG', icon: '📊' }
  ]

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Matrix Background */}
      <MatrixRain />
      
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} color="#00ff88" />
          <FloatingCubes />
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
            <span className="text-gray-600">ABOUT</span>{' '}
            <span 
              className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              style={{ filter: 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.5))' }}
            >
              MATRIX
            </span>
          </h2>
          <div className="text-green-400 font-mono text-xl">
            &gt;&gt; ACCESSING_DEVELOPER_PROFILE...
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex bg-black/60 border border-green-400/30 rounded-lg p-1">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-mono text-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-green-400/20 text-green-400 border border-green-400/50'
                    : 'text-gray-400 hover:text-green-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div
          className="max-w-6xl mx-auto"
          layout
          key={activeTab}
        >
          <AnimatePresence mode="wait">
            {activeTab === 'terminal' && (
              <motion.div
                key="terminal"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <TerminalSimulator />
                </div>
                <div className="space-y-6">
                  <motion.div
                    className="text-green-400 text-lg font-mono leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="mb-4">
                      <span className="text-blue-400">◐</span> Backend-focused Full Stack Developer
                    </div>
                    <div className="mb-4">
                      <span className="text-yellow-400">◑</span> Experienced in Node.js, MongoDB, microservices
                    </div>
                    <div className="mb-4">
                      <span className="text-purple-400">◒</span> Built scalable real-time platforms
                    </div>
                    <div className="mb-4">
                      <span className="text-green-400">◓</span> Solved 400+ problems on LeetCode
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="bg-black/60 border border-green-400/30 rounded-lg p-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="text-green-400 font-mono text-sm mb-2">CURRENT_PASSION.exe</div>
                    <div className="text-yellow-400 font-mono text-lg">
                      "Creating INSANE code experiences that blow minds! 🤯"
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-black/60 border border-green-400/30 rounded-lg p-8">
                  <div className="text-center mb-8">
                    <div className="text-green-400 font-mono text-2xl mb-2">SKILL_MATRIX.DAT</div>
                    <div className="text-gray-400 font-mono text-sm">LOADING PROFICIENCY LEVELS...</div>
                  </div>
                  <SkillMatrix />
                </div>
              </motion.div>
            )}

            {activeTab === 'stats' && (
              <motion.div
                key="stats"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-black/60 border border-green-400/30 rounded-lg p-8">
                  <div className="text-center mb-8">
                    <div className="text-green-400 font-mono text-2xl mb-2">ACHIEVEMENT_STATS.LOG</div>
                    <div className="text-gray-400 font-mono text-sm">COMPILING DEVELOPER METRICS...</div>
                  </div>
                  <StatsDashboard />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 p-1 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-black rounded-lg px-8 py-4">
              <div className="text-green-400 font-mono">
                <span className="text-gray-600">$</span> sudo ./explore_more_sections.sh
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutCrazy