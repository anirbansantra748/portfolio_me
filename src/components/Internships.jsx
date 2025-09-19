import React from 'react'

const Internships = () => {
  const experiences = [
    {
      company: "SMAK Tech",
      position: "Software Developer Intern",
      period: "Nov 2024 - Present",
      color: "from-yellow-400 to-orange-500",
      side: "left"
    },
    {
      company: "SAN-SOFT-TECH",
      position: "Android Developer",
      period: "Mar 2023 - Apr 2023",
      color: "from-red-400 to-red-600",
      side: "right"
    },
    {
      company: "Suvidha Foundation",
      position: "Web Development Intern",
      period: "Oct 2023 - Nov 2023",
      color: "from-yellow-400 to-orange-500",
      side: "left"
    }
  ]

  const achievements = [
    "🏆 Won Edu Sands Hacks Hackathon",
    "🚀 Competitive Programming Enthusiast",
    "🔭 Astronomy Enthusiast",
    "📖 Avid Novel Reader"
  ]

  return (
    <section id="internships" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-16 uppercase tracking-wider">
          Internships & Achievements
        </h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-red-500 transform -translate-x-1/2 rounded-full"></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 ${exp.side === 'left' ? 'pr-8' : 'pl-8'}`}>
              <div className={`relative w-5/12 p-6 bg-gray-800 rounded-lg shadow-lg ${
                exp.side === 'left' ? 'ml-0' : 'ml-auto'
              }`} style={{
                boxShadow: '0 4px 10px rgba(255, 165, 0, 0.3)'
              }}>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  {exp.company}
                </h3>
                <p className="text-gray-300 font-semibold mb-1">
                  {exp.position}
                </p>
                <p className="text-gray-400 text-sm">
                  {exp.period}
                </p>
              </div>
            </div>
          ))}

          {/* Achievements Section */}
          <div className="relative w-5/12 ml-auto p-6 bg-gray-800 rounded-lg shadow-lg" style={{
            boxShadow: '0 4px 10px rgba(255, 165, 0, 0.3)'
          }}>
            <h3 className="text-xl font-bold text-red-500 mb-4">Achievements</h3>
            <ul className="text-left space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-yellow-400 flex items-start">
                  <span className="mr-2">{achievement.split(' ')[0]}</span>
                  <span className="text-gray-300">{achievement.substring(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Internships