import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', sectionId: 'hero' },
  { name: 'About', path: '/about', sectionId: 'about' },
  { name: 'Experience', path: '/experience', sectionId: 'experience' },
  { name: 'Skills', path: '/skills', sectionId: 'skills' },
  { name: 'Projects', path: '/projects', sectionId: 'projects' },
  { name: 'Contact', path: '/contact', sectionId: 'contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavClick = (e, item) => {
    e.preventDefault();
    navigate(item.path);
    window.history.replaceState(null, '', item.path);
    const target = document.getElementById(item.sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 text-left">
      <div className="container mx-auto max-w-6xl space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60">
          {/* Brand */}
          <div className="space-y-2 text-center md:text-left">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, navItems[0])}
              className="text-xl font-bold text-foreground flex items-center gap-1.5 justify-center md:justify-start cursor-pointer"
            >
              <Sparkles size={18} className="text-primary" />
              <span>Priyanshu Nigam</span>
            </a>
            <p className="text-xs text-muted-foreground max-w-md">
              Software Engineer specializing in scalable full-stack web applications, payment systems, and AI-driven solutions.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-muted-foreground">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.path}
                onClick={(e) => handleNavClick(e, item)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Priyansu22382"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/priyanshu-nigam-845399269/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/PriyanshuTechie"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>

            <a
              href="/"
              onClick={(e) => handleNavClick(e, navItems[0])}
              className="p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 shadow-sm border border-primary/20 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-3">
          <p>&copy; {currentYear} Priyanshu Nigam. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, Tailwind CSS, & Next-Gen Aesthetics.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
