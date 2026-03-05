"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiArrowLeft, FiExternalLink, FiVideo, FiImage, FiUploadCloud,
    FiDownloadCloud, FiServer, FiGlobe, FiMaximize2, FiX, FiGrid,
    FiPlayCircle, FiCamera, FiRadio, FiCheck
} from 'react-icons/fi';
import Link from 'next/link';

const MediaSamasthaCaseStudy = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const project = {
        title: "Samastha Media",
        subtitle: "Official Gallery & Live News for the International Conference",
        event: "Centenary Conference • Kuniya, Kasaragod",
        date: "Feb 4-8, 2026",
        role: "Full Stack Architect",
        brief: "The official media hub for the Samastha Centenary International Conference. A massive-scale digital platform engineered to host, share, and stream event photos, videos, and live news globally with near-zero latency.",
        technologies: ["Next.js", "Tailwind CSS", "PHP", "Custom Server", "Live Stream"],
        liveLink: "https://media.samastha.info/",
        stats: [
            { label: "Global", value: "Scale", suffix: "International Event" },
            { label: "Uptime", value: "99.9%", suffix: "During Peak Traffic" },
            { label: "Upload", value: "Instant", suffix: "Super-Fast I/O" },
            { label: "Format", value: "HD", suffix: "Video & Image" }
        ],
        challenges: [
            "Traffic Spikes: Handling extreme, unpredictable surges in global traffic during the 5-day live event.",
            "Media Delivery: Ensuring zero-latency video streaming and high-resolution image loading globally.",
            "Storage Architecture: Custom server management required for vast amounts of HD media storage.",
            "UI/UX Under Stress: Creating an intuitive interface that functions flawlessly even under high network stress."
        ],
        solutions: [
            "Hybrid Architecture: Architected a Next.js frontend with a custom PHP-managed backend for optimal server-side file I/O.",
            "Advanced Caching: Implemented edge caching and lazy loading specifically for massive masonry image grids.",
            "Live Protocols: Integrated dedicated live streaming protocols for real-time, uninterrupted event coverage.",
            "Immersive dark UI: Designed a sleek, dark-mode-first aesthetic that puts the visual content front and center."
        ]
    };

    const screenshots = [
        { src: '/projects/media_samastha/1.png', title: 'Live Dashboard', desc: 'Real-time news and event updates' },
        { src: '/projects/media_samastha/2.png', title: 'Media Grid', desc: 'High-performance masonry image gallery' },
        { src: '/projects/media_samastha/3.png', title: 'Video Portal', desc: 'Integrated player for live streams and VOD' },
        { src: '/projects/media_samastha/4.png', title: 'Upload Interface', desc: 'Super-fast media submission gateway' },
        { src: '/projects/media_samastha/5.png', title: 'Global Reach', desc: 'Optimized for international access' },
        { src: '/projects/media_samastha/6.png', title: 'Categorization', desc: 'Smart filtering for thousands of assets' },
        { src: '/projects/media_samastha/7.png', title: 'Mobile Experience', desc: 'Flawless scaling on handheld devices' },
        { src: '/projects/media_samastha/8.png', title: 'Server Engine', desc: 'Custom PHP backend management interface' }
    ];

    const coreFeatures = [
        { name: "Live Streaming", icon: <FiRadio />, desc: "Real-time broadcasting protocols." },
        { name: "Super-Fast I/O", icon: <FiUploadCloud />, desc: "Optimized upload & download mechanics." },
        { name: "Custom Storage", icon: <FiServer />, desc: "PHP-managed robust server architecture." },
        { name: "HD Gallery", icon: <FiImage />, desc: "Masonry layouts with edge caching." }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-slate-100 selection:bg-indigo-500/30 font-sans transition-colors duration-500">


            {/* Cinematic Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-slate-200 dark:border-white/5">
                {/* Abstract background elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] -z-10" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 brightness-100 contrast-150 mix-blend-overlay -z-10"></div>

                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-10">
                            <Link href="/projects" className="inline-flex items-center text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:translate-x-[-4px] transition-transform">
                                <FiArrowLeft className="mr-2" /> Back to Portfolio
                            </Link>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center space-x-3 px-4 py-2 bg-indigo-50 dark:bg-white/5 border border-indigo-100 dark:border-white/10 rounded-full mb-6 backdrop-blur-md">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">LIVE EVENT PLATFORM • {project.date}</span>
                                </div>
                                <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9] text-slate-950 dark:text-white">
                                    Media <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500">Samastha.</span>
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
                                    className="px-8 py-5 bg-slate-950 dark:bg-white text-white dark:text-black hover:bg-indigo-600 dark:hover:bg-slate-200 rounded-3xl font-black uppercase tracking-widest flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                                >
                                    <FiPlayCircle className="mr-3 text-xl" /> Enter Gallery
                                </a>
                                <div className="px-8 py-4 border border-slate-200 dark:border-white/10 rounded-3xl text-xs font-bold uppercase tracking-widest text-center text-slate-500 flex items-center justify-center gap-2">
                                    <FiGlobe /> {project.event}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-slate-200 dark:border-white/5">
                            {project.stats.map((stat, i) => (
                                <div key={i}>
                                    <h4 className="text-4xl font-black text-slate-950 dark:text-white mb-1 leading-none">{stat.value}</h4>
                                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-2">{stat.label}</p>
                                    <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-medium uppercase tracking-tighter">{stat.suffix}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Architecture Overview */}
            <section className="py-24 md:py-32 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-[11px] font-black text-indigo-600 dark:text-indigo-500 uppercase tracking-[0.4em] mb-6">The Infrastructure</h3>
                            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">Engineering for <br />Massive Scale</h2>
                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 font-light">
                                {project.brief}
                            </p>
                            <div className="flex items-center space-x-6 p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm dark:shadow-none">
                                <div className="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                    <FiServer size={32} />
                                </div>
                                <div className="text-sm">
                                    <p className="font-black text-slate-950 dark:text-white text-lg">Custom PHP Backend</p>
                                    <p className="text-slate-500 dark:text-slate-400">Optimized specifically for high-volume I/O operations.</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6">
                            {coreFeatures.map((item, i) => (
                                <div key={i} className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-md dark:shadow-2xl hover:bg-slate-50 dark:hover:bg-white/10 dark:hover:border-white/20 transition-all group">
                                    <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-white mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 transition-all">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-bold mb-3 text-slate-950 dark:text-white">{item.name}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical Deep Dive */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 p-10 rounded-[3rem] bg-indigo-50 dark:bg-gradient-to-br dark:from-indigo-900/50 dark:to-purple-900/20 border border-indigo-100 dark:border-indigo-500/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]" />
                            <h4 className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-12">The Tech Stack</h4>
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="px-5 py-3 bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl text-xs font-bold text-slate-700 dark:text-white shadow-sm dark:shadow-none backdrop-blur-md">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                            <div className="p-10 rounded-[3rem] bg-white dark:bg-red-500/5 border border-red-100 dark:border-red-500/10 shadow-sm dark:shadow-none">
                                <h4 className="text-xs font-black text-red-600 dark:text-red-400 uppercase tracking-widest mb-10">Critical Challenges</h4>
                                <ul className="space-y-6">
                                    {project.challenges.map((c, i) => (
                                        <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-4 flex-shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.8)]" /> {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-10 rounded-[3rem] bg-white dark:bg-emerald-500/5 border border-emerald-100 dark:border-emerald-500/10 shadow-sm dark:shadow-none">
                                <h4 className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-10">Implemented Solutions</h4>
                                <ul className="space-y-6">
                                    {project.solutions.map((s, i) => (
                                        <li key={i} className="flex items-start text-sm text-slate-700 dark:text-emerald-50/80">
                                            <FiCheck className="text-emerald-600 dark:text-emerald-400 mt-1 mr-4 flex-shrink-0" /> {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cinematic Media Showcase */}
            <section className="py-24 bg-white dark:bg-black relative">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/20 to-transparent" />

                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center mb-20">
                        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                            <FiCamera /> Global Showcase
                        </h3>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 dark:text-white">
                            The Interface.
                        </h2>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
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
                                <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center rounded-[2rem] backdrop-blur-[2px]">
                                    <FiMaximize2 className="text-white text-4xl drop-shadow-2xl" />
                                </div>
                                <div className="rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#111] shadow-md dark:shadow-2xl group-hover:border-indigo-500/50 transition-all duration-500">
                                    <img src={shot.src} alt={shot.title} className="w-full h-auto group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100" />
                                </div>
                                <div className="mt-6 px-4 mb-8">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">{shot.title}</p>
                                    <p className="text-sm font-medium dark:font-light text-slate-600 dark:text-slate-400">{shot.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outro CTA */}
            <section className="py-32 relative overflow-hidden bg-slate-50 dark:bg-[#050505]">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-slate-950 dark:text-white">Need a Robust <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Media Platform?</span></h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                        Whether it's for an international conference, a global news portal, or high-volume file sharing — I engineer systems built to scale.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/contact" className="px-12 py-6 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-xl dark:shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]">
                            Discuss Your Project
                        </Link>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-transparent border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white rounded-[2rem] font-black uppercase tracking-widest hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-3">
                            View Live Site <FiExternalLink />
                        </a>
                    </div>
                </div>

                {/* Background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />
            </section>

            {/* Cinematic Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-white/95 dark:bg-black/98 backdrop-blur-2xl p-4 md:p-12 flex items-center justify-center cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
                        >
                            <img src={selectedImage} alt="Fullscreen preview" className="max-w-full max-h-full object-contain rounded-[1rem] border border-slate-200 dark:border-white/10 shadow-2xl dark:shadow-[0_0_100px_rgba(0,0,0,0.5)]" />
                            <button className="absolute -top-12 right-0 md:top-0 md:-right-16 p-4 text-slate-500 hover:text-slate-900 dark:text-white/50 dark:hover:text-white transition-colors">
                                <FiX size={32} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Context Navigation FAB */}
            <div className="fixed bottom-12 right-12 z-50">
                <Link href="/projects" className="w-14 h-14 bg-white border border-slate-200 dark:bg-white/10 dark:backdrop-blur-xl dark:border-white/20 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group">
                    <FiGrid size={20} className="text-slate-600 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                </Link>
            </div>
        </div>
    );
};

export default MediaSamasthaCaseStudy;
