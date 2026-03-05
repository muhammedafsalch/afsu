"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiExternalLink, FiFilter, FiLayers, FiCode, FiSmartphone, FiActivity } from 'react-icons/fi';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import CustomCursor from '../../components/CustomCursor';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      slug: 'aicamal',
      title: 'AIC Amal - Donation Platform',
      category: 'Web & Mobile App',
      description: 'A comprehensive donation platform for different kinds of financial support and fundraising. Cross-platform solution with web app, Android & iOS mobile apps.',
      image: '/projects/aicamal/web.png',
      technologies: ['React Native', 'Next.js', 'Node.js', 'MongoDB'],
      link: '/projects/aicamal',
      demoLink: 'https://aicamal.app/'
    },
    {
      id: 2,
      slug: 'samastha',
      title: 'Samastha Centenary',
      category: 'App & Web Platform',
      description: 'The official app & web platform for Samastha Centenary — celebrating 100 years (1926–2026). 50K+ downloads, 4.9★ rating, serving 33,333 camp members.',
      image: '/projects/samastha/1.png',
      technologies: ['React Native', 'Next.js', 'Express.js', 'Firebase'],
      link: '/projects/samastha',
      demoLink: 'https://centenary.samastha.info/'
    },
    {
      id: 3,
      slug: 'alnasr',
      title: 'Al Nasr - Al Ansar App',
      category: 'App & Web Platform',
      description: 'The official digital ecosystem for Al-Ansar Muslim Welfare Board, supporting 250+ students free of cost via secure mobile & web platform.',
      image: '/projects/alnasr/2.png',
      technologies: ['React Native', 'Next.js', 'Firebase', 'Razorpay'],
      link: '/projects/alnasr',
      demoLink: 'https://alnasr.info/'
    },
    {
      id: 4,
      slug: 'alansar',
      title: 'Al Ansar Islamic Complex',
      category: 'Institutional Web',
      description: 'The premier digital gateway to Al Ansar Islamic Complex, featuring multi-institutional hubs and specialized educational resources.',
      image: '/projects/alansar/2.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: '/projects/alansar',
      demoLink: 'https://alansar.info/'
    },
    {
      id: 5,
      slug: 'lexora',
      title: 'Lexora Business Solutions',
      category: 'Corporate Website',
      description: 'Professional corporate portal for Lexora, offering company formation, legal translation, and digital business solutions in Qatar.',
      image: '/projects/lexora/1.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Business Setup'],
      link: '/projects/lexora',
      demoLink: 'https://www.lexoraservices.com/'
    },
    {
      id: 6,
      slug: 'kripzo',
      title: 'Kripzo Snacks',
      category: 'E-Commerce',
      description: 'Digital storefront for Kripzo, showcasing authentic Kerala banana chips and traditional snacks made with pure coconut oil.',
      image: '/projects/kripzo/1.png',
      technologies: ['React', 'E-Commerce', 'Next.js'],
      link: '/projects/kripzo',
      demoLink: 'https://www.kripzo.com/'
    },
    {
      id: 7,
      slug: 'media_samastha',
      title: 'Samastha Media Gallery',
      category: 'Media Portal',
      description: 'The official media hub for Samastha Centenary, hosting a massive collection of photos, videos, and news updates.',
      image: '/projects/media_samastha/4.png',
      technologies: ['Next.js', 'Cloud Storage', 'Image Optimization'],
      link: '/projects/media_samastha',
      demoLink: 'https://media.samastha.info/'
    },
    {
      id: 8,
      slug: 'umra-qafila',
      title: 'Umra Qafila',
      category: 'App Landing Page',
      description: 'The official web landing page for Umra Qafila, a comprehensive spiritual companion app for Umrah.',
      image: '/projects/umra-qafila/1.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: '/projects/umra-qafila',
      demoLink: 'https://umraqafila.iqrasolutions.in/'
    },
    {
      id: 9,
      slug: 'umra-qafila-app',
      title: 'Umra Qafila App',
      category: 'Mobile Application',
      description: 'A comprehensive spiritual companion app for Umrah, offering Islamic prayers, dikr, dua, and popular map locations.',
      image: '/projects/umra-qafila/app/1.jpeg',
      technologies: ['React Native', 'Expo', 'Mobile App'],
      link: '/projects/umra-qafila-app',
      demoLink: 'https://play.google.com/store/apps/details?id=com.umrah.qafila'
    }
  ];

  const categories = useMemo(() => {
    return ['All', ...new Set(projects.map(p => p.category))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory, projects]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <CustomCursor />


      {/* Hero Section */}
      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span>Full Portfolio</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight transition-colors">
              Innovative <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Digital Works</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed mb-12 transition-colors">
              Transforming complex challenges into elegant digital experiences across Fintech, E-commerce, and Enterprise sectors.
            </p>

            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${selectedCategory === cat
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-600/20 scale-105'
                    : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/5 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, i) => (
                <motion.div
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative flex flex-col"
                >
                  <div className="relative bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:bg-gray-50 dark:hover:bg-white/[0.08] shadow-sm hover:shadow-xl dark:shadow-none">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-500 z-10" />
                      {/* Using placeholder gradient if image fails, but ideally project.image exists */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute top-6 left-6 z-20">
                        <span className="px-3 py-1 bg-white/90 dark:bg-black/60 backdrop-blur-md border border-black/5 dark:border-white/20 text-gray-900 dark:text-white rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 transition-colors">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8 items-center">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-[11px] font-bold text-gray-500 dark:text-gray-500 flex items-center transition-colors">
                            <span className="w-1 h-1 rounded-full bg-blue-500 mr-2" />
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-black/5 dark:border-white/5 transition-colors">
                        <Link href={project.link} className="flex items-center text-gray-900 dark:text-white font-bold group/link transition-colors">
                          View Case Study
                          <div className="ml-2 w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">
                            <FiArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          <FiExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative p-12 md:p-20 rounded-[3rem] bg-gray-50 dark:bg-slate-900/50 border border-black/5 dark:border-white/10 text-center overflow-hidden transition-all backdrop-blur-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 dark:bg-blue-600/10 blur-3xl rounded-full" />

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight transition-colors">
              Have a project in mind?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto transition-colors">
              I'm always open to discussing new original ideas and ambitious projects.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link href="/#contact" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold shadow-xl hover:scale-105 active:scale-95 transition-all">
                Let's Work Together
              </Link>
              <a href="https://wa.me/919645917277" className="px-8 py-4 bg-white dark:bg-white/10 text-black dark:text-white border border-black/5 dark:border-white/10 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-white/20 transition-all">
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
