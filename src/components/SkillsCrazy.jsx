import React, { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import { Float, Box, Sphere, Cylinder, Text3D } from '@react-three/drei'

// 3D Skill Nodes
function SkillNode({ position, color, skill, isActive }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.scale.setScalar(isActive ? 1.2 : 1)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <group position={position}>
        <Box ref={meshRef} args={[0.8, 0.8, 0.8]}>
          <meshStandardMaterial 
            color={color}
            emissive={color}
            emissiveIntensity={isActive ? 0.6 : 0.3}
          />
        </Box>
        <Sphere position={[0, 1.2, 0]} args={[0.2, 16, 16]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.4} />
        </Sphere>
      </group>
    </Float>
  )
}

// 3D Skill Network
function SkillNetwork() {
  const [activeSkill, setActiveSkill] = useState(null)
  
  const skillPositions = [
    { pos: [-4, 2, 0], color: "#f7df1e", skill: "JavaScript" },
    { pos: [4, 2, 0], color: "#68a063", skill: "Node.js" },
    { pos: [0, 4, 0], color: "#61dafb", skill: "React" },
    { pos: [-2, 0, 2], color: "#47a248", skill: "MongoDB" },
    { pos: [2, 0, 2], color: "#3178c6", skill: "TypeScript" },
    { pos: [0, -2, 0], color: "#2496ed", skill: "Docker" },
    { pos: [-4, -1, -2], color: "#ff6b6b", skill: "System Design" },
    { pos: [4, -1, -2], color: "#9966cc", skill: "Microservices" }
  ]

  return (
    <group>
      {skillPositions.map((skillData, i) => (
        <SkillNode
          key={i}
          position={skillData.pos}
          color={skillData.color}
          skill={skillData.skill}
          isActive={activeSkill === i}
        />
      ))}
      
      {/* Connection Lines */}
      {skillPositions.map((skill1, i) => 
        skillPositions.slice(i + 1).map((skill2, j) => (
          <Cylinder
            key={`${i}-${j}`}
            position={[
              (skill1.pos[0] + skill2.pos[0]) / 2,
              (skill1.pos[1] + skill2.pos[1]) / 2,
              (skill1.pos[2] + skill2.pos[2]) / 2
            ]}
            args={[0.02, 0.02, Math.sqrt(
              Math.pow(skill1.pos[0] - skill2.pos[0], 2) +
              Math.pow(skill1.pos[1] - skill2.pos[1], 2) +
              Math.pow(skill1.pos[2] - skill2.pos[2], 2)
            )]}
            rotation={[
              Math.atan2(skill2.pos[1] - skill1.pos[1], 
                        Math.sqrt(Math.pow(skill2.pos[0] - skill1.pos[0], 2) + 
                                Math.pow(skill2.pos[2] - skill1.pos[2], 2))),
              0,
              Math.atan2(skill2.pos[0] - skill1.pos[0], skill2.pos[2] - skill1.pos[2])
            ]}
          >
            <meshStandardMaterial color="#00ff88" opacity={0.3} transparent />
          </Cylinder>
        ))
      )}
    </group>
  )
}

