import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Github } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white border-b border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono text-slate-500 tracking-widest uppercase block">
            Communication Portal
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Initiate Contact
          </h2>
          <p className="text-sm text-slate-500 font-sans leading-relaxed max-w-2xl mx-auto">
            Technical recruiters, engineering managers, and future collaborators are encouraged to reach out regarding internships, career openings, or academic inquiries.
          </p>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col items-stretch">
          
          {/* Left Column: Direct Action Coordinates */}
          <div className="flex flex-col h-full">
            <h3 className="font-display font-bold text-xl text-slate-900 tracking-wide border-b border-brand-border pb-3 shrink-0 mb-6">
              Direct Channels
            </h3>

            <div className="flex-1 flex flex-col justify-between gap-4">
              {/* Email Card */}
              <a 
                href={`mailto:${personalInfo.email}`}
                className="block bg-brand-surface border border-brand-border hover:border-slate-400 p-5 rounded-sm group transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-50 text-cyan-700 rounded-sm border border-cyan-100 group-hover:border-cyan-300 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                      University Email Address
                    </span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-brand-cobalt transition-colors block truncate">
                      {personalInfo.email}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 block">
                      Fast response within 24 hours
                    </span>
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a 
                href={`tel:${personalInfo.phone.replace(/[^0-9]/g, '')}`}
                className="block bg-brand-surface border border-brand-border hover:border-slate-400 p-5 rounded-sm group transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-orange-50 text-orange-700 rounded-sm border border-orange-100 group-hover:border-orange-300 transition-colors">
                    <Phone size={18} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                      Direct Contact Number
                    </span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-brand-copper transition-colors block">
                      {personalInfo.phone}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 block">
                      Mon-Fri, 8:00 AM - 5:00 PM (PST)
                    </span>
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="bg-brand-surface border border-brand-border p-5 rounded-sm">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-50 text-slate-700 rounded-sm border border-brand-border">
                    <MapPin size={18} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                      Active Operations Hub
                    </span>
                    <span className="text-sm font-bold text-slate-900 block">
                      {personalInfo.location}
                    </span>
                    <div className="flex items-center space-x-1 text-[10px] font-mono text-slate-400 mt-1">
                      <Clock size={11} className="text-slate-600" />
                      <span>Timezone: GMT+8 (Manila)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GitHub Profiles Card */}
              <div className="bg-brand-surface border border-brand-border p-5 rounded-sm space-y-3">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-100 text-slate-700 rounded-sm border border-brand-border">
                    <Github size={18} />
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                      Verified GitHub Codebases
                    </span>
                    <span className="text-xs text-slate-500 block leading-relaxed mb-2.5">
                      Review completed laboratory coursework, custom algorithm files, and academic data science notebooks.
                    </span>
                    
                    <div className="space-y-2 pt-2.5 border-t border-slate-100">
                      <a 
                        href="https://github.com/eJangLopez"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-xs font-bold text-slate-900 hover:text-brand-cobalt transition-colors py-1 group"
                      >
                        <span>github.com/eJangLopez</span>
                        <ArrowUpRight size={13} className="text-slate-400 group-hover:text-brand-cobalt transition-colors animate-pulse" />
                      </a>
                      <a 
                        href="https://github.com/EliLopez4774"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-xs font-bold text-slate-900 hover:text-brand-cobalt transition-colors py-1 group"
                      >
                        <span>github.com/EliLopez4774</span>
                        <ArrowUpRight size={13} className="text-slate-400 group-hover:text-brand-cobalt transition-colors animate-pulse" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
