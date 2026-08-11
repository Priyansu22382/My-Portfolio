import React, { useState } from 'react';
import Themetoggle from '../../components/Themetoggle';
import StarBackground from '../../components/StarBackground';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import AboutMeSection from '../../components/AboutMeSection';
import ExperienceSection from '../../components/ExperienceSection';
import SkillsSection from '../../components/SkillsSection';
import Projects from '../../components/Projects';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import ResumeModal from '../../components/ResumeModal';

const Home = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Theme Toggle Button */}
      <Themetoggle />

      {/* Dynamic Star & Meteor Animated Background */}
      <StarBackground />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Content */}
      <main className="relative z-10">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutMeSection onOpenResume={() => setIsResumeOpen(true)} />
        <ExperienceSection />
        <SkillsSection />
        <Projects />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default Home;
