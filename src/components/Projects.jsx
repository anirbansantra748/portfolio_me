import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "All-in-One Recruitment Platform",
      description: "🚀 Full-scale hiring platform with comprehensive recruitment features and AI integration.",
      features: [
        "✅ Recruiter dashboards, coding/aptitude rounds, video interviews, chat, and collaborative whiteboard",
        "✅ Integrated AI job recommendations and building an ATS module for resume parsing",
        "⚙️ Built with: Node.js, Express.js, MongoDB, EJS, Tailwind CSS, Socket.IO"
      ],
      image: "/proj1.png",
      liveLink: "#",
      githubLink: "#",
      year: "2025",
      category: "Full Stack"
    },
    {
      title: "Advanced Coding Platform",
      description: "💡 LeetCode-style environment with advanced features and AI assistance.",
      features: [
        "✅ Topic filters, difficulty search, multilingual coding support, and custom test cases",
        "✅ Contest mode (timed rounds + leaderboards) and AI assistance (guided hints, debug suggestions)",
        "⚙️ Built with: MERN (MongoDB, Express.js, React, Node.js), OpenAI API"
      ],
      image: "/proj2.png",
      liveLink: "#",
      githubLink: "#",
      year: "2024",
      category: "AI Platform"
    },
    {
      title: "Hailthyfy – AI Healthcare Platform",
      description: "🌌 AI-driven healthcare platform with comprehensive wellness features.",
      features: [
        "✅ AI-driven dashboards, patient journey mapping (D3.js), and trend analysis",
        "✅ Integrated chatbot assistant for summarization, prescription reading, and medication search",
        "⚙️ Built with: Node.js, Express.js, MongoDB, Tailwind CSS, D3.js, ML Models, WebRTC"
      ],
      image: "/proj3.png",
      liveLink: "#",
      githubLink: "#",
      year: "2025",
      category: "AI Healthcare",
      deployment: "Dockerized"
    },
    {
      title: "Wanderlust",
      description: "🏡 Property listing platform with Airbnb-like features.",
      features: [
        "✅ User authentication, booking system, and reviews.",
        "✅ Property uploads, filters, and geolocation integration.",
        "⚙️ Built with: Node.js, Express.js, MongoDB, React"
      ],
      image: "/proj4.png",
      liveLink: "https://wanderlust-kpw6.onrender.com/listings",
      githubLink: "https://github.com/anirbansantra748/wanderlust"
    },
    {
      title: "Game of Life",
      description: "🎮 A simulation of Conway's Game of Life built with p5.js.",
      features: [
        "✅ Dynamic grid-based life simulation.",
        "✅ Interactive controls and pattern generation.",
        "⚙️ Built with: HTML, CSS, JavaScript, p5.js"
      ],
      image: "/proj5.png",
      liveLink: "https://anirbansantra748.github.io/gameOfLife/",
      githubLink: "https://github.com/anirbansantra748/gameOfLife"
    },
    {
      title: "KitabiKira",
      description: "📚 Book viewing platform where users can upload and read PDFs.",
      features: [
        "✅ User authentication and PDF upload system.",
        "✅ Search, categorize, and read books online.",
        "⚙️ Built with: Node.js, Express.js, MongoDB, React"
      ],
      image: "/proj6.png",
      liveLink: "#",
      githubLink: "https://github.com/anirbansantra748/KitabiKira"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="editor-container">
          {/* Editor Header */}
          <div className="editor-header">
            <div className="editor-dots">
              <div className="editor-dot dot-red"></div>
              <div className="editor-dot dot-yellow"></div>
              <div className="editor-dot dot-green"></div>
            </div>
            <div className="file-tab">projects.json</div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-[1.02] border border-gray-700/50"
              >
                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4='
                    }}
                  />
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <h3 
                    className="glitch text-xl font-bold text-yellow-400 mb-3"
                    data-text={project.title}
                  >
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm">
                    {project.description}
                  </p>

                  <ul className="space-y-2 text-sm">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400">
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Project Links */}
                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.liveLink}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200"
                    >
                      🔗 Live Site
                    </a>
                    <a
                      href={project.githubLink}
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors duration-200"
                    >
                      📂 GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects