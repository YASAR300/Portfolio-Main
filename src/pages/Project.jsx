import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);
  const videoRefs = useRef([]);
  const docsRef = useRef(null);

  const [videoStates, setVideoStates] = useState([]);
  
  const addToProjectRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };
  
  const addToVideoRefs = (el, index) => {
    if (el) {
      videoRefs.current[index] = el;
    }
  };

  useEffect(() => {
    const projects = [{
      title: 'Untrip',
      videoSrc: 'https://res.cloudinary.com/dufgbzgzi/video/upload/v1743688236/untrip1_ectlrw.mp4', // Cloudinary URL
    }];
    
    setVideoStates(projects.map(() => ({
      isPlaying: false,
      isMuted: true,
      volume: 0.5,
      playbackRate: 1,
    })));
  }, []);

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;
    
    setVideoStates(prevStates => {
      const newStates = [...prevStates];
      const newIsPlaying = !prevStates[index]?.isPlaying;
      
      if (newIsPlaying) {
        video.play();
      } else {
        video.pause();
      }
      
      newStates[index] = {
        ...prevStates[index],
        isPlaying: newIsPlaying
      };
      
      return newStates;
    });
  };

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;
    
    setVideoStates(prevStates => {
      const newStates = [...prevStates];
      const newIsMuted = !prevStates[index]?.isMuted;
      
      video.muted = newIsMuted;
      
      newStates[index] = {
        ...prevStates[index],
        isMuted: newIsMuted
      };
      
      return newStates;
    });
  };

  const changeVolume = (index, value) => {
    const video = videoRefs.current[index];
    if (!video) return;
    
    const volume = parseFloat(value);
    video.volume = volume;
    
    setVideoStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = {
        ...prevStates[index],
        volume: volume
      };
      
      return newStates;
    });
  };

  const changePlaybackRate = (index, value) => {
    const video = videoRefs.current[index];
    if (!video) return;
    
    const rate = parseFloat(value);
    video.playbackRate = rate;
    
    setVideoStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = {
        ...prevStates[index],
        playbackRate: rate
      };
      
      return newStates;
    });
  };

  const handleVideoEnd = (index) => {
    setVideoStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = {
        ...prevStates[index],
        isPlaying: false
      };
      
      return newStates;
    });
  };

  useEffect(() => {
    gsap.fromTo(
      '.section-title',
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 80%',
        }
      }
    );
    
    projectRefs.current.forEach((project, index) => {
      gsap.fromTo(
        project,
        { opacity: 0, y: 60 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: project,
            start: 'top 85%',
          }
        }
      );
    });
    
    if (docsRef.current) {
      gsap.fromTo(
        docsRef.current.children,
        { opacity: 0, x: -30 },
        { 
          opacity: 1, 
          x: 0, 
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: docsRef.current,
            start: 'top 80%',
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
      <section ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-8 mb-32">
        <h2 className="section-title text-5xl md:text-7xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300">
          Featured Project
        </h2>
        <div className="space-y-24">
          {[{
            title: 'Untrip',
            description: 'Untrip is a smart travel platform that streamlines trip planning by integrating hotels, flights, car rentals, and destination insights—all in one place.',
            videoSrc: 'https://res.cloudinary.com/dufgbzgzi/video/upload/v1743688236/untrip1_ectlrw.mp4', // Cloudinary URL
            liveUrl: 'https://untrip-iuqz.onrender.com/',
            github: 'https://github.com/YASAR300/untrip',
            tech: ['React.js', 'Node.js', 'Tailwind CSS', 'Express', 'MongoDB'],
            features: ['Flights, Hotels, & Car Rentals', 'Best Price Comparison'],
            color: 'from-blue-500 to-indigo-600',
          }].map((project, index) => (
            <div 
              key={index} 
              ref={addToProjectRefs}
              className="group relative rounded-3xl overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-10 lg:p-12">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-black/70 shadow-2xl ring-1 ring-white/10">
                      <div className="absolute top-0 left-0 right-0 h-8 bg-black/30 backdrop-blur-sm flex items-center px-4 gap-2 z-10">
                        <div className="flex items-center gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                      </div>
                      
                      <video
                        ref={(el) => addToVideoRefs(el, index)}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        src={project.videoSrc}
                        loop
                        muted={videoStates[index]?.isMuted}
                        playsInline
                        onEnded={() => handleVideoEnd(index)}
                      />
                      
                      <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div></div>
                        
                        <div className="flex flex-col gap-2">
                          <div className="w-full bg-white/20 rounded-full h-1 overflow-hidden">
                            <div className="relative w-full h-full">
                              <div className="absolute inset-0 w-full transform scale-x-0 origin-left bg-white/80 transition-transform duration-200" style={{ 
                                transform: videoRefs.current[index] ? 
                                  `scaleX(${videoRefs.current[index].currentTime / videoRefs.current[index].duration})` : 
                                  'scaleX(0)' 
                              }}></div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <button 
                                onClick={() => togglePlay(index)}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                aria-label={videoStates[index]?.isPlaying ? "Pause" : "Play"}
                              >
                                {videoStates[index]?.isPlaying ? (
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                ) : (
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                )}
                              </button>
                              
                              <button 
                                onClick={() => toggleMute(index)}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                aria-label={videoStates[index]?.isMuted ? "Unmute" : "Mute"}
                              >
                                {videoStates[index]?.isMuted ? (
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                                  </svg>
                                ) : (
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                  </svg>
                                )}
                              </button>
                              
                              <div className="hidden md:flex items-center gap-2">
                                <input
                                  type="range"
                                  min="0"
                                  max="1"
                                  step="0.01"
                                  value={videoStates[index]?.volume || 0.5}
                                  onChange={(e) => changeVolume(index, e.target.value)}
                                  className="w-20 accent-white"
                                />
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <select
                                value={videoStates[index]?.playbackRate || 1}
                                onChange={(e) => changePlaybackRate(index, e.target.value)}
                                className="p-1 bg-white/10 rounded text-xs border-none outline-none text-white"
                              >
                                <option className="op bg-black" value="0.5">0.5x</option>
                                <option className="op bg-black" value="1">1x</option>
                                <option className="op bg-black" value="1.5">1.5x</option>
                                <option className="op bg-black" value="2">2x</option>
                              </select>
                              
                              <button 
                                onClick={() => {
                                  if (videoRefs.current[index]) {
                                    if (videoRefs.current[index].requestFullscreen) {
                                      videoRefs.current[index].requestFullscreen();
                                    }
                                  }
                                }}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                aria-label="Full Screen"
                              >
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-18h2a2 2 0 012 2v2m0 12v2a2 2 0 01-2 2h-2" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-5 space-y-8">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-white/90">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/5 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-white/90">Key Features</h4>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-300">
                            <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 pt-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-black rounded-lg font-medium shadow-lg shadow-white/10 hover:shadow-white/20 hover:bg-opacity-90 transition-all flex items-center gap-2 group/btn"
                      >
                        <span>Live Demo</span>
                        <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-transparent border border-white/20 rounded-lg font-medium shadow-lg hover:bg-white/10 transition-all flex items-center gap-2 group/btn"
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
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-32">
        <h2 className="section-title text-5xl md:text-7xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300">
          Developer Resources
        </h2>
        <div ref={docsRef} className="grid md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-3xl backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-white/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-xl">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">API Documentation</h3>
              </div>
              <p className="text-gray-300 mb-8 text-lg">
                Comprehensive API documentation with examples, integration guides, and best practices for developers.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">REST API</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">GraphQL</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">OpenAPI</span>
              </div>
              
              <a
                href="https://api-docs.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group-hover:underline"
              >
                <span>Explore Documentation</span>
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-3xl backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-white/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-xl">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Developer Tools</h3>
              </div>
              <p className="text-gray-300 mb-8 text-lg">
                Ready-to-use Postman collection, SDKs, and developer resources to help you integrate quickly.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Postman</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">SDK</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">CLI</span>
              </div>
              
              <a
                href="https://developers.example.com/tools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group-hover:underline"
              >
                <span>Access Developer Tools</span>
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