// Skill Tree Component
const SkillTree = ({ category, skills, icon, color }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="bg-black/60 border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{icon}</div>
            <h3 className="text-xl font-mono text-green-400">{category}</h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            className="text-green-400 text-xl"
          >
            ▶
          </motion.div>
        </div>
        
        <div className={`h-2 bg-gradient-to-r ${color} rounded-full mb-4`}></div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="flex items-center justify-between bg-gray-900/60 rounded-lg p-3 border border-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ backgroundColor: "rgba(0, 255, 136, 0.1)" }}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: skill.color }}></div>
                  <span className="text-green-400 font-mono">{skill.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-yellow-400 font-mono text-sm">{skill.level}%</div>
                  <div className="w-16 bg-gray-800 rounded-full h-1">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Terminal Skill Scanner
const SkillScanner = () => {
  const [scanProgress, setScanProgress] = useState(0)
  const [currentSkill, setCurrentSkill] = useState('')
  const [scanComplete, setScanComplete] = useState(false)
  
  const skills = [
    'JavaScript', 'Node.js', 'React', 'MongoDB', 'TypeScript', 
    'Docker', 'System Design', 'Express.js', 'Microservices'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (scanProgress < 100) {
        setScanProgress(prev => prev + 2)
        const skillIndex = Math.floor((scanProgress / 100) * skills.length)
        if (skills[skillIndex]) {
          setCurrentSkill(skills[skillIndex])
        }
      } else {
        setScanComplete(true)
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [scanProgress, skills])

  return (
    <div className="bg-black border border-green-400/30 rounded-lg p-6 font-mono">
      <div className="flex items-center mb-4 border-b border-green-400/30 pb-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 text-green-400">anirban@matrix:~/skills$ ./scan_abilities.sh</div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="text-green-400">$ Scanning developer capabilities...</div>
        <div className="text-yellow-400">$ Loading skill database...</div>
        <div className="text-blue-400">$ Analyzing proficiency levels...</div>
        <div className="text-purple-400">$ Cross-referencing project experience...</div>
        <div className="text-green-400">$ Generating skill matrix...</div>
        
        {!scanComplete && (
          <>
            <div className="flex items-center space-x-2 mt-4">
              <div className="text-yellow-400">Scanning:</div>
              <div className="text-green-400">{currentSkill}</div>
              <span className="animate-pulse">...</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
              <motion.div
                className="bg-green-400 h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${scanProgress}%` }}
                transition={{ duration: 0.1 }}
              ></motion.div>
            </div>
            <div className="text-center text-green-400 mt-2">{scanProgress}%</div>
          </>
        )}

        {scanComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-green-400/10 border border-green-400/30 rounded"
          >
            <div className="text-green-400 font-bold mb-2">✓ SCAN COMPLETE</div>
            <div className="text-sm space-y-1">
              <div className="text-green-400">Total Skills Detected: {skills.length}</div>
              <div className="text-blue-400">Backend Proficiency: Expert</div>
              <div className="text-yellow-400">Frontend Proficiency: Advanced</div>
              <div className="text-purple-400">System Design: Advanced</div>
              <div className="text-orange-400">DevOps: Intermediate</div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

// Main Skills Component
const SkillsCrazy = () => {
  const skillCategories = [
    {
      category: "Backend Development",
      icon: "⚡",
      color: "from-yellow-400 to-orange-400",
      skills: [
        { name: "Node.js", level: 95, color: "#68a063" },
        { name: "Express.js", level: 90, color: "#000000" },
        { name: "MongoDB", level: 85, color: "#47a248" },
        { name: "Microservices", level: 88, color: "#9966cc" },
        { name: "System Design", level: 92, color: "#ff6b6b" }
      ]
    },
    {
      category: "Frontend Development",
      icon: "🎨",
      color: "from-blue-400 to-purple-400",
      skills: [
        { name: "React", level: 88, color: "#61dafb" },
        { name: "JavaScript", level: 90, color: "#f7df1e" },
        { name: "TypeScript", level: 82, color: "#3178c6" },
        { name: "HTML5/CSS3", level: 85, color: "#e34f26" },
        { name: "Responsive Design", level: 87, color: "#38b2ac" }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: "🔧",
      color: "from-green-400 to-teal-400",
      skills: [
        { name: "Docker", level: 75, color: "#2496ed" },
        { name: "Git/GitHub", level: 90, color: "#f05032" },
        { name: "Linux", level: 80, color: "#fcc624" },
        { name: "CI/CD", level: 70, color: "#326ce5" },
        { name: "AWS Basics", level: 65, color: "#ff9900" }
      ]
    },
    {
      category: "Problem Solving",
      icon: "🧠",
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "Data Structures", level: 88, color: "#ff4757" },
        { name: "Algorithms", level: 85, color: "#7bed9f" },
        { name: "LeetCode", level: 82, color: "#ffa502" },
        { name: "System Design", level: 90, color: "#5352ed" },
        { name: "Optimization", level: 78, color: "#ff6b81" }
      ]
    }
  ]

  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 12] }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} color="#00ff88" intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#00aaff" intensity={0.7} />
          <SkillNetwork />
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
            <span className="text-gray-600">SKILL</span>{' '}
            <span 
              className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              style={{ filter: 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.5))' }}
            >
              MATRIX
            </span>
          </h2>
          <div className="text-green-400 font-mono text-xl">
            &gt;&gt; LOADING_TECHNICAL_CAPABILITIES...
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Skill Scanner */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-mono text-green-400 mb-6">SYSTEM_SCAN.EXE</h3>
              <SkillScanner />
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-mono text-green-400 mb-6">QUICK_STATS.LOG</h3>
            {[
              { label: "Languages", value: "8+", color: "text-yellow-400" },
              { label: "Frameworks", value: "12+", color: "text-blue-400" },
              { label: "Years Coding", value: "3+", color: "text-green-400" },
              { label: "Projects Built", value: "25+", color: "text-purple-400" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-black/60 border border-green-400/30 rounded-lg p-4 flex justify-between items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ borderColor: "rgba(0, 255, 136, 0.6)" }}
              >
                <span className="font-mono text-green-400">{stat.label}</span>
                <span className={`font-mono font-bold text-2xl ${stat.color}`}>{stat.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <SkillTree {...category} />
            </motion.div>
          ))}
        </div>

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
                <span className="text-gray-600">$</span> grep -r "more_skills" ./projects/
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsCrazy