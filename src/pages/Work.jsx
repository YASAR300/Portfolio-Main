import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from '../img/img1.png'; 
import untrip from '../img/un.png';
import Furn from '../img/Furn.png';
import Codinggita from '../img/Code.png';
import Amazon1 from '../img/Amazon2.png';
import Netflix1 from '../img/Netflix1.png';
import mg from '../img/13g.png';
import core from '../img/core.png';
import smootify from '../img/sm.png';
import spotify from '../img/sp.png';
import youtube from '../img/Youtube.png';
import amazon from '../img/Amazon.png';
import Fl from '../img/Fl.png';
import kid from '../img/kid.png';
import cl from '../img/cl.png';
import netflix from '../img/Netflix.png';
import chess from '../img/chess.png';
import works from '../img/Works.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  // React Projects
  {
    title: 'Untrip',
    description: 'Untrip is a smart travel platform that streamlines trip planning by integrating hotels, flights, car rentals, and destination insights—all in one place.',
    media: 'https://res.cloudinary.com/dufgbzgzi/video/upload/v1743688236/untrip1_ectlrw.mp4',
    type: 'video',
    liveUrl: 'https://untrip-iuqz.onrender.com/',
    github: 'https://github.com/YASAR300/untrip',
    tech: ['React.js', 'Node.js', 'Tailwind CSS', 'Express', 'MongoDB'],
    features: ['Real-time inventory', 'Secure payments', 'User dashboard'],
    category: 'react',
    color: 'from-blue-500 to-indigo-600',
    order: 1
  },
  {
    title: 'FlavorfulMagicFinance',
    description: 'FlavorfulMagicFinance is a dynamic web application built using React JSX, integrating multiple APIs to offer a diverse range of features.',
    media: Fl,
    type: 'image',
    liveUrl: 'https://project-yuvh.onrender.com/',
    github: 'https://github.com/YASAR300/Project',
    tech: ['React.js', 'Node.js', 'Tailwind CSS', 'Express', 'MongoDB'],
    features: ['API Integration', 'Interactive UI', 'Real-time data'],
    category: 'react',
    color: 'from-red-500 to-rose-700',
    order: 3
  },
  {
    title: 'youtube',
    description: 'A YouTube clone built using React.js, CSS, and the YouTube Data API.',
    media: youtube,
    type: 'image',
    liveUrl: 'https://you-tube-react.onrender.com/',
    github: 'https://github.com/YASAR300/You-tube-react',
    tech: ['React.js', 'Node.js', 'Tailwind CSS', 'Express', 'MongoDB'],
    features: ['Video Playback', 'Search Functionality', 'Responsive Design'],
    category: 'react',
    color: 'from-red-500 to-rose-700',
    order: 6
  },
  {
    title: 'spotify',
    description: 'A fully responsive Spotify Clone built using React.js, Tailwind CSS, and Redux.',
    media: spotify,
    type: 'image',
    liveUrl: 'https://spotify-react-ilq8.onrender.com/',
    github: 'https://github.com/YASAR300/spotify-react',
    tech: ['React.js', 'Node.js', 'Tailwind CSS', 'Express', 'MongoDB'],
    features: ['Music Playback', 'Playlist Management', 'Dark Mode'],
    category: 'react',
    color: 'from-green-500 to-emerald-700',
    order: 2
  },
  {
    title: 'Works',
    description: 'A work portfolio showcases completed projects in a visually appealing way.',
    media: works,
    type: 'image',
    liveUrl: 'https://portfolio-react-4y4h.onrender.com/',
    github: 'https://github.com/YASAR300/Portfolio-React',
    tech: ['React.js', 'Node.js', 'Tailwind CSS', 'Express', 'MongoDB'],
    features: ['Interactive UI', 'Project Showcase', 'Responsive Design'],
    category: 'react',
    color: 'from-yellow-400 to-amber-600',
    order: 3
  },
  // HTML/CSS Projects
  {
    title: '13g Website',
    description: 'A dynamic 13G website clone built using HTML, CSS, and JavaScript.',
    media: mg,
    type: 'image',
    liveUrl: 'https://13mg.netlify.app/',
    github: 'https://github.com/YASAR300/13g',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Smooth Animations', 'Interactive Hover Effects', 'Responsive Layout'],
    category: 'htmlcss',
    color: 'from-purple-500 to-pink-600',
    order: 1
  },
  {
    title: 'smootify',
    description: 'A fully responsive Smootify clone built using HTML, CSS, and JavaScript.',
    media: smootify,
    type: 'image',
    liveUrl: 'https://smootify.netlify.app/',
    github: 'https://github.com/YASAR300/smootify',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Smooth Animations', 'Customizable Storefront', 'SEO Friendly'],
    category: 'htmlcss',
    color: 'from-orange-500 to-red-600',
    order: 7
  },
  {
    title: 'cordeliacruises',
    description: 'A Cordelia Cruises clone built using HTML, CSS, and JavaScript.',
    media: core,
    type: 'image',
    liveUrl: 'https://cordeliacruises.netlify.app/',
    github: 'https://github.com/YASAR300/cordeliacruises',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Interactive Navigation', 'Auto-Scrolling Banner', 'SEO Friendly'],
    category: 'htmlcss',
    color: 'from-indigo-500 to-violet-600',
    order: 4
  },
  {
    title: 'youtube-clone',
    description: 'A static YouTube clone built using HTML, CSS, and JavaScript.',
    media: youtube,
    type: 'image',
    liveUrl: 'https://youtube-5.netlify.app/',
    github: 'https://github.com/YASAR300/frontend/tree/main/youtube',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Interactive Navigation', 'Auto-Scrolling Banner', 'SEO Friendly'],
    category: 'htmlcss',
    color: 'from-red-500 to-gray-800',
    order: 2
  },
  {
    title: 'Amazon',
    description: 'An Amazon Clone built using HTML, CSS, and JavaScript.',
    media: amazon,
    type: 'image',
    liveUrl: 'https://amazon-clone-page-1.netlify.app/',
    github: 'https://github.com/YASAR300/frontend/tree/main/amazon',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Interactive Navigation', 'Auto-Scrolling Banner', 'SEO Friendly'],
    category: 'htmlcss',
    color: 'from-indigo-500 to-violet-600',
    order: 3
  },
  {
    title: 'Kid',
    description: 'A dynamic Kids E-Commerce Website Clone.',
    media: kid,
    type: 'image',
    liveUrl: 'https://kid-1.netlify.app/',
    github: 'https://github.com/YASAR300/frontend/tree/main/kid',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Interactive Navigation', 'Auto-Scrolling Banner', 'SEO Friendly'],
    category: 'htmlcss',
    color: 'from-pink-400 to-yellow-300',
    order: 6
  },
  {
    title: 'Netflix',
    description: 'A Netflix Clone built using HTML and CSS.',
    media: netflix,
    type: 'image',
    liveUrl: 'https://page-one-netfliix.netlify.app/',
    github: 'https://github.com/YASAR300/frontend/tree/main/netflix',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Interactive Navigation', 'Auto-Scrolling Banner', 'SEO Friendly'],
    category: 'htmlcss',
    color: 'from-pink-400 to-yellow-300',
    order: 5
  },
  {
    title: 'calculator',
    description: 'A Calculator built using HTML, CSS, and JavaScript.',
    media: cl,
    type: 'image',
    liveUrl: 'https://calculater-2.netlify.app/',
    github: 'https://github.com/YASAR300/frontend/tree/main/calculater',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Interactive Navigation', 'Auto-Scrolling Banner', 'SEO Friendly'],
    category: 'htmlcss',
    color: 'from-pink-400 to-yellow-300',
    order: 8
  },
  {
    title: 'Chess',
    description: 'A Chess Game built using HTML, CSS, and JavaScript.',
    media: chess,
    type: 'image',
    liveUrl: 'https://chess-1.netlify.app/',
    github: 'https://github.com/YASAR300/frontend/tree/main/calculater',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Interactive Navigation', 'Auto-Scrolling Banner', 'SEO Friendly'],
    category: 'htmlcss',
    color: 'from-pink-400 to-yellow-300',
    order: 9
  },
  // Figma Projects
  {
    title: 'Untrip (Figma)',
    description: 'Untrip is a smart travel platform that streamlines trip planning by integrating hotels, flights, car rentals, and destination insights—all in one place.',
    media: untrip,
    type: 'image',
    liveUrl: 'https://www.figma.com/proto/gQcM2hxRY0cqrN2irhow0u/Untrip?page-id=0%3A1&node-id=0-3&viewport=231%2C179%2C0.29&t=mAhjzLvlDGVL7uTU-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=0%3A3',
    github: 'https://github.com/username/banking-ui',
    tech: ['Figma', 'UI Design', 'Prototyping'],
    features: ['Interactive Prototype', 'Design System', 'User Flows'],
    category: 'figma',
    color: 'from-blue-400 to-cyan-600',
    order: 1
  },
  {
    title: 'Furn',
    description: 'This Figma design is for a stylish, clean, and modern Furniture E-commerce website. It focuses on simplicity, smooth user experience, and aesthetic presentation of furniture products. The UI combines minimalistic layout with elegant fonts and soothing color schemes to reflect premium quality.',
    media: Furn,
    type: 'image',
    liveUrl: 'https://www.figma.com/proto/z1JIWe7GYytnR78Qj87tEr/Furn?page-id=0%3A1&node-id=1-3501&viewport=498%2C133%2C0.06&t=PJYRZncEzYk4e78J-1&scaling=scale-down-width&content-scaling=fixed',
    github: 'https://github.com/username/fitness-design',
    tech: ['Figma', 'UX Research', 'Wireframing'],
    features: ['Component Library', 'Style Guide', 'Responsive Design'],
    category: 'figma',
    color: 'from-orange-500 to-red-600',
    order: 3
  },
  {
    title: 'Codinggita',
    description: 'This Figma design is for a stylish, clean, and modern Furniture E-commerce website. It focuses on simplicity, smooth user experience, and aesthetic presentation of furniture products. The UI combines minimalistic layout with elegant fonts and soothing color schemes to reflect premium quality.',
    media: Codinggita,
    type: 'image',
    liveUrl: 'https://www.figma.com/proto/vFgvEVKuZFfZpwvWIhrHhY/Coding?page-id=0%3A1&node-id=2-40&viewport=448%2C272%2C0.25&t=cI6ZObe5nD2BEO9V-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2%3A40',
    github: 'https://github.com/username/fitness-design',
    tech: ['Figma', 'UX Research', 'Wireframing'],
    features: ['Component Library', 'Style Guide', 'Responsive Design'],
    category: 'figma',
    color: 'from-orange-500 to-red-600',
    order: 2
  },
  {
    title: 'Amazon1',
    description: 'The Figma design for the **CodingGita** website is meticulously crafted to reflect the institutions commitment to providing top-tier computer science education with a strong emphasis on practical experience and assured placements. The design employs a modern, clean aesthetic to effectively communicate key information and engage prospective students.',
    media: Amazon1,
    type: 'image',
    liveUrl: 'https://www.figma.com/proto/6j55Iom4ZRiezl3xwSHefU/Untitled?page-id=0%3A1&node-id=2-2&p=f&viewport=451%2C375%2C0.28&t=nKoBjtPZN8uv2wel-1&scaling=scale-down-width&content-scaling=fixed',
    github: 'https://github.com/username/fitness-design',
    tech: ['Figma', 'UX Research', 'Wireframing'],
    features: ['Component Library', 'Style Guide', 'Responsive Design'],
    category: 'figma',
    color: 'from-orange-500 to-red-600',
    order: 4
  },
  {
    title: 'Netflix1',
    description: 'The Netflix-style Figma website design mimics the sleek, modern look of a premium OTT (Over-The-Top) streaming platform. It focuses on providing an immersive and intuitive user experience with dynamic visuals, bold typography, and fluid navigation.',
    media: Netflix1,
    type: 'image',
    liveUrl: 'https://www.figma.com/proto/lsHa9EhwCVsyrcdd538GQd/Untitled?page-id=0%3A1&node-id=1-2&p=f&viewport=425%2C354%2C0.52&t=E2rCN1rWQJqkNQVo-1&scaling=scale-down-width&content-scaling=fixed',
    tech: ['Figma', 'UX Research', 'Wireframing'],
    features: ['Component Library', 'Style Guide', 'Responsive Design'],
    category: 'figma',
    color: 'from-orange-500 to-red-600',
    order: 5
  },
  // MERN Projects
  {
    title: 'Untrip',
    description: 'Untrip is a smart travel platform that streamlines trip planning.',
    media: 'https://res.cloudinary.com/dufgbzgzi/video/upload/v1743688236/untrip1_ectlrw.mp4',
    type: 'video',
    liveUrl: 'https://untrip-iuqz.onrender.com/',
    github: 'https://github.com/YASAR300/untrip',
    tech: ['React.js', 'Node.js', 'Tailwind CSS', 'Express', 'MongoDB'],
    features: ['Real-time Inventory', 'Secure Payments', 'User Dashboard'],
    category: 'mern',
    color: 'from-blue-500 to-indigo-600',
    order: 1
  },
  // Backend API Projects
  {
    title: 'Authentication API',
    description: 'Secure authentication system with JWT.',
    media: img,
    type: 'image',
    liveUrl: 'https://auth-api-demo.com',
    github: 'https://github.com/username/auth-api',
    tech: ['Node.js', 'Express.js', 'JWT'],
    features: ['User Auth', 'Token Management', 'Rate Limiting'],
    category: 'backend',
    color: 'from-gray-500 to-gray-700',
    order: 1
  },
  {
    title: 'Payment Gateway API',
    description: 'API for processing payments securely.',
    media: img,
    type: 'image',
    liveUrl: 'https://payment-api-demo.com',
    github: 'https://github.com/username/payment-api',
    tech: ['Node.js', 'Express.js', 'Stripe'],
    features: ['Payment Processing', 'Webhook Support', 'Transaction Logs'],
    category: 'backend',
    color: 'from-teal-500 to-cyan-600',
    order: 2
  }
];

