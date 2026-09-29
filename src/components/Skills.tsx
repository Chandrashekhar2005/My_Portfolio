import React, { useState } from 'react';
import { 
  Code, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  BrainCircuit,
  Terminal,
  Check
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

type SkillCategory = 'all' | 'languages' | 'frontend' | 'backend' | 'database' | 'tools' | 'concepts';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');

  const categories: { id: SkillCategory; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'all', label: 'All Technologies', icon: Terminal },
    { id: 'languages', label: 'Languages', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'concepts', label: 'Core CS', icon: BrainCircuit },
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === selectedCategory);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'languages': return 'Programming Language';
      case 'frontend': return 'Frontend Tech';
      case 'backend': return 'Backend Framework';
      case 'database': return 'Database Engine';
      case 'tools': return 'Developer Tool';
      case 'concepts': return 'Core CS Concept';
      default: return category;
    }
  };

  return (
    <section 
      id="skills" 
      className="py-20 md:py-28 border-b border-zinc-200/50 dark:border-zinc-800/50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">
              Technical Stack
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Technologies & Core Competencies
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              A solid foundation in modern web development, algorithms, and database management, backed by hands-on academic and project experience.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-zinc-100 dark:bg-zinc-900/80 rounded-xl border border-zinc-200 dark:border-zinc-800 shrink-0">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white dark:bg-zinc-800 text-purple-600 dark:text-purple-300 shadow-xs border border-zinc-200/50 dark:border-zinc-700/50'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group p-5 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-purple-500/40 dark:hover:border-purple-500/40 transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
            >
              <div className="flex items-start justify-between">
                <span className="font-semibold text-base text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </span>
                <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                  {getCategoryLabel(skill.category)}
                </span>
              </div>

              {skill.description && (
                <p className="mt-2.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {skill.description}
                </p>
              )}

              {/* Zero-pill metadata indicator */}
              <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <Check className="w-3 h-3" />
                  <span>Hands-on experience</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Summary Bar for Recruiters */}
        <div className="mt-10 p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold text-purple-700 dark:text-purple-300">Note for Hiring Managers:</span> Skills reflect curriculum at Bengaluru City University, Mifratech internship, and independent project deployment.
          </div>
          <a
            href="#projects"
            className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline shrink-0"
          >
            Explore Projects Built With These Technologies →
          </a>
        </div>

      </div>
    </section>
  );
};
