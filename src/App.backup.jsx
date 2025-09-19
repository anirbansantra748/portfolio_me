import React from 'react'
import { ReactIcon, NodeIcon, JavaScriptIcon, MongoIcon, TypeScriptIcon, GitHubIcon } from './components/TechIcons'
// import SimpleDinoGame from './components/SimpleDinoGame'
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
          {/* Professional background effects */}
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
                {/* Terminal Header */}
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

                {/* Enhanced Code Content */}
                <div className="p-6 bg-gray-900 font-mono text-sm">
                  <div className="text-green-400 mb-4">$ node developer.js --execute</div>

                  <div className="text-gray-300 space-y-1">
                    <div><span className="text-purple-400">class</span> <span className="text-blue-400">EliteDeveloper</span> <span className="text-purple-400">extends</span> <span className="text-blue-400">FullStackEngineer</span> {"{}"}</div>
                    <div className="ml-4"><span className="text-purple-400">constructor</span>() {"{}"}</div>
                    <div className="ml-8"><span className="text-purple-400">super</span>();</div>
                    <div className="ml-8"><span className="text-purple-400">this</span>.<span className="text-cyan-400">profile</span> = {"{}"}</div>
                    <div className="ml-12"><span className="text-cyan-400">name</span>: <span className="text-yellow-300">"Anirban Santra"</span>,</div>
                    <div className="ml-12"><span className="text-cyan-400">title</span>: <span className="text-yellow-300">"Senior Backend Architect"</span>,</div>
                    <div className="ml-12"><span className="text-cyan-400">location</span>: <span className="text-yellow-300">"🌍 India → 🚀 Mars"</span>,</div>
                    <div className="ml-12"><span className="text-cyan-400">experience</span>: <span className="text-yellow-300">"3+ years of excellence"</span>,</div>
                    <div className="ml-12"><span className="text-cyan-400">specialization</span>: <span className="text-yellow-300">"Space-grade backends"</span>,</div>
                    <div className="ml-12"><span className="text-cyan-400">status</span>: <span className="text-green-300">"🟢 Available for hire"</span></div>
                    <div className="ml-8">{"};"}</div>
                    <div className="ml-4">{"};"}</div>
                    <div>{"}"}</div>
                    <div className="mt-3 text-green-400">// Output: Ready to build the future! 🚀</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL ABOUT SECTION */}
        <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
          {/* Modern geometric background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 rounded-full blur-2xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20 relative">
              {/* Clean floating particles */}
              {[...Array(6)].map((_, i) => (
                <div key={i}
                     className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-ping"
                     style={{
                       left: `${20 + i * 15}%`,
                       top: `${10 + i * 10}px`,
                       animationDelay: `${i * 0.8}s`,
                       animationDuration: '3s'
                     }}>
                </div>
              ))}
              
              {/* Clean Professional Badge */}
              <div className="relative mb-12">
                <div className="inline-flex items-center px-8 py-4 bg-slate-900/80 backdrop-blur-sm border border-cyan-400/50 rounded-full shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10"></div>
                  
                  <div className="relative flex items-center space-x-3">
                    {/* Simple pulsing dot */}
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    
                    {/* Clean text */}
                    <span className="text-cyan-300 text-sm font-semibold tracking-wider">
                      DEVELOPER PROFILE ACTIVE
                    </span>
                    
                    {/* Simple status indicator */}
                    <div className="flex space-x-1">
                      <span className="text-cyan-400">●</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Clean Beautiful Typography */}
              <div className="relative mb-12">
                <h2 className="text-6xl lg:text-8xl font-black leading-tight mb-4">
                  <span className="text-white drop-shadow-lg">
                    Code. Scale.
                  </span>
                </h2>
                
                <h2 className="text-6xl lg:text-8xl font-black leading-tight">
                  <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text drop-shadow-lg">
                    Innovate.
                  </span>
                </h2>
                
                {/* Simple elegant underlines */}
                <div className="mt-8 flex justify-center space-x-3">
                  <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
                  <div className="w-8 h-1 bg-blue-400 rounded-full"></div>
                  <div className="w-12 h-1 bg-purple-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Clean Description */}
              <div className="relative max-w-4xl mx-auto">
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

            <div className="grid lg:grid-cols-3 gap-10">
              {/* Enhanced Profile Card */}
              <div className="group relative bg-slate-800/70 backdrop-blur-sm border border-blue-500/30 p-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:bg-slate-700/80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-500">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Developer Profile</h3>
                      <p className="text-slate-400 font-medium">Core Information</p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl hover:from-blue-500/30 hover:to-indigo-500/30 transition-all duration-300 border border-blue-400/30">
                      <span className="text-2xl mr-4">🌍</span>
                      <div>
                        <span className="text-white font-semibold block">India</span>
                        <span className="text-slate-300 text-sm">Available Worldwide Remote</span>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300 border border-green-400/30">
                      <span className="text-2xl mr-4">🎓</span>
                      <div>
                        <span className="text-white font-semibold block">B.Tech CSE</span>
                        <span className="text-slate-300 text-sm">(2022-2026) • Final Year</span>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 border border-purple-400/30">
                      <span className="text-2xl mr-4">💼</span>
                      <div>
                        <span className="text-white font-semibold block">SMAK Tech</span>
                        <span className="text-slate-300 text-sm">Full Stack Developer</span>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300">
                      <span className="mr-4">🚀</span>
                      <div>
                        <span className="font-semibold block">Available for Hire</span>
                        <span className="text-blue-100 text-sm">Open to new opportunities</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="group relative bg-slate-800/70 backdrop-blur-sm border border-emerald-500/30 p-8 rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105 hover:bg-slate-700/80">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-500/25 transition-all duration-500">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">Current Focus</h3>
                      <p className="text-slate-400 font-medium">Technology Stack</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      'Scalable microservices architecture',
                      'Real-time applications with Socket.IO',
                      'AI-powered recruitment platforms',
                      'Docker containerization & deployment',
                      'Open-source contributions & learning'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start p-4 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-xl hover:from-emerald-500/30 hover:to-teal-500/30 transition-all duration-300 group-hover:translate-x-1 transform border border-emerald-400/30" style={{transitionDelay: `${i * 50}ms`}}>
                        <span className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mt-1.5 mr-4 flex-shrink-0 shadow-sm"></span>
                        <span className="text-white font-medium leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Expertise Areas */}
              <div className="group relative bg-slate-800/70 backdrop-blur-sm border border-purple-500/30 p-8 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 hover:bg-slate-700/80">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/25 transition-all duration-500">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">Expertise</h3>
                      <p className="text-slate-400 font-medium">Core Competencies</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {icon: '⚡', title: 'Backend APIs', gradient: 'from-yellow-400 to-orange-400'},
                      {icon: '🏗️', title: 'Architecture', gradient: 'from-blue-400 to-indigo-400'},
                      {icon: '🔄', title: 'Real-time', gradient: 'from-green-400 to-emerald-400'},
                      {icon: '📊', title: 'Analytics', gradient: 'from-purple-400 to-pink-400'},
                      {icon: '🚀', title: 'Performance', gradient: 'from-red-400 to-rose-400'},
                      {icon: '🛡️', title: 'Security', gradient: 'from-gray-400 to-slate-400'}
                    ].map((expertise, i) => (
                      <div key={i} className="p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 text-center group-hover:scale-110 transform border border-purple-400/30" style={{transitionDelay: `${i * 100}ms`}}>
                        <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{expertise.icon}</div>
                        <div className={`text-white text-sm font-semibold`}>{expertise.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL SKILLS SECTION */}
        <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
          {/* Modern background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-600/5 to-blue-600/5 rounded-full blur-2xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-slate-800/50 to-gray-800/50 backdrop-blur-sm border border-slate-600/30 rounded-full mb-8 shadow-lg">
                <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3 animate-pulse shadow-lg"></span>
                <span className="text-slate-300 text-sm font-semibold tracking-wider">TECHNICAL EXPERTISE</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                <span className="text-transparent bg-gradient-to-r from-white via-slate-200 to-gray-300 bg-clip-text">
                  Skills &
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">
                  Technologies
                </span>
              </h2>
              <p className="text-slate-400 text-xl max-w-4xl mx-auto leading-relaxed">
                Comprehensive expertise across the <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold">full development stack</span> • 400+ LeetCode problems solved
              </p>
            </div>

            {/* Unified Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
              {[
                { name: 'JavaScript', icon: JavaScriptIcon, color: '#f7df1e' },
                { name: 'TypeScript', icon: TypeScriptIcon, color: '#3178c6' },
                { name: 'Java', icon: ({ className }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
                  </svg>
                ), color: '#f89820' },
                { name: 'Python', icon: ({ className }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.2-.01h13.17l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07l.02-.2.04-.26.1-.3.16-.33.25-.34.34-.34.45-.32.59-.3.73-.26.9-.2.17-.04H24L23.83 0H14.75zM14.83 0H24v1.17H14.83zm0 0"/>
                  </svg>
                ), color: '#3776ab' },
                { name: 'SQL', icon: ({ className }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.15z"/>
                  </svg>
                ), color: '#336791' },
                { name: 'Node.js', icon: NodeIcon, color: '#339933' },
                { name: 'Express.js', icon: NodeIcon, color: '#404040' },
                { name: 'React.js', icon: ReactIcon, color: '#61dafb' },
                { name: 'Next.js', icon: ({ className }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.5429.0445h-.4570l-.0649-.0562c-.0649-.0562-.1846-.2134-.1846-.2134l-.0235-.3158.0094-4.4972.0187-4.5138.0516-.0587.0986-.067c.0376-.0206.1208-.0284.3273-.0284.2693 0 .4570.0284.5855.1002.061.0374.1572.1411.2115.2134.0235.0328.0235.0328.0235.6295l.0094 6.4126c.0069.3158.0094.3158.0164.3158.0094 0 .0235-.0139.0375-.0328.0235-.0374 1.3808-1.9564 3.0165-4.2375s3.0231-4.2375 3.0844-4.2375c.0563 0 .1208.0139.1572.0139.0563.0139.1944.0655.2554.1056.0563.0328.0563.0328.0563.6295v6.3738l.0094-.0067c.0094-.0067 1.3951-2.076 3.0844-4.6013l3.0701-4.588.0516-.0751c.0282-.0375.0938-.0842.1502-.1056.0563-.0206.1833-.0284.2554-.0284h.4570l.0793.0562c.0516.0375.0986.1002.1208.1618.0282.0751.0282.0751.0282 4.5832v4.5066l-.0094.0562c-.0069.0375-.0282.1002-.0516.1411-.0375.061-.108.1208-.1833.1411-.0563.0139-.5055.0139-.5829 0-.1111-.0206-.2064-.1056-.2554-.2134-.0282-.0562-.0282-.0751-.0329-3.509l-.0067-3.4496-1.2732 1.9097c-.7096 1.0553-1.3137 1.9564-1.3418 2.001-.0469.0751-.1111.1411-.1833.1875-.0563.0328-.1208.0445-.3273.0445-.2554 0-.3273-.0139-.4570-.0842-.0938-.0562-.2064-.1875-.2554-.3158-.0235-.0562-.0235-.0562-.0235-3.5162l-.0067-3.4427-2.9772 4.4972c-1.6374 2.4656-3.0165 4.5138-3.0701 4.5508-.0938.061-.2554.1002-.3636.0842-.0563-.0067-.1502-.0444-.2064-.0751-.0938-.0562-.2064-.1875-.2554-.3158-.0235-.0562-.0235-.0562-.0235-3.5162l-.0067-3.4427-2.9772 4.4972c-1.6374 2.4656-3.0165 4.5138-3.0701 4.5508-.0938.061-.2554.1002-.3636.0842z"/>
                  </svg>
                ), color: '#000000' },
                { name: 'MongoDB', icon: MongoIcon, color: '#47a248' },
                { name: 'MySQL', icon: ({ className }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.15z"/>
                  </svg>
                ), color: '#4479a1' },
                { name: 'HTML5', icon: ({ className }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                  </svg>
                ), color: '#e34f26' },
                { name: 'CSS3', icon: ({ className }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                  </svg>
                ), color: '#1572b6' },
                { name: 'Tailwind', icon: ({ className }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                  </svg>
                ), color: '#06b6d4' },
                { name: 'Docker', icon: ({ className }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.09-.248-1.827-1.526-2.653-1.594-2.705l-.325-.175-.203.298c-.26.379-.49.879-.617 1.364-.18.68-.168 1.299.035 1.855a3.05 3.05 0 01-1.396.336H.112l-.03.284c-.065 1.213.145 2.391.63 3.499.442.998 1.05 1.803 1.806 2.392 1.324.998 3.205 1.512 5.284 1.512.984 0 1.93-.09 2.813-.267 1.06-.213 2.026-.601 2.867-1.153 1.378-.905 2.379-2.213 2.976-3.887l.015-.039c.633-.018 1.95-.074 2.64-1.05.027-.039.058-.08.086-.122l.03-.045-.5-.364c.002.002-.677-.706-.677-.706z"/>
                  </svg>
                ), color: '#2496ed' },
                { name: 'Git', icon: ({ className }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
                  </svg>
                ), color: '#f05032' },
                { name: 'Socket.IO', icon: ({ className }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.894L16.5 15.5a5.5 5.5 0 1 0-9 0l-1.394 1.394A9.5 9.5 0 1 1 21.5 12a9.456 9.456 0 0 1-.606 3.394z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                ), color: '#25c2a0' },
                { name: 'WebRTC', icon: ({ className }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                ), color: '#ff6b35' },
                { name: 'D3.js', icon: ({ className }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                ), color: '#f68e56' },
                { name: 'Three.js', icon: ({ className }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.894L16.5 15.5a5.5 5.5 0 1 0-9 0l-1.394 1.394A9.5 9.5 0 1 1 21.5 12a9.456 9.456 0 0 1-.606 3.394z"/>
                  </svg>
                ), color: '#049ef4' },
                { name: 'Postman', icon: ({ className }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099z"/>
                  </svg>
                ), color: '#ff6c37' },
                { name: 'Android', icon: ({ className }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
                  </svg>
                ), color: '#3ddc84' },
                { name: 'OpenAI', icon: ({ className }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142-.0852 4.783-2.7582a.7712.7712 0 0 1 .7806 0l5.8428 3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L9.7419 5.364a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
                  </svg>
                ), color: '#10a37f' }
              ].map((skill, index) => {
                const Icon = skill.icon
                return (
                  <div key={index} className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 hover:border-slate-500/50 p-6 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:scale-110 hover:bg-slate-700/40">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 text-center">
                      <div className="mb-5 flex justify-center">
                        <div className="p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500"
                             style={{
                               backgroundColor: `${skill.color}15`,
                               boxShadow: `0 10px 25px ${skill.color}20`
                             }}>
                          <Icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-500"
                                style={{ color: skill.color }} />
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-slate-200 group-hover:text-white transition-all duration-300">
                        {skill.name}
                      </h4>
                      {/* Skill level indicator */}
                      <div className="mt-3 w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                             style={{ transitionDelay: `${index * 50}ms` }}></div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ELITE PROJECTS SECTION - REAL PROJECTS */}
        <section id="projects" className="py-20 bg-gray-900 relative">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-10 opacity-10">
              {[...Array(6)].map((_, i) => (
                <div key={i}
                     className="absolute rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse"
                     style={{
                       width: `${Math.random() * 300 + 100}px`,
                       height: `${Math.random() * 300 + 100}px`,
                       left: `${Math.random() * 100}%`,
                       top: `${Math.random() * 100}%`,
                       animationDelay: `${i * 2}s`,
                       animationDuration: `${4 + i}s`
                     }}
                />
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-black/70 backdrop-blur-sm border border-purple-500/30 rounded-full mb-6">
                <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-sm font-semibold">LIVE PRODUCTION SYSTEMS</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-white mb-6">
                <span className="text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text">
                  Featured
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text">
                  Projects
                </span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Real-world applications serving thousands of users • Built with enterprise-grade architecture
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'All-in-One Recruitment Platform',
                  shortName: 'Recruitment Hub',
                  year: '2025',
                  status: 'Live',
                  category: 'Enterprise',
                  shortDesc: 'Full-scale hiring platform with AI-powered matching and video interviews.',
                  description: 'Comprehensive recruitment solution featuring recruiter dashboards, multi-round interviews, real-time video conferencing, collaborative whiteboard, and AI-powered job matching with ATS capabilities.',
                  features: [
                    'Multi-round Interview System',
                    'Real-time Video Conferencing',
                    'AI-Powered Job Matching',
                    'Collaborative Whiteboard',
                    'Resume Parsing & Ranking'
                  ],
                  tech: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'WebRTC'],
                  links: { live: '#', github: '#' },
                  image: '🎯',
                  gradient: 'from-blue-500/20 to-indigo-600/30',
                  hoverGradient: 'from-blue-600 to-indigo-700',
                  stats: { companies: '50+', interviews: '1000+', matches: '85%' }
                },
                {
                  name: 'Advanced Coding Platform',
                  shortName: 'CodeArena',
                  year: '2024',
                  status: 'Live',
                  category: 'Education',
                  shortDesc: 'LeetCode-style platform with contests, AI hints, and community features.',
                  description: 'Comprehensive coding platform with multi-language support, contest system, AI-powered hints, community forums, and admin tools for problem management.',
                  features: [
                    'Multi-language Code Editor',
                    'Contest & Leaderboards',
                    'AI-Powered Hints System',
                    'Community Forums',
                    'Problem Management Tools'
                  ],
                  tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'WebSocket'],
                  links: { live: '#', github: '#' },
                  image: '💻',
                  gradient: 'from-emerald-500/20 to-teal-600/30',
                  hoverGradient: 'from-emerald-600 to-teal-700',
                  stats: { problems: '500+', users: '2000+', contests: '25+' }
                },
                {
                  name: 'Hailthyfy AI Healthcare',
                  shortName: 'HealthAI',
                  year: '2025',
                  status: 'Live',
                  category: 'Healthcare',
                  shortDesc: 'AI-driven healthcare platform with patient analytics and telemedicine.',
                  description: 'Intelligent healthcare platform featuring AI symptom analysis, patient journey mapping, prescription reading, doctor consultations, and gamified health challenges.',
                  features: [
                    'AI Symptom Analysis',
                    'Patient Journey Mapping',
                    'Smart Prescription Reader',
                    'Doctor Consultation System',
                    'Health Analytics Dashboard'
                  ],
                  tech: ['Node.js', 'MongoDB', 'D3.js', 'ML Models', 'WebRTC'],
                  links: { live: '#', github: '#' },
                  image: '🏯',
                  gradient: 'from-pink-500/20 to-rose-600/30',
                  hoverGradient: 'from-pink-600 to-rose-700',
                  stats: { patients: '5000+', consultations: '800+', accuracy: '92%' }
                }
              ].map((project, index) => (
                <div key={index} className="group relative h-full">
                  {/* Main Card */}
                  <div className={`relative bg-gradient-to-br ${project.gradient} backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 rounded-3xl p-8 h-full transition-all duration-500 group-hover:rotate-1 group-hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}>
                    {/* Background gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.hoverGradient} opacity-0 group-hover:opacity-15 transition-all duration-500 rounded-3xl`}></div>

                    {/* Card Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="text-4xl group-hover:scale-110 transition-transform duration-500">
                            {project.image}
                          </div>
                          <div>
                            <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-2 ${
                              project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                              'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            }`}>
                              {project.status}
                            </span>
                            <p className="text-gray-400 text-sm">{project.category} • {project.year}</p>
                          </div>
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
                        {project.shortName}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                        {project.shortDesc}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-8">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 4).map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-black/30 border border-gray-600/50 text-gray-300 text-xs rounded-lg group-hover:border-gray-500/50 transition-all duration-300">
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="px-3 py-1 bg-black/30 border border-gray-600/50 text-gray-400 text-xs rounded-lg">
                              +{project.tech.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Stats Preview */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {Object.entries(project.stats).slice(0, 3).map(([key, value], i) => (
                          <div key={i} className="text-center">
                            <div className="text-lg font-black text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                              {value}
                            </div>
                            <div className="text-xs text-gray-400 capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-auto">
                        <a href={project.links.live}
                           className={`flex-1 text-center py-3 px-4 bg-gradient-to-r ${project.hoverGradient} text-white text-sm font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                          View Live
                        </a>
                        <a href={project.links.github}
                           className="p-3 bg-gray-800/50 border border-gray-600/50 text-white rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                          <GitHubIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Hover Details Overlay */}
                    <div className="absolute inset-0 bg-black/95 backdrop-blur-sm rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto z-20">
                      <div className="p-6 h-full overflow-y-auto">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-bold text-white">{project.name}</h4>
                            <span className="text-gray-400 text-xs">{project.year}</span>
                          </div>
                          
                          <p className="text-gray-300 text-xs leading-relaxed mb-4">
                            {project.description}
                          </p>
                          
                          <div className="mb-4">
                            <h5 className="text-white font-semibold mb-2 text-xs">Key Features:</h5>
                            <div className="space-y-1">
                              {project.features.slice(0, 4).map((feature, i) => (
                                <div key={i} className="flex items-center text-gray-300 text-xs">
                                  <span className="w-1 h-1 bg-purple-400 rounded-full mr-2"></span>
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <h5 className="text-white font-semibold mb-2 text-xs">Tech Stack:</h5>
                            <div className="flex flex-wrap gap-1">
                              {project.tech.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2 mt-auto">
                            {Object.entries(project.stats).map(([key, value], i) => (
                              <div key={i} className="text-center">
                                <div className="text-sm font-black text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                                  {value}
                                </div>
                                <div className="text-xs text-gray-400 capitalize">
                                  {key}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-20">
              <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-2xl backdrop-blur-sm">
                <span className="text-gray-300">Want to see more? Check out my</span>
                <a href="#github" className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-bold hover:from-purple-300 hover:to-cyan-300 transition-all duration-300">
                  GitHub Portfolio →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CLEAN GITHUB SHOWCASE SECTION */}
        <section id="github" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
          {/* Clean background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-cyan-600/5 to-blue-600/5 rounded-full blur-2xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Clean Header Section */}
            <div className="text-center mb-20">
              {/* Simple badge */}
              <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 border border-slate-600/30 rounded-full mb-8 backdrop-blur-sm">
                <GitHubIcon className="w-4 h-4 text-slate-400 mr-3" />
                <span className="text-slate-300 text-sm font-semibold tracking-wide">OPEN SOURCE PORTFOLIO</span>
              </div>
              
              {/* Clean title */}
              <h2 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="text-white drop-shadow-lg">
                  GitHub
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text drop-shadow-lg">
                  Repositories
                </span>
              </h2>
              
              {/* Simple description */}
              <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Building in the open • Solving real-world problems with code
              </p>
            </div>

            {/* Simple Stats Section */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {[
                { label: 'Repositories', value: '15+', color: 'text-blue-400' },
                { label: 'Total Commits', value: '1.2k+', color: 'text-green-400' },
                { label: 'Languages', value: '8+', color: 'text-purple-400' },
                { label: 'LeetCode Solved', value: '400+', color: 'text-orange-400' }
              ].map((stat, index) => (
                <div key={index} className="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 text-center hover:bg-slate-700/40 transition-all duration-300">
                  <div className={`text-3xl font-black ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Clean Repository Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'hailthyfy',
                  description: 'AI-driven healthcare platform with patient journey mapping, symptom analysis, and telemedicine features',
                  language: 'JavaScript',
                  languageColor: '#f7df1e',
                  type: 'Healthcare',
                  status: 'Active',
                  tech: ['Node.js', 'MongoDB', 'D3.js']
                },
                {
                  name: 'TicketBookingSystem',
                  description: 'Full-stack ticket booking platform with real-time seat selection and payment integration',
                  language: 'Node.js',
                  languageColor: '#339933',
                  type: 'E-commerce',
                  status: 'Complete',
                  tech: ['Express.js', 'MongoDB', 'Socket.IO']
                },
                {
                  name: 'chess_game',
                  description: 'Interactive chess game with AI opponent, move validation, and game analysis features',
                  language: 'JavaScript',
                  languageColor: '#f7df1e',
                  type: 'Gaming',
                  status: 'Active',
                  tech: ['HTML5', 'CSS3', 'JavaScript']
                },
                {
                  name: 'SkillIssu',
                  description: 'Skill assessment platform with coding challenges, automated testing, and progress tracking',
                  language: 'React',
                  languageColor: '#61dafb',
                  type: 'Education',
                  status: 'Active',
                  tech: ['React', 'Node.js', 'MongoDB']
                },
                {
                  name: 'InterViewXX',
                  description: 'Interview preparation platform with mock interviews, coding challenges, and performance analytics',
                  language: 'TypeScript',
                  languageColor: '#3178c6',
                  type: 'Career',
                  status: 'Beta',
                  tech: ['TypeScript', 'React', 'Node.js']
                },
                {
                  name: 'VideoTube',
                  description: 'Video streaming platform with user authentication, video upload, and social features',
                  language: 'Node.js',
                  languageColor: '#339933',
                  type: 'Media',
                  status: 'Active',
                  tech: ['Node.js', 'MongoDB', 'FFmpeg']
                },
                {
                  name: 'Re_Pharma',
                  description: 'Pharmacy management system with inventory tracking, prescription management, and billing',
                  language: 'Python',
                  languageColor: '#3776ab',
                  type: 'Healthcare',
                  status: 'Complete',
                  tech: ['Python', 'Django', 'PostgreSQL']
                },
                {
                  name: 'NightSky',
                  description: 'Astronomy application with star mapping, celestial event tracking, and educational content',
                  language: 'JavaScript',
                  languageColor: '#f7df1e',
                  type: 'Education',
                  status: 'Active',
                  tech: ['Three.js', 'WebGL', 'Node.js']
                },
                {
                  name: 'KitabiKira',
                  description: 'Book rental and library management system with advanced search and recommendation engine',
                  language: 'Java',
                  languageColor: '#f89820',
                  type: 'Education',
                  status: 'Complete',
                  tech: ['Java', 'Spring Boot', 'MySQL']
                }
              ].map((repo, index) => {
                const statusColors = {
                  'Live': 'bg-green-500 text-green-50',
                  'Active': 'bg-blue-500 text-blue-50',
                  'Beta': 'bg-yellow-500 text-yellow-50',
                  'Complete': 'bg-gray-500 text-gray-50'
                }
                
                const typeColors = {
                  'Healthcare': 'bg-red-500/10 text-red-400 border-red-500/20',
                  'E-commerce': 'bg-green-500/10 text-green-400 border-green-500/20',
                  'Gaming': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
                  'Education': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
                  'Career': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
                  'Media': 'bg-pink-500/10 text-pink-400 border-pink-500/20'
                }
                
                return (
                  <a key={index}
                     href={`https://github.com/anirbansantra748/${repo.name}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group block bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 hover:border-slate-500/50 p-6 rounded-xl transition-all duration-300 hover:bg-slate-700/40">
                    
                    {/* Header with name and status */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">
                        {repo.name}
                      </h3>
                      <div className={`px-2 py-1 rounded-md text-xs font-semibold ${statusColors[repo.status] || statusColors.Complete}`}>
                        {repo.status}
                      </div>
                    </div>

                    {/* Type badge */}
                    <div className="mb-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${typeColors[repo.type] || typeColors.Education}`}>
                        {repo.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {repo.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600/50">
                          {tech}
                        </span>
                      ))}
                      {repo.tech.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700/30 text-slate-400 text-xs rounded border border-slate-600/30">
                          +{repo.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Footer with language and arrow */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-600/30">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: repo.languageColor }}></div>
                        <span className="text-slate-400 text-sm">{repo.language}</span>
                      </div>
                      
                      <div className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* GitHub Profile Link */}
            <div className="text-center mt-16">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Explore More on GitHub</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Discover additional projects, contributions, and open-source work on my GitHub profile.
                </p>
              </div>
              <a
                href="https://github.com/anirbansantra748"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-600 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/25"
              >
                <GitHubIcon className="w-6 h-6" />
                <span className="font-semibold">View Full GitHub Profile</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* DINOSAUR GAME SECTION */}
        <DinosaurGame />

        {/* INTERNSHIP EXPERIENCE SECTION */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 border border-slate-600/30 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-slate-300 text-sm font-semibold tracking-wide">PROFESSIONAL JOURNEY</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="text-white drop-shadow-lg">
                  Internship
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text drop-shadow-lg">
                  Experience
                </span>
              </h2>
              <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Building real-world solutions and driving impact in professional environments
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-12">
              {/* SMAK Tech */}
              <div className="group relative">
                <div className="flex items-start space-x-6">
                  {/* Timeline connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="w-px bg-gradient-to-b from-blue-500/50 to-transparent h-24 mt-4"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 group-hover:bg-slate-700/40 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Software Developer Intern</h3>
                        <p className="text-blue-400 font-semibold text-lg">SMAK Tech (Core Team)</p>
                      </div>
                      <div className="bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-lg">
                        <span className="text-blue-400 font-semibold text-sm">Nov 2024 – Apr 2025</span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        {[
                          'Built backend modules, KPI dashboards, and admin tools with robust error handling',
                          'Improved search, onboarding, scheduling, reducing workflow bottlenecks by ~30%'
                        ].map((item, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-slate-300 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-3">
                        {[
                          'Delivered personalized analytics and integrated REST APIs',
                          'Built scalable solutions with React + TypeScript frontend'
                        ].map((item, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-slate-300 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Tech stack */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {['Node.js', 'React', 'TypeScript', 'REST APIs', 'KPI Dashboards'].map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Suvidha Foundation */}
              <div className="group relative">
                <div className="flex items-start space-x-6">
                  {/* Timeline connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1V8zm0 6a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 group-hover:bg-slate-700/40 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Web Development Intern</h3>
                        <p className="text-green-400 font-semibold text-lg">Suvidha Foundation</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-lg">
                        <span className="text-green-400 font-semibold text-sm">Oct 2023 – Nov 2023</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {[
                        'Rebuilt and deployed the organization\'s website, enhancing UI/UX and performance',
                        'Built responsive pages and integrated backend forms for improved user experience'
                      ].map((item, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-slate-300 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI/UX'].map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/30 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-600/10 to-orange-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 border border-slate-600/30 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-slate-300 text-sm font-semibold tracking-wide">RECOGNITION & SUCCESS</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text drop-shadow-lg">
                  Achievements
                </span>
              </h2>
              <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Recognition for technical excellence and problem-solving prowess
              </p>
            </div>

            {/* Achievement Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🏆',
                  title: 'Winner – EduSands Hacks',
                  subtitle: 'Hackathon Victory',
                  description: 'Won first place in EduSands Hacks hackathon with innovative project solution',
                  color: 'from-yellow-500 to-orange-500',
                  bgColor: 'from-yellow-500/10 to-orange-500/20',
                  borderColor: 'border-yellow-500/30'
                },
                {
                  icon: '🥉',
                  title: 'Top 15 Finalist – Rebase Hackathon',
                  subtitle: 'Rebase01 Competition',
                  description: 'Secured top 15 position among hundreds of participants in prestigious hackathon',
                  color: 'from-purple-500 to-pink-500',
                  bgColor: 'from-purple-500/10 to-pink-500/20',
                  borderColor: 'border-purple-500/30'
                },
                {
                  icon: '🧠',
                  title: '400+ LeetCode Problems',
                  subtitle: 'Algorithmic Mastery',
                  description: 'Solved 400+ coding problems demonstrating strong algorithmic and problem-solving skills',
                  color: 'from-green-500 to-emerald-500',
                  bgColor: 'from-green-500/10 to-emerald-500/20',
                  borderColor: 'border-green-500/30'
                }
              ].map((achievement, index) => (
                <div key={index} className={`group relative bg-gradient-to-br ${achievement.bgColor} backdrop-blur-sm border ${achievement.borderColor} rounded-2xl p-8 hover:scale-105 transition-all duration-300`}>
                  <div className="text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <h3 className={`text-xl font-bold text-transparent bg-gradient-to-r ${achievement.color} bg-clip-text mb-2`}>
                      {achievement.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-medium mb-4">{achievement.subtitle}</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{animationDelay: '0.5s'}}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SYSTEM DESIGN SECTION */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-full blur-2xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 border border-slate-600/30 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-slate-300 text-sm font-semibold tracking-wide">ARCHITECTURAL EXPERTISE</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="text-white drop-shadow-lg">
                  Architecture &
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text drop-shadow-lg">
                  Design Practice
                </span>
              </h2>
              <p className="text-slate-400 text-xl max-w-4xl mx-auto leading-relaxed">
                Designing scalable systems with enterprise-grade architecture patterns
              </p>
            </div>

            {/* High-Level Design Section */}
            <div className="mb-16">
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm6 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zm6 6a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4zM9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4zM3 16a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">High-Level Design (HLD)</h3>
                    <p className="text-cyan-400 font-medium">System Architecture & Scalability</p>
                  </div>
                </div>

                {/* HLD Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'Gmail Clone',
                      type: 'Email System',
                      icon: '📧',
                      features: ['Message Queue', 'Real-time Sync', 'Search Index'],
                      tech: ['Microservices', 'Redis', 'ElasticSearch'],
                      gradient: 'from-red-500/10 to-orange-500/20',
                      borderColor: 'border-red-500/30'
                    },
                    {
                      name: 'Shazam System',
                      type: 'Audio Recognition',
                      icon: '🎵',
                      features: ['Audio Processing', 'Fingerprinting', 'Fast Matching'],
                      tech: ['Signal Processing', 'NoSQL', 'CDN'],
                      gradient: 'from-purple-500/10 to-pink-500/20',
                      borderColor: 'border-purple-500/30'
                    },
                    {
                      name: 'Calling App',
                      type: 'Communication',
                      icon: '📞',
                      features: ['WebRTC', 'Signaling Server', 'Media Processing'],
                      tech: ['Real-time', 'P2P', 'Load Balancer'],
                      gradient: 'from-green-500/10 to-emerald-500/20',
                      borderColor: 'border-green-500/30'
                    },
                    {
                      name: 'Zomato Delivery',
                      type: 'Food Delivery',
                      icon: '🍔',
                      features: ['Location Services', 'Order Tracking', 'Payment Gateway'],
                      tech: ['Geospatial', 'Event-Driven', 'Caching'],
                      gradient: 'from-yellow-500/10 to-orange-500/20',
                      borderColor: 'border-yellow-500/30'
                    },
                    {
                      name: 'Chess.com Backend',
                      type: 'Gaming Platform',
                      icon: '♟️',
                      features: ['Real-time Moves', 'Matchmaking', 'Rating System'],
                      tech: ['WebSocket', 'Game Engine', 'Analytics'],
                      gradient: 'from-indigo-500/10 to-purple-500/20',
                      borderColor: 'border-indigo-500/30'
                    },
                    {
                      name: 'Live Streaming',
                      type: 'Video Platform',
                      icon: '📹',
                      features: ['Video Processing', 'CDN', 'Chat System'],
                      tech: ['HLS', 'Sharding', 'Global Distribution'],
                      gradient: 'from-cyan-500/10 to-blue-500/20',
                      borderColor: 'border-cyan-500/30'
                    }
                  ].map((system, index) => (
                    <div key={index} className={`group bg-gradient-to-br ${system.gradient} backdrop-blur-sm border ${system.borderColor} rounded-xl p-6 hover:scale-105 transition-all duration-300`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                          {system.icon}
                        </div>
                        <div className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                          {system.type}
                        </div>
                      </div>
                      
                      <h4 className="text-white font-bold text-lg mb-3">{system.name}</h4>
                      
                      <div className="space-y-2 mb-4">
                        {system.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {system.tech.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-700/30 text-slate-400 text-xs rounded border border-slate-600/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Low-Level Design Section */}
            <div className="mb-16">
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Low-Level Design (LLD)</h3>
                    <p className="text-purple-400 font-medium">Code Architecture & Design Patterns</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'Cache System',
                      language: 'Java',
                      patterns: ['LRU', 'LFU', 'TTL'],
                      concepts: ['Thread Safety', 'Eviction Policy', 'Hash Map'],
                      icon: '🗄️',
                      color: 'from-orange-500 to-red-500'
                    },
                    {
                      name: 'Splitwise Clone',
                      language: 'Java',
                      patterns: ['Factory', 'Strategy', 'Observer'],
                      concepts: ['Expense Splitting', 'Settlement', 'Graph Theory'],
                      icon: '💰',
                      color: 'from-green-500 to-emerald-500'
                    },
                    {
                      name: 'Matchmaking System',
                      language: 'Java',
                      patterns: ['Queue', 'Pub-Sub', 'State Machine'],
                      concepts: ['ELO Rating', 'Skill Matching', 'Latency Optimization'],
                      icon: '🎮',
                      color: 'from-indigo-500 to-purple-500'
                    }
                  ].map((design, index) => (
                    <div key={index} className="bg-slate-700/40 border border-slate-600/40 rounded-xl p-6 hover:bg-slate-600/40 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl">{design.icon}</div>
                        <div className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full border border-orange-500/30">
                          {design.language}
                        </div>
                      </div>
                      
                      <h4 className="text-white font-bold text-lg mb-4">{design.name}</h4>
                      
                      <div className="mb-4">
                        <p className="text-slate-400 text-sm mb-2 font-medium">Design Patterns:</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {design.patterns.map((pattern, i) => (
                            <span key={i} className={`px-2 py-1 bg-gradient-to-r ${design.color} bg-opacity-20 text-xs rounded border border-current border-opacity-30`}>
                              {pattern}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-slate-400 text-sm mb-2 font-medium">Key Concepts:</p>
                        <div className="space-y-1">
                          {design.concepts.map((concept, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                              <span className="text-slate-300 text-sm">{concept}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dockerized Projects Section */}
            <div>
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Dockerized LLD Projects</h3>
                    <p className="text-blue-400 font-medium">Production-Ready Containerized Systems</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'Ticket Booking System',
                      type: 'Microservice',
                      icon: '🎫',
                      features: ['Seat Selection', 'Payment Gateway', 'Booking Management'],
                      docker: 'Multi-stage Build',
                      deployment: 'K8s Ready',
                      gradient: 'from-blue-500/10 to-indigo-500/20',
                      borderColor: 'border-blue-500/30'
                    },
                    {
                      name: 'Food Delivery System',
                      type: 'Event-Driven',
                      icon: '🚚',
                      features: ['Order Tracking', 'Delivery Routing', 'Real-time Updates'],
                      docker: 'Compose Setup',
                      deployment: 'Load Balanced',
                      gradient: 'from-orange-500/10 to-red-500/20',
                      borderColor: 'border-orange-500/30'
                    },
                    {
                      name: 'Ride Booking System',
                      type: 'Geospatial',
                      icon: '🚗',
                      features: ['Driver Matching', 'Route Optimization', 'Pricing Engine'],
                      docker: 'Alpine Images',
                      deployment: 'Auto-scaling',
                      gradient: 'from-green-500/10 to-emerald-500/20',
                      borderColor: 'border-green-500/30'
                    }
                  ].map((project, index) => (
                    <div key={index} className={`group bg-gradient-to-br ${project.gradient} backdrop-blur-sm border ${project.borderColor} rounded-xl p-6 hover:scale-105 transition-all duration-300 relative`}>
                      {/* Docker badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185"/>
                        </svg>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                          {project.icon}
                        </div>
                        <div className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                          {project.type}
                        </div>
                      </div>
                      
                      <h4 className="text-white font-bold text-lg mb-3">{project.name}</h4>
                      
                      <div className="space-y-2 mb-4">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded border border-blue-500/30">
                          {project.docker}
                        </span>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30">
                          {project.deployment}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL CONTACT SECTION */}
        <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 border border-slate-600/30 rounded-full mb-6 backdrop-blur-sm">
                <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-slate-300 text-sm font-semibold tracking-wide">LET'S CONNECT</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text">
                  Get In Touch
                </span>
              </h2>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
                Ready to build something amazing together? Let's discuss your next project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Work Together</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects,
                  or just having a chat about <span className="text-cyan-400 font-semibold">technology</span> and <span className="text-indigo-400 font-semibold">space exploration</span>.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300">
                    <span className="text-2xl">📧</span>
                    <div>
                      <span className="text-slate-300 font-semibold block">anirban@example.com</span>
                      <span className="text-slate-500 text-sm">Email me directly</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300">
                    <span className="text-2xl">💼</span>
                    <div>
                      <a href="https://linkedin.com/in/anirban-santra-a9ab0b241" className="text-slate-300 hover:text-blue-400 transition-colors font-semibold block">LinkedIn Profile</a>
                      <span className="text-slate-500 text-sm">Professional network</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300">
                    <span className="text-2xl">🐙</span>
                    <div>
                      <a href="https://github.com/anirbansantra748" className="text-slate-300 hover:text-purple-400 transition-colors font-semibold block">GitHub Repository</a>
                      <span className="text-slate-500 text-sm">Open source projects</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm p-8 border border-slate-600/50 rounded-2xl">
                <form className="space-y-6">
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
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* INTERACTIVE GAME SECTION */}
        <section id="game" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">🎮 Interactive Game</h2>
              <p className="text-slate-400 text-lg mb-6">
                Coming Soon! A fun dinosaur game to showcase interactive React components.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-cyan-500/20 text-cyan-400 rounded-xl border border-cyan-500/30">
                <span>🚧 Under Development</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* PROFESSIONAL FOOTER */}
      <footer className="bg-slate-900/95 border-t border-slate-700/50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text mb-2">
                Anirban Santra
              </h3>
              <p className="text-slate-400">Elite Full Stack Developer • Space Technology Enthusiast</p>
            </div>

            <div className="flex justify-center space-x-8 mb-8">
              <a href="https://linkedin.com/in/anirban-santra-a9ab0b241"
                 className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                 target="_blank" rel="noopener noreferrer">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/anirbansantra748"
                 className="text-slate-400 hover:text-purple-400 transition-colors duration-300"
                 target="_blank" rel="noopener noreferrer">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
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
