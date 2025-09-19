import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Star, GitFork, Calendar, Code } from 'lucide-react'

const GitHub = () => {
  const [repos, setRepos] = useState([])
  const [stats, setStats] = useState({
    totalRepos: 0,
    totalStars: 0,
    totalForks: 0,
    languages: {}
  })
  const [loading, setLoading] = useState(true)

  // Featured repositories data based on your GitHub
  const featuredRepos = [
    {
      name: 'prompt-to-video',
      description: 'An educational video generation platform that creates 3Blue1Brown style animations from text prompts',
      language: 'JavaScript',
      stars: 12,
      forks: 3,
      updated: '2025-09-05',
      topics: ['video', 'ai', 'education', 'animations']
    },
    {
      name: 'SkillIssu',
      description: 'Making a coding platform where user can submit code like leetcode',
      language: 'EJS',
      stars: 8,
      forks: 2,
      updated: '2025-08-14',
      topics: ['coding-platform', 'leetcode', 'backend']
    },
    {
      name: 'Re_Pharma',
      description: 'AI-driven mental wellness at your fingertips. Anonymously track your mood, chat with AI, and access personalized',
      language: 'JavaScript',
      stars: 15,
      forks: 4,
      updated: '2025-07-20',
      topics: ['ai', 'healthcare', 'mental-health', 'chat']
    },
    {
      name: 'InterViewXX',
      description: 'Advanced interview platform with video calls, coding challenges, and assessment tools',
      language: 'EJS',
      stars: 6,
      forks: 1,
      updated: '2025-08-14',
      topics: ['interview', 'platform', 'video-calls']
    },
    {
      name: 'Food-Delivery-System',
      description: 'A complete food delivery system built with Java and modern architecture patterns',
      language: 'Java',
      stars: 10,
      forks: 5,
      updated: '2025-08-26',
      topics: ['java', 'food-delivery', 'system-design']
    },
    {
      name: 'TicketBookingSystem',
      description: 'A simple console-based Ticket Booking System written in Java demonstrating OOP principles',
      language: 'Java',
      stars: 4,
      forks: 2,
      updated: '2025-08-17',
      topics: ['java', 'oop', 'booking-system']
    }
  ]

  useEffect(() => {
    // Simulate API call with mock data
    const loadGitHubData = async () => {
      try {
        // Mock stats calculation
        const mockStats = {
          totalRepos: featuredRepos.length + 15, // Assuming more repos
          totalStars: featuredRepos.reduce((acc, repo) => acc + repo.stars, 0) + 20,
          totalForks: featuredRepos.reduce((acc, repo) => acc + repo.forks, 0) + 10,
          languages: {
            JavaScript: 35,
            Java: 25,
            Python: 15,
            EJS: 12,
            TypeScript: 8,
            HTML: 5
          }
        }
        
        setStats(mockStats)
        setRepos(featuredRepos)
        setLoading(false)
      } catch (error) {
        console.error('Error loading GitHub data:', error)
        setLoading(false)
      }
    }

    loadGitHubData()
  }, [])

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f7df1e',
      Java: '#ed8b00',
      Python: '#3572a5',
      TypeScript: '#3178c6',
      EJS: '#90a959',
      HTML: '#e34c26',
      CSS: '#1572b6'
    }
    return colors[language] || '#8b949e'
  }

  if (loading) {
    return (
      <section id="github" className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="spinner"></div>
            <p className="text-gray-400 mt-4">Loading GitHub data...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="github" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-400">GitHub</span>{' '}
            <span className="gradient-text neon-green">Repository</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my open source contributions and personal projects
          </p>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: 'Repositories', value: stats.totalRepos, icon: '📚' },
            { label: 'Total Stars', value: stats.totalStars, icon: '⭐' },
            { label: 'Total Forks', value: stats.totalForks, icon: '🔀' },
            { label: 'Languages', value: Object.keys(stats.languages).length, icon: '💻' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass rounded-xl p-6 text-center hover-glow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-green-400 mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Language Stats */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Top Languages</span>
          </h3>
          <div className="max-w-4xl mx-auto">
            {Object.entries(stats.languages).map(([language, percentage], index) => (
              <motion.div
                key={language}
                className="mb-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div
                      className="w-4 h-4 rounded-full mr-3"
                      style={{ backgroundColor: getLanguageColor(language) }}
                    ></div>
                    <span className="text-gray-300">{language}</span>
                  </div>
                  <span className="text-green-400 font-mono">{percentage}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ backgroundColor: getLanguageColor(language) }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 * index }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Repository Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Featured Repositories</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.name}
                className="glass rounded-xl p-6 hover-glow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                      {repo.name}
                    </h4>
                    <div className="flex items-center text-gray-400 text-sm">
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      ></div>
                      {repo.language}
                    </div>
                  </div>
                  <motion.a
                    href={`https://github.com/anirbansantra748/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 12 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics?.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full border border-gray-700"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {repo.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      {repo.forks}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(repo.updated).toLocaleDateString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/anirbansantra748?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(0, 255, 136, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="w-5 h-5 mr-2" />
            View All Repositories
            <motion.span 
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHub