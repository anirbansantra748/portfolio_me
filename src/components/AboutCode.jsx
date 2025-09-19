import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  UserIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  MapPinIcon,
  CalendarIcon,
  BriefcaseIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import { 
  FaCode,
  FaRocket,
  FaGraduationCap,
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHeart,
  FaStar
} from 'react-icons/fa'

const AboutCode = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [terminalOutput, setTerminalOutput] = useState([])
  const [currentCommand, setCurrentCommand] = useState(0)

  const aboutData = {
    profile: {
      name: "Anirban Santra",
      role: "Backend-focused Full Stack Developer",
      location: "India",
      education: "B.Tech in Computer Science (2021-2025)",
      status: "Open for opportunities",
      passion: "Space Technology & Backend Systems"
    },
    currentWork: [
      "🚀 Building scalable microservices with Node.js",
      "🛠️ Developing real-time applications with Socket.io",
      "🎯 Exploring space technology and satellite systems",
      "📚 Learning Next.js and Docker containerization",
      "🔧 Contributing to open-source projects"
    ],
    interests: [
      { icon: "🌌", title: "Space Exploration", desc: "Fascinated by space missions and satellite technology" },
      { icon: "⚡", title: "Backend Systems", desc: "Passionate about scalable server architectures" },
      { icon: "🤖", title: "AI & ML", desc: "Exploring artificial intelligence applications" },
      { icon: "🔬", title: "Problem Solving", desc: "Love algorithmic challenges and optimization" }
    ]
  }

  const terminalCommands = [
    "$ cat about.md",
    "> Loading developer profile...",
    "$ grep 'passion' profile.txt", 
    "> Backend systems and space exploration",
    "$ status --current",
    "> Currently developing new projects | Open for work",
    "$ echo 'Fun fact'",
    "> I dream of coding satellites in space! 🚀"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand(prev => (prev + 1) % terminalCommands.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const TabButton = ({ id, label, icon: Icon, isActive, onClick }) => (
    <motion.button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
        isActive 
          ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
          : 'text-gray-400 hover:text-green-400 hover:bg-green-500/10'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-4 h-4" />
      <span className="font-mono text-sm">{label}</span>
    </motion.button>
  )

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-mono relative overflow-hidden">
      {/* Premium cosmic background */}
      <div className="absolute inset-0">
        {/* Floating glassmorphic orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse backdrop-blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000 backdrop-blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500 backdrop-blur-3xl"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICA8L2RlZnM+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxwYXRoIGQ9Im0wIDBoNDB2NDAiaC00MHoiLz4KICAgIDxwYXRoIGQ9Im0wIDBoNDB2NDAiaC00MHoiLz4KICA8L2c+Cjwvc3ZnPg==')] opacity-10"></div>
        
        {/* Floating particles */}
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 1, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        
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
              <UserIcon className="w-5 h-5 text-green-400" />
              <span className="text-green-400">Developer Profile</span>
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-400">About</span>
            <span className="text-green-400"> Developer</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Backend specialist with a cosmic perspective on code. 
            Building systems that scale beyond Earth's atmosphere.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Developer Info */}
          <div className="space-y-8">
            
            {/* Profile Card - Premium Glassmorphism */}
            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Glassmorphic glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-blue-500/10 to-purple-500/20 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative z-10 flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <FaCode className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-1">{aboutData.profile.name}</h3>
                  <p className="text-gray-300 text-lg">{aboutData.profile.role}</p>
                  <div className="flex items-center mt-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                    <span className="text-green-300 text-sm">{aboutData.profile.status}</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-200">{aboutData.profile.location}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                  <FaGraduationCap className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-200 text-sm">{aboutData.profile.education}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 sm:col-span-2">
                  <FaRocket className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-200">{aboutData.profile.passion}</span>
                </div>
              </div>
            </motion.div>

            {/* Current Work - Premium Glassmorphism */}
            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-500/10 to-cyan-400/20 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mr-3">
                    <BriefcaseIcon className="w-5 h-5 text-white" />
                  </div>
                  Currently Working On
                </h3>
              </div>
              <div className="relative z-10 space-y-4">
                {aboutData.currentWork.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-200 leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Interests - Premium Glassmorphism */}
            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-500/10 to-orange-400/20 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mr-3">
                    <HeartIcon className="w-5 h-5 text-white" />
                  </div>
                  Interests & Passions
                </h3>
              </div>
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {aboutData.interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{interest.icon}</div>
                      <div className="flex-1">
                        <div className="font-bold text-purple-300 text-lg mb-2 group-hover:text-purple-200 transition-colors">{interest.title}</div>
                        <div className="text-sm text-gray-300 leading-relaxed">{interest.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Terminal Interface */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            
            {/* Interactive Terminal */}
            <div className="bg-black rounded-lg border border-green-500/30 shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between p-4 border-b border-green-500/30">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-sm ml-4">terminal</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 min-h-[300px] font-mono text-sm">
                <div className="text-green-400 mb-4">
                  anirban@developer:~$ ./about --interactive
                </div>
                
                <div className="space-y-4">
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
                  
                  <div className="text-gray-400 mt-6">
                    <div className="mb-2">Developer Stats:</div>
                    <div className="pl-4 space-y-1 text-xs">
                      <div>📍 Location: India</div>
                      <div>🎓 Education: B.Tech CSE</div>
                      <div>💼 Focus: Backend Development</div>
                      <div>🚀 Dream: Code in Space</div>
                      <div>⚡ Status: Available for hire</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center mt-6 text-green-400">
                  <span>anirban@developer:~$ </span>
                  <span className="animate-pulse bg-green-400 text-black ml-1">_</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years Learning", value: "3+", icon: "📚" },
                { label: "Projects Built", value: "25+", icon: "🚀" },
                { label: "Space Dreams", value: "∞", icon: "🌌" },
                { label: "Coffee Consumed", value: "999+", icon: "☕" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-black/60 rounded-lg border border-green-500/30 p-4 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: "rgb(34 197 94 / 0.7)" }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-green-400">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/50 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-lg font-bold text-green-400 mb-2">Ready to Launch Together?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Let's build something amazing that reaches for the stars!
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-2 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket className="w-4 h-4" />
                <span>Connect</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutCode