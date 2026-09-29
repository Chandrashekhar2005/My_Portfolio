import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  Calendar, 
  Award, 
  BookOpen, 
  Briefcase, 
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { EDUCATION_DATA, INTERNSHIP_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section 
      id="education" 
      className="py-20 md:py-28 border-b border-zinc-200/50 dark:border-zinc-800/50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">
            Academic Background & Experience
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Education & Practical Training
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Rigorous undergraduate education in computer applications complemented by hands-on industry internship experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Education Card */}
          <div className="lg:col-span-7 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      {EDUCATION_DATA.degree}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      <Building2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span className="font-medium text-zinc-800 dark:text-zinc-200">{EDUCATION_DATA.institution}</span>
                      <span aria-hidden="true" className="text-zinc-400">·</span>
                      <span>{EDUCATION_DATA.location}</span>
                    </div>
                  </div>
                </div>

                {/* Score badge / callout */}
                <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide">
                  {EDUCATION_DATA.score}
                </div>
              </div>

              {/* Timeline & Focus Description */}
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>{EDUCATION_DATA.period}</span>
              </div>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                {EDUCATION_DATA.description}
              </p>

              {/* Coursework List */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider mb-3">
                  <BookOpen className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>Key Academic Coursework</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                  {EDUCATION_DATA.coursework.map((course, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
              <span>Status: Completed Undergrad Degree</span>
              <span className="text-purple-600 dark:text-purple-400 font-medium">BCA Graduate</span>
            </div>
          </div>

          {/* Internship Experience Card */}
          <div className="lg:col-span-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-0.5">
                    Industry Internship
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-50">
                    {INTERNSHIP_DATA.role}
                  </h3>
                  <div className="mt-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {INTERNSHIP_DATA.company}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>{INTERNSHIP_DATA.duration} Intensive Program</span>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                {INTERNSHIP_DATA.description}
              </p>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider mb-2.5">
                  <Cpu className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>Key Technologies & Deliverables</span>
                </div>
                
                <div className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                    <span>Trained machine learning models for facial landmark analysis and emotion classification.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                    <span>Integrated image processing workflows in Python with real-time video feeds.</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
              <span>Domain: Artificial Intelligence & ML</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Internship Completed</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
