"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiExternalLink, FiMenu, FiX, FiSun, FiLayers, FiCode, FiSmartphone, FiArrowLeft, FiFilter, FiActivity, FiMail, FiMapPin, FiChevronRight, FiTrendingUp, FiMessageCircle, FiSend, FiDownload, FiBriefcase, FiUsers, FiClock, FiStar, FiAward, FiCheck, FiShoppingCart, FiSearch, FiPenTool, FiServer } from 'react-icons/fi';
import { FaWhatsapp, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaReact, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiMongodb, SiPostgresql, SiGraphql, SiKubernetes } from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';
import Link from 'next/link';
import CustomCursor from '../components/CustomCursor';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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
      title: 'AIC Amal - Donation Platform',
      category: 'Web & Mobile App',
      description: 'A comprehensive donation platform with web app, Android & iOS mobile apps for collecting general donations, subscriptions, and sponsorships.',
      technologies: ['React Native', 'Next.js', 'Node.js', 'MongoDB'],
      year: '2024',
      link: '/projects/aicamal',
      demoLink: 'https://aicamal.app/'
    },
    {
      title: 'Samastha Centenary',
      category: 'Web Portal',
      description: 'The official digital platform developed for SAMHA, featuring a Global Expo Portal, Digital Library, and Podcast Streaming.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      year: '2025',
      link: '/projects/samastha',
      demoLink: 'https://centenary.samastha.info/'
    },
    {
      title: 'Al Nasr Donation Platform',
      category: 'FinTech / Charity',
      description: 'Support Al Ansar Islamic Complex through various donation programs including Orphan Sponsorship and Hafiz Sponsorship.',
      technologies: ['Next.js', 'Node.js', 'Razorpay', 'MongoDB'],
      year: '2024',
      link: '/projects/alnasr',
      demoLink: 'https://alnasr.alansar.info/'
    },
    {
      title: 'Al Ansar Islamic Complex',
      category: 'Institutional Web Platform',
      description: 'Premier Islamic educational institution providing quality education and community services with multiple centers of excellence.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      year: '2023',
      link: '/projects/alansar',
      demoLink: 'https://alansar.info/'
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
    <div className="min-h-screen bg-[#050505] text-gray-100 selection:bg-blue-500/30">
      <CustomCursor />
      <Head>
        <title>Muhammed Afsal | Senior Multi-Stack Developer</title>
        <meta name="description" content="Senior Full-stack developer specializing in high-performance digital ecosystems, FinTech solutions, and premium web experiences." />
      </Head>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        body {
          font-family: 'Outfit', sans-serif;
          background-color: #050505;
        }
      `}</style>

      {/* Clean Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[#050505]" />
      </div>

      {/* Luxury Static Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#050505]/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="group flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
              M
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">Afsal.dev</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1 bg-white/5 rounded-full p-1 border border-white/5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.id === 'home' ? '#' : `#${item.id}`}
                onClick={(e) => {
                  if (item.id === 'home') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://wa.me/919645917277" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:scale-105 transition-all active:scale-95 shadow-lg shadow-white/5">
              Let's Talk
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/5 text-white"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#050505] p-6 md:hidden flex flex-col pt-32"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-bold text-white hover:text-blue-500 transition-colors tracking-tighter"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-auto pb-12">
              <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest font-bold font-mono">Connect Socially</p>
              <div className="flex space-x-6">
                {[FaGithub, FaLinkedin, FaTwitter, FaInstagram].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white text-xl">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Luxury Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[180px] rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-600/10 blur-[180px] rounded-full translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative mb-12"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 animate-pulse" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 ring-8 ring-white/5">
                <img src="/afsu.png" alt="Muhammed Afsal" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-[#050505] flex items-center justify-center shadow-lg" title="Available for projects">
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white/5 border border-white/10 text-gray-400 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                <span>Available for high-impact collaborations</span>
              </div>

              <h1 className="text-6xl md:text-[7rem] font-bold text-white mb-8 tracking-tighter leading-[0.85] italic">
                CRAFTING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 not-italic">DIGITAL EMPIRES</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
                I am <span className="text-white font-medium">Muhammed Afsal</span>, a Senior Full-Stack Architect building premium, high-performance web & mobile ecosystems for global visionaries.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="#work" className="group px-10 py-5 bg-white text-black rounded-full font-bold transition-all hover:scale-105 active:scale-95 flex items-center shadow-2xl shadow-white/10">
                  Explore Projects
                  <FiArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-full font-bold transition-all hover:bg-white/10">
                  Download CV
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Refined About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-white mb-8 tracking-tighter italic">THE <br /><span className="text-4xl not-italic text-blue-500">ARCHITECT.</span></h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
                With a decade of specialized experience, I orchestrate the convergence of aesthetic precision and engineering excellence. Based in <span className="text-white">Kerala, India</span>, I have partnered with industry leaders to deploy over 75+ scalable digital ecosystems.
              </p>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                My philosophy is simple: <span className="text-white italic">Code as art, performance as priority.</span> I don't just build websites; I engineer experiences that define brands.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
                <div>
                  <div className="text-4xl font-bold text-white mb-2 tracking-tighter">75+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Deployments</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2 tracking-tighter">99%</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Retention</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-blue-600/30 blur-[120px] rounded-full opacity-20" />
              <div className="relative h-full w-full bg-white/[0.02] border border-white/10 rounded-[3rem] overflow-hidden flex items-center justify-center p-12">
                <div className="text-center">
                  <FiAward size={80} className="text-blue-500 mb-6 mx-auto opacity-50" />
                  <h3 className="text-2xl font-bold text-white mb-4">Quality First</h3>
                  <p className="text-gray-500 text-sm">Every line of code is audited for performance and security.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Technical Stack */}
      <section id="expertise" className="py-32 relative bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tighter">TECHNICAL STACK</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.flatMap(cat => cat.skills).map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-white/[0.03] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="text-4xl text-gray-500 group-hover:text-blue-500 transition-all duration-500 mb-6 group-hover:scale-110">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-1 tracking-tight">{skill.name}</h4>
                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden mt-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    className="h-full bg-blue-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact Projects Grid */}
      <section id="work" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <h2 className="text-5xl font-bold text-white mb-6 tracking-tighter">FEATURED <span className="text-blue-500 italic">WORK.</span></h2>
              <p className="text-gray-400 font-light text-lg">Building high-performance digital ecosystems for global visionaries.</p>
            </div>
            <Link href="/projects" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold transition-all flex items-center group">
              View Full Case Studies
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative h-[600px] rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent z-10" />
                <img
                  src={`/projects/${project.id === 1 ? 'amal' : project.id === 2 ? 'samastha' : 'alnasr'}.jpg`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60"
                />

                <div className="absolute bottom-0 left-0 w-full p-12 z-20 text-left">
                  <div className="flex space-x-2 mb-6">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] rounded-full font-bold tracking-widest uppercase">{tech}</span>
                    ))}
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4 line-clamp-1">{project.title}</h3>
                  <p className="text-gray-400 mb-8 line-clamp-2 font-light">{project.description}</p>
                  <Link href={project.link} className="inline-flex items-center text-white font-bold group/link">
                    Dive Into Case Study
                    <div className="ml-4 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:border-blue-600 transition-all">
                      <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Services / What I Offer */}
      <section className="py-32 relative bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-5xl font-bold text-white mb-8 tracking-tighter">WHAT I <br /><span className="text-blue-500 italic">DELIVER.</span></h2>
              <p className="text-gray-400 font-light leading-relaxed">Crafting high-end digital experiences through specialized engineering and design precision.</p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
              {achievements.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-blue-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[4rem] overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 p-1 md:p-1.5 shadow-2xl">
            <div className="bg-[#050505] rounded-[3.8rem] p-12 md:p-24 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
              <div className="relative z-10 text-center">
                <h2 className="text-6xl md:text-8xl font-bold text-white mb-12 tracking-tighter italic">LET'S BUILD <br /><span className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">THE FUTURE.</span></h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
                  <a href="mailto:hello@afsal.dev" className="group flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all border border-white/10">
                      <FiMail className="text-white text-xl" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Email Me</div>
                      <div className="text-white font-bold">hello@afsal.dev</div>
                    </div>
                  </a>
                  <div className="hidden md:block w-px h-12 bg-white/10" />
                  <a href="https://wa.me/919645917277" className="group flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-all border border-green-500/20">
                      <FaWhatsapp className="text-green-500 text-xl" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">WhatsApp Chat</div>
                      <div className="text-white font-bold">+91 96459 17277</div>
                    </div>
                  </a>
                </div>

                <a href="https://wa.me/919645917277" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-12 py-6 bg-white text-black rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/5">
                  START A PROJECT
                  <FiArrowRight className="ml-3" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Minimal Footer */}
      <footer className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-24">
            <Link href="/" className="group flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                M
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-white tracking-tight">Muhammed Afsal</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Digital Architect</div>
              </div>
            </Link>

            <div className="flex space-x-12">
              {navItems.map(item => (
                <a key={item.id} href={`#${item.id}`} className="text-sm font-bold text-gray-500 hover:text-white transition-all uppercase tracking-widest">{item.label}</a>
              ))}
            </div>

            <div className="flex space-x-4">
              {[FaGithub, FaLinkedin, FaTwitter, FaInstagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.3em] font-black text-gray-600">
            <div>© 2025 ALL RIGHTS RESERVED</div>
            <div className="flex space-x-12 mt-8 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <div className="mt-8 md:mt-0">DESIGNED BY AFSAL.DEV</div>
          </div>
        </div>
      </footer>

      {/* Minimal Back to Top */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-12 right-12 w-16 h-16 rounded-full bg-white text-black shadow-2xl flex items-center justify-center z-50 hover:scale-110 active:scale-95 transition-all"
      >
        <FiArrowRight className="transform -rotate-90" size={24} />
      </motion.button>
    </div>
  );
}