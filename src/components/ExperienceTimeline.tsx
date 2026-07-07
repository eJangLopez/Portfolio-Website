import React from 'react';
import { Calendar, Briefcase, GraduationCap, MapPin, Award, BookOpen, Star } from 'lucide-react';
import { educationHistory, workExperience } from '../data';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 border-b border-brand-border bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono text-slate-500 tracking-widest uppercase block">
            Academics & Operations
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Education & Industry Experience
          </h2>
          <p className="text-sm text-slate-500 font-sans leading-relaxed max-w-2xl mx-auto">
            Review the academic honors, state scholarships, and municipal IT internship operations that validate my technical discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Education (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-8 h-full">
            <div className="flex items-center space-x-2.5 border-b border-brand-border pb-3 shrink-0">
              <GraduationCap className="text-brand-cobalt h-5 w-5" />
              <h3 className="font-display font-bold text-lg text-slate-900 tracking-wide">
                Academic Background
              </h3>
            </div>

            {educationHistory.map((edu, idx) => (
              <div 
                key={idx}
                className="bg-brand-surface border border-brand-border p-6 rounded-sm hover:border-slate-400 transition-all duration-300 relative overflow-hidden flex-1 flex flex-col justify-between"
              >
                {/* DOST Scholar Stamp overlay */}
                {edu.scholarship && (
                  <div className="absolute top-0 right-0 bg-orange-50 text-brand-copper font-mono text-[9px] font-bold px-3 py-1.5 border-b border-l border-orange-100 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800/40 rounded-bl-sm z-10">
                    ★ DOST-SEI MERIT SCHOLAR
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-1.5 pr-28">
                    <span className="text-[10px] font-mono text-brand-cobalt font-bold tracking-wider uppercase block">
                      {edu.period}
                    </span>
                    <h4 className="font-display font-bold text-xl text-slate-900 leading-snug">
                      {edu.institution}
                    </h4>
                    <p className="text-sm text-slate-700 font-sans font-semibold">
                      {edu.degree}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-slate-600 font-mono py-2 border-y border-brand-border/40">
                    <div className="flex items-center space-x-1">
                      <MapPin size={13} className="text-brand-cobalt" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="hidden sm:block text-slate-300">|</div>
                    <div className="flex items-center space-x-1 text-slate-900 font-bold">
                      <Star size={13} className="text-brand-copper fill-current" />
                      <span>{edu.gpa}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col pt-6">
                  <div className="space-y-3">
                    <h5 className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold">
                      Key Highlights & Coursework
                    </h5>
                    <ul className="space-y-2" aria-label="Education highlights">
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start space-x-2.5 text-xs text-slate-700 leading-relaxed font-sans">
                          <span className="h-1.5 w-1.5 bg-brand-cobalt rounded-full shrink-0 mt-1.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Work Experience (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-8 h-full">
            <div className="flex items-center space-x-2.5 border-b border-brand-border pb-3 shrink-0">
              <Briefcase className="text-brand-copper h-5 w-5" />
              <h3 className="font-display font-bold text-lg text-slate-900 tracking-wide">
                Work Immersion
              </h3>
            </div>

            {workExperience.map((work, idx) => (
              <div 
                key={idx}
                className="bg-brand-surface border border-brand-border p-6 rounded-sm hover:border-slate-400 transition-all duration-300 flex-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-brand-copper font-bold tracking-wider uppercase">
                        {work.period}
                      </span>
                      <span className="bg-orange-50 text-brand-copper text-[9px] font-mono px-2 py-0.5 rounded-sm border border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800/40 font-bold uppercase">
                        Internship
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-lg text-slate-900 leading-snug">
                      {work.role}
                    </h4>
                    <p className="text-xs font-mono text-slate-500">
                      {work.company}
                    </p>
                  </div>

                  <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-mono py-2 border-y border-brand-border/40">
                    <MapPin size={13} className="text-brand-copper" />
                    <span>{work.location}</span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col pt-6">
                  <div className="space-y-3">
                    <h5 className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold">
                      Core Operational Duties
                    </h5>
                    <ul className="space-y-2.5" aria-label="Work duties">
                      {work.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start space-x-2 text-xs text-slate-700 leading-relaxed font-sans">
                          <span className="text-brand-copper font-mono font-bold shrink-0 mt-0.5">&gt;</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
