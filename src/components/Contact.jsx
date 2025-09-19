import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form will be handled by Formspree
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-900 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Contact Me
        </h2>
        
        <div className="mb-8 space-y-2">
          <p className="text-gray-300">
            Email: 
            <a 
              href="mailto:anirbansantra748@gmail.com" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors ml-2"
            >
              anirbansantra748@gmail.com
            </a>
          </p>
          <p className="text-gray-300">
            LinkedIn: 
            <a 
              href="https://linkedin.com/in/anirban" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors ml-2"
            >
              linkedin.com/in/anirban
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto">
          <form 
            action="https://formspree.io/f/mnnpbzar" 
            method="POST"
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-lg shadow-lg border border-cyan-400/50"
          >
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 text-white border-none rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 text-white border-none rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 text-white border-none rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-cyan-400 hover:bg-cyan-300 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact