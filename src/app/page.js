"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import CustomCursor from '../components/CustomCursor';
import {
  FiMail, FiMapPin, FiChevronRight, FiExternalLink,
  FiCode, FiTrendingUp, FiMessageCircle, FiSend, FiMenu, FiX,
  FiDownload, FiArrowRight, FiSun, FiMoon, FiBriefcase,
  FiUsers, FiClock, FiStar, FiAward, FiCheck, FiShoppingCart,
  FiSearch, FiPenTool, FiServer
} from 'react-icons/fi';
import {
  FaWhatsapp, FaReact, FaNodeJs, FaLinkedin, FaGithub,
  FaTwitter, FaDocker, FaAws
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
  SiMongodb, SiPostgresql, SiGraphql, SiKubernetes
} from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    {
      category: 'Core Technologies',
      skills: [
        { name: 'Next.js', icon: <SiNextdotjs />, level: 96 },
        { name: 'React', icon: <FaReact />, level: 94 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 92 },
        { name: 'Node.js', icon: <FaNodeJs />, level: 92 },
      ]
    },
    {
      category: 'Specialized',
      skills: [
        { name: 'Three.js', icon: <TbBrandThreejs />, level: 85 },
        { name: 'GraphQL', icon: <SiGraphql />, level: 86 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 88 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 87 },
      ]
    }
  ];

  const services = [
    {
      title: 'Enterprise Solutions',
      description: 'Scalable applications with microservices architecture',
      icon: <FiBriefcase />,
      features: ['Cloud Architecture', 'Real-time Systems', 'API Design']
    },
    {
      title: 'Performance Engineering',
      description: 'High-performance applications with optimal UX',
      icon: <FiTrendingUp />,
      features: ['Core Web Vitals', 'CDN Optimization', 'Caching Strategies']
    },
    {
      title: '3D & Immersive',
      description: 'Interactive 3D experiences and visualizations',
      icon: <TbBrandThreejs />,
      features: ['WebGL', 'AR/VR', 'Real-time Rendering']
    },
    {
      title: 'DevOps & Cloud',
      description: 'Infrastructure and deployment automation',
      icon: <FaAws />,
      features: ['CI/CD', 'Containerization', 'Cloud Services']
    }
  ];

  const projects = [
    {
      title: 'Enterprise SaaS Platform',
      category: 'Full Stack',
      description: 'Scalable SaaS solution serving 10K+ users with real-time analytics and AI features',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
      year: '2024'
    },
    {
      title: '3D Product Configurator',
      category: 'WebGL',
      description: 'Interactive 3D product visualization with AR capabilities',
      technologies: ['Three.js', 'React', 'WebGL', 'GSAP'],
      year: '2023'
    },
    {
      title: 'Financial Analytics',
      category: 'Data Visualization',
      description: 'Real-time financial dashboard with predictive analytics',
      technologies: ['D3.js', 'TypeScript', 'FastAPI', 'PostgreSQL'],
      year: '2023'
    }
  ];

  const stats = [
    { value: '75+', label: 'Projects Completed', icon: <FiCode /> },
    { value: '50+', label: 'Satisfied Clients', icon: <FiUsers /> },
    { value: '8+', label: 'Years Experience', icon: <FiClock /> },
    { value: '99%', label: 'Client Retention', icon: <FiStar /> }
  ];

  const achievements = [
    { 
      title: 'Web Development', 
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      icon: <FiCode />,
      color: 'from-blue-600/50 to-blue-700/20',
      iconBg: 'bg-blue-500/20',
      linkColor: 'text-blue-400',
      borderColor: 'border-blue-400/50',
      hoverBg: 'hover:bg-blue-600/20'
    },
    { 
      title: 'E-Commerce Solutions', 
      description: 'Complete online stores with payment integration and inventory management systems.',
      icon: <FiShoppingCart />,
      color: 'from-green-600/50 to-green-700/20',
      iconBg: 'bg-green-500/20',
      linkColor: 'text-green-400',
      borderColor: 'border-green-400/50',
      hoverBg: 'hover:bg-green-600/20'
    },
    { 
      title: 'SEO Optimization', 
      description: 'Improve your search rankings and drive organic traffic to your website effectively with proven SEO strategies.',
      icon: <FiSearch />,
      color: 'from-orange-600/50 to-orange-700/20',
      iconBg: 'bg-orange-500/20',
      linkColor: 'text-orange-400',
      borderColor: 'border-orange-400/50',
      hoverBg: 'hover:bg-orange-600/20'
    },
    { 
      title: 'Digital Marketing', 
      description: 'Strategic marketing campaigns to grow your online presence and business reach through targeted digital channels.',
      icon: <FiTrendingUp />,
      color: 'from-red-600/50 to-red-700/20',
      iconBg: 'bg-red-500/20',
      linkColor: 'text-red-400',
      borderColor: 'border-red-400/50',
      hoverBg: 'hover:bg-red-600/20'
    },
    { 
      title: 'Graphic Design', 
      description: 'Creative visual solutions including branding, logos, and marketing materials for businesses.',
      icon: <FiPenTool />,
      color: 'from-purple-600/50 to-purple-700/20',
      iconBg: 'bg-purple-500/20',
      linkColor: 'text-purple-400',
      borderColor: 'border-purple-400/50',
      hoverBg: 'hover:bg-purple-600/20'
    },
    { 
      title: 'Server Management', 
      description: 'Hosting and server management with dedicated hosting solutions for optimal performance.',
      icon: <FiServer />,
      color: 'from-cyan-600/50 to-cyan-700/20',
      iconBg: 'bg-cyan-500/20',
      linkColor: 'text-cyan-400',
      borderColor: 'border-cyan-400/50',
      hoverBg: 'hover:bg-cyan-600/20'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const unsub = scrollYProgress.onChange((v) => {
      setIsScrolled(v > 0.02);
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <CustomCursor />
      <Head>
        <title>Muhammed Afsal Ch — Senior Full-Stack Developer (Mundakkal, Malappuram)</title>
        <meta name="description" content="Muhammed Afsal Ch — Full-stack web developer from Mundakkal, Malappuram, Kerala. Expert in web development, e-commerce, SEO, and digital marketing." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-950 to-slate-950" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(217, 119, 6, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />

        {/* Gradient Orbs - Ancient colors */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <motion.nav
        className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-xl border-b border-amber-800/30' : 'bg-transparent border-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-teal-600 rounded-full blur-lg opacity-40" />
                <img src="/afsu.png" alt="Afsal" className="relative w-10 h-10 rounded-full object-cover border-2 border-cyan-500 shadow-sm" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent">
                Afsal.dev
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative text-sm font-medium transition-all duration-300 ${activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-300'
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
              >
                <FiSun className="text-yellow-400" />
              </button>

              <a href="https://wa.me/919645917277" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center space-x-2 px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all">
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
              >
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800"
            >
              <div className="px-6 py-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block py-3 text-gray-300 hover:text-white font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a href="https://wa.me/919645917277" target="_blank" rel="noopener noreferrer" className="w-full mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium text-center block">
                  WhatsApp: 9645917277
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5"
        />

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-green-300">Available for freelance work</span>
                </div>
              </motion.div>

              <motion.h1
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight text-left"
              >
                <span className="block text-purple-400">Afsal Ch</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-semibold text-gray-200 mb-6"
              >
                Web Designer & Developer
              </motion.h2>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-2 rounded-full bg-gray-800/40 text-sm text-gray-300">Web Development</span>
                <span className="px-3 py-2 rounded-full bg-gray-800/40 text-sm text-gray-300">Graphic Design</span>
                <span className="px-3 py-2 rounded-full bg-gray-800/40 text-sm text-gray-300">Digital Marketing</span>
              </div>

              <p className="text-gray-400 max-w-2xl mb-8">
                Expert in creating stunning digital experiences through E-Commerce solutions, SEO optimization, and digital marketing strategies. Transforming ideas into powerful, results-driven websites.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <a href="#work" className="inline-flex items-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-2xl">
                  View My Work
                  <FiArrowRight className="ml-3" />
                </a>
                <a href="#" className="inline-flex items-center px-6 py-4 border border-gray-700 text-gray-300 rounded-full">
                  View Resume
                </a>
              </div>

              <div className="flex items-center gap-4">
                {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full bg-gray-800/30 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors">
                    <Icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>

            {/* Large framed profile (right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-md lg:max-w-xl">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-blue-700/40 via-purple-700/20 to-pink-600/20 blur-3xl opacity-60 pointer-events-none" />

                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/70 to-gray-800/40 border border-gray-800/60 shadow-2xl">
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-purple-500/20 blur-lg" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-pink-500/25 blur-md" />

                  <div className="p-6">
                    <div className="bg-black rounded-xl overflow-hidden">
                      <img src="/afsu.png" alt="Afsal" className="w-full h-96 object-cover block" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I'm <span className="text-white font-semibold">Muhammed Afsal Ch</span>, a passionate Web Designer & Developer in Malappuram, Kerala. With over 7 years of experience in creating digital experiences that drive business results, my expertise spans across E-Commerce development, SEO optimization, digital marketing, and graphic design.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I believe in creating websites that not only look stunning but also convert visitors into customers. Every project I undertake is designed with user experience, search engine optimization, and business growth in mind.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                When I'm not coding or designing, you can find me exploring the latest web technologies, studying market trends, or helping businesses establish their digital presence through strategic marketing initiatives.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/50 text-blue-300 rounded-full text-sm font-medium">Web Design</span>
                <span className="px-4 py-2 bg-green-500/20 border border-green-400/50 text-green-300 rounded-full text-sm font-medium">Web Development</span>
                <span className="px-4 py-2 bg-orange-500/20 border border-orange-400/50 text-orange-300 rounded-full text-sm font-medium">E-Commerce</span>
                <span className="px-4 py-2 bg-purple-500/20 border border-purple-400/50 text-purple-300 rounded-full text-sm font-medium">SEO Optimization</span>
                <span className="px-4 py-2 bg-pink-500/20 border border-pink-400/50 text-pink-300 rounded-full text-sm font-medium">Digital Marketing</span>
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 rounded-full text-sm font-medium">Graphic Design</span>
              </div>
            </motion.div>

            {/* Right - Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Decorative blur background */}
                <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl" />

                <div className="relative grid md:grid-cols-2 gap-6">
                  {/* Projects Completed */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-600/20 flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500/50 group-hover:to-blue-600/30 transition-all">
                          <FiBriefcase className="text-2xl text-blue-300" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-2">50+</div>
                        <p className="text-gray-400 text-sm">Projects Completed</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Happy Clients */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/30 to-green-600/20 flex items-center justify-center mx-auto mb-4 group-hover:from-green-500/50 group-hover:to-green-600/30 transition-all">
                          <FiUsers className="text-2xl text-green-300" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-2">30+</div>
                        <p className="text-gray-400 text-sm">Happy Clients</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Cups of Coffee */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300 h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/30 to-orange-600/20 flex items-center justify-center mx-auto mb-4 group-hover:from-orange-500/50 group-hover:to-orange-600/30 transition-all">
                          <span className="text-2xl">☕</span>
                        </div>
                        <div className="text-3xl font-bold text-white mb-2">1000+</div>
                        <p className="text-gray-400 text-sm">Cups of Coffee</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Years of Experience */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 flex items-center justify-center mx-auto mb-4 group-hover:from-purple-500/50 group-hover:to-purple-600/30 transition-all">
                          <FiAward className="text-2xl text-purple-300" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-2">7+</div>
                        <p className="text-gray-400 text-sm">Years of Experience</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Mastery across modern technology stacks with focus on scalability and performance
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="space-y-16">
            {skills.map((category, idx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-4" />
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl text-blue-400">{skill.icon}</div>
                            <span className="font-medium text-white">{skill.name}</span>
                          </div>
                          <span className="font-bold text-white">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: i * 0.05 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32"
          >
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              Specialized <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300">
                    <div className="text-3xl text-blue-400 mb-6">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <FiCheck className="text-green-500 mr-3" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center">
              Selected works showcasing innovation and technical excellence
            </p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center justify-between mb-6">
                        <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                        <span className="text-gray-400 text-sm">{project.year}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-8 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-6">
                        <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center group">
                          View Case Study
                          <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="p-3 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white transition-colors">
                          <FiExternalLink />
                        </button>
                      </div>
                    </div>
                    <div className="lg:w-1/3 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl" />
                      <div className="relative h-64 lg:h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                        <div className="text-6xl font-bold text-gray-700 opacity-50">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <a href="/projects" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/50 transition-all hover:scale-105 transform">
              View More Projects
              <FiArrowRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Achievements - Redesigned */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              What I <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Offer</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Accent glow for all cards */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${achievement.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-out`} />
                
                <div className={`relative h-full bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 transition-all duration-500 ease-out p-8 group-hover:bg-white/15 ${achievement.borderColor} group-hover:${achievement.borderColor}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 ease-out ${achievement.iconBg} group-hover:scale-110`}>
                      <div className="text-2xl text-gray-300 transition-all duration-500 ease-out">
                        {achievement.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-500 ease-out">{achievement.title}</h4>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{achievement.description}</p>

                    {/* Learn More Link */}
                    <a href="#" className={`inline-flex items-center font-semibold transition-all duration-500 ease-out group/link ${achievement.linkColor} hover:translate-x-1`}>
                      Learn more
                      <FiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform duration-500 ease-out" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you. Drop me a message and let's get a conversation started together!
            </p>
          </motion.div>

          {/* Contact Form and Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form - Glassmorphism */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-8">Send me a message</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2 text-sm font-medium">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2 text-sm font-medium">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 text-sm font-medium">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 text-sm font-medium">Subject</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                        placeholder="Project Collaboration"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 transform"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Info & Availability - Glassmorphism */}
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-6">Get in touch</h3>
                
                {/* Email - Glass Card */}
                <div className="flex items-center space-x-4 mb-6 p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-blue-400/50 hover:bg-white/15 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-600/20 flex items-center justify-center group-hover:from-blue-500/50 group-hover:to-blue-600/30 transition-all">
                    <FiMail className="text-blue-300 text-lg" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-300 uppercase tracking-widest font-semibold">Email</div>
                    <a href="mailto:hello@afsal.dev" className="text-white font-medium hover:text-blue-300 transition-colors">hello@afsal.dev</a>
                  </div>
                </div>

                {/* Phone - Glass Card */}
                <div className="flex items-center space-x-4 mb-6 p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-green-400/50 hover:bg-white/15 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/30 to-green-600/20 flex items-center justify-center group-hover:from-green-500/50 group-hover:to-green-600/30 transition-all">
                    <FaWhatsapp className="text-green-300 text-lg" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-300 uppercase tracking-widest font-semibold">WhatsApp</div>
                    <a href="https://wa.me/919645917277" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-green-300 transition-colors">+91 9645917277</a>
                  </div>
                </div>

                {/* Location - Glass Card */}
                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-purple-400/50 hover:bg-white/15 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 flex items-center justify-center group-hover:from-purple-500/50 group-hover:to-purple-600/30 transition-all">
                    <FiMapPin className="text-purple-300 text-lg" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-300 uppercase tracking-widest font-semibold">Location</div>
                    <div className="text-white font-medium">Kerala, India</div>
                  </div>
                </div>
              </div>

              {/* Availability - Premium Glass */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse mr-3" />
                    <div className="text-white font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Current Availability</div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-gray-300">Freelance Projects</span>
                      <span className="text-green-300 font-bold">Available</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-gray-300">Full-time Roles</span>
                      <span className="text-amber-300 font-bold">Considering</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Say Hi Section - Premium Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden mb-16"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/50 via-pink-600/50 to-orange-600/50 rounded-3xl blur-2xl opacity-60" />
            <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-12 text-center border border-white/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-transparent pointer-events-none" />
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">Let's create something amazing together!</h3>
                <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
                  Have a project in mind? I'm excited to collaborate. Reach out and let's build something extraordinary that makes an impact!
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="mailto:hello@afsal.dev" className="flex items-center px-8 py-4 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/40 text-white font-semibold rounded-full hover:from-white/30 hover:to-white/20 hover:border-white/60 transition-all hover:scale-105 transform shadow-lg">
                    <FiMail className="mr-2" />
                    Send Email
                  </a>
                  <a href="https://wa.me/919645917277" target="_blank" rel="noopener noreferrer" className="flex items-center px-8 py-4 bg-gradient-to-r from-green-500/30 to-emerald-500/20 backdrop-blur-sm border border-green-400/40 text-white font-semibold rounded-full hover:from-green-500/50 hover:to-emerald-500/40 hover:border-green-400/60 transition-all hover:scale-105 transform shadow-lg">
                    <FaWhatsapp className="mr-2" />
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Column 1: Branding */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white text-sm">A</span>
                </div>
                <span className="text-lg font-bold text-white">Muhammed Afsal Ch</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Web Designer & Developer crafting beautiful digital experiences that inspire growth and innovation.
              </p>
              <div className="flex items-center space-x-4 mt-6">
                {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#expertise" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#work" className="text-gray-400 hover:text-white transition-colors">Works</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </motion.div>

            {/* Column 3: Say Hello */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-6">Say Hello</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <a href="mailto:hello@afsal.dev" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <FiMail className="mr-2" /> hello@afsal.dev
                  </a>
                </div>
                <div>
                  <a href="https://wa.me/919645917277" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <FaWhatsapp className="mr-2" /> +91 96459 17277
                  </a>
                </div>
                <div className="text-gray-400">
                  <div className="flex items-center">
                    <FiMapPin className="mr-2" /> Kerala, India
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <div>© 2025 Muhammed Afsal Ch. All rights reserved.</div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/25 flex items-center justify-center z-40"
      >
        <FiArrowRight className="transform -rotate-90" />
      </motion.button>
    </div>
  );
}