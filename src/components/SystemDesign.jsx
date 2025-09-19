import React from 'react'
import { motion } from 'framer-motion'
import { Database, Server, Network, Cpu, Cloud, GitBranch } from 'lucide-react'

const SystemDesign = () => {
  const hldProjects = [
    {
      title: 'Gmail Clone System',
      description: 'Designed scalable email system architecture with microservices',
      features: [
        'Message queue implementation with Kafka',
        'Load balancing and auto-scaling',
        'Database partitioning and caching strategy',
        'Real-time notifications system'
      ],
      technologies: ['Microservices', 'Kafka', 'Redis', 'PostgreSQL'],
      type: 'HLD',
      icon: '📧',
      githubLink: '#'
    },
    {
      title: 'Shazam-like Audio Recognition',
      description: 'High-level design for audio fingerprinting and matching system',
      features: [
        'Audio processing pipeline architecture',
        'Distributed fingerprint storage',
        'Real-time matching algorithms',
        'CDN integration for audio files'
      ],
      technologies: ['Audio Processing', 'Distributed Systems', 'CDN', 'ML'],
      type: 'HLD',
      icon: '🎵',
      githubLink: '#'
    },
    {
      title: 'Calling App Backend',
      description: 'WebRTC-based calling application system design',
      features: [
        'Signaling server architecture',
        'Media relay servers (TURN/STUN)',
        'User presence management',
        'Call routing and quality optimization'
      ],
      technologies: ['WebRTC', 'Socket.IO', 'Media Servers', 'Redis'],
      type: 'HLD',
      icon: '📞',
      githubLink: 'https://github.com/anirbansantra748'
    },
    {
      title: 'Zomato Delivery System',
      description: 'Food delivery platform with real-time tracking',
      features: [
        'Order management workflow',
        'Delivery partner matching algorithm',
        'Real-time location tracking',
        'Payment gateway integration'
      ],
      technologies: ['Geospatial', 'Real-time Tracking', 'Payment Gateway', 'Analytics'],
      type: 'HLD',
      icon: '🍕',
      githubLink: 'https://github.com/anirbansantra748'
    }
  ]

  const lldProjects = [
    {
      title: 'Cache Implementation',
      description: 'Low-level design for distributed caching system',
      features: [
        'LRU/LFU eviction policies',
        'Thread-safe operations',
        'Consistent hashing for distribution',
        'TTL and expiration handling'
      ],
      technologies: ['Java', 'Concurrent Programming', 'Data Structures'],
      type: 'LLD',
      icon: '💾',
      githubLink: '#'
    },
    {
      title: 'Splitwise Clone',
      description: 'Expense sharing application architecture',
      features: [
        'Complex splitting algorithms',
        'Transaction management',
        'Settlement optimization',
        'Multi-currency support'
      ],
      technologies: ['Java', 'Design Patterns', 'Algorithms'],
      type: 'LLD',
      icon: '💰',
      githubLink: '#'
    },
    {
      title: 'Matchmaking System',
      description: 'Game matchmaking with skill-based pairing',
      features: [
        'ELO rating system implementation',
        'Queue management algorithms',
        'Latency-based server selection',
        'Anti-cheat integration points'
      ],
      technologies: ['Java', 'Algorithms', 'Game Theory'],
      type: 'LLD',
      icon: '🎮',
      githubLink: '#'
    }
  ]

  const dockerizedProjects = [
    {
      title: 'Ticket Booking System',
      description: 'Dockerized microservices for ticket reservation',
      features: [
        'Seat selection and booking logic',
        'Payment processing workflow',
        'Inventory management',
        'User session handling'
      ],
      technologies: ['Java', 'Docker', 'Microservices'],
      icon: '🎫',
      dockerImage: 'Available'
    },
    {
      title: 'Food Delivery System',
      description: 'Containerized food ordering and delivery platform',
      features: [
        'Restaurant management system',
        'Order processing pipeline',
        'Delivery optimization',
        'Real-time order tracking'
      ],
      technologies: ['Java', 'Docker', 'Spring Boot'],
      icon: '🚚',
      dockerImage: 'Available'
    },
    {
      title: 'Ride Booking System',
      description: 'Uber-like ride sharing platform architecture',
      features: [
        'Driver-rider matching algorithm',
        'Dynamic pricing calculation',
        'Route optimization',
        'Payment and billing system'
      ],
      technologies: ['Java', 'Docker', 'Geospatial'],
      icon: '🚗',
      dockerImage: 'Available'
    }
  ]

  return (
    <section id="system-design" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
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
            <span className="text-gray-400">System</span>{' '}
            <span className="gradient-text neon-purple">Design</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            High-Level and Low-Level Design expertise with practical implementations
          </p>
        </motion.div>

        {/* HLD Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-12">
            <Server className="w-8 h-8 text-cyan-400 mr-3" />
            <h3 className="text-3xl font-bold">
              <span className="gradient-text">High-Level Design (HLD)</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {hldProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="glass rounded-xl p-6 hover-glow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{project.icon}</span>
                    <div>
                      <h4 className="text-xl font-bold text-cyan-400 mb-2">
                        {project.title}
                      </h4>
                      <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    whileHover={{ scale: 1.2 }}
                  >
                    <GitBranch className="w-5 h-5" />
                  </motion.a>
                </div>

                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <ul className="space-y-1 text-xs text-gray-400 mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* LLD Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-12">
            <Cpu className="w-8 h-8 text-purple-400 mr-3" />
            <h3 className="text-3xl font-bold">
              <span className="gradient-text">Low-Level Design (LLD)</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lldProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="glass rounded-xl p-6 hover-glow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{project.icon}</span>
                    <div>
                      <h4 className="text-xl font-bold text-purple-400 mb-2">
                        {project.title}
                      </h4>
                      <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <ul className="space-y-1 text-xs text-gray-400 mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dockerized Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-12">
            <Cloud className="w-8 h-8 text-blue-400 mr-3" />
            <h3 className="text-3xl font-bold">
              <span className="gradient-text">Dockerized Implementations</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dockerizedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="glass rounded-xl p-6 hover-glow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{project.icon}</span>
                  <div>
                    <h4 className="text-xl font-bold text-blue-400 mb-2">
                      {project.title}
                    </h4>
                    <span className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs rounded-full">
                      {project.dockerImage}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <ul className="space-y-1 text-xs text-gray-400 mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Principles & Concepts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">
            <span className="gradient-text">Applied Concepts & Principles</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'CAP Theorem',
              'Consistency Tradeoffs',
              'Microservices Architecture',
              'Database Sharding',
              'Caching Strategies',
              'Load Balancing',
              'Message Queues',
              'Design Patterns',
              'Scalability',
              'Fault Tolerance'
            ].map((concept, index) => (
              <motion.span
                key={concept}
                className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full border border-gray-600 hover:border-cyan-400 transition-all"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gray-300 font-medium">{concept}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SystemDesign