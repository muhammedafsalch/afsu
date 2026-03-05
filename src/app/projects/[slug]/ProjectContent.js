"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiCheckCircle, FiCode, FiLayers, FiDatabase, FiSmartphone, FiUser, FiClock, FiGrid, FiArrowRight, FiX } from 'react-icons/fi';
import Link from 'next/link';

function ImageModal({ src, alt, onClose }) {
    return (
        <AnimatePresence>
            {src && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
                    onClick={onClose}
                >
                    <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        src={src}
                        alt={alt}
                        className="max-w-[95vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                        <FiX size={24} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default function ProjectContent({ data, slug }) {
    const [modalImage, setModalImage] = useState(null);

    const isAicAmal = slug === 'aicamal';
    const isSamastha = slug === 'samastha';
    const hasShowcase = !!(data.webScreenshots || data.appScreenshots);

    return (
        <div className="min-h-screen bg-white dark:bg-[#050505] text-gray-900 dark:text-gray-100 overflow-x-hidden selection:bg-blue-500/30 transition-colors duration-300 font-sans">

            <ImageModal
                src={modalImage}
                alt="Zoomed view"
                onClose={() => setModalImage(null)}
            />

            {hasShowcase ? (
                <div className="relative w-full">
                    <div className="relative w-full h-[75vh] md:h-[65vh] lg:h-[75vh] min-h-[500px] overflow-hidden">
                        <img
                            src={data.image}
                            alt={data.title}
                            className="w-full h-full object-cover object-center md:object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-black/20 dark:from-[#050505] dark:via-[#050505]/80 dark:to-black/20" />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6">
                        <div className="max-w-7xl mx-auto w-full">
                            <Link href="/projects" className="inline-flex items-center px-4 py-2 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors group font-bold mb-8 rounded-full text-sm">
                                <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                                <span>Back to Projects</span>
                            </Link>
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                <span className="text-xs md:text-sm font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">{data.category}</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tighter transition-colors">
                                {data.title}
                            </h1>
                            <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed font-medium transition-colors">
                                {data.description}
                            </p>
                            <div className="flex flex-wrap gap-4 mt-10">
                                <a
                                    href={data.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 md:px-8 py-3.5 md:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 text-sm md :text-base"
                                >
                                    <FiExternalLink className="mr-2" />
                                    View Live Site
                                </a>
                                {data.mobileApp && (
                                    <a
                                        href={data.mobileApp.playStore}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 md :px-8 py-3.5 md :py-4 bg-gray-900 dark:bg-white/10 hover:bg-black dark:hover:bg-white/20 text-white border border-white/10 rounded-xl font-bold flex items-center transition-all hover:scale-105 active:scale-95 backdrop-blur-sm text-sm md :text-base"
                                    >
                                        <FiSmartphone className="mr-2" />
                                        {data.mobileApp.downloads} Downloads
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
                    </div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
                            <Link href="/projects" className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group font-bold">
                                <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                                <span>Back to Projects</span>
                            </Link>
                        </motion.div>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                <div className="flex items-center space-x-2 mb-6">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                    <span className="text-sm font-black text-gray-500 uppercase tracking-widest">{data.category}</span>
                                </div>
                                <h1 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tighter transition-colors">
                                    {data.title}
                                </h1>
                                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium transition-colors">
                                    {data.description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                                    <div className="p-6 rounded-2xl bg-gray-50 dark :bg-white/5 border border-black/5 dark :border-white/10 transition-colors">
                                        <div className="flex items-center text-blue-600 dark :text-blue-400 mb-2 font-bold uppercase tracking-widest text-[10px]">
                                            <div className="p-1.5 bg-blue-600/10 rounded-lg mr-2"><FiUser /></div>
                                            <span>Client</span>
                                        </div>
                                        <p className="text-gray-900 dark :text-white font-black">{data.client || 'Confidential'}</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-gray-50 dark :bg-white/5 border border-black/5 dark :border-white/10 transition-colors">
                                        <div className="flex items-center text-purple-600 dark :text-purple-400 mb-2 font-bold uppercase tracking-widest text-[10px]">
                                            <div className="p-1.5 bg-purple-600/10 rounded-lg mr-2"><FiClock /></div>
                                            <span>Duration</span>
                                        </div>
                                        <p className="text-gray-900 dark :text-white font-black">{data.duration || '3 Months'}</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-gray-50 dark :bg-white/5 border border-black/5 dark :border-white/10 transition-colors">
                                        <div className="flex items-center text-emerald-600 dark :text-emerald-400 mb-2 font-bold uppercase tracking-widest text-[10px]">
                                            <div className="p-1.5 bg-emerald-600/10 rounded-lg mr-2"><FiGrid /></div>
                                            <span>Category</span>
                                        </div>
                                        <p className="text-gray-900 dark :text-white font-black">{data.category}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <a href={data.liveLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center shadow-lg shadow-blue-600/20 transition-all hover:scale-105">
                                        <FiExternalLink className="mr-2" /> View Live Site
                                    </a>
                                    <button className="px-8 py-4 bg-gray-900 dark:bg-white/5 hover:bg-black dark:hover:bg-white/10 text-white dark:text-white border border-white/10 rounded-xl font-bold flex items-center transition-all animate-pulse">
                                        <FiCode className="mr-2" /> View Source
                                    </button>
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] blur-2xl opacity-20" />
                                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-black shadow-2xl">
                                    <img src={data.image} alt={data.title} className="w-full h-auto" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}

            {hasShowcase && (
                <section className="py-16 bg-gray-50 dark:bg-[#050505] transition-colors duration-300">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className={`grid grid-cols-1 sm:grid-cols-2 ${data.mobileApp ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4 mb-12`}>
                            <div className="p-5 md:p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm transition-colors">
                                <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2 font-bold uppercase tracking-widest text-[10px]">
                                    <div className="p-1.5 bg-blue-600/10 rounded-lg mr-2"><FiUser /></div>
                                    <span>Client</span>
                                </div>
                                <p className="text-gray-900 dark:text-white font-black text-sm md:text-base">{data.client}</p>
                            </div>
                            <div className="p-5 md:p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm transition-colors">
                                <div className="flex items-center text-purple-600 dark:text-purple-400 mb-2 font-bold uppercase tracking-widest text-[10px]">
                                    <div className="p-1.5 bg-purple-600/10 rounded-lg mr-2"><FiClock /></div>
                                    <span>Duration</span>
                                </div>
                                <p className="text-gray-900 dark:text-white font-black text-sm md:text-base">{data.duration}</p>
                            </div>
                            <div className="p-5 md:p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm transition-colors">
                                <div className="flex items-center text-emerald-600 dark:text-emerald-400 mb-2 font-bold uppercase tracking-widest text-[10px]">
                                    <div className="p-1.5 bg-emerald-600/10 rounded-lg mr-2"><FiGrid /></div>
                                    <span>Category</span>
                                </div>
                                <p className="text-gray-900 dark:text-white font-black text-sm md:text-base">{data.category}</p>
                            </div>
                            {data.mobileApp && (
                                <div className="p-5 md:p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm transition-colors">
                                    <div className="flex items-center text-orange-600 dark:text-orange-400 mb-2 font-bold uppercase tracking-widest text-[10px]">
                                        <div className="p-1.5 bg-orange-600/10 rounded-lg mr-2"><FiSmartphone /></div>
                                        <span>Platforms</span>
                                    </div>
                                    <p className="text-gray-900 dark:text-white font-black text-sm md:text-base">iOS & Android</p>
                                </div>
                            )}
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 mb-20">
                            <div className="space-y-8">
                                <div className="p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 transition-colors">
                                    <h3 className="text-xl font-black mb-6 flex items-center">
                                        <FiCheckCircle className="text-blue-600 mr-2" />
                                        Core Features
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {data.features.map((feature, i) => (
                                            <div key={i} className="flex items-start space-x-3 group">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 transition-colors">
                                    <h3 className="text-xl font-black mb-6 flex items-center">
                                        <FiCode className="text-purple-600 mr-2" />
                                        Technical Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {data.technologies.map((tech) => (
                                            <span key={tech} className="px-4 py-2 bg-gray-50 dark:bg-white/10 border border-gray-100 dark:border-white/5 rounded-full text-xs font-bold text-gray-700 dark:text-gray-300 transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="p-8 md:p-10 rounded-[2.5rem] bg-blue-600 dark:bg-blue-600/10 border border-blue-500/20 text-white dark:text-blue-400 group relative overflow-hidden transition-colors">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                                    <h3 className="text-xl font-black mb-6 relative z-10">Engineering Challenge</h3>
                                    <p className="text-lg opacity-90 leading-relaxed relative z-10 text-white dark:text-blue-300 transition-colors font-medium">
                                        {data.challengesList ? data.challengesList[0] : data.challenges}
                                    </p>
                                </div>

                                <div className="p-8 md:p-10 rounded-[2.5rem] bg-gray-900 text-white group relative overflow-hidden transition-colors">
                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                                    <h3 className="text-xl font-black mb-6 relative z-10 flex items-center">
                                        <FiLayers className="text-purple-400 mr-2" />
                                        Executive Summary
                                    </h3>
                                    <p className="opacity-70 leading-relaxed relative z-10 mb-8 transition-colors text-gray-300">
                                        {data.longDescription || data.outcome}
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 relative z-10 pt-8 border-t border-white/10">
                                        {data.results && data.results.slice(0, 2).map((res, i) => (
                                            <div key={i}>
                                                <p className="text-2xl font-black text-white">{res.value}</p>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">{res.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {data.webScreenshots && (
                            <div className="mb-32">
                                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                                    <div>
                                        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight transition-colors">Desktop <br /><span className="text-blue-600">Ecosystem.</span></h2>
                                        <p className="text-gray-500 dark:text-gray-400 font-medium">Responsive web architecture for high-concurrency environments.</p>
                                    </div>
                                    <FiDatabase className="text-7xl text-gray-200 dark:text-white/5" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {data.webScreenshots.map((screen, i) => (
                                        <div
                                            key={i}
                                            className={`relative group rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl transition-all hover:scale-[1.02] cursor-zoom-in ${i === 0 ? 'md:col-span-2' : ''}`}
                                            onClick={() => setModalImage(screen)}
                                        >
                                            <img src={screen} alt={`Web Showcase ${i}`} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <div className="p-4 bg-white/20 backdrop-blur-md rounded-full border border-white/40">
                                                    <FiArrowRight className="text-white text-3xl -rotate-45" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {data.appScreenshots && (
                            <div className="mb-20">
                                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                                    <div>
                                        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight transition-colors">Native <br /><span className="text-purple-600">Mobility.</span></h2>
                                        <p className="text-gray-500 dark:text-gray-400 font-medium">Cross-platform application architecture for iOS and Android.</p>
                                    </div>
                                    <FiSmartphone className="text-7xl text-gray-200 dark:text-white/5" />
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                                    {data.appScreenshots.map((screen, i) => (
                                        <div
                                            key={i}
                                            className="relative group rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg cursor-zoom-in transition-all hover:-translate-y-2 hover:shadow-2xl"
                                            onClick={() => setModalImage(screen)}
                                        >
                                            <img src={screen} alt={`App Showcase ${i}`} className="w-full h-auto" />
                                            <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            <section className="py-24 border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-tight transition-colors">Start your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Digital Journey</span></h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 transition-colors font-medium">Ready to take your project from concept to high-performance reality?</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:scale-110 active:scale-95 transition-all shadow-xl shadow-blue-600/20">
                            Book Consultation
                        </Link>
                        <Link href="/projects" className="px-10 py-5 bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white rounded-2xl font-black uppercase tracking-widest hover:bg-gray-200 dark:hover:bg-white/10 transition-all border border-gray-200 dark:border-white/10">
                            More Projects
                        </Link>
                    </div>
                </div>
            </section>

            <div className="fixed bottom-10 right-10 z-50">
                <Link href="/projects" className="w-14 h-14 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl flex items-center justify-center shadow-2xl border border-gray-200 dark:border-white/10 group hover:scale-110 active:scale-95 transition-all">
                    <FiGrid className="text-xl group-hover:text-blue-600 transition-colors" />
                </Link>
            </div>
        </div>
    );
}
