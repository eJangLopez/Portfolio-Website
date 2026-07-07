import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Link, Calendar, ArrowUpRight } from 'lucide-react';
import { certifications } from '../data';

export default function CertsSection() {
  return (
    <section id="certs" className="py-20 border-b border-brand-border bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono text-slate-500 tracking-widest uppercase block">
            Cisco Academy Credentials
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-sm text-slate-500 font-sans leading-relaxed max-w-2xl mx-auto">
            Review the rigorous technical certifications completed at the Cisco Networking Academy, proving professional competence in switching, routing, and wireless infrastructure.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-brand-surface border border-brand-border hover:border-slate-400 rounded-sm p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-md group relative"
            >
              <div className="space-y-6">
                
                {/* Cert Header */}
                <div className="flex items-start justify-between h-[7.5rem]">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="text-brand-cobalt h-5 w-5" />
                      <span className="text-xs font-mono text-brand-cobalt font-bold tracking-wider">
                        CISCO NETWORKING ACADEMY
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-slate-900 leading-snug tracking-tight mt-2">
                      {cert.name}
                    </h3>
                  </div>
                </div>

                {/* Date & Issuer badge */}
                <div className="flex items-center space-x-3 text-xs font-mono text-slate-600 bg-slate-50 p-3 rounded-sm border border-brand-border">
                  <Calendar size={13} className="text-brand-copper" />
                  <span>Issued: {cert.issueDate}</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-brand-cobalt font-semibold">CredID: Verified</span>
                </div>

                {/* Skills Verified List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold">
                    Verified Competencies
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5" aria-label={`Skills verified for ${cert.name}`}>
                    {cert.skillsVerified.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start space-x-2.5 text-xs text-slate-700 leading-relaxed font-sans">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action and verification block */}
              <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center justify-between">
                <div className="flex items-center space-x-1 text-[10px] font-mono text-slate-500">
                  <Award size={13} className="text-brand-copper" />
                  <span>Official Course Curriculum Status: COMPLETE</span>
                </div>
                
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer transition-colors"
                >
                  <span>Verify</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
