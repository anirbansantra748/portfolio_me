import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  EyeIcon,
  PlayIcon,
  StarIcon,
  TrophyIcon,
  CheckBadgeIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'
import { 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaGithub,
  FaExternalLinkAlt,
  FaAward,
  FaUsers,
  FaCode
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiMongodb, 
  SiExpress, 
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiFirebase,
  SiJavascript,
  SiSocketdotio,
  SiRedis
} from 'react-icons/si'

// Project data with enhanced details
const projects = [
  {
    id: 1,
    title: "CodeCollab Pro",
    category: "Full Stack Application",
    description: "Real-time collaborative code editor with voice chat, multiple programming languages support, and team management features.",
    longDescription: "A comprehensive platform for developers to collaborate on code in real-time, featuring syntax highlighting, live cursors, voice communication, and project management tools.",
    image: "/project-images/codecollab.jpg",
    technologies: [
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Node.js", icon: FaNodeJs, color: "#68a063" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" }
    ],
    features: ["Real-time collaboration", "Voice chat integration", "Multiple language support", "Team management"],
    githubUrl: "https://github.com/anirbansantra748/codecollab-pro",
    liveUrl: "https://codecollab-pro.vercel.app",
    status: "Live",
    achievement: "Winner - EduSands Hacks 2024",
    stats: { users: "500+", stars: 47, commits: 156 }
  },
  {
    id: 2,
    title: "EcoTrack Dashboard",
    category: "Data Visualization",
    description: "Comprehensive environmental monitoring dashboard with real-time analytics and predictive insights.",
    longDescription: "Advanced dashboard for tracking environmental metrics, featuring interactive charts, real-time data updates, and machine learning-powered predictions for environmental trends.",
    image: "/project-images/ecotrack.jpg",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" }
    ],
    features: ["Real-time analytics", "Predictive modeling", "Interactive charts", "Mobile responsive"],
    githubUrl: "https://github.com/anirbansantra748/ecotrack-dashboard",
    liveUrl: "https://ecotrack-dashboard.vercel.app",
    status: "Live",
    achievement: "Top 15 - Rebase Hackathon",
    stats: { users: "200+", stars: 23, commits: 89 }
  },
  {
    id: 3,
    title: "TaskFlow API",
    category: "Backend System",
    description: "Scalable task management API with microservices architecture and advanced caching.",
    longDescription: "High-performance REST API built with microservices architecture, featuring Redis caching, JWT authentication, and comprehensive documentation.",
    image: "/project-images/taskflow.jpg",
    technologies: [
      { name: "Node.js", icon: FaNodeJs, color: "#68a063" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Redis", icon: SiRedis, color: "#dc382d" },
      { name: "Docker", icon: FaDocker, color: "#2496ed" }
    ],
    features: ["Microservices architecture", "Redis caching", "JWT authentication", "API documentation"],
    githubUrl: "https://github.com/anirbansantra748/taskflow-api",
    liveUrl: "https://taskflow-api.herokuapp.com",
    status: "Live",
    achievement: "Featured on GitHub Trending",
    stats: { users: "1000+", stars: 89, commits: 234 }
  },
  {
    id: 4,
    title: "SmartFinance Tracker",
    category: "Mobile Web App",
    description: "AI-powered personal finance tracker with expense categorization and budget recommendations.",
    longDescription: "Intelligent finance management app that automatically categorizes expenses, provides budget insights, and offers personalized financial advice using machine learning.",
    image: "/project-images/smartfinance.jpg",
    technologies: [
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" }
    ],
    features: ["AI expense categorization", "Budget recommendations", "Financial insights", "Secure authentication"],
    githubUrl: "https://github.com/anirbansantra748/smartfinance-tracker",
    liveUrl: "https://smartfinance-tracker.web.app",
    status: "Live",
    achievement: "Best UI/UX - TechFest 2024",
    stats: { users: "300+", stars: 34, commits: 67 }
  },
  {
    id: 5,
    title: "DevChat Platform",
    category: "Real-time Communication",
    description: "Developer-focused chat platform with code sharing, syntax highlighting, and team channels.",
    longDescription: "Specialized communication platform for developers featuring code snippet sharing, syntax highlighting, team channels, and integration with popular development tools.",
    image: "/project-images/devchat.jpg",
    technologies: [
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Node.js", icon: FaNodeJs, color: "#68a063" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" }
    ],
    features: ["Real-time messaging", "Code syntax highlighting", "File sharing", "Team channels"],
    githubUrl: "https://github.com/anirbansantra748/devchat-platform",
    liveUrl: "https://devchat-platform.herokuapp.com",
    status: "Live",
    achievement: "Community Choice Award",
    stats: { users: "800+", stars: 56, commits: 123 }
  },
  {
    id: 6,
    title: "CloudDeploy CLI",
    category: "DevOps Tool",
    description: "Command-line tool for automated deployment to multiple cloud platforms with one command.",
    longDescription: "Powerful CLI tool that simplifies cloud deployment process, supporting multiple platforms like AWS, Vercel, and Heroku with automated configuration and rollback features.",
    image: "/project-images/clouddeploy.jpg",
    technologies: [
      { name: "Node.js", icon: FaNodeJs, color: "#68a063" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "Docker", icon: FaDocker, color: "#2496ed" }
    ],
    features: ["Multi-platform deployment", "Automated configuration", "Rollback support", "CLI interface"],
    githubUrl: "https://github.com/anirbansantra748/clouddeploy-cli",
    liveUrl: "https://www.npmjs.com/package/clouddeploy-cli",
    status: "NPM Package",
    achievement: "1000+ Downloads",
    stats: { users: "1200+", stars: 67, commits: 45 }
  }
]

