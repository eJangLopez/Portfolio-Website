import React from 'react';
import { ArrowRight, Award, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 sm:pt-32 pb-16 overflow-hidden engineering-grid"
    >
      {/* Decorative Cybernetic Background Nodes */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>
          </defs>
          <path
            d="M100 200 L300 150 L500 250 L700 100 L900 300 L1100 200"
            fill="none"
            stroke="url(#grid-grad)"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />
          <path
            d="M200 400 L400 350 L600 500 L800 450 L1000 600"
            fill="none"
            stroke="url(#grid-grad)"
            strokeWidth="1"
          />
          <circle cx="300" cy="150" r="4" fill="#0f172a" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle cx="700" cy="100" r="4" fill="#c2410c" className="animate-ping" style={{ animationDuration: '4s' }} />
          <circle cx="500" cy="250" r="3" fill="#0f172a" />
          <circle cx="900" cy="300" r="3" fill="#c2410c" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-12 space-y-6 max-w-3xl">
            
            {/* Academic badge row */}
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center space-x-1.5 bg-slate-900 text-white text-xs font-mono px-3 py-1 rounded-sm">
                <GraduationCap size={13} />
                <span>UST BS ECE Class of 2027</span>
              </span>
            </div>

            {/* Typography hierarchy */}
            <div className="space-y-3">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-[1.1]">
                Bridging Physical Circuits & <span className="text-brand-cobalt">Enterprise Networks</span>
              </h1>
              <p className="text-lg text-slate-600 font-sans font-normal max-w-2xl leading-relaxed">
                I am <span className="text-slate-900 font-bold">{personalInfo.name}</span>, an Electronics & Communications Engineering honors student at the University of Santo Tomas specializing in <span className="text-slate-900 font-medium">Networking, Programming, and Productivity & Engineering Tools</span>.
              </p>
            </div>

            {/* Rapid Info Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 py-2 border border-slate-200 bg-white p-4 rounded-sm shadow-sm">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">Education</span>
                <span className="text-sm font-bold text-slate-900 block">UST Manila</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">Scholarship</span>
                <span className="text-sm font-bold text-amber-600 block">DOST SEI Merit Scholar</span>
              </div>
            </div>

            {/* Actions Panel */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                id="view-certs-btn"
                onClick={() => onNavigate('certs')}
                className="flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-sm text-sm cursor-pointer transition-all duration-200 shadow-sm"
              >
                <span>Verify Credentials</span>
                <ArrowRight size={16} />
              </button>
              <button
                id="view-contact-btn"
                onClick={() => onNavigate('contact')}
                className="flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold px-6 py-3 rounded-sm text-sm cursor-pointer transition-all duration-200 shadow-sm"
              >
                <span>Initiate Contact</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
