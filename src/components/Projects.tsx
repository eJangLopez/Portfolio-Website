import React from 'react';
import { FileCode2, ArrowUpRight, CheckCircle } from 'lucide-react';
import { academicProjects } from '../data';

export default function Projects() {
  // We only have one project now (Spotify EDA)
  const project = academicProjects[0];

  if (!project) return null;

  const Icon = FileCode2;
  const accentText = 'text-indigo-700 bg-indigo-50 border-indigo-100 dark:text-blue-300 dark:bg-blue-950/40 dark:border-blue-800/40';
  const accentBorder = 'border-slate-250 hover:border-slate-400';

  return (
    <section id="projects" className="py-20 border-b border-brand-border bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono text-slate-500 tracking-widest uppercase block">
            Academic & Lab Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Academic Engineering Projects
          </h2>
          <p className="text-sm text-slate-500 font-sans leading-relaxed max-w-2xl mx-auto">
            Practical applications of university coursework and certification learning, with verifiable code constructs and physical design criteria.
          </p>
        </div>

        {/* Single Centered Project Card */}
        <div className="max-w-2xl mx-auto">
          <div 
            className={`bg-brand-surface border rounded-sm p-6 sm:p-8 transition-all duration-300 ${accentBorder} flex flex-col justify-between h-full hover:shadow-md`}
          >
            <div className="space-y-6">
              
              {/* Project Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 tracking-wider">
                    {project.period}
                  </span>
                  <span className={`text-[10px] font-mono uppercase tracking-widest font-bold px-2 py-0.5 rounded border ${accentText}`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 leading-tight tracking-tight">
                  {project.title}
                </h3>
              </div>

              {/* Core Tech Stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[9px] font-mono bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Short description */}
              <p className="text-sm text-slate-600 font-sans leading-relaxed">
                {project.description}
              </p>

              {/* Specific contributions bullet points */}
              <div className="space-y-3 border-t border-brand-border/40 pt-5">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                  My Contributions
                </span>
                <ul className="space-y-2" aria-label={`Contributions for ${project.title}`}>
                  {project.contributions.map((con, cIdx) => (
                    <li key={cIdx} className="flex items-start space-x-2 text-xs text-slate-700 leading-normal font-sans">
                      <CheckCircle size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Foot Action row */}
            <div className="pt-6 mt-6 border-t border-brand-border/40 flex items-center justify-between">
              <span className="text-[9px] font-mono text-slate-500">
                BS ECE Curriculum Project
              </span>
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer transition-colors"
                >
                  <span>Visit</span>
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
