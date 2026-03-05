'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { ThemeToggle } from './ThemeToggle';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const pathname = usePathname();

    const navItems = [
        { id: 'home', label: 'Home', href: '/' },
        { id: 'about', label: 'About', href: '/#about' },
        { id: 'expertise', label: 'Expertise', href: '/#expertise' },
        { id: 'projects', label: 'Projects', href: '/projects' },
        { id: 'contact', label: 'Contact', href: '/#contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'expertise', 'projects', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Force active section to projects if we are on the projects page
    useEffect(() => {
        if (pathname.startsWith('/projects')) {
            setActiveSection('projects');
        }
    }, [pathname]);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-5xl mx-auto pointer-events-auto"
            >
                <div className={`relative flex items-center justify-between p-2 rounded-2xl transition-all duration-500 ${isScrolled ? 'bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 pl-4 group">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-blue-600 rounded-lg blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg border border-white/10 dark:border-white/20">
                                M
                            </div>
                        </div>
                        <span className="hidden sm:block text-lg font-bold tracking-tight text-gray-900 dark:text-white transition-colors">
                            Afsal.dev
                        </span>
                    </Link>

                    {/* Desktop Navigation - Centered Pill */}
                    <div className="hidden md:flex items-center bg-gray-100 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/5 rounded-full px-2 py-1.5 mx-4 transition-colors">
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 ${activeSection === item.id
                                    ? 'text-white'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                            >
                                <span className="relative z-10">{item.label}</span>
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-blue-600 rounded-full"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side CTA */}
                    <div className="flex items-center space-x-3">
                        <ThemeToggle />

                        <a
                            href="/#contact"
                            className="hidden sm:flex items-center px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 rounded-full font-bold text-sm transition-all shadow-lg active:scale-95 transition-colors"
                        >
                            Let's Talk
                        </a>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/5 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ?
                                <FiX className="text-gray-900 dark:text-white" /> :
                                <FiMenu className="text-gray-900 dark:text-white" />
                            }
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="absolute top-full left-0 right-0 mt-4 md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl transition-all"
                        >
                            <div className="p-4 space-y-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        className={`flex items-center px-4 py-3 rounded-xl transition-all ${activeSection === item.id ? 'bg-blue-600 dark:bg-blue-600/20 text-white dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span className="font-medium">{item.label}</span>
                                    </Link>
                                ))}
                                <div className="pt-4 border-t border-black/5 dark:border-white/5 mt-2 transition-colors">
                                    <a
                                        href="https://wa.me/919645917277"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center space-x-2 w-full py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-green-600/20"
                                    >
                                        <FaWhatsapp className="text-xl" />
                                        <span>Message on WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}
