import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  CloudIcon,
  WrenchScrewdriverIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { 
  FaReact, 
  FaNodeJs, 
  FaDocker,
  FaGitAlt,
  FaAws,
  FaLinux,
  FaPython,
  FaJava
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiMongodb, 
  SiExpress, 
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSocketdotio,
  SiVercel,
  SiHeroku,
  SiPostman,
  SiVscode
} from 'react-icons/si'

const SkillsCode = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [scanningSkill, setScanningSkill] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  // Resume-based skills organized by category
  const skillsData = {
    backend: [
      { name: 'Node.js', icon: FaNodeJs, level: 95, color: '#68a063', description: 'Server-side JavaScript runtime' },
      { name: 'Express.js', icon: SiExpress, level: 92, color: '#000000', description: 'Web application framework' },
      { name: 'MongoDB', icon: SiMongodb, level: 88, color: '#47a248', description: 'NoSQL database' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 82, color: '#336791', description: 'Relational database' },
      { name: 'Redis', icon: SiRedis, level: 78, color: '#dc382d', description: 'In-memory data store' },
      { name: 'Socket.io', icon: SiSocketdotio, level: 85, color: '#010101', description: 'Real-time communication' }
    ],
    frontend: [
      { name: 'React', icon: FaReact, level: 90, color: '#61dafb', description: 'UI library' },
      { name: 'Next.js', icon: SiNextdotjs, level: 82, color: '#000000', description: 'React framework' },
      { name: 'TypeScript', icon: SiTypescript, level: 85, color: '#3178c6', description: 'Typed JavaScript' },
      { name: 'JavaScript', icon: SiJavascript, level: 93, color: '#f7df1e', description: 'Programming language' },
      { name: 'HTML5', icon: SiHtml5, level: 90, color: '#e34f26', description: 'Markup language' },
      { name: 'CSS3', icon: SiCss3, level: 88, color: '#1572b6', description: 'Stylesheet language' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 87, color: '#38bdf8', description: 'Utility-first CSS' }
    ],
    tools: [
      { name: 'Git', icon: FaGitAlt, level: 90, color: '#f05032', description: 'Version control' },
      { name: 'Docker', icon: FaDocker, level: 78, color: '#2496ed', description: 'Containerization' },
      { name: 'VS Code', icon: SiVscode, level: 95, color: '#007acc', description: 'Code editor' },
      { name: 'Postman', icon: SiPostman, level: 88, color: '#ff6c37', description: 'API testing' },
      { name: 'Vercel', icon: SiVercel, level: 85, color: '#000000', description: 'Deployment platform' },
      { name: 'Heroku', icon: SiHeroku, level: 80, color: '#430098', description: 'Cloud platform' }
    ],
    learning: [
      { name: 'AWS', icon: FaAws, level: 65, color: '#ff9900', description: 'Cloud services' },
      { name: 'Kubernetes', icon: SiKubernetes, level: 60, color: '#326ce5', description: 'Container orchestration' },
      { name: 'Python', icon: FaPython, level: 70, color: '#3776ab', description: 'Programming language' },
      { name: 'Linux', icon: FaLinux, level: 75, color: '#fcc624', description: 'Operating system' }
    ]
  }

  const categories = [
    { id: 'all', label: 'All Skills', icon: CodeBracketIcon },
    { id: 'backend', label: 'Backend', icon: CommandLineIcon },
    { id: 'frontend', label: 'Frontend', icon: SparklesIcon },
    { id: 'tools', label: 'Tools', icon: WrenchScrewdriverIcon },
    { id: 'learning', label: 'Learning', icon: CpuChipIcon }
  ]

  const getAllSkills = () => {
    return [...skillsData.backend, ...skillsData.frontend, ...skillsData.tools, ...skillsData.learning]
  }

  const getFilteredSkills = () => {
    if (activeCategory === 'all') return getAllSkills()
    return skillsData[activeCategory] || []
  }

  // Scanning animation effect
  useEffect(() => {
    const allSkills = getAllSkills()
    const interval = setInterval(() => {
      setScanningSkill(prev => (prev + 1) % allSkills.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const SkillCard = ({ skill, index, isScanning }) => (
    <motion.div
      className={`relative group p-6 rounded-lg border transition-all duration-300 cursor-pointer ${
        isScanning 
          ? 'border-green-400 bg-green-500/10 shadow-lg shadow-green-500/20' 
          : 'border-gray-700 bg-black/40 hover:border-green-500/50 hover:bg-green-500/5'
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      onMouseEnter={() => setHoveredSkill(skill)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      {/* Skill Icon */}
      <div className="flex items-center justify-center mb-4">
        <div 
          className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all ${
            isScanning ? 'animate-pulse' : ''
          }`}
          style={{ 
            backgroundColor: `${skill.color}20`,
            border: `2px solid ${skill.color}40`
          }}
        >
          <skill.icon 
            className="w-8 h-8" 
            style={{ color: skill.color }}
          />
        </div>
      </div>

      {/* Skill Name */}
      <h3 className="text-lg font-bold text-green-400 mb-2 text-center">{skill.name}</h3>
      
      {/* Skill Description */}
      <p className="text-xs text-gray-400 text-center mb-4">{skill.description}</p>

      {/* Proficiency Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">Proficiency</span>
          <span className="text-xs font-mono text-green-400">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: skill.color }}
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1.5, delay: index * 0.1 }}
          >
            <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </motion.div>
        </div>
      </div>

      {/* Scanning Effect */}
      {isScanning && (
        <motion.div
          className="absolute inset-0 bg-green-400/10 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  )

  const SkillScanner = () => {
    const allSkills = getAllSkills()
    const currentSkill = allSkills[scanningSkill]

    return (
      <motion.div
        className="bg-black rounded-lg border border-green-500/30 p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm ml-4">skill-scanner.exe</span>
          </div>
          <CodeBracketIcon className="w-5 h-5 text-green-400" />
        </div>

        <div className="font-mono text-sm space-y-2">
          <div className="text-green-400">$ ./scan-skills --mode=live</div>
          <div className="text-gray-400">Scanning developer capabilities...</div>
          <div className="flex items-center space-x-2">
            <span className="text-green-300">Currently scanning:</span>
            <span style={{ color: currentSkill?.color }} className="font-bold">
              {currentSkill?.name}
            </span>
            <span className="animate-pulse text-green-400">●</span>
          </div>
          <div className="text-xs text-gray-500">
            Proficiency: {currentSkill?.level}% | Status: {currentSkill?.level > 80 ? 'Expert' : 'Proficient'}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white font-mono">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3 px-6 py-3 bg-black/60 rounded-full border border-green-500/30">
              <CpuChipIcon className="w-5 h-5 text-green-400" />
              <span className="text-green-400">Technical Arsenal</span>
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-400">Skills</span>
            <span className="text-green-400"> Matrix</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A comprehensive arsenal of technologies I use to build amazing software.
            From backend systems to space-age UIs.
          </p>
        </motion.div>

        {/* Skill Scanner */}
        <SkillScanner />

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                  : 'bg-black/40 text-gray-400 border border-gray-700 hover:border-green-500/30 hover:text-green-400'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {getFilteredSkills().map((skill, index) => {
              const allSkills = getAllSkills()
              const isScanning = allSkills[scanningSkill]?.name === skill.name
              return (
                <SkillCard
                  key={`${activeCategory}-${skill.name}`}
                  skill={skill}
                  index={index}
                  isScanning={isScanning}
                />
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Skill Details Panel */}
        <AnimatePresence>
          {hoveredSkill && (
            <motion.div
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-black border border-green-500/30 rounded-lg p-4 min-w-[300px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <hoveredSkill.icon 
                  className="w-6 h-6" 
                  style={{ color: hoveredSkill.color }} 
                />
                <span className="text-green-400 font-bold">{hoveredSkill.name}</span>
              </div>
              <p className="text-gray-300 text-sm mb-2">{hoveredSkill.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Proficiency Level</span>
                <span className="text-green-400 font-mono">{hoveredSkill.level}%</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { label: 'Backend Skills', value: skillsData.backend.length, icon: '🔧' },
            { label: 'Frontend Skills', value: skillsData.frontend.length, icon: '🎨' },
            { label: 'Dev Tools', value: skillsData.tools.length, icon: '⚙️' },
            { label: 'Learning', value: skillsData.learning.length, icon: '📚' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-black/60 rounded-lg border border-green-500/30 p-6 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'rgb(34 197 94 / 0.7)' }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-green-400 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/30 p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Ready to Launch a Project?</h3>
            <p className="text-gray-300 mb-6">
              Let's combine these skills to build something amazing that reaches for the stars!
            </p>
            <motion.a
              href="#projects"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CodeBracketIcon className="w-5 h-5" />
              <span>View Projects</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsCode