import React, { useState } from 'react';
import { Code2, Layout, Server, Database, Cloud, Wrench, BookOpen, Check } from 'lucide-react';

const categories = [
  { id: "all", label: "All Skills", icon: <Code2 size={16} /> },
  { id: "languages", label: "Languages", icon: <Code2 size={16} /> },
  { id: "frontend", label: "Frontend", icon: <Layout size={16} /> },
  { id: "backend", label: "Backend", icon: <Server size={16} /> },
  { id: "databases", label: "Databases", icon: <Database size={16} /> },
  { id: "cloud", label: "Cloud & DevOps", icon: <Cloud size={16} /> },
  { id: "core", label: "Core CS", icon: <BookOpen size={16} /> }
];

const skills = [
  // Languages
  { name: "JavaScript (ES6+)", level: 95, category: "languages", highlight: "Primary Language" },
  { name: "TypeScript", level: 90, category: "languages", highlight: "Typed JS" },
  { name: "C++", level: 85, category: "languages", highlight: "DSA & Algorithmic coding" },
  { name: "C", level: 80, category: "languages", highlight: "Core Systems" },
  { name: "Java", level: 85, category: "languages", highlight: "OOP & Enterprise" },
  { name: "Python", level: 80, category: "languages", highlight: "Scripting & AI" },
  { name: "SQL", level: 85, category: "languages", highlight: "Relational Queries" },

  // Frontend
  { name: "React.js", level: 95, category: "frontend", highlight: "UI & Component Architecture" },
  { name: "Next.js", level: 90, category: "frontend", highlight: "SSR & Full-Stack React" },
  { name: "HTML5 & CSS3", level: 95, category: "frontend", highlight: "Semantic Web & Styling" },
  { name: "Tailwind CSS", level: 95, category: "frontend", highlight: "Utility-first Styling" },
  { name: "Bootstrap", level: 85, category: "frontend", highlight: "Responsive Framework" },
  { name: "Responsive Web Design", level: 95, category: "frontend", highlight: "Cross-device UX" },

  // Backend
  { name: "Node.js", level: 90, category: "backend", highlight: "Server-side Runtime" },
  { name: "Express.js", level: 90, category: "backend", highlight: "RESTful API Server" },
  { name: "REST APIs", level: 95, category: "backend", highlight: "Scalable API Architecture" },
  { name: "JWT Authentication", level: 90, category: "backend", highlight: "Token Authorization" },
  { name: "OAuth", level: 85, category: "backend", highlight: "Third-party Auth" },
  { name: "WebSockets", level: 80, category: "backend", highlight: "Real-time Data" },

  // Databases
  { name: "MongoDB", level: 90, category: "databases", highlight: "NoSQL Data Modeling" },
  { name: "MySQL", level: 85, category: "databases", highlight: "Relational DB" },
  { name: "Firebase", level: 85, category: "databases", highlight: "Realtime DB & Auth" },

  // Cloud & DevOps
  { name: "Git & GitHub", level: 95, category: "cloud", highlight: "Version Control" },
  { name: "Vercel", level: 90, category: "cloud", highlight: "Frontend Deployment" },
  { name: "Render", level: 85, category: "cloud", highlight: "Backend Hosting" },
  { name: "Postman", level: 90, category: "cloud", highlight: "API Testing & Docs" },
  { name: "Linux / CLI", level: 85, category: "cloud", highlight: "Terminal & Environments" },
  { name: "VS Code & IntelliJ", level: 95, category: "cloud", highlight: "Primary IDEs" },

  // Core CS
  { name: "Data Structures & Algorithms", level: 95, category: "core", highlight: "LeetCode & Problem Solving" },
  { name: "Object-Oriented Programming", level: 95, category: "core", highlight: "Design Patterns" },
  { name: "DBMS", level: 90, category: "core", highlight: "Indexing & Normalization" },
  { name: "Operating Systems", level: 85, category: "core", highlight: "Concurrency & Memory" },
  { name: "Computer Networks", level: 85, category: "core", highlight: "HTTP/TCP/IP Protocols" },
  { name: "Software Engineering", level: 90, category: "core", highlight: "Agile & Clean Architecture" }
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = activeTab === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
            <Wrench size={14} /> Technical Stack & Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Technical <span className="text-primary text-glow">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Comprehensive skill set built through academic excellence at IIIT Delhi and real-world engineering at V.Vang Solutions.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(139,92,246,0.5)] scale-105"
                  : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-xl border border-border/80 hover:border-primary/50 transition-all duration-300 card-hover space-y-3 text-left"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                  <Check size={16} className="text-primary shrink-0" />
                  {skill.name}
                </h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  {skill.level}%
                </span>
              </div>

              <p className="text-xs text-muted-foreground">
                {skill.highlight}
              </p>

              {/* Progress Bar */}
              <div className="w-full h-1.5 rounded-full bg-secondary/80 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-purple-400 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
