import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  BoltIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline'
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaTerminal,
  FaRocket
} from 'react-icons/fa'

const HeroCode = () => {
  const [currentCommand, setCurrentCommand] = useState(0)
  const [displayedCode, setDisplayedCode] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  const codeLines = [
    "// 🚀 Professional Developer Profile - Anirban Santra",
    "import { Developer, Skills, Dreams } from '@universe/talents';",
    "import { SpaceExploration, Innovation } from '@cosmos/passion';",
    "",
    "class EliteDeveloper extends FullStackEngineer {",
    "  constructor() {",
    "    super();",
    "    this.profile = {",
    "      name: 'Anirban Santra',",
    "      title: 'Senior Full Stack Developer',",
    "      location: '🌍 India → 🚀 Aiming for Mars',",
    "      experience: '3+ years of crafting digital excellence',",
    "      specialization: 'Backend Architecture & Space Tech',",
    "      motto: 'Code that reaches beyond the stars ⭐'",
    "    };",
    "  }",
    "",
    "  async getSkills() {",
    "    return {",
    "      backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],",
    "      frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind'],",
    "      cloud: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],",
    "      passion: ['Space Technology', 'AI/ML', 'System Design'],",
    "      currentFocus: 'Building scalable systems for tomorrow'",
    "    };",
    "  }",
    "",
    "  launch() {",
    "    console.log('🚀 Ready to build the future together!');",
    "    return 'Open for amazing opportunities';",
    "  }",
    "}",
    "",
    "export default new EliteDeveloper();",
    "// Status: AVAILABLE FOR HIRE 💼✨"
  ]

  const terminalCommands = [
    "$ whoami",
    "> Anirban Santra - Full Stack Developer",
    "$ cat skills.txt",
    "> Backend Expert | Space Enthusiast | Problem Solver",
    "$ status",
    "> Ready to launch into new opportunities 🚀"
  ]

  useEffect(() => {
    let currentLineIndex = 0
    let currentCharIndex = 0
    let timeoutId

    const typeCode = () => {
      if (currentLineIndex < codeLines.length) {
        if (currentCharIndex < codeLines[currentLineIndex].length) {
          setDisplayedCode(prev => prev + codeLines[currentLineIndex][currentCharIndex])
          currentCharIndex++
          timeoutId = setTimeout(typeCode, 50)
        } else {
          setDisplayedCode(prev => prev + '\n')
          currentLineIndex++
          currentCharIndex = 0
          timeoutId = setTimeout(typeCode, 100)
        }
      } else {
        setIsTyping(false)
      }
    }

    timeoutId = setTimeout(typeCode, 1000)
    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (!isTyping) {
      const commandInterval = setInterval(() => {
        setCurrentCommand(prev => (prev + 1) %  Commands.length)
      }, 2000)
      return () => clearInterval(commandInterval)
    }
  }, [isTyping])

  return (
    <section className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Sophisticated dark background with subtle grid */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-800/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Minimal accent lines */}
        <motion.div
          className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"
          style={{ left: '20%' }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"
          style={{ right: '25%' }}
          animate={{ opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 w-full items-center">

          {/* Left Side - Code Editor */}
          <motion.div
            className="bg-black/80 rounded-lg border border-green-500/30 shadow-2xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Editor Header */}
            <div className="flex items-center justify-between p-4 border-b border-green-500/30">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm ml-4">about.js</span>
              </div>
              <CodeBracketIcon className="w-5 h-5 text-green-400" />
            </div>

            {/* Code Content */}
            <div className="p-6 min-h-[500px] bg-[#1e1e1e] relative">
              {/* VS Code-like line numbers */}
              <div className="absolute left-0 top-6 w-12 text-center text-gray-600 text-sm font-mono leading-relaxed pt-0">
                {codeLines.map((_, index) => (
                  <div key={index} className="h-6">{index + 1}</div>
                ))}
              </div>

              <div className="flex items-center text-sm text-gray-400 mb-4 ml-12">
                <span className="px-2 py-1 bg-blue-600/20 rounded text-blue-300 mr-2">📜 JS</span>
                <span>abotu.js</span>
                <span className="ml-auto text-green-400">● Coding...</span>
              </div>

              <pre className="ml-12 leading-6 font-mono text-sm overflow-hidden text-gray-300">
                {displayedCode}
              </pre>

              {(isTyping || showCursor) && (
                <span className="inline-block w-2 h-6 bg-white animate-pulse ml-12"></span>
              )}
            </div>
          </motion.div>

          {/* Right Side - Profile Info */}
          <div className="space-y-8">

            {/* Terminal Output */}
            <motion.div
              className="bg-black/80 rounded-lg border border-green-500/30 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center mb-4 text-green-400">
                <CommandLineIcon className="w-5 h-5 mr-2" />
                <span className="text-sm">Terminal</span>
              </div>

              <div className="space-y-2 text-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCommand}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-300"
                  >
                    {terminalCommands[currentCommand]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Elite</span>
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text"> Full Stack</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">Developer</span>
              </h1>
              <div className="space-y-3 mb-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  🎆 <strong className="text-blue-400">Senior Backend Architect</strong> with a cosmic vision for scalable systems
                </p>
                <p className="text-lg text-gray-400">
                  🚀 Building tomorrow's technology today | ⭐ Space enthusiast | 💻 Code craftsman
                </p>
              </div>
            </motion.div>

            {/* Status Badges */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-sm">Available for hire</span>
              </div>
              <div className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full flex items-center space-x-2">
                <RocketLaunchIcon className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm">Space enthusiast</span>
              </div>
              <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full flex items-center space-x-2">
                <CpuChipIcon className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm">Backend expert</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-green-500 text-black rounded-lg font-medium hover:bg-green-400 transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket className="w-4 h-4" />
                <span>Launch Projects</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="px-6 py-3 border border-green-500 text-green-400 rounded-lg font-medium hover:bg-green-500/10 transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BoltIcon className="w-4 h-4" />
                <span>Connect</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.a
                href="https://github.com/anirbansantra748"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="w-5 h-5 text-gray-300" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/anirban-santra-a9ab0b241"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="w-5 h-5 text-white" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDownIcon className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroCode
