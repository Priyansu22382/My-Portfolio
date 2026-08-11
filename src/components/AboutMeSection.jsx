import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Code, User, GraduationCap, Cpu, ShieldCheck, Download, Mail, ExternalLink, Sparkles, BrainCircuit, FileText } from 'lucide-react';

const AboutMeSection = ({ onOpenResume }) => {
  const navigate = useNavigate();

  const handleGoToContact = (e) => {
    e.preventDefault();
    navigate('/contact');
    window.history.replaceState(null, '', '/contact');
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
            <User size={14} /> Personal Story & Background
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            About <span className="text-primary text-glow">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Software engineer, problem solver, and tech enthusiast dedicated to building high-performance web systems.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio & Education */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-border space-y-5">
              <h3 className="text-2xl font-bold text-foreground">
                Engineered for Impact & Innovation
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                I am a Software Engineer currently working at <strong className="text-foreground">V.Vang Solutions Private Limited</strong>, where I develop full-stack applications, payment infrastructure, and international merchant portals. I graduated with a B.Tech in Electronics and Communication Engineering from <strong className="text-foreground">IIIT Delhi</strong> (2022–2026).
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                With a robust foundation in Data Structures, Algorithms, and Software Engineering principles, I specialize in the <strong className="text-foreground">MERN Stack</strong>, <strong className="text-foreground">Next.js</strong>, and microservices. I am passionate about exploring AI, Large Language Models, and AI Agents to create next-generation intelligent tools.
              </p>

              {/* Education Box */}
              <div className="p-4 rounded-xl bg-secondary/50 border border-border/80 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0 mt-1">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-bold text-foreground text-base">IIIT Delhi (ECE)</h4>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                      2022 – 2026
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Bachelor of Technology in Electronics and Communication Engineering
                  </p>
                  <p className="text-xs text-primary/90 font-medium mt-1">
                    Indraprastha Institute of Information Technology Delhi
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/contact"
                  onClick={handleGoToContact}
                  className="cosmic-button flex items-center gap-2 text-sm"
                >
                  <Mail size={16} /> Get In Touch
                </a>

                <button
                  onClick={onOpenResume}
                  className="cosmic-button-outline flex items-center gap-2 text-sm text-foreground cursor-pointer"
                >
                  <FileText size={16} /> View CV / Resume
                </button>

                <a
                  href="/Priyanshu_Nigam_CV.pdf"
                  download="Priyanshu_Nigam_CV.pdf"
                  className="cosmic-button-outline flex items-center gap-2 text-sm text-primary border-primary/40 hover:bg-primary/10"
                >
                  <Download size={16} /> Download CV
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Key Focus Areas Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1 */}
            <div className="gradient-border p-6 card-hover glass-card text-left">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Code className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-lg text-foreground">Full-Stack Web Engineering</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Building production-grade web applications with React, Next.js, Node.js, Express, and MongoDB.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover glass-card text-left">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-lg text-foreground">FinTech & Payment Systems</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Designing secure payment workflows, merchant portals, role authorization, and scalable REST APIs.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-6 card-hover glass-card text-left">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-lg text-foreground">AI Systems & Automation</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Integrating Twilio voice/SMS reminder workflows, AI agents, LLM integrations, and automated schedulers.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMeSection;