// Project Card Component
const ProjectCard = ({ project, index, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      layout
      className={`relative group cursor-pointer ${
        isActive ? 'lg:col-span-2 lg:row-span-2' : ''
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 shadow-2xl">
        
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20" />
        
        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${
                project.status === 'Live' ? 'bg-green-400' : 
                project.status === 'NPM Package' ? 'bg-blue-400' : 'bg-yellow-400'
              } animate-pulse`} />
              <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            
            <div className="flex space-x-2">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub className="w-4 h-4 text-white" />
              </motion.a>
              
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ArrowTopRightOnSquareIcon className="w-4 h-4 text-white" />
              </motion.a>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 flex-1 leading-relaxed">
            {isActive ? project.longDescription : project.description}
          </p>

          {/* Achievement Badge */}
          {project.achievement && (
            <div className="flex items-center space-x-2 mb-4 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
              <TrophyIcon className="w-4 h-4 text-yellow-400" />
              <span className="text-xs font-medium text-yellow-300">{project.achievement}</span>
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center justify-between mb-4 text-xs text-gray-400">
            <div className="flex items-center space-x-1">
              <FaUsers className="w-3 h-3" />
              <span>{project.stats.users}</span>
            </div>
            <div className="flex items-center space-x-1">
              <StarIcon className="w-3 h-3" />
              <span>{project.stats.stars}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaCode className="w-3 h-3" />
              <span>{project.stats.commits}</span>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, isActive ? project.technologies.length : 3).map((tech, i) => (
              <div
                key={i}
                className="flex items-center space-x-1 px-2 py-1 rounded-full bg-white/10 border border-white/20 text-xs"
                style={{ color: tech.color }}
              >
                <tech.icon className="w-3 h-3" />
                <span>{tech.name}</span>
              </div>
            ))}
            {!isActive && project.technologies.length > 3 && (
              <div className="px-2 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-gray-400">
                +{project.technologies.length - 3}
              </div>
            )}
          </div>

          {/* Features (only show when active) */}
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
              <div className="grid grid-cols-2 gap-2">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-gray-300">
                    <CheckBadgeIcon className="w-3 h-3 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Action Button */}
          <motion.button
            className="mt-auto w-full py-2 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-sm hover:from-cyan-600 hover:to-purple-700 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation()
              window.open(project.liveUrl, '_blank')
            }}
          >
            <div className="flex items-center justify-center space-x-2">
              <PlayIcon className="w-4 h-4" />
              <span>{project.status === 'NPM Package' ? 'View Package' : 'View Live'}</span>
            </div>
          </motion.button>

        </div>

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && !isActive && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-purple-500/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  )
}

// Main Projects Component
const ProjectsUltra = () => {
  const [activeProject, setActiveProject] = useState(null)
  const [filter, setFilter] = useState('All')
  
  const categories = ['All', 'Full Stack Application', 'Backend System', 'Mobile Web App', 'DevOps Tool']
  
  const filteredProjects = projects.filter(project => 
    filter === 'All' || project.category === filter
  )

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.3),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-md mb-4">
            <RocketLaunchIcon className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-medium">Featured Work</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Projects That{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Define Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative solutions, cutting-edge technologies, and award-winning applications
            that demonstrate expertise in full-stack development and system architecture.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all backdrop-blur-md ${
                filter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isActive={activeProject === project.id}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/anirbansantra748"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-md text-white font-semibold hover:from-cyan-500/30 hover:to-purple-500/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="w-5 h-5" />
            <span>Explore More on GitHub</span>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}

export default ProjectsUltra