// Updated global order for "All Projects" tab
const globalOrder = [
  'Untrip',
  'FlavorfulMagicFinance',
  'youtube',
  'spotify',
  'Works',
  '13g Website',
  'smootify',
  'cordeliacruises',
  'youtube-clone',
  'Amazon',
  'Kid',
  'Netflix',
  'calculator',
  'Chess',
  'Untrip (Figma)',
  'Furn',
  'Codinggita',
  'Amazon1',
  'Netflix1',
  'Authentication API',
  'Payment Gateway API'
];

const Work = () => {
  const containerRef = useRef(null);
  const projectRefs = useRef([]);
  const videoRefs = useRef([]);
  const [activeTab, setActiveTab] = useState('all');
  const [videoStates, setVideoStates] = useState([]);

  useEffect(() => {
    setVideoStates(projects.map(project => project.type === 'video' ? ({
      isPlaying: false,
      isMuted: true,
      volume: 0.5,
      playbackRate: 1,
    }) : null));
  }, []);

  useEffect(() => {
    const validRefs = projectRefs.current.filter(ref => ref !== null && ref !== undefined);
    const ctx = gsap.context(() => {
      if (validRefs.length > 0) {
        gsap.fromTo(
          validRefs,
          { opacity: 0, y: 40 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, [activeTab]);

  const getFilteredProjects = () => {
    let filtered = projects;
    if (activeTab !== 'all') {
      filtered = projects
        .filter(project => project.category === activeTab)
        .sort((a, b) => a.order - b.order);
    } else {
      filtered = [...projects].sort((a, b) => {
        const aIndex = globalOrder.indexOf(a.title);
        const bIndex = globalOrder.indexOf(b.title);
        return aIndex - bIndex;
      });
    }
    return filtered;
  };

  const filteredProjects = getFilteredProjects();

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;
    
    setVideoStates(prevStates => {
      const newStates = [...prevStates];
      const newIsPlaying = !prevStates[index]?.isPlaying;
      if (newIsPlaying) video.play();
      else video.pause();
      newStates[index] = { ...prevStates[index], isPlaying: newIsPlaying };
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
      newStates[index] = { ...prevStates[index], isMuted: newIsMuted };
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
      newStates[index] = { ...prevStates[index], volume: volume };
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
      newStates[index] = { ...prevStates[index], playbackRate: rate };
      return newStates;
    });
  };

  const handleVideoEnd = (index) => {
    setVideoStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = { ...prevStates[index], isPlaying: false };
      return newStates;
    });
  };

  return (
    <div ref={containerRef} className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300">
          My Projects
        </h2>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'react', label: 'React Projects' },
            { id: 'htmlcss', label: 'HTML/CSS Projects' },
            { id: 'figma', label: 'Figma Projects' },
            { id: 'mern', label: 'MERN Projects' },
            { id: 'backend', label: 'Backend API Projects' }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`px-5 py-2 rounded-full text-base font-medium transition-all ${
                activeTab === tab.id 
                  ? 'bg-white text-black shadow-lg' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group relative rounded-2xl overflow-hidden mb-6 break-inside-avoid bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative">
                <div className="relative overflow-hidden">
                  {project.type === 'video' ? (
                    <>
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={project.media}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        loop
                        muted={videoStates[index]?.isMuted}
                        playsInline
                        onEnded={() => handleVideoEnd(index)}
                      />
                      <div className="absolute top-2 left-2 flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
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
                                <option className="bg-black" value="0.5">0.5x</option>
                                <option className="bg-black" value="1">1x</option>
                                <option className="bg-black" value="1.5">1.5x</option>
                                <option className="bg-black" value="2">2x</option>
                              </select>
                              <button 
                                onClick={() => videoRefs.current[index]?.requestFullscreen?.()}
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
                    </>
                  ) : (
                    <img
                      src={project.media}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  {project.type !== 'video' && (
                    <div className="absolute top-2 left-2 flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {project.title} <span className="text-gray-400 text-sm">
                      #{activeTab === 'all' 
                        ? globalOrder.indexOf(project.title) + 1 
                        : project.order}
                    </span>
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-2">
                      {project.features.slice(0, 2).map((feature) => (
                        <li key={feature} className="flex items-center text-gray-300 text-sm">
                          <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all flex items-center justify-center gap-1 group/btn"
                    >
                      <span>Demo</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    {project.category !== 'figma' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-transparent border border-white/20 rounded-lg text-sm font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-300 text-lg py-12">
            No projects available in this category yet.
          </p>
        )}
      </section>
    </div>
  );
};

export default Work;