"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiArrowLeft, FiExternalLink, FiChevronRight, FiCheck,
    FiCpu, FiLayout, FiSmartphone, FiTarget, FiZap, FiBox,
    FiActivity, FiLayers, FiMaximize2, FiX, FiGrid
} from 'react-icons/fi';
import { FaQuran, FaMosque, FaSchool, FaBook } from 'react-icons/fa';
import Link from 'next/link';

const AlAnsarCaseStudy = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const project = {
        title: "Al Ansar Islamic Complex",
        subtitle: "A Digital Gateway to 40 Years of Educational Excellence",
        client: "Al Ansar Muslim Welfare Board",
        year: "2024 - 2025",
        role: "Lead Full Stack Architect",
        brief: "Al Ansar Islamic Complex (est. 1984) is a premier institutional hub in Kerala. The challenge was to consolidate 10+ diverse institutions—ranging from an Arabic College to an Orphanage and a Computer Lab—into a single, high-performance digital ecosystem that reflects both traditional Islamic values and modern educational standards.",
        technologies: ["Next.js 14", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
        stats: [
            { label: "Legacy", value: "41+ Years" },
            { label: "Students", value: "1K+" },
            { label: "Buildings", value: "10+" },
            { label: "Campus", value: "50+ Acres" }
        ],
        challenges: [
            "Information Architecture: Managing complex data for 10 distinct institutions under one domain.",
            "Visual Balance: Harmonizing spiritual aesthetics with modern, clean UI/UX design.",
            "Mobile Performance: Ensuring rich image galleries and interactive maps load instantly on variable networks.",
            "Multicultural Reach: Crafting a layout that caters to both local community and global supporters."
        ],
        solutions: [
            "Modular Design System: Developed a flexible component library that adapts its theme for each institution segment.",
            "Responsive Hierarchy: Implemented a 'Core-to-Detail' navigation flow that prevents user fatigue.",
            "Next.js Optimization: Utilized server-side rendering and edge caching for sub-second page loads.",
            "Interactive Storytelling: Used subtle scroll-bound animations to guide users through the complex's 40-year history."
        ]
    };

    const screenshots = [
        { src: '/projects/alansar/2.png', title: 'Home Interface', desc: 'Modern landing with grid-based discovery' },
        { src: '/projects/alansar/3.png', title: 'Impact Dashboard', desc: 'Visualizing 40 years of service' },
        { src: '/projects/alansar/5.png', title: 'Institution Hub', desc: 'Academic colleges and curricula' },
        { src: '/projects/alansar/6.png', title: 'Gallery System', desc: 'Rich media showcase of campus life' },
        { src: '/projects/alansar/4.png', title: 'Spiritual Center', desc: 'Masjid and community prayer portal' },
        { src: '/projects/alansar/1.png', title: 'Admissions Flow', desc: 'Integrated enrollment management' },
        { src: '/projects/alansar/7.png', title: 'Philosophy', desc: 'Vision and mission visualization' },
        { src: '/projects/alansar/8.png', title: 'Contact & Map', desc: 'Interactive campus location' }
    ];

    const institutions = [
        { name: "Arabic College", icon: <FaSchool />, desc: "Standardized secular and Arabic studies." },
        { name: "Thahfeelul Quran", icon: <FaQuran />, desc: "Expert Tajweed and memorization center." },
        { name: "Al Bayan Library", icon: <FaBook />, desc: "Extensive digital and physical text collection." },
        { name: "Al Ansar Masjid", icon: <FaMosque />, desc: "The spiritual heart of the campus." }
    ];

    return (
        <div className="min-h-screen bg-[#fafafa] dark:bg-[#05060b] text-slate-900 dark:text-slate-100 selection:bg-teal-500/30 font-sans">



            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-slate-200 dark:border-white/5">
                <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 dark:bg-blue-600/5 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <div className="mb-10">
                            <Link href="/projects" className="inline-flex items-center text-sm font-bold text-teal-600 dark:text-teal-400 hover:translate-x-[-4px] transition-transform">
                                <FiArrowLeft className="mr-2" /> Back to Case Studies
                            </Link>
                        </div>
                        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full mb-8">
                            <span className="w-2 h-2 rounded-full bg-teal-500" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Institutional Platform • {project.year}</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9] italic">
                            Al Ansar <br />
                            <span className="text-teal-600 not-italic">Showcase</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
                            {project.subtitle}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-t border-slate-200 dark:border-white/10 pt-12">
                        {project.stats.map((stat, i) => (
                            <div key={i}>
                                <h4 className="text-4xl font-black text-slate-900 dark:text-white mb-2">{stat.value}</h4>
                                <p className="text-xs font-bold text-teal-600 uppercase tracking-[0.2em]">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative group cursor-pointer"
                        onClick={() => setSelectedImage(screenshots[0].src)}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/20 dark:border-white/10 bg-slate-200 dark:bg-slate-800 shadow-2xl">
                            <img src={screenshots[0].src} alt="Al Ansar Live" className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                            <div className="absolute bottom-8 right-8">
                                <a
                                    href="https://alansar.info/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-white text-teal-600 rounded-2xl font-black flex items-center shadow-2xl hover:bg-teal-600 hover:text-white transition-all transform hover:scale-105"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Experience Live <FiExternalLink className="ml-2" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-24 bg-white dark:bg-black/20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2">
                            <h2 className="text-10xl font-black text-slate-100 dark:text-white/5 absolute -mt-16 -ml-4 pointer-events-none overflow-hidden h-32 uppercase select-none">Project Story</h2>
                            <h3 className="text-3xl font-black mb-8 relative z-10">The Mission</h3>
                            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                                {project.brief}
                            </p>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-600 mb-6">
                                        <FiTarget size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold mb-4">The Challenge</h4>
                                    <ul className="space-y-4">
                                        {project.challenges.map((c, i) => (
                                            <li key={i} className="flex items-start text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                                <FiX className="text-rose-500 mt-1 mr-3 flex-shrink-0" /> {c}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-8 rounded-3xl bg-teal-50 dark:bg-teal-900/10 border border-teal-200 dark:border-teal-500/20">
                                    <div className="w-12 h-12 rounded-2xl bg-teal-600/10 flex items-center justify-center text-teal-600 mb-6 font-bold">
                                        <FiZap size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold mb-4">The Solution</h4>
                                    <ul className="space-y-4">
                                        {project.solutions.map((s, i) => (
                                            <li key={i} className="flex items-start text-sm text-slate-600 dark:text-teal-400 leading-relaxed">
                                                <FiCheck className="text-teal-600 mt-1 mr-3 flex-shrink-0" /> {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">The Icons Layer</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {institutions.map((inst, i) => (
                                        <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 flex flex-col items-center justify-center text-center">
                                            <div className="text-2xl text-teal-600 mb-2">{inst.icon}</div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">{inst.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-8 bg-black text-white rounded-[2rem] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                <h4 className="text-xs font-black text-teal-400 uppercase tracking-widest mb-4">Primary Role</h4>
                                <p className="text-2xl font-black mb-2">{project.role}</p>
                                <p className="text-sm opacity-60">Full stack architecture, design systems, and cloud deployment strategy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Language / Showcase */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Visual <span className="text-teal-600">Language</span></h2>
                            <p className="text-slate-500 dark:text-slate-400">Exploring the interface and aesthetic layers developed for the platform.</p>
                        </div>
                        <div className="hidden md:flex space-x-2">
                            <FiCpu className="text-teal-600" />
                            <FiLayout className="text-teal-600" />
                            <FiSmartphone className="text-teal-600" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {screenshots.map((shot, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative"
                                onClick={() => setSelectedImage(shot.src)}
                            >
                                <div className="bg-slate-100 dark:bg-white/5 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 aspect-[14/10] cursor-zoom-in">
                                    <img src={shot.src} alt={shot.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                        <h5 className="text-white font-black text-xl mb-1">{shot.title}</h5>
                                        <p className="text-teal-400 text-xs uppercase tracking-widest font-bold">{shot.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Philosophy / Tech Grid */}
            <section className="py-24 bg-slate-100 dark:bg-black/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-20 dark:opacity-5">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-teal-500 rounded-full scale-150" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-teal-500 rounded-full scale-150" />
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black mb-8 italic">Engineering <span className="text-teal-600 not-italic">Resilience</span></h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                                For an institution that has stood for 40 years, the digital foundation had to be equally resilient. We prioritized a "Performance First" philosophy, ensuring that accessibility never compromised the high-fidelity visual experience.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { icon: <FiZap />, title: "Vitesse", desc: "Average Lighthouse score of 98 across all institutional pages." },
                                    { icon: <FiBox />, title: "Atomic Design", desc: "Modular architecture allowing for rapid feature expansion." },
                                    { icon: <FiActivity />, title: "Real-time", desc: "Integrated spiritual feeds and dynamic campus updates." },
                                    { icon: <FiLayers />, title: "Scalable", desc: "Multi-tenant logic supporting 10+ independent sub-entities." }
                                ].map((item, i) => (
                                    <div key={i} className="flex space-x-4">
                                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h5 className="font-bold mb-1">{item.title}</h5>
                                            <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="p-12 bg-white dark:bg-white/5 rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-2xl">
                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-8">Performance Metrics</h3>
                                <div className="space-y-8">
                                    {[
                                        { label: "Core Web Vitals", value: 99 },
                                        { label: "User Retention", value: 85 },
                                        { label: "Page Load Speed", value: 92 },
                                        { label: "Accessibility Score", value: 100 }
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-bold">{stat.label}</span>
                                                <span className="text-sm font-black text-teal-600">{stat.value}%</span>
                                            </div>
                                            <div className="w-full h-1 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${stat.value}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                    className="h-full bg-teal-600 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outcomes Meta */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">The Final <span className="text-teal-600">Impact</span></h2>
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-16 font-light leading-relaxed">
                        "The transformation of Al Ansar's digital presence has bridged the gap between our rich history and the next generation of learners."
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="px-10 py-5 bg-teal-600 text-white rounded-3xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-teal-500/20">
                            Start Your Story
                        </Link>
                        <a href="https://alansar.info/" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-black text-white rounded-3xl font-black uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center">
                            Live Website <FiExternalLink className="ml-2" />
                        </a>
                    </div>
                </div>
            </section>


            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl p-4 md:p-12 flex items-center justify-center cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-7xl w-full h-full flex items-center justify-center"
                        >
                            <img src={selectedImage} alt="Fullscreen preview" className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" />
                            <button className="absolute top-0 right-0 p-4 text-white hover:text-teal-500 transition-colors">
                                <FiX size={32} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Navigation / Scroll Indicator */}
            <div className="fixed bottom-12 right-12 z-50 flex space-x-4">
                <Link href="/projects" className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-2xl border border-slate-200 dark:border-white/10 hover:scale-110 active:scale-95 transition-all group">
                    <FiGrid size={20} className="text-slate-600 dark:text-slate-300 group-hover:text-teal-600" />
                </Link>
            </div>
        </div>
    );
};

export default AlAnsarCaseStudy;
