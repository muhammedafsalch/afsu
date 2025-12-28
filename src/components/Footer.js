import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">A</div>
          <div>
            <div className="font-semibold text-white">Afsal.dev</div>
            <div className="text-sm text-gray-400">Senior Full-Stack Architect</div>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-4 text-sm">
          <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
          <a href="#expertise" className="text-gray-300 hover:text-white transition">Expertise</a>
          <a href="#work" className="text-gray-300 hover:text-white transition">Work</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a aria-label="GitHub" href="https://github.com" className="text-gray-300 hover:text-white transition">
            <FaGithub />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" className="text-gray-300 hover:text-white transition">
            <FaLinkedin />
          </a>
          <a aria-label="Twitter" href="https://twitter.com" className="text-gray-300 hover:text-white transition">
            <FaTwitter />
          </a>
          <a aria-label="WhatsApp" href="https://wa.me/" className="text-gray-300 hover:text-white transition">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Afsal — Built with care.
      </div>
    </footer>
  );
}
