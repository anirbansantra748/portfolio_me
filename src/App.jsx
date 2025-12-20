import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Code, 
  Database, 
  Server, 
  Cpu, 
  Globe, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Layers, 
  Award, 
  Briefcase, 
  Menu, 
  X,
  Zap,
  Layout,
  Box,
  GitBranch,
  Star,
  Download,
  CheckCircle,
  Play,
  Bot,
  ArrowUpRight,
  Smartphone,
  Lock,
  MessageSquare,
  Music,
  Video,
  Maximize2,
  Scan,
  Command,
  Hash,
  Copy,
  Heart,
  ShoppingCart,
  BookOpen,
  Gamepad2,
  Film,
  Stethoscope,
  Shield,
  Medal,
  FileBadge,
  FileText,
  Eye,
  FileKey
} from 'lucide-react';

/* --- DATA & CONTENT --- */
const DATA = {
  profile: {
    name: "Anirban Santra",
    title: "Full Stack Software Engineer",
    tagline: "Backend-focused engineer skilled in Node.js, Java, and distributed system design.",
    subTagline: "Building scalable microservices, real-time platforms, and ML-integrated products.",
    location: "Kolkata, India",
    email: "anirbansantra748@gmail.com",
    phone: "+91-79800-15159",
    stats: [
      { label: "Experience", value: "1+ Yrs" },
      { label: "CGPA", value: "8.0" },
      { label: "Hackathons", value: "Won 1st" },
      { label: "LeetCode", value: "400+" }
    ]
  },
  skills: {
    languages: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
    backend: ["Node.js", "Express", "MongoDB", "Redis", "MySQL", "Kafka", "BullMQ", "Microservices", "WebSockets"],
    frontend: ["React", "Next.js", "HTML5", "CSS3", "Tailwind", "EJS"],
    devops: ["Docker", "Git", "GitHub Actions", "AWS S3", "Render", "Vercel", "Netlify", "Cloudinary"],
    ai_tools: ["GitHub Copilot", "Cursor", "Warp", "Trae", "ChatGPT"]
  },
  experience: [
    {
      role: "Full Stack Developer (Backend-Heavy)",
      company: "Wonder Creative Studio",
      period: "Nov 2025 – Present",
      description: "Own backend modules and REST APIs for a production lawyer-focused SaaS. Led migration of file storage to AWS S3. Diagnosed and fixed critical production issues including logical bugs and race-conditions. Delivered significant UI/UX improvements.",
      tech: ["Node.js", "REST APIs", "AWS S3", "SaaS"],
      icon: Terminal,
      color: "emerald"
    },
    {
      role: "Software Developer Intern",
      company: "SMAK Tech (Core Team)",
      period: "Nov 2024 – Apr 2025",
      description: "Designed and optimized DB schemas, reducing median API latency by 40% using Redis. Owned core services (auth, scheduling), decreasing incident MTTR by 50%. Built React+TS KPI dashboards.",
      tech: ["Redis", "Node.js", "React", "TypeScript"],
      icon: Code,
      color: "blue"
    },
    {
      role: "Web Development Intern",
      company: "Suvidha Foundation",
      period: "Oct 2023 – Nov 2023",
      description: "Rebuilt and deployed organization website; improved UI/UX and cut page load time by 25%. Implemented responsive pages and reliable backend integrations.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      icon: Globe,
      color: "purple"
    },
    {
      role: "Android Developer Intern",
      company: "Sansoft Infotech",
      period: "Mar 2023 – Apr 2023",
      description: "Developed a QR scanner app using Java and Android Studio. Contributed to the design, testing, and deployment of Android applications, gaining hands-on mobile dev experience.",
      tech: ["Java", "Android Studio", "Mobile Dev"],
      icon: Smartphone,
      color: "orange"
    }
  ],
  projects: [
    {
      title: "Peer",
      category: "AI Platform • 2025",
      desc: "Event-driven AI code review platform processing 1k+ PRs/day with multi-LLM orchestration (GPT-4, Gemini).",
      stats: ["1k+ PRs/Day", "60% Cache Hit", "99.2% Tx Success"],
      stack: ["Node.js", "Redis", "BullMQ", "Docker", "GitHub API"],
      status: "Live",
      image: "/peer.png",
      links: { live: "#", github: "#" }
    },
    {
      title: "InterViewX",
      category: "Enterprise • 2025",
      desc: "End-to-end hiring platform with recruiter dashboards, LeetCode-style coding rounds, and AI-assisted ATS.",
      stats: ["Real-time Chat", "Resume Parsing", "Live Sync"],
      stack: ["Node.js", "MongoDB", "Socket.IO", "EJS", "Tailwind"],
      status: "Live",
      image: "/interviewx.png",
      links: { live: "#", github: "#" }
    },
    {
      title: "Hailthyfy",
      category: "Healthcare • 2025",
      desc: "AI healthcare platform with X-ray inference pipeline (DenseNet), doctor consultations, and triage chatbot.",
      stats: ["X-Ray ML", "Async Queue", "Triage Bot"],
      stack: ["Node.js", "FastAPI", "TensorFlow", "Redis", "Docker"],
      status: "Live",
      image: "/helthyfy.png",
      links: { live: "#", github: "#" }
    },
    {
      title: "Wonderlust",
      category: "Travel • 2024",
      desc: "Full-stack travel booking and exploration platform with destination guides, hotel listings, and interactive trip planning features.",
      stats: ["Hotel Booking", "Trip Planner", "Reviews"],
      stack: ["Node.js", "Express", "MongoDB", "EJS", "Leaflet"],
      status: "Live",
      image: "/wonderlust.png",
      links: { live: "#", github: "#" }
    },
    {
      title: "Bookify",
      category: "Education • 2024",
      desc: "Library management and book rental system with advanced search, recommendation engine, and user reading analytics.",
      stats: ["Smart Search", "Recommendations", "Analytics"],
      stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      status: "Live",
      image: "/bookify.png",
      links: { live: "#", github: "#" }
    },
    {
      title: "Game of Life",
      category: "Simulation • 2024",
      desc: "Interactive implementation of Conway's Game of Life with customizable grid, pattern library, and real-time cellular automation visualization.",
      stats: ["Interactive Grid", "Pattern Library", "Real-time"],
      stack: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
      status: "Live",
      image: "/gameoflife.png",
      links: { live: "#", github: "#" }
    }
  ],
  openSource: [
    {
      name: "hailthyfy",
      type: "Healthcare",
      lang: "JavaScript",
      status: "Active",
      gitStatus: ["✅ Health API online", "🏥 Patient system ready", "📊 Analytics dashboard"],
      desc: "AI-driven healthcare platform with patient journey mapping, symptom analysis, and telemedicine features",
      stats: { stars: 47, forks: 12, commits: 234 },
      stack: ["Node.js", "MongoDB", "D3.js"]
    },
    {
      name: "TicketBookingSystem",
      type: "E-commerce",
      lang: "Node.js",
      status: "Complete",
      gitStatus: ["🎫 Booking system live", "💳 Payment integrated", "⚡ Real-time updates"],
      desc: "Full-stack ticket booking platform with real-time seat selection and payment integration",
      stats: { stars: 32, forks: 8, commits: 187 },
      stack: ["Express.js", "MongoDB", "Socket.IO"]
    },
    {
      name: "chess_game",
      type: "Gaming",
      lang: "JavaScript",
      status: "Active",
      gitStatus: ["♟️ AI opponent ready", "🎯 Move validation: OK", "🏆 Game analysis active"],
      desc: "Interactive chess game with AI opponent, move validation, and game analysis features",
      stats: { stars: 73, forks: 25, commits: 156 },
      stack: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      name: "SkillIssu",
      type: "Education",
      lang: "React",
      status: "Active",
      gitStatus: ["📚 Challenges loaded", "⚡ Auto-testing: ON", "📈 Progress tracking"],
      desc: "Skill assessment platform with coding challenges, automated testing, and progress tracking",
      stats: { stars: 56, forks: 19, commits: 298 },
      stack: ["React", "Node.js", "MongoDB"]
    },
    {
      name: "InterViewXX",
      type: "Career",
      lang: "TypeScript",
      status: "Beta",
      gitStatus: ["🎤 Mock interviews: ON", "💼 Career prep ready", "📊 Analytics enabled"],
      desc: "Interview preparation platform with mock interviews, coding challenges, and performance analytics",
      stats: { stars: 41, forks: 14, commits: 145 },
      stack: ["TypeScript", "React", "Node.js"]
    },
    {
      name: "VideoTube",
      type: "Media",
      lang: "Node.js",
      status: "Active",
      gitStatus: ["🎬 Video streaming: UP", "🔐 Auth system ready", "📱 Social features ON"],
      desc: "Video streaming platform with user authentication, video upload, and social features",
      stats: { stars: 89, forks: 31, commits: 267 },
      stack: ["Node.js", "MongoDB", "FFmpeg"]
    },
    {
      name: "Re_Pharma",
      type: "Healthcare",
      lang: "Python",
      status: "Complete",
      gitStatus: ["💊 Inventory synced", "📋 Prescriptions ready", "💰 Billing system UP"],
      desc: "Pharmacy management system with inventory tracking, prescription management, and billing",
      stats: { stars: 35, forks: 9, commits: 178 },
      stack: ["Python", "Django", "PostgreSQL"]
    },
    {
      name: "NightSky",
      type: "Education",
      lang: "JavaScript",
      status: "Active",
      gitStatus: ["🌌 Star map loaded", "🔭 Celestial events", "📚 Educational content"],
      desc: "Astronomy application with star mapping, celestial event tracking, and educational content",
      stats: { stars: 68, forks: 22, commits: 201 },
      stack: ["Three.js", "WebGL", "Node.js"]
    },
    {
      name: "KitabiKira",
      type: "Education",
      lang: "Java",
      status: "Complete",
      gitStatus: ["📚 Library system: UP", "🔍 Search optimized", "🤖 Recommendations ON"],
      desc: "Book rental and library management system with advanced search and recommendation engine",
      stats: { stars: 43, forks: 16, commits: 189 },
      stack: ["Java", "Spring Boot", "MySQL"]
    }
  ],
  architecture: {
    hld: [
      { 
        title: "Gmail Clone", 
        tags: ["Message Queue", "Real-time Sync", "Distributed"],
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=1200&auto=format&fit=crop&q=80" 
      },
      { 
        title: "Shazam System", 
        tags: ["Audio Fingerprinting", "Fast Matching", "NoSQL"],
        image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=1200&auto=format&fit=crop&q=80"
      },
      { 
        title: "Live Streaming", 
        tags: ["CDN", "HLS", "Transcoding", "Global Distribution"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80"
      },
      { 
        title: "Chess.com Backend", 
        tags: ["WebSocket", "State Management", "Scaling"],
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&auto=format&fit=crop&q=80"
      }
    ],
    lld: [
      { 
        title: "Ticket Booking", 
        type: "Java", 
        tags: ["Concurrency", "Locking", "Dockerized"],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80"
      },
      { 
        title: "Food Delivery", 
        type: "Java", 
        tags: ["Strategy Pattern", "State Machine"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80"
      },
      { 
        title: "Ride Booking", 
        type: "Java", 
        tags: ["Geospatial", "Pricing Engine", "CAP Theorem"],
        image: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?w=1200&auto=format&fit=crop&q=80"
      }
    ]
  },
  achievements: [
    { 
      title: "Top 25 in Rebase <01>", 
      issuer: "GDSC IIIT Kalyani", 
      date: "Achievement",
      desc: "Recognizes outstanding talent and dedication for securing a top 25 position in the prestigious Rebase <01> hackathon.",
      skills: ["Problem Solving", "Innovation"],
      type: "Achievement",
      color: "gold",
      image: "/rebase.png" 
    },
    { 
      title: "Alpha (DSA with Java)", 
      issuer: "Apna College", 
      date: "Course Completion",
      desc: "Comprehensive mastery of Data Structures and Algorithms in Java, guided by Shradha Khapra.",
      skills: ["DSA", "Java", "Algorithms"],
      type: "Course",
      color: "purple",
      image: "/alpha_java.png" 
    },
    { 
      title: "Spectra 2K24", 
      issuer: "MCKV Institute", 
      date: "Apr 2024",
      desc: "Certificate of active participation in the Spectra 2K24 inter-college technical competition.",
      skills: ["Tech Competitions", "Teamwork"],
      type: "Participation",
      color: "blue",
      image: "/spectra.png" 
    },
    { 
      title: "Offer: Wonder Creative", 
      issuer: "Wonder Creative Studio", 
      date: "Nov 2025",
      desc: "Full Stack Developer (Backend-Heavy) offer. Role involves owning backend modules and REST APIs for legal SaaS.",
      skills: ["Backend Lead", "SaaS"],
      type: "Offer Letter",
      color: "emerald",
      image: "/wonder creative.png" 
    },
    { 
      title: "Offer: SMAK Tech", 
      issuer: "SMAK Tech", 
      date: "Nov 2024",
      desc: "Software Developer Intern offer for the Core Team. Focused on DB optimization and scalable microservices.",
      skills: ["Internship", "Optimization"],
      type: "Offer Letter",
      color: "emerald",
      image: "/smak_tech_internship.png" 
    },
    { 
      title: "Offer: Suvidha Foundation", 
      issuer: "Suvidha Foundation", 
      date: "Oct 2023",
      desc: "Web Development Intern offer. Responsibilities included full website rebuilding and performance tuning.",
      skills: ["Web Dev", "Performance"],
      type: "Offer Letter",
      color: "emerald",
      image: "/intern_offrlatter_jamuna_foundation.png" 
    },
    { 
      title: "Offer: Sansoft Infotech", 
      issuer: "Sansoft Infotech", 
      date: "Mar 2023",
      desc: "Android Developer Intern offer. Tasked with developing native Android applications using Java.",
      skills: ["Android", "Java"],
      type: "Offer Letter",
      color: "emerald",
      image: "/unifiedmentor_internshp.png" 
    },
    {
      title: "Offer: Erino",
      issuer: "Erino",
      date: "2024",
      desc: "SDE Intern offer for building scalable backend systems and contributing to core product development.",
      skills: ["Backend", "Development"],
      type: "Offer Letter",
      color: "emerald",
      image: "/sde_intern_erino.png"
    },
    {
      title: "Educational Content Development",
      issuer: "Educational Institution",
      date: "2024",
      desc: "Internship focused on creating and curating technical educational content for learners.",
      skills: ["Content", "Education"],
      type: "Internship",
      color: "blue",
      image: "/intership_educational_content_development.png"
    },
    {
      title: "Hackathon Winner",
      issuer: "Hackathon Competition",
      date: "2024",
      desc: "Won first place in competitive hackathon showcasing innovative technical solutions.",
      skills: ["Innovation", "Problem Solving"],
      type: "Achievement",
      color: "gold",
      image: "/hackathon_win.png"
    },
    {
      title: "Top 10 out of 4000 Candidates",
      issuer: "Competitive Selection",
      date: "2024",
      desc: "Achieved top 10 ranking among 4000 candidates in a highly competitive selection process.",
      skills: ["Excellence", "Competition"],
      type: "Achievement",
      color: "gold",
      image: "/4000_candiate_top10.png"
    }
  ]
};

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Architecture", href: "#architecture" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
              <span className="text-black font-bold font-mono">AS</span>
            </div>
            <span className="text-white font-bold tracking-wider hidden sm:block">ANIRBAN.DEV</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {item.name}
                </a>
              ))}
              <a href="#contact" className="bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-2 rounded-md text-sm font-bold transition-transform hover:scale-105">
                Hire Me
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const TypewriterCode = () => {
  const [text, setText] = useState('');
  const codeString = `class Developer extends FullStackEngineer {
  constructor() {
    super();
    this.profile = {
      name: "Anirban Santra",
      title: "Full Stack Developer",
      location: "Kolkata, India",
      experience: "1+ years | Backend-focused",
      skills: ["Node.js", "Express", "MongoDB", "React", "System Design", "Docker"],
      achievements: ["Hackathon Winner", "Rebase Top 15", "400+ LeetCode"],
      projects: ["Recruitment Platform", "Coding Platform", "Healthfy AI Healthcare"],
      status: "🟢 Available for hire"
    };
  }
}`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(codeString.slice(0, index));
      index++;
      if (index > codeString.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-mono text-sm sm:text-base leading-relaxed text-gray-300 whitespace-pre-wrap break-words">
      <pre>
        <code className="language-javascript">
          {text}
          <span className="animate-pulse text-emerald-500">_</span>
        </code>
      </pre>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-emerald-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 text-emerald-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Opportunities</span>
            </div>
            
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4">
                Full Stack <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                  Engineer
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-lg">
                {DATA.profile.tagline} {DATA.profile.subTagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition-all flex items-center gap-2">
                View Projects <ChevronRight size={20} />
              </a>
              <a href="#contact" className="px-8 py-3 bg-white/5 border border-white/10 hover:border-white/30 text-white rounded-lg transition-all font-medium">
                Contact Me
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {DATA.profile.stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Visual */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur opacity-20"></div>
            <div className="relative bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center px-4 py-3 border-b border-gray-800 bg-[#161b22]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="ml-4 text-xs text-gray-500 font-mono">about.js</div>
              </div>
              {/* Added overflow-x-hidden to prevent horizontal scrolling */}
              <div className="p-6 h-[400px] overflow-y-auto overflow-x-hidden custom-scrollbar">
                <div className="text-gray-500 font-mono text-sm mb-2">$ node about.js --execute</div>
                <TypewriterCode />
                <div className="mt-4 text-emerald-500 font-mono text-sm">
                  // Output: Ready to build the future! 🚀
                </div>
              </div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -right-4 -bottom-6 bg-[#161b22] p-4 rounded-lg border border-gray-800 shadow-xl hidden sm:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-500/20 p-2 rounded-lg">
                  <Database className="text-emerald-400" size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Backend Focus</div>
                  <div className="text-sm font-bold text-white">Distributed Sys</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('backend');
  
  const categories = [
    { id: 'languages', label: 'Languages', icon: Code },
    { id: 'backend', label: 'Backend & Infra', icon: Server },
    { id: 'ai_tools', label: 'AI & Tools', icon: Bot },
    { id: 'devops', label: 'DevOps', icon: Box },
  ];

  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
       <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 blur-3xl rounded-full pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-500/5 blur-3xl rounded-full pointer-events-none"></div>

       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              System <span className="text-emerald-400">Capabilities</span>
            </h2>
            <p className="text-gray-400 font-mono text-sm">
              &gt; INITIALIZING SKILL MATRIX... ACCESSING MODULES...
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 lg:gap-8">
            <div className="md:col-span-4 flex flex-col gap-3">
               {categories.map((cat) => (
                 <button
                   key={cat.id}
                   onClick={() => setActiveCategory(cat.id)}
                   className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left ${
                     activeCategory === cat.id 
                       ? 'bg-emerald-500/10 border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.15)] scale-[1.02]' 
                       : 'bg-[#111] border-gray-800 text-gray-400 hover:bg-[#161b22] hover:border-gray-700 hover:text-white'
                   }`}
                 >
                   <div className="flex items-center gap-3">
                     <div className={`p-2 rounded-lg ${activeCategory === cat.id ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-800/50 text-gray-500'}`}>
                        <cat.icon size={18} />
                     </div>
                     <span className="font-mono font-bold tracking-tight text-sm sm:text-base">{cat.label}</span>
                   </div>
                   {activeCategory === cat.id && <ChevronRight size={16} className="text-emerald-500 animate-pulse" />}
                 </button>
               ))}
               
               <div className="mt-4 p-5 bg-[#0a0a0a] border border-gray-800 rounded-xl font-mono text-xs text-gray-500 hidden md:block relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/50"></div>
                 <div className="flex justify-between mb-2">
                    <span>STATUS:</span>
                    <span className="text-emerald-500 animate-pulse">● ONLINE</span>
                 </div>
                 <div className="flex justify-between mb-2">
                    <span>MEMORY:</span>
                    <span className="text-blue-400">OPTIMIZED</span>
                 </div>
                 <div className="w-full bg-gray-800 h-1 rounded-full mt-2 overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[85%] animate-pulse"></div>
                 </div>
               </div>
            </div>

            <div className="md:col-span-8">
               <div className="bg-[#0d1117] border border-gray-800 rounded-xl p-6 min-h-[400px] relative overflow-hidden flex flex-col shadow-2xl">
                  <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-4 z-10">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50 hover:bg-red-500 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50 hover:bg-yellow-500 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50 hover:bg-green-500 transition-colors"></div>
                     </div>
                     <div className="font-mono text-xs text-gray-500 flex items-center gap-2">
                        <Server size={12} />
                        <span>root@anirban:~/skills/{activeCategory}</span>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
                     {DATA.skills[activeCategory]?.map((skill, idx) => (
                        <div 
                          key={skill} 
                          className="flex items-center justify-between p-3 bg-black/40 border border-gray-800 rounded hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all group cursor-default"
                          style={{ animation: `fadeIn 0.3s ease-out forwards`, animationDelay: `${idx * 50}ms`, opacity: 0 }}
                        >
                           <div className="flex items-center gap-3">
                              <span className="text-emerald-500/30 font-mono text-xs select-none">
                                {String(idx + 1).padStart(2, '0')}
                              </span>
                              <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                                {skill}
                              </span>
                           </div>
                           <div className="flex items-center gap-2">
                              <div className="w-12 sm:w-20 h-1 bg-gray-800 rounded-full overflow-hidden">
                                 <div 
                                    className="h-full bg-emerald-500 rounded-full group-hover:bg-emerald-400 transition-all duration-500" 
                                    style={{ width: `${Math.random() * 40 + 60}%` }}
                                 ></div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
                  
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20 z-0"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent pointer-events-none z-0"></div>
               </div>
               
               <div className="mt-4 flex justify-end gap-2 text-[10px] font-mono text-gray-600 uppercase">
                  <span>ID: {activeCategory.toUpperCase()}_MOD</span>
                  <span>•</span>
                  <span>VER: 2.0.5</span>
               </div>
            </div>
          </div>
       </div>

       <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
       `}</style>
    </section>
  );
};

const ProjectCard = ({ project, index }) => (
  <div
    className="group relative bg-[#121212] rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] flex flex-col h-full"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Image/Gradient Placeholder - Enterprise look */}
    <div className="h-48 bg-gray-900 relative overflow-hidden group-hover:from-gray-900 group-hover:to-emerald-950/30 transition-colors duration-500">
      
      {/* Project Image */}
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 scale-100 group-hover:scale-110 transition-transform"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>

      {/* Floating Status Badge */}
      <div className="absolute top-4 right-4 flex gap-2">
         <span className="px-2 py-1 bg-black/70 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-emerald-400 flex items-center gap-1 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {project.status}
         </span>
      </div>

      {/* Category Icon */}
      <div className="absolute bottom-4 left-4">
        <div className="p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
           <Zap className="text-emerald-500" size={24} />
        </div>
      </div>
    </div>

    <div className="p-6 flex-1 flex flex-col bg-[#121212]">
      <div className="mb-4">
        <div className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2 flex items-center gap-2">
           <span className="w-4 h-[1px] bg-emerald-500"></span>
           {project.category}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.desc}
        </p>
      </div>

      {/* Enterprise Stats Grid */}
      <div className="grid grid-cols-3 gap-2 mb-6 bg-[#0a0a0a] rounded-lg p-3 border border-white/5 shadow-inner">
        {project.stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-sm font-bold text-white mb-0.5">{stat.split(' ')[0]}</div>
            <div className="text-[9px] text-gray-500 uppercase tracking-tight font-medium">{stat.split(' ').slice(1).join(' ')}</div>
          </div>
        ))}
      </div>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {project.stack.map((tech) => (
          <span key={tech} className="px-2.5 py-1 bg-[#1a1a1a] text-gray-400 text-[10px] rounded border border-white/5 font-mono hover:border-emerald-500/30 hover:text-white transition-colors">
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-5 border-t border-white/5 mt-auto">
        <a href={project.links?.live} className="flex-1 py-3 bg-white text-black font-bold text-sm rounded-lg hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-2 group/btn">
           Live Demo <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"/>
        </a>
        <a href={project.links?.github} className="px-4 py-3 bg-transparent border border-gray-700 text-white rounded-lg hover:border-white hover:bg-white/5 transition-all flex items-center justify-center group/git">
           <Github size={20} className="group-hover/git:scale-110 transition-transform"/>
        </a>
      </div>
    </div>
  </div>
);

// Updated Open Source Dashboard with "Matrix Grid" Style
const OpenSourceDashboard = () => {
  const getTheme = (type) => {
    switch(type) {
      case "Healthcare": return { icon: Stethoscope, color: "text-teal-400", border: "border-teal-500/30", bg: "bg-teal-500/10", shadow: "shadow-teal-500/20" };
      case "Gaming": return { icon: Gamepad2, color: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10", shadow: "shadow-purple-500/20" };
      case "Education": return { icon: BookOpen, color: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10", shadow: "shadow-blue-500/20" };
      case "Media": return { icon: Film, color: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10", shadow: "shadow-orange-500/20" };
      case "E-commerce": return { icon: ShoppingCart, color: "text-yellow-400", border: "border-yellow-500/30", bg: "bg-yellow-500/10", shadow: "shadow-yellow-500/20" };
      case "Career": return { icon: Briefcase, color: "text-pink-400", border: "border-pink-500/30", bg: "bg-pink-500/10", shadow: "shadow-pink-500/20" };
      default: return { icon: Code, color: "text-gray-400", border: "border-gray-500/30", bg: "bg-gray-500/10", shadow: "shadow-gray-500/20" };
    }
  };

  return (
    <div className="space-y-8">
      {/* GitHub Stats Header */}
      <div className="bg-[#0d1117] border border-gray-800 rounded-xl p-6 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         <div className="absolute top-0 right-0 p-4 opacity-5">
            <Github size={150} />
         </div>
         
         <div className="relative z-10">
            <div className="flex items-center gap-2 text-emerald-400 mb-2 font-mono text-sm bg-emerald-500/10 px-3 py-1 rounded-full w-fit border border-emerald-500/20">
               <CheckCircle size={14} /> System Operational
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Open Source <span className="text-emerald-400">Matrix</span></h3>
            <p className="text-gray-400 font-mono text-sm max-w-lg">
               Contributing to the community through scalable, well-documented repositories.
            </p>
         </div>

         <div className="flex gap-4 sm:gap-8 relative z-10 bg-black/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
            {[
               { label: "Repositories", value: "15+" },
               { label: "Total Commits", value: "1.2k+" },
               { label: "Languages", value: "8+" }
            ].map((stat, i) => (
               <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-white font-mono">{stat.value}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</div>
               </div>
            ))}
         </div>
      </div>

      {/* Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
         {DATA.openSource.map((repo, i) => {
            const theme = getTheme(repo.type);
            
            return (
               <div key={i} className={`bg-[#0a0a0a] border ${theme.border} rounded-xl p-5 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${theme.shadow} group relative overflow-hidden`}>
                  
                  {/* Background Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${theme.bg} blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-4 relative z-10">
                     <div className="flex items-center gap-2 text-gray-400 font-mono text-xs">
                        <Terminal size={14} className={theme.color} />
                        <span>~/projects/{repo.name}</span>
                     </div>
                     <div className={`text-[10px] font-bold px-2 py-0.5 rounded border ${theme.border} ${theme.color} bg-black`}>
                        {repo.type}
                     </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 font-mono text-sm relative z-10">
                     <div className="space-y-2 mb-5">
                        {repo.gitStatus.map((status, idx) => (
                           <div key={idx} className="flex gap-3 text-xs">
                              <span className={theme.color}>$</span>
                              <span className="text-gray-300">{status}</span>
                           </div>
                        ))}
                        <div className="flex gap-3">
                           <span className={theme.color}>$</span>
                           <span className={`animate-pulse ${theme.bg.replace('/10', '')} w-2 h-4 block`}></span>
                        </div>
                     </div>

                     <p className="text-gray-500 text-xs mb-4 h-10 line-clamp-2 border-l-2 border-gray-800 pl-3 group-hover:border-gray-600 transition-colors">
                        {repo.desc}
                     </p>
                  </div>

                  {/* Footer Stats & Action */}
                  <div className="mt-auto border-t border-gray-800 pt-4 relative z-10">
                     <div className="flex justify-between items-center mb-4 text-xs text-gray-500">
                        <div className="flex items-center gap-3">
                           <span className="flex items-center gap-1 group-hover:text-yellow-400 transition-colors"><Star size={12}/> {repo.stats.stars}</span>
                           <span className="flex items-center gap-1 group-hover:text-white transition-colors"><GitBranch size={12}/> {repo.stats.forks}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                           <span className={`w-2 h-2 rounded-full ${theme.bg.replace('/10', '')}`}></span>
                           {repo.lang}
                        </div>
                     </div>
                     
                     <div className="flex items-center justify-between gap-3">
                        <div className="flex -space-x-2 overflow-hidden">
                           {repo.stack.slice(0,3).map((t, idx) => (
                              <div key={t} className="w-6 h-6 rounded-full bg-gray-800 border border-black flex items-center justify-center text-[8px] text-gray-400" title={t}>
                                 {t[0]}
                              </div>
                           ))}
                        </div>
                        <button className={`flex-1 flex items-center justify-center gap-2 py-2 rounded text-xs font-bold border ${theme.border} ${theme.color} hover:bg-white hover:text-black transition-all active:scale-95`}>
                           <Github size={12} /> See in GitHub
                        </button>
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
    </div>
  );
};

const ArchitectureVisualizer = () => {
  const [activeSystem, setActiveSystem] = useState(DATA.architecture.hld[0]);
  const [loading, setLoading] = useState(false);

  // When system changes, trigger a "scanning" effect
  const handleSystemChange = (system) => {
    if (system.title === activeSystem.title) return;
    setLoading(true);
    setTimeout(() => {
      setActiveSystem(system);
      setLoading(false);
    }, 400); // Simulated "decryption" delay
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8 h-auto lg:h-[600px]">
       {/* Left Panel: Menu */}
       <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="bg-[#0d1117] border border-gray-800 rounded-xl p-6 flex-1 overflow-y-auto custom-scrollbar">
             <h3 className="text-gray-400 font-mono text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
                <Scan size={12}/> Select Blueprint
             </h3>
             
             <div className="space-y-6">
                <div>
                   <div className="flex items-center gap-2 text-emerald-400 mb-2 font-bold text-sm">
                      <Globe size={14}/> High Level Design
                   </div>
                   <div className="space-y-1">
                      {DATA.architecture.hld.map((item) => (
                         <button
                           key={item.title}
                           onClick={() => handleSystemChange(item)}
                           className={`w-full text-left px-3 py-2 rounded text-sm transition-all flex items-center justify-between group ${
                             activeSystem.title === item.title 
                               ? 'bg-emerald-500/10 text-white border-l-2 border-emerald-500' 
                               : 'text-gray-400 hover:bg-white/5 hover:text-white border-l-2 border-transparent'
                           }`}
                         >
                            <span>{item.title}</span>
                            {activeSystem.title === item.title && <Zap size={12} className="text-emerald-500"/>}
                         </button>
                      ))}
                   </div>
                </div>

                <div>
                   <div className="flex items-center gap-2 text-blue-400 mb-2 font-bold text-sm">
                      <Cpu size={14}/> Low Level Design
                   </div>
                   <div className="space-y-1">
                      {DATA.architecture.lld.map((item) => (
                         <button
                           key={item.title}
                           onClick={() => handleSystemChange(item)}
                           className={`w-full text-left px-3 py-2 rounded text-sm transition-all flex items-center justify-between group ${
                             activeSystem.title === item.title 
                               ? 'bg-blue-500/10 text-white border-l-2 border-blue-500' 
                               : 'text-gray-400 hover:bg-white/5 hover:text-white border-l-2 border-transparent'
                           }`}
                         >
                            <span>{item.title}</span>
                            {activeSystem.title === item.title && <Zap size={12} className="text-blue-500"/>}
                         </button>
                      ))}
                   </div>
                </div>
             </div>
          </div>
       </div>

       {/* Right Panel: Holographic Image Viewer */}
       <div className="lg:col-span-8">
          <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl h-full relative overflow-hidden flex flex-col shadow-2xl group">
             
             {/* Canvas Header */}
             <div className="absolute top-0 left-0 right-0 p-4 border-b border-white/5 bg-black/50 backdrop-blur-sm z-20 flex justify-between items-center">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                   <span className="font-mono text-sm font-bold text-white uppercase">{activeSystem.title}</span>
                </div>
                <div className="flex gap-2 text-[10px] font-mono text-gray-500">
                   <span>SECURE CONNECTION</span>
                   <span>•</span>
                   <span>ID: {activeSystem.title.substring(0, 3).toUpperCase()}_001</span>
                </div>
             </div>

             {/* Image Container with Scanning Effect */}
             <div className="relative w-full h-full bg-gray-900 flex items-center justify-center overflow-hidden">
                
                {/* The Image */}
                <img 
                  src={activeSystem.image} 
                  alt={activeSystem.title} 
                  className={`w-full h-full object-cover transition-all duration-700 ${loading ? 'opacity-0 scale-105 blur-lg' : 'opacity-80 scale-100 blur-0'} grayscale group-hover:grayscale-0 group-hover:opacity-100`}
                />

                {/* Loading State Overlay */}
                {loading && (
                   <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-30">
                      <div className="text-emerald-500 font-mono text-sm animate-pulse">DECRYPTING SCHEMATIC...</div>
                      <div className="w-48 h-1 bg-gray-800 mt-2 rounded-full overflow-hidden">
                         <div className="h-full bg-emerald-500 animate-[loading_0.4s_ease-in-out]"></div>
                      </div>
                   </div>
                )}

                {/* Holographic Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60 pointer-events-none"></div>

                {/* Scanning Line Animation (only when not loading) */}
                {!loading && (
                   <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-[scan_3s_linear_infinite] pointer-events-none"></div>
                )}

                {/* Tags Overlay */}
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 z-20">
                   {activeSystem.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-black/70 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded">
                         {tag}
                      </span>
                   ))}
                </div>

                {/* Expand Button */}
                <div className="absolute bottom-6 right-6 z-20">
                   <button className="p-2 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg text-white hover:bg-emerald-500 hover:text-black transition-colors">
                      <Maximize2 size={18}/>
                   </button>
                </div>
             </div>

          </div>
       </div>

       <style>{`
          @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
          @keyframes loading {
             from { width: 0%; }
             to { width: 100%; }
          }
       `}</style>
    </div>
  );
};

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-24 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">System <span className="text-emerald-400">Architecture Lab</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore detailed high-level and low-level system designs. Select a blueprint to view the schematic.
          </p>
        </div>

        <ArchitectureVisualizer />
      </div>
    </section>
  );
};

const ExperienceItem = ({ exp, index, isEven }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = exp.icon;
  
  // Dynamic color styles
  const colors = {
     emerald: { text: "text-emerald-400", border: "border-emerald-500/50", bg: "bg-emerald-500/10", shadow: "shadow-emerald-500/20" },
     blue: { text: "text-blue-400", border: "border-blue-500/50", bg: "bg-blue-500/10", shadow: "shadow-blue-500/20" },
     purple: { text: "text-purple-400", border: "border-purple-500/50", bg: "bg-purple-500/10", shadow: "shadow-purple-500/20" },
     orange: { text: "text-orange-400", border: "border-orange-500/50", bg: "bg-orange-500/10", shadow: "shadow-orange-500/20" }
  };

  const theme = colors[exp.color];

  return (
    <div className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''} mb-12 group`}>
        
        {/* Central Connector Dot */}
        <div className="absolute left-4 md:left-1/2 -translate-x-[17px] md:-translate-x-1/2 top-0 z-20">
           <div 
             className={`w-9 h-9 rounded-full bg-[#0a0a0a] border-2 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-all duration-300 
             ${isOpen ? `scale-110 ${theme.border} ${theme.shadow} shadow-[0_0_15px_currentColor]` : 'border-gray-800'}`}
           >
              {/* Icon is now ALWAYS colored */}
              <Icon size={16} className={`transition-colors duration-300 ${theme.text}`} />
           </div>
        </div>

        {/* Card */}
        <div className="flex-1 ml-12 md:ml-0">
           <div 
             onClick={() => setIsOpen(!isOpen)}
             className={`
               relative overflow-hidden rounded-xl border p-6 cursor-pointer transition-all duration-500
               ${isOpen 
                  ? `${theme.bg} ${theme.border} shadow-lg ${theme.shadow}` 
                  : 'bg-[#111] border-white/5 hover:border-white/20 hover:bg-[#151515]'
               }
             `}
           >
              {/* Scanning Light Effect (Visible when open) */}
              {isOpen && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl z-0">
                   <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan"></div>
                </div>
              )}

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                   <div className="flex-1">
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                         {exp.role}
                      </h3>
                      <div className={`text-base font-medium transition-colors ${theme.text}`}>
                         {exp.company}
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <span className="whitespace-nowrap px-3 py-1 rounded-full text-xs font-mono font-bold border bg-black/30 border-white/10 text-gray-500">
                         {exp.period}
                      </span>
                      <div className={`p-1 rounded-full border border-white/10 bg-black/50 transition-transform duration-300 ${isOpen ? 'rotate-90 bg-white/10' : ''}`}>
                         <ChevronRight size={14} className="text-gray-400" />
                      </div>
                   </div>
                </div>

                {/* Expandable Content */}
                <div 
                  className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                >
                   <div className="overflow-hidden">
                      <p className="text-gray-300 text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4">
                         {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                         {exp.tech.map(t => (
                            <span key={t} className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-black/40 border transition-colors ${isOpen ? `${theme.text} border-white/10` : 'text-gray-600 border-transparent'}`}>
                               {t}
                            </span>
                         ))}
                      </div>
                   </div>
                </div>
              </div>
           </div>
        </div>

        {/* Empty Space for alignment on desktop */}
        <div className="flex-1 hidden md:block"></div>
    </div>
  );
};

