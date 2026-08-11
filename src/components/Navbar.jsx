import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu, X, FileText, Download, Sparkles } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', sectionId: 'hero' },
  { name: 'About', path: '/about', sectionId: 'about' },
  { name: 'Experience', path: '/experience', sectionId: 'experience' },
  { name: 'Skills', path: '/skills', sectionId: 'skills' },
  { name: 'Projects', path: '/projects', sectionId: 'projects' },
  { name: 'Contact', path: '/contact', sectionId: 'contact' },
];

const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [activePath, setActivePath] = useState('/');

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to initial section on page load or direct URL access
  useEffect(() => {
    const currentPath = location.pathname;
    const matchedItem = navItems.find(item => item.path === currentPath);
    if (matchedItem) {
      setActivePath(matchedItem.path);
      const targetEl = document.getElementById(matchedItem.sectionId);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.pathname]);

  // Update active path and clean URL on scroll
  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 220;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const sectionEl = document.getElementById(item.sectionId);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          if (activePath !== item.path) {
            setActivePath(item.path);
            window.history.replaceState(null, '', item.path);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePath]);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsMenu(false);
    setActivePath(item.path);
    navigate(item.path);

    const sectionEl = document.getElementById(item.sectionId);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between mx-auto px-4 md:px-8">
        
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, navItems[0])}
          className="text-xl font-extrabold tracking-tight flex items-center gap-1.5 group cursor-pointer"
        >
          <span className="p-1.5 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
            <Sparkles size={18} />
          </span>
          <span className="text-foreground text-glow group-hover:text-primary transition-colors">
            Priyanshu<span className="text-primary">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-secondary/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-border/60 shadow-inner">
          {navItems.map((item, key) => {
            const isActive = activePath === item.path;
            return (
              <a
                key={key}
                href={item.path}
                onClick={(e) => handleNavClick(e, item)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Action Buttons: View CV & Download CV */}
        <div className="hidden md:flex items-center space-x-2.5">
          <button
            onClick={onOpenResume}
            className="cosmic-button text-xs py-2 px-3.5 gap-1.5"
          >
            <FileText size={14} /> Resume
          </button>
          <a
            href="/Priyanshu_Nigam_CV.pdf"
            download="Priyanshu_Nigam_CV.pdf"
            className="cosmic-button-outline text-xs py-2 px-3 gap-1.5 text-primary border-primary/40 hover:bg-primary/10"
            title="Download PDF CV"
          >
            <Download size={14} /> CV
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMenu((prev) => !prev)}
          className="md:hidden p-2 rounded-lg bg-secondary/80 text-foreground z-50 border border-border"
          aria-label="Toggle navigation menu"
        >
          {isMenu ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
            isMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col space-y-5 text-center text-lg font-semibold w-full max-w-xs px-6">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.path}
                className={`py-2.5 rounded-xl border border-border/50 transition-all duration-200 cursor-pointer ${
                  activePath === item.path
                    ? 'bg-primary text-primary-foreground font-bold'
                    : 'text-foreground hover:text-primary hover:bg-secondary/50'
                }`}
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.name}
              </a>
            ))}

            <button
              onClick={() => {
                setIsMenu(false);
                onOpenResume();
              }}
              className="cosmic-button py-3 text-sm flex items-center justify-center gap-2 mt-2"
            >
              <FileText size={18} /> View CV / Resume
            </button>

            <a
              href="/Priyanshu_Nigam_CV.pdf"
              download="Priyanshu_Nigam_CV.pdf"
              className="cosmic-button-outline py-2.5 text-sm flex items-center justify-center gap-2 text-primary border-primary/50"
              onClick={() => setIsMenu(false)}
            >
              <Download size={18} /> Download CV (PDF)
            </a>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
