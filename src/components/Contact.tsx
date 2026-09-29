import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  Clock, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.emailPlaceholder);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Create mailto link with prefilled subject & message
    const mailtoSubject = encodeURIComponent(subject || `Opportunity Inquiry from ${name}`);
    const mailtoBody = encodeURIComponent(`Hi Chandrashekhar,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
    
    // Open in user's default email client
    window.location.href = `mailto:${PERSONAL_INFO.emailPlaceholder}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 4000);
  };

  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 relative"
    >
      {/* Background glow accent */}
      <div 
        className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[100px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Get In Touch
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              Let's build something useful.
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl font-normal">
              I'm open to software development opportunities, internships, collaborations and interesting projects.
            </p>

            {/* Direct Channels */}
            <div className="space-y-4 pt-4">
              
              {/* Email Card with 1-click copy */}
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      Email Address
                    </div>
                    <a 
                      href={`mailto:${PERSONAL_INFO.emailPlaceholder}`}
                      className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {PERSONAL_INFO.emailPlaceholder}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700/80 transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* GitHub Link Card */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/40 dark:hover:border-purple-500/40 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      GitHub Repositories
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      github.com/Chandrashekhar2005
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* LinkedIn Link Card */}
              <a
                href={PERSONAL_INFO.actualLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/40 dark:hover:border-purple-500/40 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      LinkedIn Network
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      linkedin.com/in/chanrdu17
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

            </div>

            {/* Quick Location & Availability Note */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Bengaluru, India (Open to On-site & Remote)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Immediate Joining Available</span>
              </div>
            </div>

          </div>

          {/* Right Column: Recruiter Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 shadow-md">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-6 font-normal">
                Recruiters and hiring managers can reach out directly via this form.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="recruiter-name" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
                    Your Name / Company
                  </label>
                  <input
                    id="recruiter-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Sarah Jenkins (HR @ TechCorp)"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="recruiter-email" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="recruiter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="recruiter@company.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="recruiter-subject" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
                    Subject / Role Title
                  </label>
                  <input
                    id="recruiter-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g., Junior Software Engineer Role / Interview Invitation"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="recruiter-message" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="recruiter-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Chandrashekhar, we came across your projects and BCA background and would like to discuss..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 rounded-xl transition-all shadow-xs active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>

                {status === 'success' && (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Opening your mail app. Alternatively, feel free to copy the email directly above!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
