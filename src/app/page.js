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
  SiMongodb, SiPostgresql, SiGraphql, SiKubernetes,
  SiExpress, SiJavascript, SiPhp, SiMui, SiSupabase,
  SiMysql, SiAppwrite, SiExpo, SiReact
} from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';
import { ThemeToggle } from '../components/ThemeToggle';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

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
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    {
      category: 'Frontend & Mobile',
      skills: [
        { name: 'Next.js', icon: <SiNextdotjs />, level: 96 },
        { name: 'React', icon: <FaReact />, level: 95 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 98 },
        { name: 'Material UI', icon: <SiMui />, level: 92 },
        { name: 'React Native', icon: <FaReact />, level: 90 },
        { name: 'Expo', icon: <SiExpo />, level: 88 },
        { name: 'MERN Stack', icon: <FaNodeJs />, level: 95 },
        { name: 'Dynamic Websites', icon: <FiCode />, level: 95 }
      ]
    },
    {
      category: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 94 },
        { name: 'Express.js', icon: <SiExpress />, level: 92 },
        { name: 'PHP', icon: <SiPhp />, level: 85 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 92 },
        { name: 'MySQL', icon: <SiMysql />, level: 88 },
        { name: 'Supabase', icon: <SiSupabase />, level: 86 },
        { name: 'Appwrite', icon: <SiAppwrite />, level: 85 },
        { name: 'CRM Websites', icon: <FiUsers />, level: 90 }
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
      demoLink: 'https://aicamal.app/',
      image: '/projects/aicamal/web.png'
    },
    {
      title: 'Samastha Centenary',
      category: 'App & Web Platform',
      description: 'The official digital ecosystem for Samastha Centenary (1926–2026), featuring a massive 33,333-member camp registration, live quiz automation, and real-time event updates serving 50K+ users.',
      technologies: ['React Native', 'Next.js', 'Express.js', 'Firebase'],
      year: '2025',
      link: '/projects/samastha',
      demoLink: 'https://centenary.samastha.info/',
      image: '/projects/samastha/1.png'
    },
    {
      title: 'Al Nasr - Al Ansar App',
      category: 'App & Web Platform',
      description: 'A dedicated social impact platform supporting 250+ residential students with free education and welfare. Built with full financial transparency and secure donation gateways.',
      technologies: ['React Native', 'Next.js', 'Firebase', 'Razorpay'],
      year: '2026',
      link: '/projects/alnasr',
      demoLink: 'https://alnasr.info/',
      image: '/projects/alnasr/2.png'
    },
    {
      title: 'Al Ansar Islamic Complex',
      category: 'Institutional Web Platform',
      description: 'Premier Islamic educational institution providing quality education and community services with multiple centers of excellence.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      year: '2023',
      link: '/projects/alansar',
      demoLink: 'https://alansar.info/',
      image: '/projects/alansar/2.png'
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



  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
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
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-gray-50 dark:bg-black">
        {/* Deep Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1)_0%,rgba(243,244,246,1)_100%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(0,0,0,1)_100%)]" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />

        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-900/20 rounded-full blur-[120px]"
        />
      </div>



      {/* Premium Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] bg-violet-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2.5 px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full mb-8 backdrop-blur-md transition-colors"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors">Available for new projects</span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-[0.9]">
                <span className="inline-block bg-gradient-to-b from-black via-black to-black/40 dark:from-white dark:via-white dark:to-white/40 bg-clip-text text-transparent transition-all">
                  Afsal
                </span>
                <br />
                <span className="inline-block text-indigo-600 dark:text-indigo-500 transition-colors">
                  Ch
                </span>
              </h1>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-4 mb-8"
              >
                <div className="h-px w-12 bg-indigo-500" />
                <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400">
                  Creative Web Architect & Strategist
                </h2>
              </motion.div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mb-10 leading-relaxed transition-colors">
                Building high-performance digital products that combine <span className="text-black dark:text-white font-bold transition-colors">stunning aesthetics</span> with <span className="text-black dark:text-white font-bold transition-colors">technical excellence</span>.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="#projects"
                  className="group relative inline-flex items-center px-8 py-4 bg-white dark:bg-white text-black font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 overflow-hidden shadow-xl border border-gray-200 dark:border-transparent"
                >
                  <span className="relative z-10 flex items-center">
                    View My Projects
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-2xl transition-all hover:bg-gray-50 dark:hover:bg-white/10 active:scale-95 backdrop-blur-sm shadow-sm"
                >
                  Let's Connect
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 mt-12">
                {[
                  { icon: FaGithub, href: '#' },
                  { icon: FaLinkedin, href: '#' },
                  { icon: FaTwitter, href: '#' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="p-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-all hover:-translate-y-1"
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Premium Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-500/20 rounded-full blur-[80px]" />

              {/* Image Container */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 to-violet-600/30 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative p-3 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-2xl overflow-hidden shadow-2xl">
                  {/* Glass highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                  <div className="relative rounded-[2rem] overflow-hidden bg-gray-950">
                    <img
                      src="/afsu.png"
                      alt="Muhammed Afsal Ch"
                      className="w-full aspect-[4/5] object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />

                    {/* Floating Info Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-white font-bold">Muhammed Afsal Ch</p>
                          <p className="text-gray-400 text-xs mt-1">Full-Stack Developer</p>
                        </div>
                        <div className="p-2 bg-indigo-600 rounded-lg">
                          <FiAward className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Redesigned Premium About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        {/* Background Decorative Blur */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Column: Biography */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center space-x-2 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Discover My Story</span>
                  </motion.div>
                  <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight transition-colors">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 transition-all duration-300">Me</span>
                  </h2>
                </div>

                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium transition-colors">
                  <p>
                    I'm <span className="text-black dark:text-white font-xl font-black tracking-tight transition-colors">Muhammed Afsal Ch</span>, a seasoned Web Architect and Strategist based in Malappuram, Kerala. With over <span className="text-indigo-600 dark:text-indigo-400 transition-colors">7 years</span> of deep-rooted experience, I help brands bridge the gap between complex ideas and seamless digital reality.
                  </p>
                  <p>
                    My philosophy is simple: <span className="italic text-gray-700 dark:text-gray-300 underline decoration-indigo-500/30 underline-offset-4">Performance is not just a metric, it's a feeling.</span> I create high-conversion platforms where elite design meets industrial-grade engineering.
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-base">
                    Beyond code, I'm a lifelong learner and digital strategist, helping businesses scale through data-driven SEO and high-impact marketing initiatives.
                  </p>
                </div>

                {/* Modern Skill Chips */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {[
                    { label: 'Web Design', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
                    { label: 'Cloud Architecture', color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
                    { label: 'E-Commerce', color: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
                    { label: 'SEO Authority', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
                    { label: 'Strategic Marketing', color: 'bg-rose-500/10 text-rose-400 border-rose-500/20' }
                  ].map((chip, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className={`px-5 py-2.5 rounded-2xl border ${chip.color} text-sm font-bold shadow-sm backdrop-blur-sm cursor-default hover:bg-opacity-20 transition-all`}
                    >
                      {chip.label}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Stats Grid */}
            <div className="grid grid-cols-2 gap-6 relative">
              {/* Decorative side orb */}
              <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

              {[
                { label: 'Projects Completed', value: '50+', icon: FiBriefcase, color: 'text-blue-600 dark:text-blue-400', glow: 'bg-blue-400/20' },
                { label: 'Happy Clients', value: '30+', icon: FiUsers, color: 'text-emerald-600 dark:text-emerald-400', glow: 'bg-emerald-400/20' },
                { label: 'Commit Count', value: '2.5k+', icon: FiCode, color: 'text-indigo-600 dark:text-indigo-400', glow: 'bg-indigo-400/20' },
                { label: 'Years of Experience', value: '7+', icon: FiAward, color: 'text-violet-600 dark:text-violet-400', glow: 'bg-violet-400/20' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="relative group h-full"
                >
                  <div className="relative h-full p-8 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[2.5rem] backdrop-blur-2xl transition-all group-hover:bg-gray-50 dark:group-hover:bg-white/10 group-hover:border-black/10 dark:group-hover:border-white/20 shadow-xl overflow-hidden">
                    {/* Animated Glow on Hover */}
                    <div className={`absolute -inset-[100%] ${stat.glow} blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none`} />

                    <div className="relative z-10 space-y-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform duration-500 shadow-sm dark:shadow-none`}>
                        <stat.icon className="text-2xl" />
                      </div>
                      <div>
                        <div className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter transition-colors">
                          {stat.value}
                        </div>
                        <div className="text-sm font-bold text-gray-500 uppercase tracking-widest leading-snug">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
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
                      <div className="relative bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 shadow-sm dark:shadow-none">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl text-blue-600 dark:text-blue-400">{skill.icon}</div>
                            <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                          </div>
                          <span className="font-bold text-gray-700 dark:text-white">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: i * 0.05 }}
                            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full"
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
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Specialized <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Services</span>
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
                  <div className="h-full bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 shadow-sm">
                    <div className="text-3xl text-blue-600 dark:text-blue-400 mb-6">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                          <FiCheck className="text-green-600 dark:text-green-500 mr-3" />
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

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-center">
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
                <div className="bg-white dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-black/5 dark:border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden shadow-sm dark:shadow-none">
                  <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
                    <div className="lg:w-1/2 flex flex-col justify-center">
                      <div className="flex items-center justify-between mb-6">
                        <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider transition-colors">
                          {project.category}
                        </span>
                        <span className="text-gray-500 font-mono text-sm">{project.year}</span>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg font-light transition-colors">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700/50 shadow-sm transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-6 mt-auto">
                        <a href={project.link} className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-gray-950 hover:bg-gray-800 dark:hover:bg-gray-200 font-bold rounded-lg transition-colors group/btn shadow-md">
                          View Case Study
                          <FiArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                    <div className="lg:w-1/2 w-full relative group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="relative h-64 lg:h-[400px] w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/60 shadow-2xl bg-gray-50 dark:bg-gray-900/80 group overflow-hidden transition-colors">

                        {/* Interactive Overlay to prevent accidental clicks while scrolling */}
                        <a href={project.link} className="absolute inset-0 z-30 cursor-pointer hover:bg-black/5 dark:hover:bg-black/10 transition-colors" />

                        {/* Browser-like header */}
                        <div className="absolute top-0 left-0 w-full p-3 flex items-center z-40 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
                          <div className="flex space-x-2 mr-4">
                            <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500 shadow-sm" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500 shadow-sm" />
                            <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500 shadow-sm" />
                          </div>
                          <div className="flex-1">
                            <div className="bg-white dark:bg-gray-950 px-3 py-1 rounded text-[10px] text-gray-400 dark:text-gray-500 font-mono text-center overflow-hidden text-ellipsis whitespace-nowrap border border-gray-200 dark:border-gray-800 max-w-[200px] mx-auto opacity-70 transition-colors">
                              {project.demoLink}
                            </div>
                          </div>
                        </div>

                        {/* Static Showcase Image */}
                        <div className="relative w-full h-full pt-12 overflow-hidden bg-white z-20">
                          <img
                            src={project.image}
                            alt={`${project.title} Preview`}
                            className="w-full h-auto object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                          />
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              What I <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Offer</span>
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

                <div className={`relative h-full bg-white dark:bg-white/10 backdrop-blur-lg rounded-2xl border border-black/5 dark:border-white/20 shadow-sm dark:shadow-none transition-all duration-500 ease-out p-8 group-hover:bg-gray-50 dark:group-hover:bg-white/15 ${achievement.borderColor} group-hover:${achievement.borderColor}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 dark:from-white/5 to-transparent rounded-2xl pointer-events-none" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 ease-out ${achievement.iconBg} group-hover:scale-110`}>
                      <div className="text-2xl text-gray-700 dark:text-gray-300 transition-all duration-500 ease-out">
                        {achievement.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-500 ease-out">{achievement.title}</h4>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">{achievement.description}</p>

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

      {/* Premium Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Let's <span className="text-indigo-600 dark:text-indigo-500">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed transition-colors">
              Have a visionary project in mind? Let's turn your ideas into a digital masterpiece.
            </p>
          </motion.div>

          {/* Contact Form and Info Grid */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form - Premium Glass */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-br from-gray-200 dark:from-white/10 to-transparent shadow-sm dark:shadow-none"
            >
              <div className="bg-white/80 dark:bg-black/40 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-gray-100 dark:border-none">
                <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 pointer-events-none">
                  <FiSend className="text-8xl text-gray-900 dark:text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-1">First Name</label>
                      <input
                        type="text"
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white dark:focus:bg-white/10 transition-all"
                        placeholder="e.g. John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-1">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white dark:focus:bg-white/10 transition-all"
                        placeholder="e.g. john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-1">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white dark:focus:bg-white/10 transition-all resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-black dark:bg-white text-white dark:text-black font-bold rounded-2xl hover:bg-gray-900 dark:hover:bg-gray-100 transition-all active:scale-[0.98] shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <FiSend className="text-lg" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center space-y-10"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: FiMail, label: 'Email', value: 'hello@afsal.dev', href: 'mailto:hello@afsal.dev', color: 'text-blue-600 dark:text-blue-400' },
                    { icon: FaWhatsapp, label: 'WhatsApp', value: '+91 9645917277', href: 'https://wa.me/919645917277', color: 'text-green-600 dark:text-green-400' },
                    { icon: FiMapPin, label: 'Location', value: 'Kerala, India', color: 'text-rose-600 dark:text-rose-400' }
                  ].map((info, idx) => (
                    <div key={idx} className="flex items-center space-x-5 p-5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[1.5rem] hover:bg-white dark:hover:bg-white/10 transition-all group shadow-sm dark:shadow-none">
                      <div className={`w-12 h-12 rounded-xl bg-white dark:bg-white/5 flex items-center justify-center ${info.color} group-hover:scale-110 transition-transform shadow-sm dark:shadow-none`}>
                        <info.icon className="text-xl" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest transition-colors">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-lg text-gray-900 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg text-gray-900 dark:text-white font-medium transition-colors">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Badge */}
              <div className="p-8 bg-indigo-50 dark:bg-indigo-600/10 border border-indigo-100 dark:border-indigo-500/20 rounded-[2rem] relative overflow-hidden group shadow-sm dark:shadow-none">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                <div className="relative z-10 flex items-center space-x-6">
                  <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
                  <div>
                    <p className="text-gray-900 dark:text-white font-bold text-lg">Currently accepting new projects</p>
                    <p className="text-indigo-600 dark:text-indigo-300/70 text-sm">Response time: Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-black/5 dark:border-white/10 text-gray-900 dark:text-white shadow-2xl flex items-center justify-center z-40 transition-all hover:bg-gray-100 dark:hover:bg-white/20"
      >
        <FiArrowRight className="transform -rotate-90 text-xl" />
      </motion.button>
    </div>
  );
}