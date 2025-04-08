import React from 'react';

const SkillsOpenSourceSection = () => {
  const repositories = [
    {
      repo: 'event_tracker',
      description: '🚀 Event Tracker is a modern platform designed to help users discover, create, and manage events effortlessly. From ticketing to notifications, it offers a seamless experience for both event attendees and organizers.',
      stars: 0,
      forks: 5,
      language: 'React.js , css , HTML',
      lastUpdated: '1 days ago',
      openIssues: 1,
      repoUrl: 'https://github.com/RijansPatoliya/event_tracker'
    },
    {
      repo: 'Ironcore Gym',
      description: 'Ironcore Gym is an all-in-one fitness platform that eliminates the need for physical visits by offering gym services, trainer details, interactive features, and AI-generated diet plans online. Get fit, stay informed, and achieve your fitness goals effortlessly! 🏋️‍♂️🔥',
      stars: 0,
      forks: 5,
      language: 'React.js , css , HTML',
      lastUpdated: '1 week ago',
      openIssues: 1,
      repoUrl: 'https://github.com/codinggita/ironcore_gym'
    },
    {
      repo: 'fin_ctrl',
      description: 'FinCtrl is a role-based finance tracker for budgeting, sharing data, and financial guidance, with admin controls for user management and investments.',
      stars: 0,
      forks: 4,
      language: 'React.js ,TailWind css , HTML',
      lastUpdated: '3 days ago',
      openIssues: 1,
      repoUrl: 'https://github.com/codinggita/fin_ctrl'
    },
  ];

  // More modern skill icons using Lucide React icons (removed years experience and proficiency)
  const skills = [
    { name: 'ReactJS', icon: 'react' },
    { name: 'Tailwind CSS', icon: 'palette' },
    { name: 'HTML', icon: 'file-code' },
    { name: 'JavaScript', icon: 'code' },
    { name: 'NodeJS', icon: 'server' },
    { name: 'ExpressJS', icon: 'route' },
    { name: 'MongoDB', icon: 'database' },
    { name: 'Figma', icon: 'pencil-ruler' },
    { name: 'C', icon: 'terminal' },
    { name: 'C++', icon: 'cpu' },
  ];

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'react':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
          </svg>
        );
      case 'palette':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <circle cx="13.5" cy="6.5" r="2.5" />
            <circle cx="17.5" cy="10.5" r="2.5" />
            <circle cx="8.5" cy="7.5" r="2.5" />
            <circle cx="6.5" cy="12.5" r="2.5" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
          </svg>
        );
      case 'file-code':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="m10 13-2 2 2 2" />
            <path d="m14 17 2-2-2-2" />
          </svg>
        );
      case 'code':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case 'server':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
          </svg>
        );
      case 'route':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <circle cx="6" cy="19" r="3" />
            <circle cx="18" cy="5" r="3" />
            <path d="M12 19h4.5a3.5 3.5 0 0 0 0-7h-8a3.5 3.5 0 0 1 0-7H12" />
          </svg>
        );
      case 'database':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        );
      case 'pencil-ruler':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <path d="m15 5 4 4" />
            <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
            <path d="m8 6 2-2" />
            <path d="m2 22 5-5" />
            <path d="m18 13 4 4" />
            <path d="m6 18 4 4" />
            <path d="m14 14 6 6" />
            <path d="m7 17 3-3" />
            <path d="m10 14 4 4" />
          </svg>
        );
      case 'terminal':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
        );
      case 'cpu':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
            <rect x="9" y="9" width="6" height="6" />
            <line x1="9" y1="1" x2="9" y2="4" />
            <line x1="15" y1="1" x2="15" y2="4" />
            <line x1="9" y1="20" x2="9" y2="23" />
            <line x1="15" y1="20" x2="15" y2="23" />
            <line x1="20" y1="9" x2="23" y2="9" />
            <line x1="20" y1="14" x2="23" y2="14" />
            <line x1="1" y1="9" x2="4" y2="9" />
            <line x1="1" y1="14" x2="4" y2="14" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
    }
  };

  return (
    <>
      {/* GitHub Activity Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-white to-purple-300">
          Open Source Contributions
        </h2>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="flex items-center gap-4">
              {/* Modern GitHub icon */}
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <h3 className="text-2xl font-bold">GitHub Activity</h3>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/YASAR300"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2 group"
              >
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
                View Profile
              </a>
              <a
                href="https://github.com/YASAR300?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition-colors flex items-center gap-2 group"
              >
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
                  <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
                  <path d="M4 12H2" />
                  <path d="M10 12H8" />
                  <path d="M16 12h-2" />
                  <path d="M22 12h-2" />
                </svg>
                Open Repositories
              </a>
            </div>
          </div>

          {/* Featured Repositories */}
          <div className="grid md:grid-cols-3 gap-8">
            {repositories.map((repo) => (
              <div key={repo.repo} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10">
                <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    <line x1="12" y1="11" x2="12" y2="17" />
                    <line x1="9" y1="14" x2="15" y2="14" />
                  </svg>
                  {repo.repo}
                </h4>
                <p className="text-gray-300 mb-4 text-sm">{repo.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-2">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="18" r="3" />
                      <circle cx="6" cy="6" r="3" />
                      <circle cx="18" cy="6" r="3" />
                      <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
                      <path d="M12 12v3" />
                    </svg>
                    {repo.forks}
                  </span>
                  <span className="px-2 py-1 bg-purple-500/20 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                    {repo.language}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mb-4 flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4" />
                      <path d="M12 16h.01" />
                    </svg>
                    Issues: {repo.openIssues}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Updated: {repo.lastUpdated}
                  </span>
                </div>
                <a
                  href={repo.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm font-medium group"
                >
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  View Repo
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Services Sections */}
      <section className="max-w-7xl mx-auto mb-32">
        <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-white to-purple-300">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/5 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform text-purple-400">
                {getSkillIcon(skill.icon)}
              </div>
              <h3 className="text-xl font-medium mb-2">{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillsOpenSourceSection;