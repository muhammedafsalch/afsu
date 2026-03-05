"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiArrowLeft, FiExternalLink, FiCompass, FiStar, FiHeart,
    FiMapPin, FiBookOpen, FiMaximize2, FiX, FiGrid,
    FiSmartphone, FiCheck, FiDownload
} from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Link from 'next/link';

const UmraQafilaAppCaseStudy = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const project = {
        title: "Umra Qafila App",
        subtitle: "The Premier Mobile Spiritual Companion for Umrah",
        event: "iOS & Android Release",
        date: "2026",
        role: "React Native Developer",
        brief: "A comprehensive native mobile application delivering immediate access to Islamic prayers in Arabic text, an extensive library of Dikr and Duas, and interactive maps highlighting popular Islamic locations globally. Built using React Native and Expo.",
        technologies: ["React Native", "Expo", "Google Maps API", "Mobile Dev"],
        liveLink: "https://play.google.com/store/apps/details?id=com.umrah.qafila",
        appleLink: "https://apps.apple.com/us/app/umra-qafila/id6756334600",
        stats: [
            { label: "Platforms", value: "iOS & OS", suffix: "Cross Platform" },
            { label: "Downloads", value: "50K+", suffix: "Global Reach" },
            { label: "Rating", value: "4.8★", suffix: "User Satisfaction" },
            { label: "Locations", value: "100+", suffix: "Mapped Ziyarats" }
        ],
        challenges: [
            "Typography & Localization: Ensuring typographical accuracy and clean rendering of Arabic characters across drastically different screen sizes and OS rendering engines.",
            "Map Integration: Integrating smooth map transitions and deep-linking using native mapping providers on mobile.",
            "Offline Reliability: Ensuring high performance for users in low connectivity areas (e.g., during transit) via robust offline caching.",
            "UX Density: Balancing high-density information (duas, lengthy translations) with an uncluttered, serene UI."
        ],
        solutions: [
            "Native Rendering: Utilized native font-rendering techniques strictly for standardizing beautifully transcribed Arabic scripture.",
            "Caching Strategies: Leveraged robust local storage and offline-first caching strategies to make reading data reliable anywhere.",
            "Interactive UI: Built custom bottom-sheet and modal interactions to keep navigation clean while browsing heavy prayer lists.",
            "Location Plotting: Implemented custom maps plotting popular spiritual locations with deep-linking functionality."
        ]
    };

    const screenshots = [
        { src: '/projects/umra-qafila/app/1.jpeg', title: 'Main Dashboard', desc: 'A serene and simple entry point for pilgrims.' },
        { src: '/projects/umra-qafila/app/2.jpeg', title: 'Dikr Library', desc: 'Accessible collections of daily supplications.' },
        { src: '/projects/umra-qafila/app/3.jpeg', title: 'Arabic Duas', desc: 'High-quality, readable Arabic typographical rendering.' },
        { src: '/projects/umra-qafila/app/4.jpeg', title: 'Location Map', desc: 'Interactive maps showing popular Islamic locations.' },
        { src: '/projects/umra-qafila/app/5.jpeg', title: 'Spiritual Guide', desc: 'Step-by-step guidance for Umrah procedures.' },
        { src: '/projects/umra-qafila/app/6.jpeg', title: 'Prayer Reader', desc: 'Distraction-free reading mode with translations.' },
        { src: '/projects/umra-qafila/app/7.jpeg', title: 'Settings & UI', desc: 'Modern, native mobile interface elements.' }
    ];

    const coreFeatures = [
        { name: "Arabic Prayers", icon: <FiBookOpen />, desc: "Beautifully transcribed Islamic prayers available as accessible text." },
        { name: "Dikr & Dua", icon: <FiHeart />, desc: "An extensive, categorized library of authentic daily supplications." },
        { name: "Popular Maps", icon: <FiMapPin />, desc: "Interactive maps linking to popular Islamic locations globally." },
        { name: "Offline Mode", icon: <FiCompass />, desc: "Seamless offline capabilities for reliable connectivity while traveling." }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-500">


            {/* Soft Spiritual Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                {/* Abstract background elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 dark:bg-teal-500/20 rounded-full blur-[120px] -z-10 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/10 dark:bg-emerald-600/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/40 backdrop-blur-[1px] -z-10"></div>

                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-10">
                            <Link href="/projects" className="inline-flex items-center text-sm font-bold text-teal-600 hover:translate-x-[-4px] transition-transform">
                                <FiArrowLeft className="mr-2" /> Back to Portfolio
                            </Link>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center space-x-3 px-4 py-2 bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800/50 rounded-full mb-6 relative overflow-hidden">
                                    <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-teal-800 dark:text-teal-300">MOBILE APP • {project.date}</span>
                                </div>
                                <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9] text-slate-900 dark:text-white">
                                    Umra Qafila <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Mobile.</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-light">
                                    {project.subtitle}
                                </p>
                            </div>

                            <div className="flex flex-col space-y-4">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-teal-600 text-white hover:bg-teal-700 rounded-3xl font-black uppercase tracking-widest flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl shadow-teal-600/20"
                                >
                                    <FaGooglePlay className="mr-3 text-xl" /> Get on Play Store
                                </a>
                                <a
                                    href={project.appleLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-slate-900 text-white hover:bg-black rounded-3xl font-black uppercase tracking-widest flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/20"
                                >
                                    <FaApple className="mr-3 text-2xl mb-1" /> Get on App Store
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-slate-200 dark:border-slate-800">
                            {project.stats.map((stat, i) => (
                                <div key={i}>
                                    <h4 className="text-4xl font-black text-slate-900 dark:text-white mb-1 leading-none">{stat.value}</h4>
                                    <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-2">{stat.label}</p>
                                    <p className="text-[10px] text-teal-600 dark:text-teal-400 font-medium uppercase tracking-tighter">{stat.suffix}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Architecture Overview */}
            <section className="py-24 md:py-32 relative bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-[11px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-[0.4em] mb-6">Mobile Engineering</h3>
                            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight text-slate-900 dark:text-white">Native Feel, <br />Global Scale</h2>
                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 font-light">
                                {project.brief}
                            </p>
                            <div className="flex items-center space-x-6 p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-sm">
                                <div className="w-16 h-16 rounded-2xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
                                    <FiSmartphone size={32} />
                                </div>
                                <div className="text-sm">
                                    <p className="font-black text-slate-900 dark:text-white text-lg">React Native & Expo</p>
                                    <p className="text-slate-500 dark:text-slate-400">A unified cross-platform mobile architecture.</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6">
                            {coreFeatures.map((item, i) => (
                                <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">{item.name}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical Deep Dive */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 p-10 rounded-[3rem] bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800/30 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 dark:bg-teal-500/20 rounded-full blur-[80px]" />
                            <h4 className="text-xs font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-12">The Tech Stack</h4>
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="px-5 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                            <div className="p-10 rounded-[3rem] bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm">
                                <h4 className="text-xs font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-10">Development Challenges</h4>
                                <ul className="space-y-6">
                                    {project.challenges.map((c, i) => (
                                        <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-4 flex-shrink-0" /> {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-10 rounded-[3rem] bg-teal-600 text-white shadow-xl shadow-teal-600/20">
                                <h4 className="text-xs font-black text-teal-200 uppercase tracking-widest mb-10">Implemented Solutions</h4>
                                <ul className="space-y-6">
                                    {project.solutions.map((s, i) => (
                                        <li key={i} className="flex items-start text-sm text-teal-50/90">
                                            <FiCheck className="text-teal-300 mt-1 mr-4 flex-shrink-0" /> {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Screen Showcase */}
            <section className="py-24 bg-slate-100 dark:bg-slate-950/50 relative">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent" />

                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center mb-20">
                        <h3 className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                            <FiSmartphone /> Native Experience
                        </h3>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white">
                            App Screenshots.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {screenshots.map((shot, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`relative group cursor-zoom-in break-inside-avoid ${i === 4 || i === 5 || i === 6 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                                onClick={() => setSelectedImage(shot.src)}
                            >
                                <div className="absolute inset-0 bg-teal-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center rounded-[2rem] backdrop-blur-[2px]">
                                    <FiMaximize2 className="text-white text-4xl drop-shadow-2xl" />
                                </div>
                                <div className="rounded-[2rem] overflow-hidden bg-white dark:bg-slate-900 shadow-xl shadow-slate-200 dark:shadow-none hover:shadow-2xl group-hover:ring-4 ring-teal-500/20 transition-all duration-500 px-2 pt-2 border border-slate-200 dark:border-slate-800 relative aspect-[1/2]">
                                    <img src={shot.src} alt={shot.title} className="w-full h-full object-cover rounded-xl group-hover:scale-[1.03] transition-transform duration-1000" />
                                </div>
                                <div className="mt-6 px-4 mb-4 text-center">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">{shot.title}</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{shot.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outro CTA */}
            <section className="py-32 relative overflow-hidden bg-white dark:bg-slate-900">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900 dark:text-white">Download the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Umra Qafila App</span></h2>
                    <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                        Experience the complete spiritual guide right in the palm of your hand. Highly rated and loved by pilgrims worldwide on both iOS and Android.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-teal-600 text-white rounded-[2rem] font-black uppercase tracking-widest hover:bg-teal-700 transition-all shadow-xl shadow-teal-600/20 flex items-center gap-3">
                            <FaGooglePlay /> Android
                        </a>
                        <a href={project.appleLink} target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[2rem] font-black uppercase tracking-widest hover:bg-black dark:hover:bg-slate-100 transition-all shadow-xl shadow-slate-900/20 dark:shadow-none flex items-center gap-3">
                            <FaApple className="text-xl mb-1" /> iOS
                        </a>
                    </div>
                </div>

                {/* Background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />
            </section>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm p-4 md:p-12 flex items-center justify-center cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
                        >
                            <img src={selectedImage} alt="Fullscreen preview" className="max-h-full max-w-full lg:max-w-md object-contain rounded-[1.5rem] shadow-2xl ring-1 ring-white/20" />
                            <button className="absolute -top-12 right-0 md:top-0 md:-right-16 p-4 text-white/50 hover:text-white transition-colors">
                                <FiX size={32} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Context Navigation FAB */}
            <div className="fixed bottom-12 right-12 z-50">
                <Link href="/projects" className="w-14 h-14 bg-teal-600 border border-teal-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group">
                    <FiGrid size={20} className="text-white transition-colors" />
                </Link>
            </div>
        </div>
    );
};

export default UmraQafilaAppCaseStudy;
