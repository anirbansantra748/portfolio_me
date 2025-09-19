import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  PhotoIcon,
  AcademicCapIcon,
  TrophyIcon,
  DocumentTextIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { 
  FaCamera,
  FaAward,
  FaCertificate,
  FaGraduationCap,
  FaMedal,
  FaCode,
  FaHeart
} from 'react-icons/fa'

// Sample gallery items - in real implementation, these would come from a CMS or database
const galleryItems = [
  {
    id: 1,
    type: 'certificate',
    title: 'SMAK Tech Internship Certificate',
    category: 'Professional',
    image: '/gallery/smak-tech-certificate.jpg',
    description: 'Certificate of completion for Software Developer Internship at SMAK Tech',
    date: '2024-08-15',
    tags: ['internship', 'professional', 'achievement']
  },
  {
    id: 2,
    type: 'certificate',
    title: 'Suvidha Foundation Certificate',
    category: 'Professional',
    image: '/gallery/suvidha-certificate.jpg',
    description: 'Certificate for Web Development Internship at Suvidha Foundation',
    date: '2024-05-20',
    tags: ['internship', 'web-development', 'non-profit']
  },
  {
    id: 3,
    type: 'award',
    title: 'EduSands Hacks Winner',
    category: 'Achievement',
    image: '/gallery/edusands-winner.jpg',
    description: 'First place winner at EduSands Hacks Hackathon with CodeCollab Pro project',
    date: '2024-03-15',
    tags: ['hackathon', 'winner', 'coding', 'collaboration']
  },
  {
    id: 4,
    type: 'achievement',
    title: 'Rebase Hackathon - Top 15',
    category: 'Achievement',
    image: '/gallery/rebase-hackathon.jpg',
    description: 'Secured position in top 15 finalists at Rebase Hackathon with EcoTrack Dashboard',
    date: '2024-02-28',
    tags: ['hackathon', 'finalist', 'dashboard', 'environment']
  },
  {
    id: 5,
    type: 'project',
    title: 'First Deployment Success',
    category: 'Milestone',
    image: '/gallery/first-deployment.jpg',
    description: 'Screenshot of my first successful production deployment on Vercel',
    date: '2023-11-10',
    tags: ['milestone', 'deployment', 'vercel', 'success']
  },
  {
    id: 6,
    type: 'learning',
    title: 'React.js Mastery',
    category: 'Learning',
    image: '/gallery/react-learning.jpg',
    description: 'Completing my 100th React component - a journey of continuous learning',
    date: '2024-01-20',
    tags: ['react', 'learning', 'milestone', 'frontend']
  },
  {
    id: 7,
    type: 'community',
    title: 'Open Source Contribution',
    category: 'Community',
    image: '/gallery/github-contribution.jpg',
    description: 'First merged pull request in a major open source project',
    date: '2024-04-05',
    tags: ['open-source', 'github', 'contribution', 'community']
  },
  {
    id: 8,
    type: 'personal',
    title: 'Coding Setup',
    category: 'Personal',
    image: '/gallery/coding-setup.jpg',
    description: 'My daily coding environment where all the magic happens',
    date: '2024-06-01',
    tags: ['setup', 'workspace', 'coding', 'environment']
  },
  {
    id: 9,
    type: 'achievement',
    title: 'LeetCode 400+ Problems',
    category: 'Achievement',
    image: '/gallery/leetcode-400.jpg',
    description: 'Milestone celebration after solving 400+ problems on LeetCode',
    date: '2024-07-10',
    tags: ['leetcode', 'problem-solving', 'milestone', 'algorithms']
  }
]

const categories = ['All', 'Professional', 'Achievement', 'Milestone', 'Learning', 'Community', 'Personal']

const GalleryItem = ({ item, index, onClick }) => {
  const getIcon = (type) => {
    switch(type) {
      case 'certificate': return FaCertificate
      case 'award': return FaAward
      case 'achievement': return FaMedal
      case 'project': return FaCode
      case 'learning': return FaGraduationCap
      case 'community': return FaHeart
      default: return PhotoIcon
    }
  }

  const Icon = getIcon(item.type)

  return (
    <motion.div
      className="group relative cursor-pointer rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => onClick(item)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
        {/* Placeholder for actual image */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20">
          <Icon className="w-16 h-16 text-white/40" />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
            <span className="text-white text-xs font-medium capitalize">{item.type}</span>
          </div>
        </div>
        
        {/* Date */}
        <div className="absolute top-4 right-4">
          <div className="px-2 py-1 rounded-md bg-black/50 backdrop-blur-md">
            <span className="text-white text-xs">{new Date(item.date).getFullYear()}</span>
          </div>
        </div>
        
        {/* Hover Content */}
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.category}</span>
            </div>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-300 line-clamp-2">{item.description}</p>
          </div>
        </div>
      </div>
      
      {/* Content (always visible on mobile) */}
      <div className="p-4 md:hidden">
        <div className="flex items-center space-x-2 mb-2">
          <Icon className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-gray-300">{item.category}</span>
        </div>
        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
        <p className="text-sm text-gray-300 line-clamp-2">{item.description}</p>
      </div>
    </motion.div>
  )
}

