import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Target, Award, TrendingUp, Calendar, Code2, Zap } from 'lucide-react'

const LeetCode = () => {
  const [stats, setStats] = useState({
    totalSolved: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    ranking: 0,
    contestRating: 0,
    badges: []
  })
  const [loading, setLoading] = useState(true)

  // LeetCode data based on your achievements
  const leetcodeData = {
    totalSolved: 400,
    easy: 180,
    medium: 170,
    hard: 50,
    ranking: 150000,
    contestRating: 1650,
    acceptanceRate: 85.2,
    languages: ['JavaScript', 'Java', 'Python', 'C++'],
    recentSubmissions: [
      { problem: 'Two Sum', difficulty: 'Easy', status: 'Accepted', date: '2025-09-15' },
      { problem: 'Binary Tree Level Order', difficulty: 'Medium', status: 'Accepted', date: '2025-09-14' },
      { problem: 'Longest Palindromic Substring', difficulty: 'Medium', status: 'Accepted', date: '2025-09-13' },
      { problem: 'Merge k Sorted Lists', difficulty: 'Hard', status: 'Accepted', date: '2025-09-12' },
    ],
    badges: [
      { name: '400+ Problems Solved', icon: '🏆', color: 'text-yellow-400' },
      { name: 'Contest Participant', icon: '🎯', color: 'text-blue-400' },
      { name: 'Algorithm Master', icon: '🧠', color: 'text-purple-400' },
      { name: 'Code Warrior', icon: '⚔️', color: 'text-red-400' }
    ]
  }

  useEffect(() => {
    // Simulate API call with mock data
    const loadLeetCodeData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500))
        setStats(leetcodeData)
        setLoading(false)
      } catch (error) {
        console.error('Error loading LeetCode data:', error)
        setLoading(false)
      }
    }

    loadLeetCodeData()
  }, [])

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-400'
      case 'medium': return 'text-yellow-400'
      case 'hard': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  const getDifficultyBg = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-400'
      case 'medium': return 'bg-yellow-400'
      case 'hard': return 'bg-red-400'
      default: return 'bg-gray-400'
    }
  }

  if (loading) {
    return (
      <section id="leetcode" className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="spinner"></div>
            <p className="text-gray-400 mt-4">Loading LeetCode statistics...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="leetcode" className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
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
            <span className="text-gray-400">LeetCode</span>{' '}
            <span className="gradient-text neon-blue">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Competitive programming and algorithmic problem solving achievements
          </p>
        </motion.div>

        {/* Main Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-8 mb-12 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-orange-400 mb-2">{stats.totalSolved}</div>
              <div className="text-gray-400">Problems Solved</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">{stats.contestRating}</div>
              <div className="text-gray-400">Contest Rating</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">{stats.acceptanceRate}%</div>
              <div className="text-gray-400">Acceptance Rate</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">#{Math.floor(stats.ranking / 1000)}k</div>
              <div className="text-gray-400">Global Ranking</div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Problem Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="gradient-text">Problem Distribution</span>
            </h3>
            <div className="space-y-6">
              {[
                { level: 'Easy', count: stats.easy, total: 800, color: 'green-400' },
                { level: 'Medium', count: stats.medium, total: 1600, color: 'yellow-400' },
                { level: 'Hard', count: stats.hard, total: 600, color: 'red-400' }
              ].map((item, index) => (
                <motion.div
                  key={item.level}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full mr-3 bg-${item.color}`}></div>
                      <span className="text-gray-300 font-medium">{item.level}</span>
                    </div>
                    <span className={`text-${item.color} font-mono font-bold`}>
                      {item.count}/{item.total}
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3">
                    <motion.div
                      className={`h-3 rounded-full bg-${item.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.count / item.total) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    ></motion.div>
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-gray-500 text-sm">
                      {((item.count / item.total) * 100).toFixed(1)}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Badges & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="gradient-text">Achievements</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.badges.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  className="bg-gray-800/50 rounded-lg p-4 text-center hover-glow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <div className={`${badge.color} font-semibold text-sm`}>
                    {badge.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="glass rounded-xl p-6 mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="gradient-text">Programming Languages Used</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {stats.languages.map((language, index) => (
              <motion.div
                key={language}
                className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full border border-gray-600 hover:border-green-400 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="text-gray-300 font-medium">{language}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Submissions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="glass rounded-xl p-6 mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="gradient-text">Recent Submissions</span>
          </h3>
          <div className="space-y-4">
            {stats.recentSubmissions.map((submission, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${getDifficultyBg(submission.difficulty)}`}></div>
                  <div>
                    <div className="text-white font-medium">{submission.problem}</div>
                    <div className={`text-sm ${getDifficultyColor(submission.difficulty)}`}>
                      {submission.difficulty}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-medium">{submission.status}</div>
                  <div className="text-gray-500 text-sm">{submission.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="https://leetcode.com/u/Anirbansantra/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-black font-bold rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(255, 165, 0, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Target className="w-5 h-5 mr-2" />
            View LeetCode Profile
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

export default LeetCode