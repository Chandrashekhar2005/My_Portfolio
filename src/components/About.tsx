import React from 'react';
import { 
  GraduationCap, 
  Code, 
  Cpu, 
  MapPin, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { ABOUT_DATA, PERSONAL_INFO, EDUCATION_DATA, INTERNSHIP_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 md:py-28 border-b border-zinc-200/50 dark:border-zinc-800/50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">
            About Me
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {ABOUT_DATA.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Prose Content */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            {ABOUT_DATA.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-pretty">
                {paragraph}
              </p>
            ))}

            {/* Core Values / Competencies List */}
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                What I Bring to Engineering Teams
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-1" />
                  <span>Strong computer science fundamentals & high 8.77 CGPA</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-1" />
                  <span>Full-stack proficiency in Python, React, Flask, and SQL</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-1" />
                  <span>Practical deployed projects with live demo experience</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-1" />
                  <span>Hands-on AI/ML internship background with Python & OpenCV</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Profile Card */}
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 shadow-xs space-y-5">
              
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {PERSONAL_INFO.role}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Education Snippet */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {EDUCATION_DATA.degree}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    {EDUCATION_DATA.institution} • {EDUCATION_DATA.score}
                  </div>
                  <div className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                    {EDUCATION_DATA.period}
                  </div>
                </div>
              </div>

              {/* Practical Internship Snippet */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {INTERNSHIP_DATA.role}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    {INTERNSHIP_DATA.company} • {INTERNSHIP_DATA.duration}
                  </div>
                  <div className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                    Facial Expression Detection with Python & AI/ML
                  </div>
                </div>
              </div>

              {/* Core Interests */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Primary Interests
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    Full-Stack Web Development, REST APIs, Modern React, Problem Solving
                  </div>
                </div>
              </div>

              {/* Call to Action note for recruiters */}
              <div className="pt-2 text-xs text-zinc-500 dark:text-zinc-400 italic">
                Actively seeking entry-level software engineering roles and internships.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
