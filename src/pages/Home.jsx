import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { Link } from 'react-router-dom';

const Home = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const sectionsRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = new SplitType(textRef.current, { types: 'chars' });
    const chars = text.chars;

    gsap.from(chars, {
      opacity: 0,
      y: 100,
      rotateX: -90,
      stagger: 0.02,
      duration: 1,
      ease: 'power4.out',
    });

    const parallaxElements = heroRef.current?.querySelectorAll('[data-speed]');
    
    parallaxElements?.forEach((element) => {
      const speed = element.getAttribute('data-speed');
      gsap.to(element, {
        y: `${speed}%`,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    const sections = sectionsRef.current?.children;
    if (sections) {
      gsap.from(sections, {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionsRef.current,
          start: 'top center+=100',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          data-speed="-20"
          className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-black opacity-50"
        />
        <div
          data-speed="-10"
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-70"
        />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <h1
            ref={textRef}
            className="text-7xl md:text-9xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white"
          >
            Full Stack Developer
          </h1>
          <p
            data-speed="20"
            className="text-2xl md:text-3xl text-gray-300 mb-12 font-light"
          >
            Building exceptional digital experiences with modern technologies
          </p>
          <div className="flex gap-6 justify-center">
            <Link 
              to="/work"
              className="group relative px-8 py-4 overflow-hidden rounded-full bg-white text-black text-lg font-medium transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              View Portfolio
            </Link>
            <a 
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 overflow-hidden rounded-full bg-transparent border-2 border-white text-white text-lg font-medium transition-transform hover:scale-105 flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      <div ref={sectionsRef} className="px-4 py-24 bg-gradient-to-b from-black via-purple-900/20 to-black">
        {/* Live Project Demos */}
        <section className="max-w-7xl mx-auto mb-32">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-200">
            Live Projects
          </h2>
          <div className="grid gap-16">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-featured online store with real-time inventory management',
                video: 'https://example.com/ecommerce-demo.mp4',
                liveUrl: 'https://ecommerce-demo.com',
                github: 'https://github.com/yourusername/ecommerce',
                tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
                features: ['Real-time inventory', 'Secure payments', 'Admin dashboard'],
              },
              {
                title: 'Social Media Dashboard',
                description: 'Analytics platform for social media management',
                video: 'https://example.com/dashboard-demo.mp4',
                liveUrl: 'https://dashboard-demo.com',
                github: 'https://github.com/yourusername/dashboard',
                tech: ['React', 'D3.js', 'Firebase'],
                features: ['Real-time analytics', 'Custom charts', 'Multi-platform support'],
              },
            ].map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-black/50">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      src={project.video}
                      loop
                      muted
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm text-white/70">Hover to play demo</span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold">Key Features</h4>
                      <ul className="list-disc list-inside text-gray-300">
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center gap-2"
                      >
                        <span>Live Preview</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-transparent border border-white rounded-lg font-medium hover:bg-white/10 transition-all flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documentation & API Section */}
        <section className="max-w-7xl mx-auto mb-32">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-200">
            Documentation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                </svg>
                <h3 className="text-2xl font-bold">API Documentation</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Comprehensive API documentation with examples and integration guides.
              </p>
              <a
                href="https://api-docs.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors"
              >
                <span>View API Docs</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
                <h3 className="text-2xl font-bold">Postman Collection</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Ready-to-use Postman collection for testing and exploring the API endpoints.
              </p>
              <a
                href="https://www.postman.com/collection/example"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors"
              >
                <span>Download Collection</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* GitHub Activity Section */}
        <section className="max-w-7xl mx-auto mb-32">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-200">
            Open Source
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <h3 className="text-2xl font-bold">GitHub Contributions</h3>
              </div>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                View Profile
              </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  repo: 'awesome-project',
                  description: 'A collection of useful development resources and tools',
                  stars: 128,
                  forks: 45,
                },
                {
                  repo: 'react-components',
                  description: 'Reusable React components with TypeScript support',
                  stars: 256,
                  forks: 89,
                },
                {
                  repo: 'api-toolkit',
                  description: 'Modern API development toolkit and utilities',
                  stars: 512,
                  forks: 167,
                },
              ].map((repo) => (
                <div key={repo.repo} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-xl font-bold mb-2">{repo.repo}</h4>
                  <p className="text-gray-300 mb-4 text-sm">{repo.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3V3z"/>
                      </svg>
                      {repo.forks}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Services Sections */}
        <section className="max-w-7xl mx-auto mb-32">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-200">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'React & Next.js', icon: '⚛️' },
              { name: 'GSAP Animations', icon: '✨' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'Tailwind CSS', icon: '🎨' },
              { name: 'Node.js', icon: '🚀' },
              { name: 'UI/UX Design', icon: '🎯' },
              { name: 'Three.js', icon: '🎮' },
              { name: 'WebGL', icon: '🌟' },
            ].map((skill, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-medium">{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;