const Modal = ({ item, onClose, onPrevious, onNext, hasPrevious, hasNext }) => {
  if (!item) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        
        {/* Modal Content */}
        <motion.div
          className="relative max-w-4xl w-full max-h-[90vh] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                <PhotoIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{item.title}</h2>
                <div className="flex items-center space-x-2 text-gray-300 text-sm">
                  <span>{item.category}</span>
                  <span>•</span>
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <XMarkIcon className="w-5 h-5 text-white" />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {/* Image Area */}
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 flex items-center justify-center border border-white/10">
              <div className="text-center">
                <PhotoIcon className="w-20 h-20 text-white/40 mx-auto mb-4" />
                <p className="text-gray-400">Image placeholder for {item.title}</p>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
            
            {/* Tags */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-between p-6 border-t border-white/10">
            <motion.button
              onClick={onPrevious}
              disabled={!hasPrevious}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                hasPrevious
                  ? 'bg-white/10 border border-white/20 hover:bg-white/20 text-white'
                  : 'bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed'
              }`}
              whileHover={hasPrevious ? { scale: 1.05 } : {}}
              whileTap={hasPrevious ? { scale: 0.95 } : {}}
            >
              <ChevronLeftIcon className="w-4 h-4" />
              <span>Previous</span>
            </motion.button>
            
            <motion.button
              onClick={onNext}
              disabled={!hasNext}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                hasNext
                  ? 'bg-white/10 border border-white/20 hover:bg-white/20 text-white'
                  : 'bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed'
              }`}
              whileHover={hasNext ? { scale: 1.05 } : {}}
              whileTap={hasNext ? { scale: 0.95 } : {}}
            >
              <span>Next</span>
              <ChevronRightIcon className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const PersonalGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const openModal = (item) => {
    setSelectedItem(item)
    setSelectedIndex(filteredItems.findIndex(i => i.id === item.id))
  }

  const closeModal = () => {
    setSelectedItem(null)
    setSelectedIndex(0)
  }

  const goToPrevious = () => {
    if (selectedIndex > 0) {
      const newIndex = selectedIndex - 1
      setSelectedIndex(newIndex)
      setSelectedItem(filteredItems[newIndex])
    }
  }

  const goToNext = () => {
    if (selectedIndex < filteredItems.length - 1) {
      const newIndex = selectedIndex + 1
      setSelectedIndex(newIndex)
      setSelectedItem(filteredItems[newIndex])
    }
  }

  return (
    <section id="gallery" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(56,189,248,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 backdrop-blur-md mb-4">
            <PhotoIcon className="w-5 h-5 text-pink-400" />
            <span className="text-pink-300 font-medium">Personal Collection</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
              My Digital{' '}
            </span>
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Memory Lane
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A curated collection of my achievements, milestones, certificates, and memorable moments 
            from my coding journey. Each item tells a story of growth and passion.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all backdrop-blur-md ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { label: 'Total Items', value: galleryItems.length, icon: PhotoIcon, color: 'text-pink-400' },
            { label: 'Certificates', value: galleryItems.filter(item => item.type === 'certificate').length, icon: AcademicCapIcon, color: 'text-blue-400' },
            { label: 'Achievements', value: galleryItems.filter(item => item.type === 'achievement' || item.type === 'award').length, icon: TrophyIcon, color: 'text-yellow-400' },
            { label: 'Milestones', value: galleryItems.filter(item => item.category === 'Milestone').length, icon: StarIcon, color: 'text-green-400' }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
            >
              <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <GalleryItem
                key={item.id}
                item={item}
                index={index}
                onClick={openModal}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <PhotoIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No items found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Upload Section (Future Feature) */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-2xl p-8 backdrop-blur-md">
            <PlusIcon className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">More Memories Coming Soon</h3>
            <p className="text-gray-300 mb-4">
              This gallery is constantly growing as I achieve new milestones and create more amazing projects.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Modal */}
      {selectedItem && (
        <Modal
          item={selectedItem}
          onClose={closeModal}
          onPrevious={goToPrevious}
          onNext={goToNext}
          hasPrevious={selectedIndex > 0}
          hasNext={selectedIndex < filteredItems.length - 1}
        />
      )}
    </section>
  )
}

export default PersonalGallery