const ExperienceTimeline = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"></div>
      <div className="absolute bottom-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
             <Briefcase className="text-emerald-400" /> 
             Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Journey</span>
          </h2>
          <p className="text-gray-400">
            Click on any role to view detailed contributions and tech stacks.
          </p>
        </div>
        
        <div className="relative">
           {/* Central Spine Line with Animated Light Beam */}
           <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 md:-ml-0.5 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-beam"></div>
           </div>
           
           <div className="space-y-4">
              {DATA.experience.map((exp, i) => (
                <ExperienceItem key={i} exp={exp} index={i} isEven={i % 2 === 0} />
              ))}
           </div>
           
           {/* Start Node */}
           <div className="absolute left-4 md:left-1/2 -translate-x-[11px] md:-translate-x-1/2 bottom-0 z-20 translate-y-full pt-8">
              <div className="w-6 h-6 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center animate-pulse">
                 <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              </div>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        @keyframes beam {
          0% { top: -30%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-beam {
          animation: beam 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

const TrophyIcon = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const CredentialVault = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-gray-400 text-xs font-mono mb-4">
             <Lock size={12} /> SECURE ARCHIVE // ACCESS GRANTED
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
             Credential <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Vault</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Verified achievements, certifications, and offer letters from industry leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DATA.achievements.map((cert, i) => {
            const isOffer = cert.type === "Offer Letter";
            
            const theme = isOffer 
              ? { border: "border-emerald-500/30", glow: "shadow-emerald-500/20", text: "text-emerald-400", badge: "bg-emerald-500/10" }
              : cert.color === "gold" 
                ? { border: "border-yellow-500/30", glow: "shadow-yellow-500/20", text: "text-yellow-400", badge: "bg-yellow-500/10" }
                : { border: "border-blue-500/30", glow: "shadow-blue-500/20", text: "text-blue-400", badge: "bg-blue-500/10" };

            return (
              <div key={i} className={`group relative h-80 rounded-xl bg-[#0a0a0a] border ${theme.border} overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${theme.glow}`}>
                
                <div className="absolute inset-0 z-0">
                   <img 
                     src={cert.image} 
                     alt={cert.title} 
                     className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 filter blur-sm group-hover:blur-0 scale-105 group-hover:scale-100"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent group-hover:via-black/40 transition-all duration-500"></div>
                </div>

                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                   
                   <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest border ${theme.border} ${theme.badge} ${theme.text} backdrop-blur-md`}>
                         {isOffer ? "Confidential" : "Verified"}
                      </span>
                   </div>

                   <div className={`w-10 h-10 rounded-lg border ${theme.border} ${theme.badge} flex items-center justify-center mb-4 backdrop-blur-md group-hover:scale-110 transition-transform duration-500`}>
                      {isOffer ? <FileKey size={18} className={theme.text}/> : <Medal size={18} className={theme.text}/>}
                   </div>

                   <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-lg font-bold text-white leading-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300">
                         {cert.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-mono mb-3">{cert.issuer} • {cert.date}</p>
                      
                      <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                         <p className="text-xs text-gray-300 leading-relaxed mb-4 border-l-2 border-white/20 pl-2">
                            {cert.desc}
                         </p>
                         <button className={`w-full py-2 rounded border ${theme.border} ${theme.badge} ${theme.text} text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2`}>
                            <Eye size={12} /> View Document
                         </button>
                      </div>
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black border-t border-white/10 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center">
          <span className="text-emerald-500 font-bold font-mono">AS</span>
        </div>
        <div className="text-gray-400 text-sm">
          © 2025 Anirban Santra. <br className="sm:hidden"/> Crafted with React & Tailwind.
        </div>
      </div>
      
      <div className="flex gap-6">
        <a href="https://github.com/anirbansantra748" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
        <a href="mailto:anirbansantra748@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors"><Mail size={20} /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-gray-300 font-sans selection:bg-emerald-500/30">
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .animate-blink { animation: blink 1s step-end infinite; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #0d1117; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #10b981; }
        html { scroll-behavior: smooth; }
      `}</style>

      <Navbar />
      
      <main>
        <Hero />
        
        <div className="border-y border-white/5 bg-black/50 backdrop-blur-sm py-4">
           <div className="max-w-7xl mx-auto px-4 flex justify-center">
             <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">
                <Download size={16} className="text-blue-500" />
                <span className="font-bold">Download Resume</span>
             </div>
           </div>
        </div>

        <SkillsSection />
        
        <section id="projects" className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Featured <span className="text-emerald-400">Work</span></h2>
                <p className="text-gray-400">Enterprise-grade applications serving real users.</p>
              </div>
              <div className="flex bg-white/5 p-1 rounded-lg">
                <button 
                  onClick={() => setActiveTab('projects')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'projects' ? 'bg-emerald-500 text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                >
                  Deployed
                </button>
                <button 
                  onClick={() => setActiveTab('repos')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'repos' ? 'bg-emerald-500 text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                >
                  Open Source
                </button>
              </div>
            </div>

            {activeTab === 'projects' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DATA.projects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            ) : (
              <OpenSourceDashboard />
            )}
          </div>
        </section>

        <ArchitectureSection />
        
        <ExperienceTimeline />

        {/* New Credential Vault Section */}
        <CredentialVault />

        {/* Contact Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#050505]"></div>
          <div className="max-w-3xl mx-auto px-4 relative z-10">
             <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 sm:p-12 shadow-2xl">
                <div className="text-center mb-10">
                   <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something <span className="text-emerald-400">Amazing</span></h2>
                   <p className="text-gray-400">
                     I'm always open to discussing new opportunities, interesting projects, or just having a chat about space exploration.
                   </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                   <a href={`mailto:${DATA.profile.email}`} className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-gray-800 p-4 rounded-xl transition-all group">
                      <Mail className="text-emerald-400 group-hover:scale-110 transition-transform" />
                      <div className="text-left">
                         <div className="text-xs text-gray-500">Email Me</div>
                         <div className="text-white font-medium">{DATA.profile.email}</div>
                      </div>
                   </a>
                   <a href="#" className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-gray-800 p-4 rounded-xl transition-all group">
                      <Linkedin className="text-blue-400 group-hover:scale-110 transition-transform" />
                      <div className="text-left">
                         <div className="text-xs text-gray-500">Connect on</div>
                         <div className="text-white font-medium">LinkedIn</div>
                      </div>
                   </a>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Name" className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
                      <input type="email" placeholder="Email" className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
                   </div>
                   <textarea rows="4" placeholder="Your Message..." className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"></textarea>
                   <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-1">
                      Send Message
                   </button>
                </form>
             </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}