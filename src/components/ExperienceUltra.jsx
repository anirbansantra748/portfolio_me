import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  TrophyIcon,
  StarIcon,
  CheckBadgeIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  UserGroupIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'
import { 
  FaReact, 
  FaNodeJs, 
  FaJava,
  FaPython,
  FaDocker,
  FaAws,
  FaGithub
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiMongodb, 
  SiExpress, 
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiKubernetes
} from 'react-icons/si'

const experiences = [
  {
    id: 1,
    company: "SMAK Tech",
    role: "Software Developer Intern",
    type: "Internship",
    duration: "June 2024 - August 2024",
    location: "Remote",
    status: "Completed",
    description: "Developed scalable web applications and APIs using modern technologies, contributing to multiple production systems.",
    achievements: [
      "Built RESTful APIs serving 10,000+ daily requests",
      "Implemented caching strategies reducing response time by 40%",
      "Collaborated with senior developers on microservices architecture",
      "Optimized database queries improving performance by 35%"
    ],
    technologies: [
      { name: "Node.js", icon: FaNodeJs, color: "#68a063" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "Redis", icon: SiRedis, color: "#dc382d" }
    ],
    highlights: [
      { label: "Performance Boost", value: "40%", color: "text-green-400" },
      { label: "API Requests", value: "10K+", color: "text-blue-400" },
      { label: "Query Optimization", value: "35%", color: "text-purple-400" }
    ],
    companyUrl: "https://smaktech.com",
    certificateUrl: "/certificates/smak-tech-certificate.pdf"
  },
  {
    id: 2,
    company: "Suvidha Foundation",
    role: "Web Development Intern", 
    type: "Internship",
    duration: "March 2024 - May 2024",
    location: "Remote",
    status: "Completed",
    description: "Created responsive web applications for non-profit initiatives, focusing on accessibility and user experience.",
    achievements: [
      "Developed donation platform handling secure payments",
      "Created responsive dashboard for volunteer management",
      "Implemented SEO optimization increasing organic traffic by 60%",
      "Built accessible interfaces following WCAG guidelines"
    ],
    technologies: [
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" }
    ],
    highlights: [
      { label: "Traffic Increase", value: "60%", color: "text-green-400" },
      { label: "Accessibility Score", value: "95%", color: "text-blue-400" },
      { label: "User Satisfaction", value: "4.8/5", color: "text-yellow-400" }
    ],
    companyUrl: "https://suvidhafoundationedutech.org",
    certificateUrl: "/certificates/suvidha-certificate.pdf"
  }
]

const ExperienceCard = ({ experience, index, isActive, onClick }) => {
  return (
    <motion.div
      layout
      className={`relative group cursor-pointer transition-all duration-500 ${
        isActive ? 'lg:col-span-2' : ''
      }`}
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -8 }}
    >
      <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 shadow-2xl">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        
        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                experience.company === 'SMAK Tech' 
                  ? 'from-blue-500 to-purple-600' 
                  : 'from-green-500 to-emerald-600'
              } flex items-center justify-center shadow-lg`}>
                <BriefcaseIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {experience.role}
                </h3>
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="font-semibold">{experience.company}</span>
                  <div className={`w-2 h-2 rounded-full ${
                    experience.status === 'Completed' ? 'bg-green-400' : 'bg-yellow-400'
                  } animate-pulse`} />
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <motion.a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
            <div className="flex items-center space-x-1">
              <CalendarIcon className="w-4 h-4" />
              <span>{experience.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPinIcon className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
            <div className="flex items-center space-x-1 px-2 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
              <span className="text-cyan-300 text-xs font-medium">{experience.type}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            {experience.description}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {experience.highlights.map((highlight, i) => (
              <div key={i} className="text-center">
                <div className={`text-2xl font-bold ${highlight.color} mb-1`}>
                  {highlight.value}
                </div>
                <div className="text-xs text-gray-400">{highlight.label}</div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {experience.technologies.map((tech, i) => (
              <div
                key={i}
                className="flex items-center space-x-1 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs"
                style={{ color: tech.color }}
              >
                <tech.icon className="w-3 h-3" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Achievements (show when active) */}
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center space-x-2">
                <TrophyIcon className="w-4 h-4 text-yellow-400" />
                <span>Key Achievements</span>
              </h4>
              <div className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start space-x-2 text-sm text-gray-300">
                    <CheckBadgeIcon className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Action Button */}
          <motion.a
            href={experience.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto w-full py-3 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-sm hover:from-cyan-600 hover:to-purple-700 transition-all text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
          >
            View Certificate
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

const ExperienceUltra = () => {
  const [activeExperience, setActiveExperience] = useState(null)

  return (
    <section id="internships" className="py-20 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(167,85,221,0.15),transparent_50%)]" />

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
            <BriefcaseIcon className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-medium">Professional Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Experience &{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Growth
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey through internships and projects, where I've applied cutting-edge technologies
            to solve real-world problems and deliver impactful solutions.
          </p>
        </motion.div>

        {/* Timeline Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { icon: BriefcaseIcon, label: "Internships", value: "2+", color: "text-blue-400" },
            { icon: CodeBracketIcon, label: "Projects Delivered", value: "8+", color: "text-green-400" },
            { icon: UserGroupIcon, label: "Team Collaborations", value: "5+", color: "text-purple-400" },
            { icon: LightBulbIcon, label: "Technologies Learned", value: "12+", color: "text-yellow-400" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          layout
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isActive={activeExperience === experience.id}
              onClick={() => setActiveExperience(activeExperience === experience.id ? null : experience.id)}
            />
          ))}
        </motion.div>

        {/* Skills Gained Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Skills Developed</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Through hands-on experience in professional environments, I've mastered these technologies and methodologies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Node.js", icon: FaNodeJs, color: "#68a063", proficiency: 95 },
              { name: "React", icon: FaReact, color: "#61dafb", proficiency: 90 },
              { name: "TypeScript", icon: SiTypescript, color: "#3178c6", proficiency: 85 },
              { name: "MongoDB", icon: SiMongodb, color: "#47a248", proficiency: 88 },
              { name: "Express", icon: SiExpress, color: "#000000", proficiency: 92 },
              { name: "Next.js", icon: SiNextdotjs, color: "#000000", proficiency: 80 },
              { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8", proficiency: 90 },
              { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", proficiency: 75 },
              { name: "Redis", icon: SiRedis, color: "#dc382d", proficiency: 70 },
              { name: "Docker", icon: FaDocker, color: "#2496ed", proficiency: 75 },
              { name: "AWS", icon: FaAws, color: "#ff9900", proficiency: 65 },
              { name: "Kubernetes", icon: SiKubernetes, color: "#326ce5", proficiency: 60 }
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                className="group relative p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <skill.icon 
                  className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" 
                  style={{ color: skill.color }}
                />
                <div className="text-white text-sm font-medium text-center mb-2">{skill.name}</div>
                
                {/* Proficiency Bar */}
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                  />
                </div>
                
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {skill.proficiency}% proficiency
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for New Opportunities</h3>
            <p className="text-gray-300 mb-6">
              I'm actively seeking full-time opportunities where I can contribute my skills and continue growing as a developer.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let's Work Together</span>
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default ExperienceUltra