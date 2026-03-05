import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border-t border-black/5 dark:border-white/5 text-gray-500 dark:text-gray-400 py-12 px-6 relative z-50 overflow-hidden transition-colors">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Logo & Intro */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg border border-white/10 dark:border-white/20">
              M
            </div>
            <div className="font-bold text-xl text-gray-900 dark:text-white tracking-tight">Afsal.dev</div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500 max-w-xs text-center md:text-left leading-relaxed">
            Crafting high-performance digital experiences and strategic web solutions with a focus on modern aesthetics.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium">
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/#about' },
            { label: 'Expertise', href: '/#expertise' },
            { label: 'Projects', href: '/projects' },
            { label: 'Contact', href: '/#contact' }
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex items-center justify-center md:justify-end space-x-5">
          {[
            { icon: FaGithub, href: 'https://github.com' },
            { icon: FaLinkedin, href: 'https://linkedin.com' },
            { icon: FaTwitter, href: 'https://twitter.com' },
            { icon: FaWhatsapp, href: 'https://wa.me/919645917277' }
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm"
            >
              <social.icon className="text-lg" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-600 font-medium">
        <p>© {new Date().getFullYear()} Muhammed Afsal Ch. All rights reserved.</p>
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
