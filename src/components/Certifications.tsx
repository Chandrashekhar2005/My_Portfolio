import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  CheckCircle, 
  Sparkles,
  ShieldCheck,
  X
} from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Certification } from '../types';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section 
      id="certifications" 
      className="py-20 md:py-28 border-b border-zinc-200/50 dark:border-zinc-800/50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">
            Verified Knowledge
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Professional Certifications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Industry credentials demonstrating continuous self-directed learning across full-stack engineering, cloud, databases, and AI systems.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-purple-500/40 dark:hover:border-purple-500/40 transition-all duration-200 flex flex-col justify-between shadow-xs hover:-translate-y-0.5"
            >
              <div className="space-y-4">
                
                {/* Header with issuer */}
                <div className="flex items-start justify-between gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 text-right">
                    {cert.issuer}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                    {cert.title}
                  </h3>
                  <div className="mt-1 text-xs text-purple-600 dark:text-purple-400 font-medium">
                    Issued by: {cert.issuer}
                  </div>
                </div>

                {/* Skills acquired - zero-pill text list */}
                <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                    Key Topics Covered:
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                    {cert.skills.map((skill, idx) => (
                      <React.Fragment key={skill}>
                        <span>{skill}</span>
                        {idx < cert.skills.length - 1 && (
                          <span aria-hidden="true" className="text-zinc-400 dark:text-zinc-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Link: View Certificate (Placeholder / Modal preview) */}
              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}

                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verified</span>
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Detail Modal */}
        {selectedCert && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-150"
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedCert.title}
          >
            <div 
              className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl space-y-5 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <Award className="w-6 h-6" />
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                  Certificate Verification Placeholder
                </span>
                <h3 className="mt-1 text-lg font-bold text-zinc-100">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Issued by {selectedCert.issuer}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 space-y-2">
                <p>
                  This certificate has been completed as part of Chandrashekhar's professional development curriculum.
                </p>
                <div className="text-zinc-500 font-mono text-[11px]">
                  ID: {selectedCert.id} • Status: Active
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2 border-t border-zinc-800">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
