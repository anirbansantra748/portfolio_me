import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiExpress, 
  SiMongodb, SiPostgresql, SiTailwindcss, SiBootstrap, SiGit, 
  SiGithub, SiPostman, SiAndroid, SiHtml5, SiCss3, SiThree, 
  SiPython, SiDocker, SiAmazonaws, SiLinux, SiVisualstudiocode,
  SiVercel, SiNetlify, SiFigma
} from 'react-icons/si'
import { 
  FaCode, FaServer, FaPalette, FaTools, FaCloud, FaRocket,
  FaCog, FaDatabase, FaLaptopCode, FaMobileAlt
} from 'react-icons/fa'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [scanningIndex, setScanningIndex] = useState(0)

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: FaLaptopCode,
      color: 'from-blue-400 to-cyan-400',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', proficiency: 90 },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', proficiency: 85 },
        { name: 'React', icon: SiReact, color: '#61dafb', proficiency: 88 },
        { name: 'HTML5', icon: SiHtml5, color: '#e34c26', proficiency: 95 },
        { name: 'CSS3', icon: SiCss3, color: '#1572b6', proficiency: 90 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8', proficiency: 92 },
        { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3', proficiency: 85 },
        { name: 'Three.js', icon: SiThree, color: '#000000', proficiency: 75 }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: FaServer,
      color: 'from-green-400 to-emerald-400',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933', proficiency: 92 },
        { name: 'Express.js', icon: SiExpress, color: '#000000', proficiency: 88 },
        { name: 'Python', icon: SiPython, color: '#3776ab', proficiency: 80 },
        { name: 'MongoDB', icon: SiMongodb, color: '#47a248', proficiency: 85 },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', proficiency: 78 }
      ]
    },
    tools: {
      title: 'Development Tools',
      icon: FaTools,
      color: 'from-purple-400 to-pink-400',
      skills: [
        { name: 'Git', icon: SiGit, color: '#f05032', proficiency: 90 },
        { name: 'GitHub', icon: SiGithub, color: '#ffffff', proficiency: 92 },
        { name: 'VS Code', icon: SiVisualstudiocode, color: '#007acc', proficiency: 95 },
        { name: 'Postman', icon: SiPostman, color: '#ff6c37', proficiency: 88 },
        { name: 'Docker', icon: SiDocker, color: '#2496ed', proficiency: 75 },
        { name: 'Figma', icon: SiFigma, color: '#f24e1e', proficiency: 82 }
      ]
    },
    cloud: {
      title: 'Cloud & Deployment',
      icon: FaCloud,
      color: 'from-orange-400 to-red-400',
      skills: [
        { name: 'AWS', icon: SiAmazonaws, color: '#ff9900', proficiency: 70 },
        { name: 'Vercel', icon: SiVercel, color: '#ffffff', proficiency: 85 },
        { name: 'Netlify', icon: SiNetlify, color: '#00c7b7', proficiency: 80 },
        { name: 'Linux', icon: SiLinux, color: '#fcc624', proficiency: 75 }
      ]
    },
    mobile: {
      title: 'Mobile Development',
      icon: FaMobileAlt,
      color: 'from-indigo-400 to-blue-400',
      skills: [
        { name: 'React Native', icon: SiReact, color: '#61dafb', proficiency: 75 },
        { name: 'Android', icon: SiAndroid, color: '#3ddc84', proficiency: 70 }
      ]
    }
  }

  const allSkills = Object.values(skillCategories).flatMap(category => 
    category.skills.map(skill => ({ ...skill, category: category.title }))
  )

  // Scanning animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScanningIndex(prev => (prev + 1) % allSkills.length)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  const getFilteredSkills = () => {
    if (activeCategory === 'all') return allSkills
    return skillCategories[activeCategory]?.skills || []
  }

  const SkillCard = ({ skill, index, isScanning }) => {
    const Icon = skill.icon
    return (
      <motion.div
        className={`relative bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6 group hover:bg-white/10 transition-all duration-500 ${
          isScanning ? 'ring-2 ring-cyan-400 shadow-lg shadow-cyan-400/25' : ''
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.05, y: -5 }}
      >
        {/* Glassmorphic glow */}
        <div 
          className="absolute inset-0 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{ backgroundColor: skill.color }}
        ></div>
        
        {/* Scanning line effect */}
        {isScanning && (
          <motion.div
            className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            animate={{ y: [0, 90, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        
        <div className="relative z-10 text-center">
          <div className="mb-4 flex justify-center">
            <div 
              className="p-3 rounded-xl group-hover:scale-110 transition-all duration-300"
              style={{ backgroundColor: `${skill.color}20` }}
            >
              <Icon 
                className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" 
                style={{ color: skill.color }}
              />
            </div>
          </div>
          
          <h3 className="font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
            {skill.name}
          </h3>
          
          {/* Proficiency bar */}
          <div className="w-full bg-white/10 rounded-full h-1.5 mb-2">
            <motion.div 
              className="h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.proficiency}%` }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
            />
          </div>
          <span className="text-xs text-gray-400">{skill.proficiency}%</span>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICA8L2RlZnM+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxwYXRoIGQ9Im0wIDBoNDB2NDAiaC00MHoiLz4KICAgIDxwYXRoIGQ9Im0wIDBoNDB2NDAiaC00MHoiLz4KICA8L2c+Cjwvc3ZnPg==')] opacity-5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-6">
            <FaCog className="w-5 h-5 text-cyan-400 animate-spin" />
            <span className="text-cyan-400 font-mono">Technical Arsenal</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Skills</span>
            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text"> & Expertise</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-400/25'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            <FaRocket className="inline w-4 h-4 mr-2" />
            All Skills
          </button>
          
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <Icon className="inline w-4 h-4 mr-2" />
                {category.title.split(' ')[0]}
              </button>
            )
          })}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {getFilteredSkills().map((skill, index) => {
              const globalIndex = allSkills.findIndex(s => s.name === skill.name)
              return (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  isScanning={globalIndex === scanningIndex}
                />
              )
            })}
          </motion.div>
        </AnimatePresence>
        
        {/* Scanning Status */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-300 text-sm font-mono">Scanning skills... System ready for deployment</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
