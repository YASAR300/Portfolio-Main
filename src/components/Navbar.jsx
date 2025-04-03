import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Transform scrollYProgress (0-1) to width percentage for progress bar
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Detect scroll position to change navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/work", label: "Work" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-lg shadow-lg py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                YS
              </span>
              <span className="hidden sm:block text-lg font-semibold">Yasar</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  label={item.label}
                  isActive={location.pathname === item.path}
                />
              ))}
            </div>

            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <SocialIcon icon={<Github size={20} />} href="https://github.com/YASAR300" />
              <SocialIcon icon={<Linkedin size={20} />} href="https://linkedin.com/in/yasar300" />
              <SocialIcon icon={<Twitter size={20} />} href="https://x.com/yasar__p" />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
          style={{ width: progressWidth }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg pt-24 px-6"
          >
            <div className="flex flex-col space-y-6 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-2xl font-medium ${
                    location.pathname === item.path
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Social Icons - Mobile */}
              <div className="flex items-center space-x-6 mt-10">
                <SocialIcon icon={<Github size={24} />} href="https://github.com/yourusername" />
                <SocialIcon icon={<Linkedin size={24} />} href="https://linkedin.com/in/yourusername" />
                <SocialIcon icon={<Twitter size={24} />} href="https://twitter.com/yourusername" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// NavLink component with animated underline
const NavLink = ({ to, label, isActive }) => {
  return (
    <Link to={to} className="relative group py-2">
      <span
        className={`text-base font-medium transition-colors duration-300 ${
          isActive ? "text-white" : "text-gray-300 group-hover:text-white"
        }`}
      >
        {label}
      </span>
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
      {isActive && (
        <motion.span
          layoutId="activeNav"
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
};

// Social Icon Component
const SocialIcon = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full border border-gray-700 bg-gray-800/50 hover:bg-gray-700/80 hover:border-gray-500 transition-all duration-300 text-gray-300 hover:text-white transform hover:scale-110"
    >
      {icon}
    </a>
  );
};

export default Navbar;