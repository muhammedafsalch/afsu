"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiArrowLeft, FiExternalLink, FiDownload, FiStar, FiHeart,
    FiMapPin, FiMessageSquare, FiBookOpen, FiMaximize2, FiX, FiGrid,
    FiPlayCircle, FiSmartphone, FiCheck
} from 'react-icons/fi';
import Link from 'next/link';

const UmraQafilaCaseStudy = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const project = {
        title: "Umra Qafila",
        subtitle: "The Official Landing Page for the Ultimate Spiritual Companion App",
        event: "App Launch Showcase",
        date: "2026",
        role: "Web Architecture & UX",
        brief: "A high-conversion landing page designed to beautifully present the Umra Qafila app. Engineered with Next.js and Tailwind CSS to capture the serene, spiritual essence of the pilgrimage while driving iOS and Android downloads.",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React"],
        liveLink: "https://umraqafila.iqrasolutions.in/",
        stats: [
            { label: "Active Users", value: "50K+", suffix: "Global Reach" },
            { label: "App Rating", value: "4.8★", suffix: "User Satisfaction" },
            { label: "Countries", value: "100+", suffix: "International" },
            { label: "Speed", value: "Fast", suffix: "Loading Time" }
        ],
        challenges: [
            "Aesthetic Balance: Creating a serene, spiritual visual identity while maintaining a modern, high-tech app feel.",
            "Information Architecture: Organizing extensive app features (Quran, Duas, Madinah Guide) into digestible, engaging sections.",
            "Conversion Optimization: Designing clear, compelling pathways for App Store and Google Play downloads.",
            "Mobile Responsiveness: Ensuring the landing page acts as a flawless gateway on mobile devices where users actually download the app."
        ],
        solutions: [
            "Premium Visuals: Utilized a clean, white-and-gold color palette with smooth Framer Motion animations to establish a premium, spiritual atmosphere.",
            "Structured Content: Built visual feature cards alongside high-fidelity app screenshots to immediately demonstrate value.",
            "Strategic CTAs: Implemented a sticky header and prominent call-to-actions specifically targeting mobile stores.",
            "Next.js Foundation: Hand-coded the entire platform on Next.js for blazing-fast performance and superior out-of-the-box SEO."
        ]
    };

    const screenshots = [
        { src: '/projects/umra-qafila/1.png', title: 'Hero Section', desc: 'Serene introduction with strong app download CTAs' },
        { src: '/projects/umra-qafila/2.png', title: 'Feature Highlights', desc: 'Clear presentation of core app functionalities' },
        { src: '/projects/umra-qafila/3.png', title: 'Quran & Duas', desc: 'Details on the comprehensive spiritual resources' },
        { src: '/projects/umra-qafila/4.png', title: 'Download Call-out', desc: 'Trust-building stats and direct store links' },
        { src: '/projects/umra-qafila/5.png', title: 'Support & Contact', desc: 'Integrated communication form for user assistance' }
    ];

    const coreFeatures = [
        { name: "Complete Quran", icon: <FiBookOpen />, desc: "Showcasing the full Quran, translation, and tafsir features." },
        { name: "Duas & Dhikr", icon: <FiHeart />, desc: "Highlighting authentic prayers and audio recitations." },
        { name: "Madinah Guide", icon: <FiMapPin />, desc: "Presenting the detailed interactive Ziyarat maps." },
        { name: "Community", icon: <FiMessageSquare />, desc: "Promoting connection and shared spiritual journeys." }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-500">

            {/* Soft Spiritual Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                {/* Abstract background elements - Gold/Green subtle mix */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/5 dark:bg-emerald-600/10 rounded-full blur-[100px] -z-10" />
                <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/40 backdrop-blur-[1px] -z-10"></div>

                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-10">
                            <Link href="/projects" className="inline-flex items-center text-sm font-bold text-emerald-600 hover:translate-x-[-4px] transition-transform">
                                <FiArrowLeft className="mr-2" /> Back to Portfolio
                            </Link>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center space-x-3 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800/50 rounded-full mb-6 relative overflow-hidden">
                                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-300">APP SHOWCASE • {project.date}</span>
                                </div>
                                <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9] text-slate-900 dark:text-white">
                                    Umra <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Qafila.</span>
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
                                    className="px-8 py-5 bg-emerald-600 text-white hover:bg-emerald-700 rounded-3xl font-black uppercase tracking-widest flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-600/20"
                                >
                                    <FiSmartphone className="mr-3 text-xl" /> View Live Site
                                </a>
                                <div className="px-8 py-4 border border-slate-200 dark:border-slate-800 rounded-3xl text-xs font-bold uppercase tracking-widest text-center text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
                                    <FiStar className="text-amber-500" /> Rated 4.8★
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-slate-200 dark:border-slate-800">
                            {project.stats.map((stat, i) => (
                                <div key={i}>
                                    <h4 className="text-4xl font-black text-slate-900 dark:text-white mb-1 leading-none">{stat.value}</h4>
                                    <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-2">{stat.label}</p>
                                    <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium uppercase tracking-tighter">{stat.suffix}</p>
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
                            <h3 className="text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.4em] mb-6">The Journey</h3>
                            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight text-slate-900 dark:text-white">Designing a <br />Spiritual Gateway</h2>
                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 font-light">
                                {project.brief}
                            </p>
                            <div className="flex items-center space-x-6 p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-sm">
                                <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                                    <FiDownload size={32} />
                                </div>
                                <div className="text-sm">
                                    <p className="font-black text-slate-900 dark:text-white text-lg">Conversion Focused</p>
                                    <p className="text-slate-500 dark:text-slate-400">Every element optimized to drive app installs.</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6">
                            {coreFeatures.map((item, i) => (
                                <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
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
                        <div className="lg:col-span-1 p-10 rounded-[3rem] bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-[80px]" />
                            <h4 className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-12">The Tech Stack</h4>
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
                                <h4 className="text-xs font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-10">Design Challenges</h4>
                                <ul className="space-y-6">
                                    {project.challenges.map((c, i) => (
                                        <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-4 flex-shrink-0" /> {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-10 rounded-[3rem] bg-emerald-600 text-white shadow-xl shadow-emerald-600/20">
                                <h4 className="text-xs font-black text-emerald-200 uppercase tracking-widest mb-10">Implemented Solutions</h4>
                                <ul className="space-y-6">
                                    {project.solutions.map((s, i) => (
                                        <li key={i} className="flex items-start text-sm text-emerald-50/90">
                                            <FiCheck className="text-emerald-300 mt-1 mr-4 flex-shrink-0" /> {s}
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
                            <FiSmartphone /> Digital Canvas
                        </h3>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white">
                            The Interface.
                        </h2>
                    </div>

                    <div className="columns-1 md:columns-2 gap-8 space-y-8">
                        {screenshots.map((shot, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative group cursor-zoom-in break-inside-avoid"
                                onClick={() => setSelectedImage(shot.src)}
                            >
                                <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center rounded-[2.5rem] backdrop-blur-[2px]">
                                    <FiMaximize2 className="text-white text-4xl drop-shadow-2xl" />
                                </div>
                                <div className="rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900 shadow-xl shadow-slate-200 dark:shadow-none hover:shadow-2xl group-hover:ring-4 ring-emerald-500/20 transition-all duration-500 relative border border-slate-100 dark:border-slate-800">
                                    {/* App-like frame top */}
                                    <div className="h-8 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center px-4 space-x-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                    </div>
                                    <img src={shot.src} alt={shot.title} className="w-full h-auto group-hover:scale-[1.02] origin-top transition-transform duration-1000" />
                                </div>
                                <div className="mt-8 px-4 mb-4 text-center">
                                    <p className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">{shot.title}</p>
                                    <p className="text-slate-600 dark:text-slate-400">{shot.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outro CTA */}
            <section className="py-32 relative overflow-hidden bg-white dark:bg-slate-900">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900 dark:text-white">Ready to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Launch Your App?</span></h2>
                    <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                        A beautiful product deserves an equally premium landing page. I build high-conversion, blazing-fast web platforms that drive downloads.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/contact" className="px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[2rem] font-black uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xl shadow-slate-900/20 dark:shadow-none">
                            Discuss Your Project
                        </Link>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-[2rem] font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-3">
                            View Live Site <FiExternalLink />
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
                            <img src={selectedImage} alt="Fullscreen preview" className="max-w-full max-h-full object-contain rounded-[1rem] shadow-2xl ring-1 ring-white/20" />
                            <button className="absolute -top-12 right-0 md:top-0 md:-right-16 p-4 text-white/50 hover:text-white transition-colors">
                                <FiX size={32} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Context Navigation FAB */}
            <div className="fixed bottom-12 right-12 z-50">
                <Link href="/projects" className="w-14 h-14 bg-emerald-600 border border-emerald-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group">
                    <FiGrid size={20} className="text-white transition-colors" />
                </Link>
            </div>
        </div>
    );
};

export default UmraQafilaCaseStudy;
