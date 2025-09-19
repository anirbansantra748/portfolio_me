import React, { useState, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import { Float, Sphere, Text3D, Box } from '@react-three/drei'
import { 
  ArrowDownIcon, 
  CubeIcon, 
  BoltIcon, 
  CodeBracketIcon,
  RocketLaunchIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { 
  FaGithub, 
  FaLinkedin, 
  FaReact, 
  FaNodeJs, 
  FaDocker,
  FaAws,
  FaDatabase,
  FaCode
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiMongodb, 
  SiExpress, 
  SiNextdotjs,
  SiTailwindcss,
  SiVercel
} from 'react-icons/si'

// 3D Background Scene
function BackgroundScene() {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Floating Tech Icons */}
      {[
        { pos: [-8, 4, -5], size: 0.8, color: "#61dafb" },
        { pos: [8, -2, -3], size: 0.6, color: "#68a063" },
        { pos: [-4, -6, -8], size: 0.7, color: "#3178c6" },
        { pos: [6, 6, -6], size: 0.5, color: "#47a248" },
        { pos: [0, 8, -10], size: 0.9, color: "#38bdf8" },
        { pos: [-6, 0, -4], size: 0.4, color: "#f59e0b" }
      ].map((item, i) => (
        <Float key={i} speed={2 + Math.random()} rotationIntensity={1} floatIntensity={2}>
          <Sphere position={item.pos} args={[item.size, 32, 32]}>
            <meshStandardMaterial 
              color={item.color}
              emissive={item.color}
              emissiveIntensity={0.3}
              metalness={0.8}
              roughness={0.2}
            />
          </Sphere>
        </Float>
      ))}
      
      {/* DNA Helix Structure */}
      {Array.from({ length: 20 }, (_, i) => (
        <Float key={`helix-${i}`} speed={1} rotationIntensity={0.5}>
          <Box 
            position={[
              Math.sin(i * 0.3) * 3,
              i * 0.5 - 5,
              Math.cos(i * 0.3) * 3
            ]} 
            args={[0.2, 0.2, 0.2]}
          >
            <meshStandardMaterial 
              color="#8b5cf6"
              emissive="#8b5cf6"
              emissiveIntensity={0.4}
            />
          </Box>
        </Float>
      ))}
    </group>
  )
}

// Tech Stack Icons Animation
const TechStackOrbit = () => {
  const techStack = [
    { icon: FaReact, color: "#61dafb", name: "React" },
    { icon: FaNodeJs, color: "#68a063", name: "Node.js" },
    { icon: SiTypescript, color: "#3178c6", name: "TypeScript" },
    { icon: SiMongodb, color: "#47a248", name: "MongoDB" },
    { icon: SiExpress, color: "#000000", name: "Express" },
    { icon: FaDocker, color: "#2496ed", name: "Docker" },
    { icon: SiNextdotjs, color: "#000000", name: "Next.js" },
    { icon: SiTailwindcss, color: "#38bdf8", name: "Tailwind" }
  ]

  return (
    <div className="absolute inset-0 pointer-events-none">
      {techStack.map((tech, index) => {
        const angle = (index / techStack.length) * 2 * Math.PI
        const radius = 300
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        
        return (
          <motion.div
            key={tech.name}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              x: x,
              y: y,
            }}
            animate={{
              x: [x, x + 20, x - 20, x],
              y: [y, y - 10, y + 10, y],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md shadow-2xl border border-white/20"
              style={{
                backgroundColor: `${tech.color}20`,
                boxShadow: `0 0 20px ${tech.color}40`
              }}
            >
              <tech.icon 
                className="w-8 h-8" 
                style={{ color: tech.color }}
              />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

// Typing Animation Component
const TypewriterText = ({ text, delay = 0, className }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }
    }, delay + currentIndex * 50)

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay])

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-cyan-400">|</span>
      )}
    </span>
  )
}

// Floating Action Buttons
const FloatingActions = () => {
  return (
    <motion.div 
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 space-y-4"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 3, duration: 1 }}
    >
      {[
        { icon: FaGithub, href: "https://github.com/anirbansantra748", color: "#333" },
        { icon: FaLinkedin, href: "https://linkedin.com/in/anirban-santra-a9ab0b241", color: "#0077b5" }
      ].map((item, i) => (
        <motion.a
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-14 h-14 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center shadow-2xl"
          whileHover={{ 
            scale: 1.2, 
            backgroundColor: `${item.color}20`,
            boxShadow: `0 0 30px ${item.color}60`
          }}
          whileTap={{ scale: 0.9 }}
        >
          <item.icon className="w-6 h-6 text-white" />
        </motion.a>
      ))}
    </motion.div>
  )
}

// Main Hero Component
const HeroRevolution = () => {
  const [loadingComplete, setLoadingComplete] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  
  const roles = [
    "Full Stack Developer",
    "Backend Architect", 
    "System Designer",
    "Problem Solver"
  ]

  useEffect(() => {
    const timer = setTimeout(() => setLoadingComplete(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(roleTimer)
  }, [roles.length])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>

      {/* 3D Background Scene */}
      <div className="absolute inset-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 15] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#61dafb" intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.8} />
          <BackgroundScene />
        </Canvas>
      </div>

      {/* Tech Stack Orbit */}
      <TechStackOrbit />

      {/* Floating Actions */}
      <FloatingActions />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Loading Animation */}
          <AnimatePresence>
            {!loadingComplete && (
              <motion.div
                className="mb-12"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center space-x-2 text-cyan-400 text-xl font-mono">
                  <CubeIcon className="w-6 h-6 animate-spin" />
                  <span>Initializing Developer Matrix...</span>
                </div>
                <div className="mt-4 w-64 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2 }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content */}
          {loadingComplete && (
            <>
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-md mb-4">
                  <SparklesIcon className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-300 font-medium">Available for opportunities</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                  Hi, I'm{' '}
                </span>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                  <TypewriterText text="Anirban" delay={1000} />
                </span>
              </motion.h1>

              {/* Role */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mb-8"
              >
                <div className="text-2xl md:text-4xl font-semibold text-gray-300 mb-4">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentRole}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                    >
                      {roles[currentRole]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Crafting exceptional digital experiences with{' '}
                <span className="text-cyan-400 font-semibold">Node.js</span>,{' '}
                <span className="text-purple-400 font-semibold">React</span>, and{' '}
                <span className="text-green-400 font-semibold">modern technologies</span>.
                Specialized in scalable backend systems and beautiful user interfaces.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.a
                  href="#projects"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center space-x-2">
                    <RocketLaunchIcon className="w-5 h-5" />
                    <span>View My Work</span>
                  </div>
                </motion.a>

                <motion.a
                  href="#contact"
                  className="group px-8 py-4 border-2 border-cyan-500/30 rounded-full text-cyan-300 font-semibold text-lg hover:bg-cyan-500/10 transition-all backdrop-blur-md"
                  whileHover={{ scale: 1.05, borderColor: "#06b6d4" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-2">
                  <BoltIcon className="w-5 h-5" />
                    <span>Get In Touch</span>
                  </div>
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 }}
                className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16"
              >
                {[
                  { number: "25+", label: "Projects Built" },
                  { number: "400+", label: "Problems Solved" },
                  { number: "3+", label: "Years Experience" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <motion.div
                      className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 3 + i * 0.2, type: "spring" }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </>
          )}

          {/* Scroll Indicator */}
          {loadingComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center space-y-2 text-gray-400"
              >
                <span className="text-sm font-medium">Scroll to explore</span>
                <ArrowDownIcon className="w-6 h-6" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroRevolution