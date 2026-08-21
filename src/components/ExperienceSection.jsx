import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2, ShieldCheck, CreditCard, Layout, Server, Sparkles } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "V.Vang Solutions Private Limited",
    period: "July 2026 – Present",
    location: "Delhi, INDIA",
    type: "Full-Time",
    description: "Developing and maintaining production-grade full-stack web applications, secure payment platforms, and international merchant management portals using React.js, Next.js, Node.js, Express.js, MongoDB, and REST APIs.",
    highlights: [
      {
        title: "KuberoPays Platform",
        desc: "Led complete end-to-end frontend and backend development, building secure JWT Authentication, role-based authorization, merchant onboarding, transaction management, and payment workflows.",
        icon: <ShieldCheck className="h-5 w-5 text-primary" />
      },
      {
        title: "PayVang Platform",
        desc: "Designed and implemented scalable backend APIs, enhancing system performance, query speeds, and overall application reliability.",
        icon: <CreditCard className="h-5 w-5 text-primary" />
      },
      {
        title: "International Merchant Portal",
        desc: "Built full-stack features including merchant authentication, real-time dashboard analytics, transaction management, and responsive international payment UI.",
        icon: <Layout className="h-5 w-5 text-primary" />
      },
      {
        title: "CourseraEducation Platform",
        desc: "Engineered scalable frontend components, Node.js backend services, and MongoDB database integrations to elevate platform user experience.",
        icon: <Server className="h-5 w-5 text-primary" />
      },
      {
        title: "FaaPerfume Boutique",
        desc: "Built a production fragrance e-commerce storefront with catalog collections, combo offers, cart/checkout, customer and admin roles, and multi-currency UAE delivery.",
        icon: <Sparkles className="h-5 w-5 text-primary" />
      }
    ],
    bulletPoints: [
      "Collaborated with cross-functional teams to integrate third-party payment services and optimize API performance.",
      "Resolved critical production issues and delivered feature releases in fast-paced agile development cycles.",
      "Followed modern software engineering practices: Git, code reviews, RESTful API design, modular architecture, and responsive UI."
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth", "OAuth", "Payment Workflows"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
            <Sparkles size={14} /> Career Growth & Industry Experience
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Work <span className="text-primary text-glow">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Building production-grade full-stack web applications, scalable payment infrastructure, and AI-driven web systems.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-primary/30 pl-6 md:pl-10 ml-2 md:ml-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-[0_0_12px_rgba(139,92,246,0.8)] border-4 border-background group-hover:scale-125 transition-transform duration-300">
                <div className="w-2 h-2 rounded-full bg-white animate-ping" />
              </div>

              {/* Main Card */}
              <div className="glass-card p-6 md:p-8 rounded-2xl border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-xl space-y-6">
                
                {/* Header Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                      <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/30">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-primary flex items-center gap-2">
                      <Briefcase size={18} /> {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5 bg-secondary/60 px-3 py-1.5 rounded-lg border border-border">
                      <Calendar size={15} className="text-primary" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-secondary/60 px-3 py-1.5 rounded-lg border border-border">
                      <MapPin size={15} className="text-primary" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary Description */}
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>

                {/* Major Platform Achievements Grid */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Key Platform Contributions:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.highlights.map((h, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-secondary/30 border border-border/70 hover:border-primary/40 transition-colors flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 shrink-0 mt-0.5">
                          {h.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm text-foreground mb-1">{h.title}</h5>
                          <p className="text-xs text-muted-foreground leading-normal">{h.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Engineering Best Practices & Impact:
                  </h4>
                  <ul className="space-y-2">
                    {exp.bulletPoints.map((bp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-border/60">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
