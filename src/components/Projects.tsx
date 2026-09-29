import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Maximize2,
  X
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section 
      id="projects" 
      className="py-20 md:py-28 border-b border-zinc-200/50 dark:border-zinc-800/50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">
            Selected Works
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Real-World Projects & Applications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Showcasing responsive web development, real-time API integrations, database workflows, and machine learning models.
          </p>
        </div>

        {/* Project 1: Featured Spotlight (Live Currency Converter) */}
        {PROJECTS_DATA.filter(p => p.featured).map((project) => (
          <div 
            key={project.id}
            className="mb-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-purple-500/30 dark:border-purple-500/25 overflow-hidden shadow-lg transition-all hover:border-purple-500/50"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Image / Visual Column */}
              <div className="lg:col-span-7 relative group overflow-hidden bg-zinc-950 flex items-center justify-center min-h-[260px] sm:min-h-[340px]">
                <img
                  src={project.image}
                  alt={`${project.name} preview illustration`}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Deployed Indicator */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-emerald-500/40 text-xs font-medium text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Deployed & Live</span>
                </div>

                {/* Inspect Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-4 right-4 p-2 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-purple-400 transition-colors opacity-90 group-hover:opacity-100"
                  title="Expand preview"
                  aria-label="Expand project preview"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">
                    Featured Project • {project.tagline}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="mt-4 space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Zero-pill unboxed technologies */}
                  <div className="mt-5 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">
                      Technologies Used:
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-700 dark:text-zinc-300">
                      {project.technologies.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span className="font-mono">{tech}</span>
                          {i < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="text-zinc-400 dark:text-zinc-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-xl transition-colors shadow-xs"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-200/70 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-300/80 dark:border-zinc-700/80 rounded-xl transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View GitHub</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        ))}

        {/* Secondary Projects Grid (Attendly & Face Recognition) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.filter(p => !p.featured).map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 overflow-hidden hover:border-purple-500/40 dark:hover:border-purple-500/40 transition-all duration-200 shadow-xs"
            >
              {/* Visual Area */}
              <div className="relative group overflow-hidden bg-zinc-950 aspect-16/9 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={`${project.name} preview illustration`}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none" />

                {project.liveDemoUrl && (
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-950/80 backdrop-blur-md border border-purple-500/40 text-[11px] font-medium text-purple-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>Live Web Project</span>
                  </div>
                )}

                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-purple-400 transition-colors opacity-90 group-hover:opacity-100 cursor-pointer"
                  title="Expand preview"
                  aria-label="Expand project preview"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">
                    {project.tagline}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-50">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                    {project.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Zero-pill unboxed technologies */}
                  <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-700 dark:text-zinc-300">
                      {project.technologies.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span className="font-mono">{tech}</span>
                          {i < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="text-zinc-400 dark:text-zinc-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-200/70 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-300/80 dark:border-zinc-700/80 rounded-lg transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    <span>View GitHub</span>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-150"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.name}
        >
          <div 
            className="max-w-2xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl space-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950">
              <span className="text-sm font-semibold text-zinc-200 font-mono">
                {selectedProject.name}
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full aspect-16/9 object-cover"
              />

              <div className="p-6 space-y-4 text-left">
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                    Key Implementation Details
                  </h4>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                  {selectedProject.liveDemoUrl && (
                    <a
                      href={selectedProject.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                    >
                      <span>Open Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Repo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
