import React, { useState, useEffect } from 'react'

const About = () => {
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="editor-container">
          {/* Editor Header */}
          <div className="editor-header">
            <div className="editor-dots">
              <div className="editor-dot dot-red"></div>
              <div className="editor-dot dot-yellow"></div>
              <div className="editor-dot dot-green"></div>
            </div>
            <div className="file-tab">about-me.js</div>
          </div>

          {/* Code Content */}
          <div className="font-mono text-sm md:text-base leading-relaxed">
            <div className="comment">// About Me</div>
            <div>
              <span className="keyword">const</span>{' '}
              <span className="variable">aboutMe</span> = {'{'}
            </div>
            <div className="ml-4">
              <span className="variable">name</span>: <span className="string">"Anirban Santra"</span>,
            </div>
            <div className="ml-4">
              <span className="variable">role</span>: <span className="string">"Software Developer"</span>,
            </div>
            <div className="ml-4">
              <span className="variable">skills</span>: [
            </div>
            <div className="ml-8">
              <span className="string">"Full-Stack Development"</span>,<br />
              <span className="string">"Android Development"</span>,<br />
              <span className="string">"Node.js, React, MongoDB"</span>
            </div>
            <div className="ml-4">],</div>
            <div className="ml-4">
              <span className="variable">currentlyLearning</span>: <span className="string">"Next.js & Docker"</span>,
            </div>
            <div className="ml-4">
              <span className="variable">passion</span>: <span className="string">"Learning new Things, Reading novels, Competitive Programming"</span>
            </div>
            <div>{'};'}</div>
            <div className="mt-4">
              <span className="function">console.log</span>(<span className="string">"Welcome to my coding world!"</span>){isTyping && <span className="typing"></span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
