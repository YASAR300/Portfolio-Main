import React, { useRef } from 'react';
import HeroSection from './Hero';
import ProjectsSection from './Project';
import SkillsOpenSourceSection from './Doc';

const Home = () => {
  return (
    <div className="min-h-screen">
     
      <HeroSection />

      <div className="px-4 py-24 bg-gradient-to-b from-black via-purple-900/20 to-black">
        
        <ProjectsSection />

        <SkillsOpenSourceSection />
      </div>
    </div>
  );
};

export default Home;
