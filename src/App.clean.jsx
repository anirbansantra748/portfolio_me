import React from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* PROFESSIONAL HEADER */}
      <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-transparent bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text">
              Anirban Santra
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-300 hover:text-white transition-all duration-300 hover:text-cyan-400 font-medium">Home</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-all duration-300 hover:text-blue-400 font-medium">About</a>
              <a href="#skills" className="text-slate-300 hover:text-white transition-all duration-300 hover:text-indigo-400 font-medium">Skills</a>
              <a href="#projects" className="text-slate-300 hover:text-white transition-all duration-300 hover:text-purple-400 font-medium">Projects</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-all duration-300 hover:text-pink-400 font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* PROFESSIONAL HERO SECTION */}
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-cyan-600/5 to-blue-600/5 rounded-full blur-2xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                  <span className="text-transparent bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text">Elite</span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-slate-300 via-gray-300 to-slate-400 bg-clip-text">Full Stack</span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text">Developer</span>
                </h1>
                <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
                  Backend specialist with <span className="text-cyan-400 font-semibold">3+ years</span> of experience building scalable systems.
                  Passionate about <span className="text-indigo-400 font-semibold">space technology</span> and clean code architecture.
                </p>
                <div className="flex gap-6">
                  <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25">
                    View Projects
                  </a>
                  <a href="#contact" className="px-8 py-4 border border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-slate-500 transition-all duration-300 rounded-xl font-semibold">
                    Contact Me
                  </a>
                </div>
              </div>
              <div className="bg-gray-900/80 border border-gray-700 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-gray-400 text-sm ml-2">developer.js</span>
                  </div>
                  <div className="text-xs text-gray-500">⚡ Active</div>
                </div>

                <div className="p-6 bg-gray-900 font-mono text-sm">
                  <div className="text-green-400 mb-4">$ node developer.js --execute</div>
                  <div className="text-gray-300 space-y-1">
                    <div><span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> = {"{"}</div>
                    <div className="ml-4"><span className="text-cyan-400">name</span>: <span className="text-yellow-300">"Anirban Santra"</span>,</div>
                    <div className="ml-4"><span className="text-cyan-400">title</span>: <span className="text-yellow-300">"Senior Backend Architect"</span>,</div>
                    <div className="ml-4"><span className="text-cyan-400">location</span>: <span className="text-yellow-300">"🌍 India → 🚀 Mars"</span>,</div>
                    <div className="ml-4"><span className="text-cyan-400">experience</span>: <span className="text-yellow-300">"3+ years of excellence"</span>,</div>
                    <div className="ml-4"><span className="text-cyan-400">specialization</span>: <span className="text-yellow-300">"Space-grade backends"</span>,</div>
                    <div className="ml-4"><span className="text-cyan-400">status</span>: <span className="text-green-300">"🟢 Available for hire"</span></div>
                    <div>{"}"}</div>
                    <div className="mt-3 text-green-400">// Output: Ready to build the future! 🚀</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-cyan-300 text-sm font-semibold tracking-wide">DEVELOPER PROFILE ACTIVE</span>
              </div>
              
              <h2 className="text-6xl lg:text-8xl font-black leading-tight mb-4">
                <span className="text-white drop-shadow-lg">Code. Scale.</span>
              </h2>
              
              <h2 className="text-6xl lg:text-8xl font-black leading-tight">
                <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text drop-shadow-lg">
                  Innovate.
                </span>
              </h2>
              
              <div className="mt-8 flex justify-center space-x-3">
                <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
                <div className="w-8 h-1 bg-blue-400 rounded-full"></div>
                <div className="w-12 h-1 bg-purple-400 rounded-full"></div>
              </div>
              
              <div className="relative max-w-4xl mx-auto mt-12">
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <p className="text-slate-300 text-xl leading-relaxed">
                    🚀 Building tomorrow's systems today • Backend architect obsessed with
                    <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold mx-2">
                      space-grade reliability
                    </span>
                    and cutting-edge innovation ⚡
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-5xl lg:text-7xl font-black mb-8">
              <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text">
                Let's Connect
              </span>
            </h2>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
              Ready to build something amazing together? Let's discuss your next project.
            </p>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-8 max-w-2xl mx-auto">
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-slate-900/50 border border-slate-600/50 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none rounded-xl transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-slate-900/50 border border-slate-600/50 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none rounded-xl transition-all duration-300"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-4 bg-slate-900/50 border border-slate-600/50 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none rounded-xl resize-none transition-all duration-300"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 rounded-xl hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900/95 border-t border-slate-700/50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text mb-2">
                Anirban Santra
              </h3>
              <p className="text-slate-400">Elite Full Stack Developer • Space Technology Enthusiast</p>
            </div>

            <div className="border-t border-slate-700/50 pt-6">
              <p className="text-slate-500 text-sm">
                © 2024 Anirban Santra. Crafted with ❤️ using React & Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App