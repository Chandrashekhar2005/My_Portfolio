import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  Award,
  CheckCircle2,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  EDUCATION_DATA, 
  INTERNSHIP_DATA, 
  PROJECTS_DATA, 
  CERTIFICATIONS_DATA, 
  SKILLS_DATA 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume Preview"
    >
      <div 
        className="max-w-4xl w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 font-mono">
              Curriculum Vitae • {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-200/60 dark:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Chandrashekhar_S_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 text-zinc-900 dark:text-zinc-100 font-sans print:p-0">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-zinc-200 dark:border-zinc-800 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                Bengaluru 560064, India
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                {PERSONAL_INFO.emailPlaceholder}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                github.com/Chandrashekhar2005
              </span>
              <span aria-hidden="true">·</span>
              <a
                href={PERSONAL_INFO.actualLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>linkedin.com/in/chanrdu17</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 border-b border-purple-500/20 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              Aspiring Web Developer completed a Bachelor of Computer Applications (BCA) with an 8.77 CGPA. Proficient in Python, JavaScript, React, HTML, CSS, Flask, and PostgreSQL. Experienced in developing full-stack web applications and passionate about solving real-world problems through technology. Seeking to contribute and grow through Web Development.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 border-b border-purple-500/20 pb-1">
              Education
            </h2>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-between text-sm font-semibold">
                <span>{EDUCATION_DATA.institution} | Bengaluru, India</span>
                <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400 font-mono">August 2023 – July 2026</span>
              </div>
              <div className="flex flex-wrap items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
                <span>{EDUCATION_DATA.degree}</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">{EDUCATION_DATA.score}</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 border-b border-purple-500/20 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Programming Languages:</span>{' '}
                <span className="text-zinc-600 dark:text-zinc-400">Python, JavaScript, SQL</span>
              </div>
              <div>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Web Development:</span>{' '}
                <span className="text-zinc-600 dark:text-zinc-400">HTML5, CSS3, React, Flask, Bootstrap</span>
              </div>
              <div>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Databases:</span>{' '}
                <span className="text-zinc-600 dark:text-zinc-400">MySQL, PostgreSQL</span>
              </div>
              <div>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Tools:</span>{' '}
                <span className="text-zinc-600 dark:text-zinc-400">Git, GitHub, VS Code, Power BI</span>
              </div>
              <div className="sm:col-span-2">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Core CS Concepts:</span>{' '}
                <span className="text-zinc-600 dark:text-zinc-400">Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP)</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 border-b border-purple-500/20 pb-1">
              Key Projects
            </h2>

            {PROJECTS_DATA.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    <span>{proj.name}</span>
                    {proj.liveDemoUrl && (
                      <a 
                        href={proj.liveDemoUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-purple-600 dark:text-purple-400 font-normal hover:underline text-xs"
                      >
                        [Live Demo]
                      </a>
                    )}
                  </div>
                  <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400 font-mono">
                    {proj.technologies.slice(0, 4).join(', ')}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-zinc-600 dark:text-zinc-400 pl-1">
                  {proj.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Internship */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 border-b border-purple-500/20 pb-1">
              Internship Experience
            </h2>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm font-semibold">
                <span>{INTERNSHIP_DATA.role} — {INTERNSHIP_DATA.company}</span>
                <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400 font-mono">{INTERNSHIP_DATA.duration}</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                {INTERNSHIP_DATA.description}
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 border-b border-purple-500/20 pb-1">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
              {CERTIFICATIONS_DATA.map((c) => (
                <div key={c.id} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span><strong className="font-medium text-zinc-900 dark:text-zinc-100">{c.title}</strong> — {c.issuer}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer info in modal */}
        <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
          <span>Recruiter verification ready • Available for immediate employment</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
