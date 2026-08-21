import React from 'react';
import { ArrowRight, ExternalLink, Github, FolderGit2, CheckCircle2, Sparkles, Megaphone, Activity, Terminal, Code2, ShieldCheck, PhoneCall, Cpu, Server, GraduationCap, ShoppingBag } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "CourseraEducation",
    tagline: "Enterprise AI Training & Admin LMS",
    description: "Production education platform built at V.Vang Solutions for custom AI training programs — with admin management, student portals, cohorts, and learning analytics.",
    highlights: [
      "Role-based Admin Panel & Student Portal with JWT authentication",
      "Cohorts, assignments, quizzes, live sessions, and progress analytics",
      "Custom AI curriculum tracks including RAG, Prompt Engineering, and Agentic AI"
    ],
    tags: ["React.js", "Vite", "Node.js", "REST APIs", "JWT Auth", "Role-Based Access"],
    demoUrl: "https://courseraeducation.com/",
    bannerType: "coursera"
  },
  {
    id: 2,
    title: "FaaPerfume",
    tagline: "Modern Fragrance E-commerce Boutique",
    description: "Production fragrance boutique built at V.Vang Solutions for designer, niche, and Arabian scents — with collections, combo offers, cart/checkout, and UAE-wide delivery.",
    highlights: [
      "Full catalog with Men, Women, Exclusive, Combos, and brand collections",
      "Customer & Admin roles, wishlist, discount codes, and combo checkout",
      "Multi-currency storefront (AED, USD, EUR) with express UAE delivery"
    ],
    tags: ["React.js", "Vite", "E-commerce", "REST APIs", "JWT Auth", "Responsive Design"],
    demoUrl: "https://faaperfume.com/",
    bannerType: "faaperfume"
  },
  {
    id: 3,
    title: "AdPromotion Platform",
    tagline: "Full-Stack Vehicle Ad Campaign Marketplace",
    description: "Full-stack MERN platform connecting companies with cab drivers to manage vehicle advertisement campaigns through an admin-controlled system.",
    highlights: [
      "JWT role authentication for Admins, Companies, & Cab Drivers",
      "Real-time campaign management workflows & filtering",
      "Scalable Express.js & MongoDB REST APIs"
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
    demoUrl: "https://adpromotionplatform.netlify.app/",
    gitUrl: "https://github.com/Priyansu22382/AdPromotionPlatform",
    bannerType: "adpromotion"
  },
  {
    id: 4,
    title: "AI-Medicare Platform",
    tagline: "AI & Twilio Voice/SMS Medication Adherence System",
    description: "Full-stack healthcare platform built to improve medication adherence using AI-driven voice calls, SMS reminder workflows, and automated cron schedules.",
    highlights: [
      "Twilio API integration for voice call & SMS notifications",
      "Node-Cron scheduler for automated medication alerts",
      "Dedicated modules for Patients, Caretakers, & Doctors"
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Twilio API", "Node-Cron"],
    demoUrl: "https://aimedicare.netlify.app/",
    gitUrl: "https://github.com/Priyansu22382/AiMediCarePlatform",
    bannerType: "aimedicare"
  },
  {
    id: 5,
    title: "Developer Portfolio Website",
    tagline: "Modern Dynamic Interactive Developer Hub",
    description: "Responsive personal portfolio showcasing projects, technical skills, and professional engineering experience at V.Vang Solutions.",
    highlights: [
      "Smooth animations, glassmorphism, & star background",
      "Dark / Light theme toggling with persistent preferences",
      "Optimized for fast rendering & deployed on Vercel"
    ],
    tags: ["React.js", "Tailwind CSS", "Vite", "Responsive Design", "Vercel"],
    demoUrl: "#hero",
    gitUrl: "https://github.com/Priyansu22382/Portfolio-s-Project-Priyanshu",
    bannerType: "portfolio"
  },
  {
    id: 6,
    title: "Zoo-Topia Management System",
    tagline: "Interactive Core Java OOP System",
    description: "Terminal-based Zoo Management System engineered with Core Java and Object-Oriented Design patterns.",
    highlights: [
      "Interactive visitor & admin attraction management",
      "Membership, discounts, statistics, & feedback engine",
      "Pure Java data structures without database overhead"
    ],
    tags: ["Java", "OOP", "Data Structures", "CLI"],
    demoUrl: "https://github.com/Priyansu22382/Zoo-Topia",
    gitUrl: "https://github.com/Priyansu22382/Zoo-Topia",
    bannerType: "zootopia"
  }
];

const ProjectBanner = ({ type, tagline }) => {
  switch (type) {
    case 'adpromotion':
      return (
        <div className="w-full h-56 relative bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 overflow-hidden flex items-center justify-center p-6 text-left">
          {/* Animated Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />

          {/* Center Graphic */}
          <div className="relative z-10 w-full max-w-sm bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <Megaphone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Ad Campaign Engine</h4>
                  <p className="text-[10px] text-indigo-300">Cab Driver & Company Portal</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Live REST API
              </span>
            </div>

            {/* Simulated Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 text-center pt-1">
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[10px] text-gray-400 block">Roles</span>
                <span className="text-xs font-bold text-indigo-300">Admin/Driver</span>
              </div>
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[10px] text-gray-400 block">Security</span>
                <span className="text-xs font-bold text-emerald-300">JWT Auth</span>
              </div>
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[10px] text-gray-400 block">Database</span>
                <span className="text-xs font-bold text-purple-300">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'aimedicare':
      return (
        <div className="w-full h-56 relative bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 overflow-hidden flex items-center justify-center p-6 text-left">
          {/* Background Glow */}
          <div className="absolute top-0 left-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />

          {/* Center Graphic */}
          <div className="relative z-10 w-full max-w-sm bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  <Activity size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">AI Medication Tracker</h4>
                  <p className="text-[10px] text-teal-300">Patients & Caretakers</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Twilio Integrated
              </span>
            </div>

            {/* Workflow Pills */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px]">
                <span className="flex items-center gap-1.5 text-gray-300">
                  <PhoneCall size={12} className="text-emerald-400" /> Automated AI Voice Reminders
                </span>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">Active</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px]">
                <span className="flex items-center gap-1.5 text-gray-300">
                  <Cpu size={12} className="text-cyan-400" /> Node-Cron Scheduler Workflow
                </span>
                <span className="text-[9px] font-mono text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded">24/7</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'portfolio':
      return (
        <div className="w-full h-56 relative bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950 overflow-hidden flex items-center justify-center p-6 text-left">
          {/* Glowing particle blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />

          {/* IDE Window Mockup */}
          <div className="relative z-10 w-full max-w-sm bg-slate-900/80 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden text-xs">
            <div className="bg-slate-800/80 px-3 py-1.5 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              </div>
              <span className="text-[10px] font-mono text-gray-400">PriyanshuPortfolio.jsx</span>
              <Code2 size={12} className="text-purple-400" />
            </div>

            <div className="p-3 font-mono text-[11px] space-y-1 text-gray-300 leading-relaxed">
              <p><span className="text-purple-400">const</span> <span className="text-yellow-300">Engineer</span> = &#123;</p>
              <p className="pl-4"><span className="text-cyan-300">name</span>: <span className="text-emerald-300">"Priyanshu Nigam"</span>,</p>
              <p className="pl-4"><span className="text-cyan-300">role</span>: <span className="text-emerald-300">"Software Engineer @ V.Vang"</span>,</p>
              <p className="pl-4"><span className="text-cyan-300">stack</span>: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Next.js"</span>, <span className="text-emerald-300">"MERN"</span>]</p>
              <p>&#125;;</p>
            </div>
          </div>
        </div>
      );

    case 'zootopia':
      return (
        <div className="w-full h-56 relative bg-gradient-to-br from-amber-950 via-stone-900 to-slate-950 overflow-hidden flex items-center justify-center p-6 text-left">
          {/* Glow */}
          <div className="absolute top-0 right-10 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />

          {/* Terminal Window */}
          <div className="relative z-10 w-full max-w-sm bg-black/80 backdrop-blur-md rounded-xl border border-amber-500/20 shadow-2xl overflow-hidden text-xs">
            <div className="bg-amber-950/40 px-3 py-1.5 flex items-center justify-between border-b border-amber-500/20">
              <div className="flex items-center gap-1.5">
                <Terminal size={12} className="text-amber-400" />
                <span className="text-[10px] font-mono text-amber-200 font-bold">ZooTopia.java</span>
              </div>
              <span className="text-[9px] font-mono bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded">Core Java OOP</span>
            </div>

            <div className="p-3 font-mono text-[11px] space-y-1 text-amber-100/90 leading-relaxed bg-black/50">
              <p className="text-gray-400">$ java -jar ZooTopia.jar</p>
              <p className="text-amber-300 font-semibold">[✓] Zoo Management Engine Ready</p>
              <p className="text-gray-300">&gt; Admin Dashboard &amp; Attractions Loaded</p>
              <p className="text-emerald-400">&gt; Membership &amp; Feedback Stats: OK</p>
            </div>
          </div>
        </div>
      );

    case 'coursera':
      return (
        <div className="w-full h-56 relative bg-gradient-to-br from-[#3a1016] via-[#7A1F2B] to-slate-950 overflow-hidden flex items-center justify-center p-6 text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />

          <div className="relative z-10 w-full max-w-sm bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-rose-500/20 text-rose-200 border border-rose-400/30">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">AI Training LMS</h4>
                  <p className="text-[10px] text-rose-200">Admin Panel & Student Portal</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Production
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center pt-1">
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[10px] text-gray-400 block">Roles</span>
                <span className="text-xs font-bold text-rose-200">Admin/Student</span>
              </div>
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[10px] text-gray-400 block">Programs</span>
                <span className="text-xs font-bold text-amber-200">Cohorts</span>
              </div>
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[10px] text-gray-400 block">Insights</span>
                <span className="text-xs font-bold text-emerald-300">Analytics</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'faaperfume':
      return (
        <div className="w-full h-56 relative bg-gradient-to-br from-[#1a1410] via-[#3d2a18] to-slate-950 overflow-hidden flex items-center justify-center p-6 text-left">
          <div className="absolute top-0 left-8 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-8 w-64 h-64 bg-rose-400/10 rounded-full blur-3xl" />

          <div className="relative z-10 w-full max-w-sm bg-black/40 backdrop-blur-md p-4 rounded-xl border border-amber-500/20 shadow-2xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-amber-500/20 text-amber-200 border border-amber-400/30">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Fragrance Boutique</h4>
                  <p className="text-[10px] text-amber-200">Designer · Niche · Arabian</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/20 text-amber-200 border border-amber-400/30">
                Live Store
              </span>
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px]">
                <span className="flex items-center gap-1.5 text-gray-300">
                  <Sparkles size={12} className="text-amber-300" /> Combos, wishlist & checkout
                </span>
                <span className="text-[9px] font-mono text-amber-300 bg-amber-400/10 px-1.5 py-0.5 rounded">AED/USD</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px]">
                <span className="flex items-center gap-1.5 text-gray-300">
                  <Server size={12} className="text-rose-300" /> Customer & Admin store roles
                </span>
                <span className="text-[9px] font-mono text-emerald-300 bg-emerald-400/10 px-1.5 py-0.5 rounded">UAE</span>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
            <FolderGit2 size={14} /> Featured Engineering Projects
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Designed and built with clean code architecture, full-stack responsiveness, and modern visual design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Modern Pure-CSS Tech Banner Header */}
                <div className="relative">
                  <ProjectBanner type={project.bannerType} tagline={project.tagline} />
                  
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-lg">
                    {project.tagline}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4 text-left">
                  
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlight Bullets */}
                  <ul className="space-y-1.5 pt-1">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 size={14} className="text-primary shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>

              {/* Action Links Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-border/40 mt-4">
                <div className="flex items-center gap-3 pt-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button text-xs py-1.5 px-4 gap-1.5"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                  {project.gitUrl && (
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button-outline text-xs py-1.5 px-3 gap-1.5"
                    >
                      <Github size={15} /> Code
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/Priyansu22382"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit mx-auto flex items-center gap-2"
          >
            Explore More Repositories on GitHub <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;