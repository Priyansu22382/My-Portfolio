import React, { useState } from 'react';
import { X, Download, ExternalLink, Briefcase, GraduationCap, Code2, Award, Mail, Phone, MapPin, Eye, FileText } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  const [activeView, setActiveView] = useState('pdf'); // 'pdf' or 'summary'

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md transition-all">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl bg-card border border-border p-5 md:p-7 shadow-2xl space-y-5 text-foreground overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-4 gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="badge-pill">Curriculum Vitae</span>
              <span className="text-xs text-muted-foreground">• Official CV Document</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary">Priyanshu Nigam</h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-1 flex flex-wrap gap-x-4 gap-y-1">
              <span className="flex items-center gap-1"><MapPin size={14} className="text-primary" /> Delhi, INDIA</span>
              <span className="flex items-center gap-1"><Mail size={14} className="text-primary" /> priyanshunigam987@gmail.com</span>
              <span className="flex items-center gap-1"><Phone size={14} className="text-primary" /> +91 93155-80536</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* View Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-secondary border border-border text-xs font-semibold">
              <button
                onClick={() => setActiveView('pdf')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  activeView === 'pdf' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Eye size={14} /> PDF Document
              </button>
              <button
                onClick={() => setActiveView('summary')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  activeView === 'summary' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <FileText size={14} /> Text Summary
              </button>
            </div>

            {/* Direct Open in New Tab & Download */}
            <a
              href="/Priyanshu_Nigam_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button-outline text-xs py-2 px-3 gap-1.5 hidden md:inline-flex"
            >
              <ExternalLink size={14} /> Open PDF
            </a>

            <a
              href="/Priyanshu_Nigam_CV.pdf"
              download="Priyanshu_Nigam_CV.pdf"
              className="cosmic-button text-xs py-2 px-4 gap-1.5"
            >
              <Download size={14} /> Download CV
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors ml-1"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-6">
          {activeView === 'pdf' ? (
            <div className="w-full h-[62vh] rounded-xl overflow-hidden border border-border bg-secondary/30 relative">
              <iframe
                src="/Priyanshu_Nigam_CV.pdf"
                title="Priyanshu Nigam CV PDF"
                className="w-full h-full border-none"
              />
            </div>
          ) : (
            <div className="space-y-6 text-left">
              {/* Objective */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
                  <Award size={16} /> Professional Objective
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed bg-secondary/30 p-4 rounded-xl border border-border/50">
                  Software Engineer with experience developing scalable web applications and AI-driven solutions using MERN Stack, Next.js, and modern backend technologies. Graduated from IIIT Delhi in 2026 with a B.Tech in Electronics and Communication Engineering. Strong foundation in data structures, algorithms, and software engineering, with a passion for solving complex technical challenges and building products that create real-world impact.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                  <Briefcase size={16} /> Work Experience
                </h3>
                <div className="bg-secondary/20 p-5 rounded-xl border border-border space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h4 className="font-bold text-lg">Software Engineer</h4>
                      <p className="text-sm text-primary font-medium">V.Vang Solutions Private Limited</p>
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary w-fit mt-1 sm:mt-0">
                      July 2026 – Present
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs md:text-sm text-muted-foreground space-y-1.5 leading-relaxed">
                    <li>Developed and maintained multiple production-grade full-stack web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and REST APIs.</li>
                    <li>Led complete frontend and backend development of the <strong className="text-foreground">KuberoPays</strong> platform (JWT Auth, role authorization, merchant onboarding, transaction management, payment workflows).</li>
                    <li>Designed and implemented backend APIs for the <strong className="text-foreground">PayVang</strong> platform, improving application scalability & performance.</li>
                    <li>Built and enhanced the <strong className="text-foreground">Merchant Portal</strong> (authentication, dashboard analytics, payment management, responsive international UI).</li>
                    <li>Contributed to the <strong className="text-foreground">CourseraEducation</strong> platform with scalable frontend components, backend services, and database integrations.</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                  <GraduationCap size={16} /> Education
                </h3>
                <div className="bg-secondary/20 p-5 rounded-xl border border-border flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h4 className="font-bold text-base">Bachelor of Technology (B.Tech)</h4>
                    <p className="text-sm text-muted-foreground">Electronics and Communication Engineering (ECE)</p>
                    <p className="text-xs text-primary font-medium mt-1">Indraprastha Institute of Information Technology Delhi (IIIT Delhi)</p>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-foreground w-fit mt-2 sm:mt-0">
                    Nov 2022 – July 2026
                  </span>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                  <Code2 size={16} /> Technical Skills Summary
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
                  <div className="p-3 rounded-lg bg-secondary/30 border border-border">
                    <span className="font-semibold text-foreground block mb-1">Languages:</span>
                    <p className="text-muted-foreground">JavaScript (ES6+), TypeScript, C++, C, Java, Python, SQL</p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/30 border border-border">
                    <span className="font-semibold text-foreground block mb-1">Frontend:</span>
                    <p className="text-muted-foreground">React.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive Web Design</p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/30 border border-border">
                    <span className="font-semibold text-foreground block mb-1">Backend & Databases:</span>
                    <p className="text-muted-foreground">Node.js, Express.js, REST APIs, JWT Auth, OAuth, WebSockets, MongoDB, MySQL, Firebase</p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/30 border border-border">
                    <span className="font-semibold text-foreground block mb-1">Tools & Core CS:</span>
                    <p className="text-muted-foreground">Git, GitHub, Vercel, Render, Postman, DSA, OOP, DBMS, Operating Systems, Computer Networks</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-border pt-4 gap-3 shrink-0">
          <p className="text-xs text-muted-foreground">
            Official PDF document attached (`Priyanshu_Nigam_CV.pdf`).
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="/Priyanshu_Nigam_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button-outline text-xs py-2 px-4 flex items-center justify-center gap-1.5 w-full sm:w-auto"
            >
              Open PDF <ExternalLink size={14} />
            </a>
            <a
              href="/Priyanshu_Nigam_CV.pdf"
              download="Priyanshu_Nigam_CV.pdf"
              className="cosmic-button text-xs py-2 px-5 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Download size={14} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
