"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiArrowLeft, FiExternalLink, FiCheck, FiTarget, FiZap,
    FiActivity, FiLayers, FiX, FiGlobe, FiTruck, FiBox,
    FiShoppingCart, FiGrid, FiArrowRight, FiMaximize2
} from 'react-icons/fi';
import { FaWhatsapp, FaLeaf, FaFlask, FaIndustry } from 'react-icons/fa';
import Link from 'next/link';

const KripzoCaseStudy = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const project = {
        title: "Kripzo Snacks",
        subtitle: "The Golden Crunch from God's Own Country",
        client: "UK Tradings (UK Group)",
        year: "2024",
        role: "Brand Design & Web Development",
        brief: "Kripzo is a premium snacks brand under UK Group, specializing in authentic Kerala banana chips and traditional snacks. The objective was to create a vibrant, appetizing digital storefront that communicates the brand's commitment to quality — 100% pure coconut oil and export-grade freshness — for both local and international markets.",
        technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "SEO"],
        liveLink: "https://www.kripzo.com/",
        stats: [
            { label: "Purity", value: "100%", suffix: "Coconut Oil" },
            { label: "Reach", value: "Global", suffix: "Export Ready" },
            { label: "Rating", value: "5.0★", suffix: "Customer Love" },
            { label: "Daily", value: "Fresh", suffix: "Batch Production" }
        ],
        challenges: [
            "Sensory Branding: Conveying the 'crunch' and 'freshness' of a physical food product through a screen.",
            "Market Hybrid: Balancing traditional Kerala roots with a premium international brand appeal.",
            "Scale: Showcasing a diverse range of products from classic banana chips to specialty snacks.",
            "Conversion: Creating a seamless bridge for B2B export inquiries and B2C orders."
        ],
        solutions: [
            "Vibrant Visual Storytelling: Using high-contrast, 'appetizing' color palettes and macro product photography.",
            "Heritage Narrative: Highlighting the 1984 legacy of UK Group and the use of authentic Nendran bananas.",
            "Quality Assurance Layout: Dedicated sections for the 'No Additives' and 'Pure Oil' promises.",
            "Lead-Gen Optimization: Integrated WhatsApp tunnels for direct ordering and partnership inquiries."
        ]
    };

    const screenshots = [
        { src: '/projects/kripzo/1.png', title: 'Flagship Entry', desc: 'The golden crunch aesthetic with clear value props' },
        { src: '/projects/kripzo/2.png', title: 'Product Catalog', desc: 'Detailing the variety of authentic snacks' },
        { src: '/projects/kripzo/3.png', title: 'Our Story', desc: 'The journey from Kerala to the global stage' },
        { src: '/projects/kripzo/4.png', title: 'Quality Process', desc: 'Visualizing the 100% pure coconut oil promise' },
        { src: '/projects/kripzo/5.png', title: 'Global Reach', desc: 'Export and distribution network highlights' },
        { src: '/projects/kripzo/6.png', title: 'Review Portal', desc: 'Community trust and consumer feedback' }
    ];

    const USP = [
        { name: "Pure Coconut Oil", icon: <FaLeaf />, desc: "Healthy, traditional frying medium." },
        { name: "Nendran Bananas", icon: <FiBox />, desc: "Sourced directly for authentic texture." },
        { name: "Export Ready", icon: <FiGlobe />, desc: "Meeting international quality standards." },
        { name: "Modern Packing", icon: <FiLayers />, desc: "Aroma-locked and moisture-proof." }
    ];

    return (
        <div className="min-h-screen bg-[#fffdf5] dark:bg-[#0a0904] text-slate-900 dark:text-slate-100 selection:bg-yellow-500/30 font-sans transition-colors duration-500">


            {/* Vibrant Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-yellow-100 dark:border-white/5">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px] -z-10 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-400/5 rounded-full blur-[100px] -z-10" />

                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-10">
                            <Link href="/projects" className="inline-flex items-center text-sm font-bold text-yellow-600 dark:text-yellow-500 hover:translate-x-[-4px] transition-transform">
                                <FiArrowLeft className="mr-2" /> Back to Portfolio
                            </Link>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center space-x-3 px-3 py-1 bg-yellow-50 dark:bg-yellow-400/5 border border-yellow-200 dark:border-yellow-400/10 rounded-full mb-6">
                                    <span className="w-2 h-2 rounded-full bg-yellow-500" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-yellow-700 dark:text-yellow-500">Global Export Brand • {project.year}</span>
                                </div>
                                <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-slate-950 dark:text-white">
                                    Golden <br />
                                    <span className="text-yellow-500">Crunch.</span>
                                </h1>
                                <p className="text-2xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed italic">
                                    "{project.subtitle}"
                                </p>
                            </div>

                            <div className="flex flex-col space-y-4">
                                <a
                                    href="https://wa.me/919946550555"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-5 bg-yellow-400 hover:bg-yellow-500 text-slate-950 rounded-3xl font-black uppercase tracking-widest flex items-center justify-center shadow-xl shadow-yellow-400/20 transition-all hover:scale-105 active:scale-95"
                                >
                                    Order Now <FaWhatsapp className="ml-3 text-xl" />
                                </a>
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-5 border-2 border-slate-200 dark:border-white/10 rounded-3xl text-sm font-black uppercase tracking-widest text-center hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                                >
                                    Visit Kripzo.com
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-yellow-100 dark:border-white/5">
                            {project.stats.map((stat, i) => (
                                <div key={i}>
                                    <h4 className="text-4xl font-black text-slate-950 dark:text-white mb-1 leading-none">{stat.value}</h4>
                                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2">{stat.label}</p>
                                    <p className="text-[10px] text-yellow-600 font-medium uppercase tracking-tighter">{stat.suffix}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Brand Storytelling */}
            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-[11px] font-black text-yellow-600 uppercase tracking-[0.4em] mb-6">Authenticity</h3>
                            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">From Kerala to <br />the Global Palette</h2>
                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                                {project.brief}
                            </p>
                            <div className="flex items-center space-x-8">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-[#0a0904] overflow-hidden bg-slate-200">
                                            <img src={`/projects/kripzo/${i}.png`} alt="User" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <p className="font-black">100,000+ Packs</p>
                                    <p className="text-slate-400">Delivered Worldwide Monthly</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6">
                            {USP.map((item, i) => (
                                <div key={i} className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:translate-y-[-8px] transition-all group">
                                    <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-500 mb-6 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-bold mb-3">{item.name}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Challenges & Solutions */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 p-10 rounded-[3rem] bg-slate-950 text-white relative overflow-hidden">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-400/20 rounded-full blur-[60px]" />
                            <h4 className="text-xs font-black text-yellow-400 uppercase tracking-widest mb-12">Project Audit</h4>
                            <div className="space-y-12">
                                <div>
                                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4 block">Flavor Strategy</label>
                                    <p className="text-2xl font-black">Sensory Design</p>
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4 block">Market Cap</label>
                                    <p className="text-2xl font-black">Global GCC</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                            <div className="p-10 rounded-[3rem] bg-red-50/50 dark:bg-white/[0.02] border border-red-100 dark:border-white/10">
                                <h4 className="text-xs font-black text-red-600 uppercase tracking-widest mb-10">The Hurdles</h4>
                                <ul className="space-y-6">
                                    {project.challenges.map((c, i) => (
                                        <li key={i} className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-4 flex-shrink-0" /> {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-10 rounded-[3rem] bg-green-50/50 dark:bg-white/[0.04] border border-green-100 dark:border-white/10">
                                <h4 className="text-xs font-black text-green-600 uppercase tracking-widest mb-10">The Strategy</h4>
                                <ul className="space-y-6">
                                    {project.solutions.map((s, i) => (
                                        <li key={i} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                                            <FiCheck className="text-green-600 mt-1 mr-4 flex-shrink-0" /> {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Brand Showcase */}
            <section className="py-24 bg-white dark:bg-black/40">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                        <div>
                            <h3 className="text-[11px] font-black text-yellow-600 uppercase tracking-[0.4em] mb-4">Packaging & UI</h3>
                            <h2 className="text-5xl font-black tracking-tighter">The Visual <br /><span className="text-slate-400">Identity.</span></h2>
                        </div>
                        <p className="text-slate-400 max-w-sm italic">"Reflecting the freshness of Kerala through high-fidelity digital assets."</p>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {screenshots.map((shot, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative group cursor-zoom-in break-inside-avoid"
                                onClick={() => setSelectedImage(shot.src)}
                            >
                                <div className="absolute inset-0 bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center rounded-[2rem]">
                                    <FiMaximize2 className="text-white text-3xl" />
                                </div>
                                <div className="rounded-[2.5rem] overflow-hidden border-2 border-slate-100 dark:border-white/5 shadow-lg group-hover:shadow-2xl transition-all">
                                    <img src={shot.src} alt={shot.title} className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="mt-4 px-4">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{shot.title}</p>
                                    <p className="text-xs font-medium text-slate-600 dark:text-slate-500">{shot.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Commitment Section */}
            <section className="py-32 relative overflow-hidden text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <div className="inline-flex items-center space-x-2 text-yellow-600 mb-8 font-black uppercase tracking-[0.3em]">
                            <FaLeaf /> <span>Nature's Best</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">Why Kripzo Leads <br />the Global Market</h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { icon: <FaFlask />, label: "0% Additives", val: "Pure" },
                                { icon: <FaIndustry />, label: "Global Standards", val: "Grade A" },
                                { icon: <FiTruck />, label: "Daily Fresh", val: "Express" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full bg-yellow-400/5 flex items-center justify-center text-3xl mb-4 border border-yellow-400/10">
                                        {item.icon}
                                    </div>
                                    <h5 className="font-bold text-lg mb-1">{item.val}</h5>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final Conversion Section */}
            <section className="py-24 md:py-32 bg-yellow-400 text-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8]">
                            Taste the <br />
                            <span className="text-white">Tradition.</span>
                        </h2>
                        <div>
                            <p className="text-xl md:text-2xl font-medium mb-12 opacity-80 leading-relaxed">
                                Join the global UK Tradings family and bring the authentic taste of Kerala to your doorstep or retail venture.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <a href="https://wa.me/919946550555" className="px-12 py-6 bg-slate-950 text-white rounded-[2rem] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center">
                                    Bulk Inquiry <FaWhatsapp className="ml-3 text-2xl" />
                                </a>
                                <Link href="/contact" className="px-12 py-6 bg-white/20 border-2 border-slate-950/10 rounded-[2rem] font-black uppercase tracking-widest hover:bg-white/40 transition-all text-center">
                                    Contact Developer
                                </Link>
                            </div>
                        </div>
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
                        className="fixed inset-0 z-[100] bg-white/95 dark:bg-[#0a0904]/98 backdrop-blur-2xl p-4 md:p-12 flex items-center justify-center cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-7xl w-full h-full flex items-center justify-center"
                        >
                            <img src={selectedImage} alt="Fullscreen preview" className="max-w-full max-h-full object-contain rounded-[2rem] shadow-[0_32px_128px_-16px_rgba(234,179,8,0.2)]" />
                            <button className="absolute top-0 right-0 p-8 text-yellow-600 hover:scale-110 transition-transform">
                                <FiX size={48} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Quick Navigation */}
            <div className="fixed bottom-12 right-12 z-50 flex space-x-4">
                <Link href="/projects" className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-2xl border border-slate-200 dark:border-white/10 hover:scale-110 active:scale-95 transition-all group">
                    <FiGrid size={20} className="text-slate-600 dark:text-slate-300 group-hover:text-yellow-500" />
                </Link>
            </div>
        </div>
    );
};

export default KripzoCaseStudy;
