"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiArrowLeft, FiExternalLink, FiCheck, FiTarget, FiZap,
    FiActivity, FiLayers, FiX, FiShield, FiBriefcase, FiGlobe,
    FiPenTool, FiFileText, FiMonitor, FiMapPin, FiClock, FiGrid
} from 'react-icons/fi';
import { FaWhatsapp, FaBuilding, FaStamp, FaPassport } from 'react-icons/fa';
import Link from 'next/link';

const LexoraCaseStudy = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const project = {
        title: "Lexora Business Solutions",
        subtitle: "A Trusted Name in Business Solutions in Qatar",
        client: "Lexora Business Solutions",
        year: "2024",
        role: "Full Stack Developer & Branding",
        brief: "Lexora Business Solutions is a premier consultancy in Doha, specializing in end-to-end business solutions for entrepreneurs and investors. The project involved creating a modern digital presence for a well-established team, focusing on PRO services, company formation, and digital solutions with a high emphasis on trust and professionalism.",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "WhatsApp API", "Vercel"],
        liveLink: "https://www.lexoraservices.com/",
        stats: [
            { label: "Trusted By", value: "100+", suffix: "Companies" },
            { label: "Experience", value: "Years", suffix: "of Expertise" },
            { label: "Services", value: "12+", suffix: "Core Solutions" },
            { label: "Location", value: "Doha", suffix: "Qatar" }
        ],
        challenges: [
            "Information Clarity: Transforming complex legal and PRO workflows into easy-to-understand web content.",
            "Client Trust: Building a digital identity that reflects years of physical market presence and government relationships.",
            "Visual Authority: Adopting a minimal yet authoritative 'Corporate Qatar' aesthetic.",
            "Direct Lead Gen: Integrating frictionless communication channels for high-ticket consultations."
        ],
        solutions: [
            "Minimalist UI Architecture: A clean, white-space heavy design that emphasizes professionalism and clarity.",
            "Service-First Navigation: Segmented paths for Company Setup, Translation, and PRO services.",
            "Instant Consultation Flow: Strategically placed WhatsApp and contact triggers to capture client interest.",
            "Mobile-First Performance: Ensuring sub-second loading for on-the-go investors and entrepreneurs."
        ]
    };

    const screenshots = [
        { src: '/projects/lexora/1.png', title: 'Home Interface', desc: 'Minimalist landing with clear CTA' },
        { src: '/projects/lexora/2.png', title: 'Our Services', desc: 'Detailed documentation of PRO solutions' },
        { src: '/projects/lexora/3.png', title: 'Consultation Hub', desc: 'Direct lead generation interface' },
        { src: '/projects/lexora/4.png', title: 'Why Lexora', desc: 'Value propositions and trust factors' },
        { src: '/projects/lexora/5.png', title: 'Contact Layer', desc: 'Location and direct support channels' }
    ];

    const services = [
        { name: "Company Formation", icon: <FaBuilding />, desc: "CR issuance and trade license applications." },
        { name: "Legal Translation", icon: <FiFileText />, desc: "Arabic-English certified document support." },
        { name: "PRO Services", icon: <FaPassport />, desc: "Visa processing and labor documentation." },
        { name: "Document Attestation", icon: <FaStamp />, desc: "MOFA and Ministry legalizations." }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-[#08090a] text-slate-900 dark:text-slate-100 selection:bg-blue-600/30 font-sans">


            {/* Minimal Header */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-slate-100 dark:border-white/5">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-10">
                            <Link href="/projects" className="inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 hover:translate-x-[-4px] transition-transform">
                                <FiArrowLeft className="mr-2" /> Back to Projects
                            </Link>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                            <div>
                                <div className="inline-flex items-center space-x-3 px-3 py-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full mb-6">
                                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Corporate Solution • 2024</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight text-slate-950 dark:text-white">
                                    Lexora <br />
                                    <span className="text-blue-600">Business Solutions</span>
                                </h1>
                                <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                                    {project.subtitle}
                                </p>
                            </div>

                            <div className="flex items-center space-x-4">
                                <a
                                    href="https://wa.me/9645917277"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold flex items-center shadow-lg shadow-green-600/20 transition-all hover:scale-105 active:scale-95"
                                >
                                    <FaWhatsapp className="mr-2 text-xl" /> WhatsApp Support
                                </a>
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
                                >
                                    <FiExternalLink size={24} />
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-slate-100 dark:border-white/5">
                            {project.stats.map((stat, i) => (
                                <div key={i}>
                                    <h4 className="text-3xl font-black text-slate-950 dark:text-white mb-1">{stat.value}</h4>
                                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                    <p className="text-[10px] text-blue-600/80 font-medium mt-1 uppercase tracking-tighter">{stat.suffix}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Project Deep Dive */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-16">
                            <div>
                                <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4">The Narrative</h3>
                                <h2 className="text-3xl font-black mb-8 leading-tight">Empowering Global Business <br />in the Qatari Market</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    {project.brief}
                                </p>
                                <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-2xl shadow-blue-600/30">
                                    <h4 className="text-xl font-bold mb-4">Our Focus</h4>
                                    <p className="text-white/80 leading-relaxed">
                                        "To empower businesses by delivering reliable, efficient, and compliant corporate support services tailored to the needs of the Qatari market."
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-900 dark:text-white mb-6">
                                        <FiTarget size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold mb-6">Strategic Challenges</h4>
                                    <ul className="space-y-4">
                                        {project.challenges.map((c, i) => (
                                            <li key={i} className="flex items-start text-sm text-slate-500 dark:text-slate-500">
                                                <FiX className="text-slate-400 mt-1 mr-3 flex-shrink-0" /> {c}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-8 rounded-3xl bg-blue-50/50 dark:bg-blue-600/5 border border-blue-100 dark:border-blue-600/20">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-6">
                                        <FiZap size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold mb-6">Execution & Results</h4>
                                    <ul className="space-y-4">
                                        {project.solutions.map((s, i) => (
                                            <li key={i} className="flex items-start text-sm text-slate-700 dark:text-blue-400">
                                                <FiCheck className="text-blue-600 mt-1 mr-3 flex-shrink-0" /> {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-8">Technical Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl text-[11px] font-bold text-slate-600 dark:text-slate-400">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 rounded-[2rem] bg-slate-950 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-4">Core Philosophy</h4>
                                <p className="text-2xl font-black mb-4">Same Trusted Service, New Brand Identity</p>
                                <p className="text-sm opacity-60 leading-relaxed">Lexora represents the evolution of a well-established consultancy, managed by the same experienced team trusted by 100+ companies in Doha.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {services.map((s, i) => (
                                    <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 flex flex-col items-center text-center">
                                        <div className="text-xl text-blue-600 mb-2">{s.icon}</div>
                                        <p className="text-[10px] font-black uppercase tracking-widest">{s.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Interface Showcase */}
            <section className="py-24 bg-slate-50 dark:bg-black/20 border-y border-slate-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Display Showcase</h3>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight">The Digital <span className="text-slate-400">Experience</span></h2>
                    </div>

                    <div className="flex flex-col space-y-32">
                        {screenshots.map((shot, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
                            >
                                <div className="lg:w-3/5 relative group cursor-zoom-in" onClick={() => setSelectedImage(shot.src)}>
                                    <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
                                        <img src={shot.src} alt={shot.title} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
                                    </div>
                                </div>
                                <div className="lg:w-2/5 text-center lg:text-left">
                                    <span className="text-blue-600 font-black text-xs uppercase tracking-widest">Case 0{i + 1}</span>
                                    <h3 className="text-3xl font-black mt-4 mb-4">{shot.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">{shot.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance Audit */}
            <section className="py-24 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-4xl font-black mb-8">Corporate <span className="text-blue-600">Reliability</span></h2>
                            <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 leading-relaxed">
                                Beyond the aesthetics, the platform was engineered for high conversion and corporate trust. We tracked every interaction to ensure the user journey from Qatari government regulations to service inquiry was seamless.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { label: "Site Speed", value: "99/100" },
                                    { label: "Mobile Ready", value: "100%" },
                                    { label: "Lead Capture", value: "High" },
                                    { label: "Security", value: "SSL Ready" }
                                ].map((stat, i) => (
                                    <div key={i} className="border-l-2 border-blue-600 pl-6">
                                        <p className="text-2xl font-black">{stat.value}</p>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-slate-900 rounded-[3rem] p-12 flex flex-col justify-center border border-white/5 shadow-2xl">
                                <div className="space-y-6">
                                    {[
                                        { name: "Website Architecture", percentage: 95 },
                                        { name: "SEO Optimization", percentage: 92 },
                                        { name: "Brand Consistency", percentage: 100 },
                                        { name: "Client Confidence", percentage: 98 }
                                    ].map((skill, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-xs font-bold text-white uppercase tracking-widest">{skill.name}</span>
                                                <span className="text-xs font-bold text-blue-500">{skill.percentage}%</span>
                                            </div>
                                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.percentage}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                    className="h-full bg-blue-600"
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

            {/* Final CTA */}
            <section className="py-24 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-transparent">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Build Your <br /><span className="text-blue-600">Qatar Future</span></h2>
                    <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed">
                        Ready to establish or expand your business in Qatar? Book a free consultation with the Lexora team today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="https://wa.me/97431107654" className="px-12 py-5 bg-blue-600 text-white rounded-3xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-600/30 flex items-center">
                            Get Consultation <FaWhatsapp className="ml-2 text-xl" />
                        </a>
                        <Link href="/contact" className="px-12 py-5 border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white rounded-3xl font-black uppercase tracking-widest hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
                            Contact Developer
                        </Link>
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
                        className="fixed inset-0 z-[100] bg-white/95 dark:bg-black/95 backdrop-blur-xl p-4 md:p-12 flex items-center justify-center cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-7xl w-full h-full flex items-center justify-center"
                        >
                            <img src={selectedImage} alt="Fullscreen preview" className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" />
                            <button className="absolute top-0 right-0 p-8 text-blue-600 dark:text-white hover:scale-110 transition-transform">
                                <FiX size={40} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Back to Projects FAB */}
            <div className="fixed bottom-12 right-12 z-50 flex items-center space-x-4">
                <Link href="/projects" className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-2xl border border-slate-200 dark:border-white/10 hover:scale-110 active:scale-95 transition-all group">
                    <FiGrid size={20} className="text-slate-600 dark:text-slate-300 group-hover:text-blue-600" />
                </Link>
            </div>
        </div>
    );
};

export default LexoraCaseStudy;
