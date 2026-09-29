import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Copy, 
  Check, 
  Terminal, 
  FileCode,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, HERO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'developer.ts' | 'profile.json' | 'terminal'>('developer.ts');

  const codeSnippet = `const developer = {
  name: "Chandrashekhar S",
  role: "Web Developer",
  skills: ["React", "TypeScript", "Python"]
};`;

  const jsonSnippet = `{
  "name": "Chandrashekhar S",
  "education": "BCA (Bengaluru City University)",
  "cgpa": "8.77 / 10",
  "status": "Available for Full-time Roles & Internships",
  "location": "Bengaluru, India"
}`;

  const terminalSnippet = `$ whoami
chandrashekhar-s
$ node -v
v20.18.0
$ git log -1 --oneline
c8f94d2 (HEAD -> main) feat: build practical applications & solve real problems
$ echo "Ready to contribute & build impactful software."
Ready to contribute & build impactful software.`;

  const handleCopyCode = () => {
    const textToCopy = activeTab === 'developer.ts' 
      ? codeSnippet 
      : activeTab === 'profile.json' 
      ? jsonSnippet 
      : terminalSnippet;
    navigator.clipboard.writeText(textToCopy);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.emailPlaceholder);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-zinc-200/50 dark:border-zinc-800/50"
    >
      {/* Subtle ambient gradient mesh - restrained & strictly purple accent */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-600/10 dark:bg-purple-600/12 rounded-full blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Display / Kicker (Zero-pill text separator) */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 tracking-wide uppercase">
              <span>BCA Graduate</span>
              <span aria-hidden="true" className="text-zinc-400 dark:text-zinc-600 font-bold">•</span>
              <span>Web Developer</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.15] text-balance">
              {HERO_DATA.headline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl text-pretty font-normal">
              {HERO_DATA.supportingText}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 rounded-xl transition-all shadow-xs hover:shadow-purple-500/20 active:scale-[0.99] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Chandrashekhar_S_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-800 rounded-xl transition-all active:scale-[0.99] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                <Download className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors cursor-pointer"
              >
                <span>Preview CV</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Social & Contact Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400 border-t border-zinc-200/80 dark:border-zinc-800/80">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-purple-500"
              >
                <Github className="w-4 h-4" />
                <span className="font-medium">GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.actualLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-purple-500"
              >
                <Linkedin className="w-4 h-4" />
                <span className="font-medium">LinkedIn</span>
              </a>

              <div className="inline-flex items-center gap-2 group">
                <a
                  href={`mailto:${PERSONAL_INFO.emailPlaceholder}`}
                  className="inline-flex items-center gap-1.5 hover:text-purple-600 dark:hover:text-purple-400 transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-purple-500"
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">Email</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email placeholder"
                  className="p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer"
                  aria-label="Copy Email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Code Editor / Terminal Visual */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl bg-zinc-900/95 dark:bg-zinc-950/95 border border-zinc-800 shadow-xl overflow-hidden backdrop-blur-sm">
              
              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Editor Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('developer.ts')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md transition-colors cursor-pointer ${
                      activeTab === 'developer.ts'
                        ? 'bg-zinc-800 text-purple-300 border border-purple-500/30'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5" />
                    <span>developer.ts</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('profile.json')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md transition-colors cursor-pointer ${
                      activeTab === 'profile.json'
                        ? 'bg-zinc-800 text-purple-300 border border-purple-500/30'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <span>profile.json</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md transition-colors cursor-pointer ${
                      activeTab === 'terminal'
                        ? 'bg-zinc-800 text-purple-300 border border-purple-500/30'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>sh</span>
                  </button>
                </div>

                {/* Copy snippet button */}
                <button
                  onClick={handleCopyCode}
                  className="p-1.5 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 rounded-md transition-colors cursor-pointer"
                  title="Copy snippet"
                  aria-label="Copy code snippet"
                >
                  {copiedCode ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Code Content Area */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-zinc-200">
                {activeTab === 'developer.ts' && (
                  <pre className="text-left font-mono">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">developer</span> = &#123;{'\n'}
                    {'  '}<span className="text-zinc-400">name</span>:{' '}
                    <span className="text-emerald-300">"Chandrashekhar S"</span>,{'\n'}
                    {'  '}<span className="text-zinc-400">role</span>:{' '}
                    <span className="text-emerald-300">"Web Developer"</span>,{'\n'}
                    {'  '}<span className="text-zinc-400">skills</span>: [
                    <span className="text-amber-300">"React"</span>,{' '}
                    <span className="text-amber-300">"TypeScript"</span>,{' '}
                    <span className="text-amber-300">"Python"</span>]{'\n'}
                    &#125;;
                  </pre>
                )}

                {activeTab === 'profile.json' && (
                  <pre className="text-left text-zinc-300 font-mono">
                    &#123;{'\n'}
                    {'  '}<span className="text-purple-300">"name"</span>: <span className="text-emerald-300">"Chandrashekhar S"</span>,{'\n'}
                    {'  '}<span className="text-purple-300">"degree"</span>: <span className="text-emerald-300">"BCA"</span>,{'\n'}
                    {'  '}<span className="text-purple-300">"university"</span>: <span className="text-emerald-300">"Bengaluru City University"</span>,{'\n'}
                    {'  '}<span className="text-purple-300">"cgpa"</span>: <span className="text-amber-300">"8.77 / 10"</span>,{'\n'}
                    {'  '}<span className="text-purple-300">"status"</span>: <span className="text-emerald-400">"Open for Opportunities"</span>{'\n'}
                    &#125;
                  </pre>
                )}

                {activeTab === 'terminal' && (
                  <pre className="text-left text-zinc-300 font-mono whitespace-pre-wrap">
                    <span className="text-zinc-500">$</span> whoami{'\n'}
                    <span className="text-purple-400">chandrashekhar-s</span>{'\n'}
                    <span className="text-zinc-500">$</span> cat /etc/education{'\n'}
                    <span className="text-emerald-400">BCA Graduate • Bengaluru City University</span>{'\n'}
                    <span className="text-zinc-500">$</span> git status{'\n'}
                    <span className="text-zinc-400">On branch main. Ready for tech recruitment.</span>
                  </pre>
                )}
              </div>

              {/* Status Bar / Caption */}
              <div className="px-4 py-2 bg-zinc-900/60 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>TypeScript 5.x • React 19</span>
                </span>
                <span>UTF-8 • Tab: 2</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
