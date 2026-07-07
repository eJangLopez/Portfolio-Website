import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Download, Mail, Phone, MapPin, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data';
import { downloadCV } from '../utils/cvGenerator';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    // Keep active UTC or local time updated in header (high-fidelity professional touch)
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Overview' },
    { id: 'certs', label: 'Certifications' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  const triggerDownload = () => {
    downloadCV();
  };

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-brand-border py-3 shadow-sm'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-display font-bold text-lg text-slate-900 tracking-wider">
                ELIJAH DAVID LOPEZ
              </span>
              <div className="hidden sm:flex items-center space-x-1.5 bg-emerald-550/10 text-emerald-700 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>CCNA VERIFIED</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-slate-500 tracking-wide mt-0.5">
              Networking & Development
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Desktop Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold font-sans transition-all duration-200 cursor-pointer border ${
                  activeSection === link.id
                    ? 'text-white bg-slate-900 border-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border-transparent'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Header Actions & Controls */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex flex-col text-right font-mono text-[10px] text-slate-500 border-r border-brand-border pr-4">
              <span>MANILA, PH</span>
              <span className="text-slate-900 font-semibold">{currentTime}</span>
            </div>
            <button
              id="download-cv-btn"
              onClick={triggerDownload}
              className="hidden sm:flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm cursor-pointer"
            >
              <Download size={14} />
              <span>Print/Save CV</span>
            </button>

            {/* Single Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md border border-brand-border bg-brand-surface hover:bg-brand-surface-light text-slate-700 hover:text-slate-900 cursor-pointer transition-all duration-200"
              title="Toggle theme"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={14} className="text-amber-500" /> : <Moon size={14} className="text-slate-700" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-slate-700 hover:text-slate-900 p-1.5 rounded-md border border-brand-border bg-brand-surface hover:bg-brand-surface-light cursor-pointer"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-border bg-white/95 backdrop-blur-lg absolute left-0 right-0 py-4 px-4 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-sans transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-slate-900 bg-slate-100 border-l-2 border-slate-900 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="border-t border-brand-border pt-3 mt-2">
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-500 p-2">
                <div className="flex items-center space-x-1">
                  <Mail size={12} className="text-slate-900" />
                  <span className="truncate">{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone size={12} className="text-slate-900" />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
