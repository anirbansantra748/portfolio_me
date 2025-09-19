import React, { useState, useEffect } from "react";

// Custom styles for animations
const modalStyles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes scaleIn {
    from { 
      opacity: 0;
      transform: scale(0.9) translate(-50%, -50%);
    }
    to { 
      opacity: 1;
      transform: scale(1) translate(-50%, -50%);
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out;
  }
  
  .animate-scale-in {
    animation: scaleIn 0.3s ease-out;
  }
  
  .shadow-3xl {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
  }
`;

// Import certificate images
import offerLetter1 from "../offerlatter-zone/offer-letter-1.png";
import offerLetter2 from "../offerlatter-zone/offer-letter-2.png";
import certificate1 from "../offerlatter-zone/certificate-1.png";
import certificate2 from "../offerlatter-zone/certificate-2.png";
import certificate3 from "../offerlatter-zone/certificate-3.png";
import certificate4 from "../offerlatter-zone/certificate-4.png";
import achievement1 from "../offerlatter-zone/achievement-1.png";
import achievement2 from "../offerlatter-zone/achievement-2.png";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Inject custom styles
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = modalStyles;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedImage]);

  const certificatesData = [
    {
      id: 1,
      title: "SMAK Tech Offer Letter",
      category: "Offer Letters",
      type: "offer",
      description: "Software Developer Intern position offer from SMAK Tech",
      image: offerLetter1,
      gradient: "from-blue-500/20 to-indigo-600/30",
      borderColor: "border-blue-500/30",
    },
    {
      id: 2,
      title: "Suvidha Foundation Offer Letter",
      category: "Offer Letters", 
      type: "offer",
      description: "Web Development Intern position offer from Suvidha Foundation",
      image: offerLetter2,
      gradient: "from-green-500/20 to-emerald-600/30",
      borderColor: "border-green-500/30",
    },
    {
      id: 3,
      title: "Professional Certificate 1",
      category: "Certificates",
      type: "certificate",
      description: "Technical certification in full-stack development",
      image: certificate1,
      gradient: "from-purple-500/20 to-pink-600/30",
      borderColor: "border-purple-500/30",
    },
    {
      id: 4,
      title: "Professional Certificate 2",
      category: "Certificates",
      type: "certificate",
      description: "Advanced certification in software engineering",
      image: certificate2,
      gradient: "from-cyan-500/20 to-blue-600/30",
      borderColor: "border-cyan-500/30",
    },
    {
      id: 5,
      title: "Professional Certificate 3",
      category: "Certificates",
      type: "certificate",
      description: "Certification in backend development and APIs",
      image: certificate3,
      gradient: "from-orange-500/20 to-red-600/30",
      borderColor: "border-orange-500/30",
    },
    {
      id: 6,
      title: "Professional Certificate 4",
      category: "Certificates",
      type: "certificate",
      description: "Certification in modern web technologies",
      image: certificate4,
      gradient: "from-teal-500/20 to-green-600/30",
      borderColor: "border-teal-500/30",
    },
    {
      id: 7,
      title: "Achievement Award 1",
      category: "Achievements",
      type: "achievement",
      description: "Recognition for outstanding performance in development",
      image: achievement1,
      gradient: "from-yellow-500/20 to-orange-600/30",
      borderColor: "border-yellow-500/30",
    },
    {
      id: 8,
      title: "Achievement Award 2",
      category: "Achievements",
      type: "achievement",
      description: "Excellence award in software development and innovation",
      image: achievement2,
      gradient: "from-rose-500/20 to-pink-600/30",
      borderColor: "border-rose-500/30",
    },
  ];

  const categories = ["All", "Offer Letters", "Certificates", "Achievements"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCertificates = certificatesData.filter(
    (cert) => activeCategory === "All" || cert.category === activeCategory
  );

  return (
    <section
      id="certificates"
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-600/10 to-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-cyan-600/5 to-blue-600/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 border border-slate-600/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-slate-300 text-sm font-semibold tracking-wide">
              PROFESSIONAL CREDENTIALS
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-white drop-shadow-lg">Certificates &</span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text drop-shadow-lg">
              Achievements
            </span>
          </h2>
          
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Professional credentials, offer letters, and recognition showcasing
            technical expertise and career milestones
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg"
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid - Photo First Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCertificates.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-700 hover:scale-105 hover:rotate-1"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedImage(cert)}
            >
              {/* Main Image - Full Focus */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover Text Overlay - Appears from bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1.5 text-xs font-bold rounded-full border ${cert.borderColor} text-white bg-black/50 backdrop-blur-sm`}>
                      {cert.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                    {cert.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-200 text-sm leading-relaxed drop-shadow-md">
                    {cert.description}
                  </p>
                  
                  {/* View Button */}
                  <div className="mt-4">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white text-sm font-semibold hover:bg-white/30 transition-all duration-300">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                      View Full Size
                    </div>
                  </div>
                </div>
                
                {/* Floating corner indicator */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h3a1 1 0 011 1v3a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              
              {/* Enhanced glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-3xl -z-10 blur-xl scale-110`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Offer Letters", value: "2+", color: "text-blue-400" },
            { label: "Certificates", value: "4+", color: "text-green-400" },
            { label: "Achievements", value: "2+", color: "text-purple-400" },
            { label: "Total Credentials", value: "8+", color: "text-orange-400" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 text-center hover:bg-slate-700/40 transition-all duration-300"
            >
              <div className={`text-3xl font-black ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal for viewing full-size images */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-red-400 hover:bg-red-500/20 transition-all duration-300 hover:scale-110 z-10"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-center">
                <div className="mb-2">
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full border ${selectedImage.borderColor} text-white bg-black/50 backdrop-blur-sm`}>
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-lg">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-200 text-sm drop-shadow-md max-w-2xl mx-auto">
                  {selectedImage.description}
                </p>
              </div>
            </div>
            
            {/* Navigation Hint */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-white/60 text-sm">
                Click outside or press ESC to close
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;