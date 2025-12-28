"use client";
import { motion } from 'framer-motion';
import { FiArrowRight, FiExternalLink, FiMenu, FiX, FiSun } from 'react-icons/fi';
import { FaWhatsapp, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import CustomCursor from '../../components/CustomCursor';
import Head from 'next/head';

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '/#about' },
    { id: 'expertise', label: 'Expertise', href: '/#expertise' },
    { id: 'projects', label: 'Projects', href: '/projects' },
    { id: 'contact', label: 'Contact', href: '/#contact' }
  ];

  const projects = [
    {
      id: 1,
      title: 'AIC Amal - Donation Platform',
      category: 'Web Development',
      description: 'A comprehensive donation platform for different kinds of financial support and fundraising. Cross-platform solution with web app, Android & iOS mobile apps for collecting general donations, subscriptions, sponsorships, campaigns, and more.',
      image: '/projects/amal.jpg',
      technologies: ['React Native', 'Next.js', 'Node.js', 'MongoDB', 'Razorpay'],
      link: '#',
      demoLink: '#'
    },
    {
      id: 2,
      title: 'PlantBox E-Commerce Platform',
      category: 'E-Commerce',
      description: 'A complete e-commerce platform that allows users to buy and sell different plants online. It features a user-friendly interface, secure payment integration, and a wide range of plant products.',
      image: '/projects/plantbox.jpg',
      technologies: ['Commerce', 'Razorpay', 'Online Shopping', 'WordPress'],
      link: '#',
      demoLink: '#'
    },
    {
      id: 3,
      title: 'Samastha Centenary',
      category: 'Web Development',
      description: 'A Web Platform developed for SAMHA, India Data Coordination as a tribute to Samastha International Centenary Conference.',
      image: '/projects/samastha.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      link: '#',
      demoLink: '#'
    },
    {
      id: 4,
      title: 'Dynamic QR Code Generator',
      category: 'Web Application',
      description: 'Generate QR codes on-the-fly, update their destination anytime. Perfect for printed materials, business cards, and marketing campaigns.',
      image: '/projects/qr.jpg',
      technologies: ['Next.js', 'QR API', 'Node.js', 'AWS'],
      link: '#',
      demoLink: '#'
    },
    {
      id: 5,
      title: 'Social Media Campaign Maker',
      category: 'Web Application',
      description: 'Elevate Your Social Media with Custom Photo Frames. Transform your photos with stunning frames to amplify your events, campaigns, or business LinkedIn customization.',
      image: '/projects/social.jpg',
      technologies: ['Next.js', 'Canvas API', 'TypeScript', 'Supabase'],
      link: '#',
      demoLink: '#'
    },
    {
      id: 6,
      title: 'Yatheem Dress Donation Platform',
      category: 'Web Application',
      description: 'A comprehensive platform built for Yatheem Dress Campaign. Integrated Razorpay with API + Webhook for secure payments, donation tracking, and impact measurement.',
      image: '/projects/yatheem.jpg',
      technologies: ['Razorpay', 'MongoDB', 'WeStore API', 'WebHook'],
      link: '#',
      demoLink: '#'
    },
    {
      id: 7,
      title: 'Organization Stock Management',
      category: 'Web Application',
      description: 'Multi-branch inventory management system with QR code integration, role-based access control, compliant management, and warehouse tracking for educational institutions.',
      image: '/projects/stock.jpg',
      technologies: ['Next.js', 'QR Codes', 'Role Management', 'Analytics'],
      link: '#',
      demoLink: '#'
    },
    {
      id: 8,
      title: 'MIC ASAS Results Management',
      category: 'Web Application',
      description: 'Multi-branch results management system for educational institutions, allowing efficient handling of student records, grading, reporting with built-in analytics.',
      image: '/projects/asas.jpg',
      technologies: ['Next.js', 'MongoDB', 'Analytics', 'Reporting'],
      link: '#',
      demoLink: '#'
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <CustomCursor />
      <Head>
        <title>Projects - Muhammed Afsal Ch</title>
        <meta name="description" content="Portfolio of projects by Muhammed Afsal Ch, full-stack web developer from Mundakkal, Malappuram, Kerala." />
      </Head>

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-950 to-slate-950" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(217, 119, 6, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <motion.nav
        className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-xl border-b border-amber-800/30' : 'bg-transparent border-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-teal-600 rounded-full blur-lg opacity-40" />
                <img src="/afsu.png" alt="Afsal" className="relative w-10 h-10 rounded-full object-cover border-2 border-cyan-500 shadow-sm" />
              </div>
              <a href="/" className="text-xl font-bold bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent">
                Afsal.dev
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
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

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
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
      </motion.nav>

      {/* Projects Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Explore my portfolio of web development, e-commerce solutions, and innovative digital experiences built with modern technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                <div className="relative h-full bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-blue-400/50 transition-all duration-500 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    {/* Category Badge */}
                    <div className="inline-block mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/50 text-blue-300 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                      <a href={project.link} className="flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors group/link">
                        View Details
                        <FiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white transition-colors">
                        <FiExternalLink className="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/50 via-pink-600/50 to-orange-600/50 rounded-3xl blur-2xl opacity-60" />
            <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-12 text-center border border-white/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-transparent pointer-events-none" />
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-lg">
                  Let's work together to bring your ideas to life with modern web solutions
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="/#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 transform">
                    Start a Conversation
                    <FiArrowRight className="ml-2" />
                  </a>
                  <a href="/" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/40 text-white font-semibold rounded-full hover:from-white/30 hover:to-white/20 hover:border-white/60 transition-all">
                    Back to Home
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="/#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                <li><a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-6">Connect</h4>
              <div className="flex items-center space-x-4">
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
          </div>

          <div className="border-t border-gray-800/50 pt-8 text-center text-sm text-gray-500">
            © 2025 Muhammed Afsal Ch. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
