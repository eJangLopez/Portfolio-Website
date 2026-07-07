import React from 'react';
import { Network, ShieldCheck, Mail } from 'lucide-react';
import { personalInfo } from '../data';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-50 border-t border-brand-border py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo Brand signature */}
          <div className="flex flex-col text-center md:text-left space-y-2 md:w-1/3">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="font-display font-bold text-base text-slate-900 tracking-wider">
                ELIJAH DAVID LOPEZ
              </span>
            </div>
            <p className="text-xs text-slate-500 font-sans leading-relaxed">
              Electronics & Communications Engineering Student at the University of Santo Tomas. Specializing in Embedded Hardware & Cisco Networking systems.
            </p>
          </div>

          {/* Quick Sitemap Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono md:w-2/3 md:justify-end">
            <button onClick={() => onNavigate('hero')} className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">Overview</button>
            <button onClick={() => onNavigate('certs')} className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">Certifications</button>
            <button onClick={() => onNavigate('experience')} className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">Experience</button>
            <button onClick={() => onNavigate('projects')} className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">Projects</button>
            <button onClick={() => onNavigate('contact')} className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">Contact</button>
          </div>

        </div>

        {/* Foot Note credentials statement */}
        <div className="border-t border-brand-border/60 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-slate-500 text-center gap-4">
          <div>
            © {new Date().getFullYear()} Elijah David Lopez. All rights reserved.
          </div>
          <div className="flex items-center space-x-1 justify-center">
            <ShieldCheck size={12} className="text-emerald-600" />
            <span>Zero Fabrication Guarantee. Built in strict accordance with the student's official ECE CV & Cisco certifications.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
