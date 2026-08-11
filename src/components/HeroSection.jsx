import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, FileText, Download, Github, Linkedin, Mail, Sparkles, Terminal, Code2, Briefcase, GraduationCap } from 'lucide-react';

const HeroSection = ({ onOpenResume }) => {
  const navigate = useNavigate();

  const handleGoTo = (path, sectionId) => {
    navigate(path);
    window.history.replaceState(null, '', path);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      
      {/* Glow Backdrop Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container max-w-5xl mx-auto text-center z-10 space-y-8">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-primary/30 text-xs md:text-sm font-medium shadow-lg opacity-0 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-foreground">Software Engineer at <strong className="text-primary font-semibold">V.Vang Solutions</strong></span>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in block text-muted-foreground text-xl sm:text-2xl font-semibold mb-2">
              Hello, I'm
            </span>
            <span className="opacity-0 animate-fade-in-delay-1 bg-gradient-to-r from-foreground via-primary to-purple-400 bg-clip-text text-transparent text-glow">
              Priyanshu Nigam
            </span>
          </h1>
          <p className="text-lg sm:text-2xl font-medium text-primary/90 opacity-0 animate-fade-in-delay-2 flex items-center justify-center gap-2 flex-wrap">
            <Code2 size={22} className="text-primary" /> Full-Stack Software Engineer
            <span className="text-muted-foreground hidden sm:inline">•</span>
            <GraduationCap size={22} className="text-primary" /> IIIT Delhi Alum ('26)
          </p>
        </div>

        {/* Short Bio */}
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay-3">
          Passionate about architecting scalable web applications, real-time payment workflows, and intelligent AI-driven solutions using <strong className="text-foreground">MERN Stack</strong>, <strong className="text-foreground">Next.js</strong>, and modern cloud technologies. Graduate from <strong className="text-foreground">IIIT Delhi</strong> with a B.Tech in ECE.
        </p>

        {/* Quick Highlights / Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 opacity-0 animate-fade-in-delay-3 pt-2">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-secondary/40 border border-border text-xs font-medium text-foreground">
            <Briefcase size={14} className="text-primary" /> Full-Stack Production Systems
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-secondary/40 border border-border text-xs font-medium text-foreground">
            <GraduationCap size={14} className="text-primary" /> B.Tech ECE @ IIIT Delhi
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-secondary/40 border border-border text-xs font-medium text-foreground">
            <Terminal size={14} className="text-primary" /> DSA & System Design
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4 opacity-0 animate-fade-in-delay-4">
          <button
            onClick={() => handleGoTo('/projects', 'projects')}
            className="cosmic-button flex items-center gap-2 cursor-pointer"
          >
            View My Projects <ArrowRight size={18} />
          </button>
          
          <button
            onClick={onOpenResume}
            className="cosmic-button-outline flex items-center gap-2 text-foreground cursor-pointer"
          >
            <FileText size={18} /> View CV / Resume
          </button>

          <a
            href="/Priyanshu_Nigam_CV.pdf"
            download="Priyanshu_Nigam_CV.pdf"
            className="cosmic-button-outline flex items-center gap-2 text-primary border-primary/50 hover:bg-primary/10"
          >
            <Download size={18} /> Download CV
          </a>
        </div>

        {/* Social Icons Bar */}
        <div className="flex items-center justify-center gap-6 pt-6 opacity-0 animate-fade-in-delay-4 text-muted-foreground">
          <a
            href="https://github.com/Priyansu22382"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-secondary/60 hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-border"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/priyanshu-nigam-845399269/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-secondary/60 hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-border"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:priyanshunigam987@gmail.com"
            className="p-2.5 rounded-full bg-secondary/60 hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-border"
            aria-label="Email Priyanshu"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
