import React, { useState } from 'react';
import { Network, Cpu, FileCode2, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { skillCategories } from '../data';

export default function SpecializationAccordionList() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const activeCategory = expandedCategory 
    ? skillCategories.find(c => c.category === expandedCategory) 
    : null;

  const handleKeyDown = (e: React.KeyboardEvent, categoryName: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
    }
  };

  const getCategoryConfig = (categoryName: string) => {
    switch (categoryName) {
      case 'Networking':
        return {
          Icon: Network,
          badgeText: 'CCNA',
          summary: 'Enterprise routing, switching, and local area network architectures based on the industry-standard Cisco Networking Academy curriculum.',
          subtext: 'Cisco Routing & Switching',
          tooltip: 'Networking (CCNA Verified)',
        };
      case 'Programming':
        return {
          Icon: FileCode2,
          badgeText: 'PYTHON/C++',
          summary: 'Modern software development pipelines spanning data analysis, simulation scripting, and foundational logic structures.',
          subtext: 'Python, C++ & MATLAB',
          tooltip: 'Programming (Python / C++ / MATLAB)',
        };
      case 'Productivity & Engineering Tools':
      default:
        return {
          Icon: Cpu,
          badgeText: 'IT/OPS',
          summary: 'Systematic IT asset tracking, hardware diagnostic support, spreadsheets automation, and electronic circuit simulation tools.',
          subtext: 'IT Infrastructure & Lab Instruments',
          tooltip: 'Productivity & Engineering Tools (IT / Ops)',
        };
    }
  };

  return (
    <div className="flex flex-col w-full min-h-[465px]" id="specialization-accordion-container">
      {/* Label above the specialization component */}
      <div className="shrink-0 mb-3.5 flex items-center justify-between">
        <span className="text-[10px] sm:text-xs font-mono text-slate-500 block tracking-widest uppercase text-left">
          CORE AREAS OF SPECIALIZATION
        </span>
        {expandedCategory && (
          <button 
            onClick={() => setExpandedCategory(null)}
            className="text-[10px] font-mono text-brand-cobalt hover:text-slate-900 dark:hover:text-slate-200 transition-colors uppercase tracking-widest cursor-pointer flex items-center space-x-1"
          >
            <span>←</span>
            <span>Back to All</span>
          </button>
        )}
      </div>

      {/* Spatial Memory Flex Container (Buttons NEVER reorder) */}
      <div 
        className={`flex ${expandedCategory ? 'flex-row items-center gap-3 mb-4' : 'flex-col gap-4'} shrink-0 transition-all duration-300 ease-in-out`} 
        role="tablist"
        aria-label="Core Areas of Specialization"
      >
        {skillCategories.map((cat) => {
          const isActive = cat.category === expandedCategory;
          const isDiscovery = expandedCategory === null;
          const config = getCategoryConfig(cat.category);
          const IconComponent = config.Icon;
          
          // Collect 3-5 preview tags for discovery mode
          const previewTags = cat.skills.flatMap(s => s.tags).slice(0, 4);

          return (
            <div 
              key={cat.category} 
              className={`relative group transition-all duration-300 ease-in-out ${isDiscovery ? 'w-full' : (isActive ? 'flex-1' : 'w-12')}`} 
              style={{ flexGrow: isActive ? 2 : (isDiscovery ? 1 : 0), flexShrink: 0 }}
            >
              <button
                role="tab"
                aria-selected={isActive ? "true" : "false"}
                aria-controls={isActive ? `panel-${cat.category.replace(/\s+/g, '-')}` : undefined}
                id={`tab-${cat.category.replace(/\s+/g, '-')}`}
                aria-label={config.tooltip}
                onClick={() => setExpandedCategory(isActive ? null : cat.category)}
                onKeyDown={(e) => handleKeyDown(e, cat.category)}
                className={`w-full rounded-sm border text-xs tracking-wide cursor-pointer flex flex-col justify-center transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 overflow-hidden ${
                  isDiscovery
                    ? 'p-5 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-brand-cobalt dark:hover:border-white dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-sm hover:duration-200'
                    : isActive
                      ? 'h-12 px-4 bg-slate-900 text-white border-slate-900 dark:bg-slate-800 dark:border-slate-700 shadow-sm font-bold flex-row items-center justify-center'
                      : 'h-12 px-0 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-200 flex-row items-center justify-center'
                }`}
              >
                <AnimatePresence mode="wait">
                  {isDiscovery ? (
                    <motion.div 
                      key="discovery"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="w-full"
                    >
                      <div className="flex items-center justify-between w-full mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-sm border border-slate-100 dark:border-slate-800">
                            <IconComponent size={20} className="text-brand-cobalt dark:text-brand-cobalt/80" />
                          </div>
                          <span className="font-bold text-slate-900 dark:text-slate-100 text-sm tracking-wide">
                            {cat.category}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-1 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 uppercase">
                          {config.badgeText}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 w-full mt-2">
                        {previewTags.map((tag, i) => (
                          <span key={i} className="text-[10px] font-mono text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="focus"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="flex items-center space-x-2.5 overflow-hidden w-full justify-center"
                    >
                      <IconComponent size={16} className={`shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      
                      {isActive && (
                        <motion.span 
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: 'auto' }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="truncate font-semibold text-left whitespace-nowrap"
                        >
                          {cat.category === 'Productivity & Engineering Tools' ? 'Productivity & Tools' : cat.category}
                        </motion.span>
                      )}
                      
                      {isActive && (
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="text-[8px] font-mono font-bold px-1.5 py-0.5 rounded border border-slate-700 bg-slate-800 text-slate-300 shrink-0 uppercase"
                        >
                          {config.badgeText}
                        </motion.span>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* Pure CSS Accessible Tooltip for Inactive Cards (Desktop only) */}
              {!isDiscovery && !isActive && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-slate-900 text-white text-[10px] font-mono rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 pointer-events-none border border-slate-800 shadow-lg">
                  {config.tooltip}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Expanded Specialization Detail Card Area */}
      <div className="flex-1 min-h-0 flex flex-col relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeCategory.category}
              id={`panel-${activeCategory.category.replace(/\s+/g, '-')}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeCategory.category.replace(/\s+/g, '-')}`}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm shadow-md flex flex-col justify-between absolute inset-0 w-full"
            >
              {/* Scrollable details container */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col min-h-0">
                {/* Card Header Info */}
                <div className="shrink-0 border-b border-brand-border/60 pb-3 mb-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[9px] font-mono text-slate-400 dark:text-slate-300 uppercase tracking-widest block font-bold">
                      RECRUITER SHOWCASE PANEL
                    </span>
                    <span className="text-[9px] font-mono text-slate-500 italic">
                      {getCategoryConfig(activeCategory.category).subtext}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-sans leading-relaxed mt-1.5">
                    {getCategoryConfig(activeCategory.category).summary}
                  </p>
                </div>

                {/* Scannable Competency Cards */}
                <div className="flex-1 overflow-y-auto pr-1 space-y-3 scrollbar-thin">
                  {activeCategory.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-250/50 dark:border-slate-800/60 rounded-sm space-y-2 hover:border-slate-350 dark:hover:border-slate-700/80 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-slate-100 font-sans">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[9px] font-mono px-2 py-0.5 rounded-full border shrink-0 font-semibold ${
                            skill.level === 'Proficient'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/40'
                              : skill.level === 'Intermediate'
                              ? 'bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/40'
                              : 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/40'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      {/* Skill Tags / Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {skill.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sticky Card Footer */}
              <div className="shrink-0 bg-slate-50 dark:bg-slate-950 px-4 sm:px-5 py-3 border-t border-brand-border text-[10px] font-mono text-slate-500 flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle size={11} className="text-emerald-600 shrink-0" />
                  <span>Verified Practical Competencies</span>
                </div>
                <span className="text-[9px] font-bold text-slate-400 uppercase">
                  UST ECE Track
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
