import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import profilePhoto from '../img/pro.png';
import { Link } from 'react-router-dom';


// Reusable Components with enhanced designs
const StatCard = ({ value, label, delay }) => (
  <motion.div
    className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-800/50 hover:border-blue-500/50 transition-all relative overflow-hidden group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: delay, duration: 0.7, ease: "easeOut" }}
    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
  >
    <motion.div
      className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100"
      transition={{ duration: 0.5 }}
    />
    <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">{value}</p>
    <p className="text-sm text-gray-400 mt-1">{label}</p>
  </motion.div>
);

const SkillCard = ({ category, icon, skills, index }) => (
  <motion.div
    className="bg-gray-900/60 backdrop-blur-lg rounded-2xl border border-gray-800/50 hover:border-blue-500/50 transition-all group relative overflow-hidden"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2, duration: 0.7 }}
    whileHover={{ y: -8, boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.3)" }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <motion.div
      className="absolute -inset-40 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100"
      transition={{ duration: 0.6 }}
    />
    <div className="p-8 relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-blue-900/30 text-blue-400 mb-8 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-indigo-500 group-hover:text-white transition-all flex items-center justify-center">
        {icon}
      </div>
      <h4 className="text-2xl font-bold mb-6 group-hover:text-blue-400 transition-colors">{category}</h4>
      <ul className="space-y-3">
        {skills.map((skill, idx) => (
          <motion.li
            key={idx}
            className="flex items-center gap-3 text-gray-300"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + (idx * 0.1) }}
            viewport={{ once: true }}
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400"></span>
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const EducationCard = ({ title, institution, year, description, delay }) => (
  <motion.div
    className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-2xl border border-gray-800/50 hover:border-blue-500/30 transition-all relative overflow-hidden group"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: delay, duration: 0.7 }}
    whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.2)" }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <motion.div
      className="absolute -inset-40 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100"
      transition={{ duration: 0.6 }}
    />
    <div className="relative z-10">
      <h4 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{title}</h4>
      <div className="flex items-center gap-3 text-blue-400 mb-4">
        <span>{institution}</span>
        <span className="text-gray-500">•</span>
        <span className="text-gray-400">{year}</span>
      </div>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const About = () => {
  const heroRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: heroOpacity,
            scale: heroScale
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-indigo-900/10 to-black z-0"></div>
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 inline-block">
              About Me
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300 leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Crafting innovative digital experiences with code and creativity
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <AnimatePresence>
              <motion.button
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-lg relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/work">
                  <span className="relative z-10">Explore My Work</span>
                </Link>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </AnimatePresence>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-400 mb-3">Scroll to explore</span>

                <div className="w-8 h-14 rounded-full border-2 border-gray-800/50 p-1.5 flex justify-center">
                  <motion.div
                    className="w-2 h-3 rounded-full bg-blue-400"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 py-32">
        <motion.section
          className="mb-32 grid md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="animate-on-scroll"
          >
            <div className="relative">
              <motion.div
                className="aspect-square rounded-3xl overflow-hidden ring-2 ring-blue-500/20"
                initial={{ filter: "blur(10px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <img
                  src={profilePhoto}
                  alt="Profile Photo"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -z-10 -inset-12 bg-blue-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-10">

              <StatCard value="3+" label="Open Source" delay={0.6} />
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="animate-on-scroll"
          >
            <motion.span
              className="inline-block text-sm bg-blue-900/30 text-blue-400 px-4 py-1.5 rounded-full mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Who I Am
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-400">Crafting</span> Digital Futures
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I'm a passionate full-stack developer blending technical expertise with creative problem-solving. My journey began at Rai University X CodingGita, mastering various tech stacks and development practices.
            </motion.p>
            <motion.p
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              I specialize in building high-performance web applications that prioritize user experience, scalability, and maintainability. When not coding, I explore new tech, contribute to open-source, and mentor others.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://drive.google.com/drive/folders/1ZPW69WtM7shgkd5SnUUSoODtMvOXeH2v?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium relative overflow-hidden group"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  Download Resume
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                href="/contact"
                className="px-8 py-3 rounded-full border border-blue-500/30 text-white font-medium relative overflow-hidden group"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  Get In Touch
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block text-sm bg-blue-900/30 text-blue-400 px-4 py-1.5 rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Skillset
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Technical Expertise
            </motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <SkillCard
              index={0}
              category="Frontend Development"
              icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm16.5 15c0 .83-.67 1.5-1.5 1.5H6c-.83 0-1.5-.67-1.5-1.5V7.5C4.5 6.67 5.17 6 6 6h12c.83 0 1.5.67 1.5 1.5V18z" /><path d="M16.25 10.5l-4.5-3v6z" /></svg>}
              skills={["React & Next.js", "TypeScript", "GSAP Animations", "Tailwind CSS", "Three.js"]}
            />
            <SkillCard
              index={1}
              category="Backend Development"
              icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" /></svg>}
              skills={["Node.js & Express", "PostgreSQL", "GraphQL APIs", "AWS", "Docker"]}
            />
            <SkillCard
              index={2}
              category="Other Skills"
              icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" /></svg>}
              skills={["UI/UX Design", "Performance Optimization", "CI/CD", "Testing", "Technical Writing"]}
            />
          </div>
        </motion.section>

        <motion.section
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block text-sm bg-blue-900/30 text-blue-400 px-4 py-1.5 rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Credentials
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Education & Certifications
            </motion.h2>
          </motion.div>

          <motion.div className="space-y-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-800/70 to-blue-600/30 flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM15 16.5l-3 1.5-3-1.5v-4.1l3 1.5 3-1.5v4.1z" />
                  </svg>
                </div>
              </motion.div>
              <div className="flex-grow">
                <motion.h3
                  className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Education
                </motion.h3>
                <div className="space-y-8">
                  <EducationCard
                    title="Bachelor of Technology"
                    institution="Rai University"
                    year="2024 - 2028"
                    description="Studied Computer Science with specialization in Software Development. Participated in multiple hackathons and developed award-winning projects."
                    delay={0.2}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-800/70 to-blue-600/30 flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
                  </svg>
                </div>
              </motion.div>
              <div className="flex-grow">
                <motion.h3
                  className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Certifications
                </motion.h3>
                <div className="space-y-8">
                  <EducationCard
                    title="AWS Certified Solutions Architect"
                    institution="Amazon Web Services"
                    year="2023"
                    description="Professional certification demonstrating expertise in designing distributed systems on AWS, including deploying applications using EC2, S3, RDS, and understanding advanced cloud architecture patterns."
                    delay={0.1}
                  />
                  <EducationCard
                    title="Full-Stack Developer Specialization"
                    institution="Meta (formerly Facebook)"
                    year="2022"
                    description="Comprehensive certification covering React, Node.js, Express, and MongoDB development. Includes advanced frontend performance optimization, RESTful API design, and deployment strategies."
                    delay={0.2}
                  />
                  <EducationCard
                    title="Certified Kubernetes Administrator"
                    institution="Cloud Native Computing Foundation"
                    year="2021"
                    description="Certification validating skills in deploying, managing, and troubleshooting Kubernetes clusters. Includes container orchestration, networking, storage, and security."
                    delay={0.3}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-lg rounded-3xl p-10 md:p-16 border border-blue-500/20 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute -inset-40 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3], rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">collaborate</span> on your next project?
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-300 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Let's create something amazing together. I'm open to freelance opportunities, full-time positions, and interesting collaborations.
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href="/contact"
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-lg relative overflow-hidden group"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Get In Touch</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                  <motion.a
                    href="/work"
                    className="px-8 py-4 rounded-full border border-blue-500/30 text-white font-medium text-lg relative overflow-hidden group"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">View My Work</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;