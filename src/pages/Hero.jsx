import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const [displayText, setDisplayText] = useState("");

  const textArray = [
    "A tech-savvy Full Stack Developer passionate about creating fast, secure, and scalable web applications. Specializing in React, Node.js, and Tailwind CSS to craft modern digital solutions. Experienced in designing and implementing complex software architectures. Focused on clean code.",

    "A passionate Full Stack Developer.",
    "I specialize in modern web technologies to create seamless experiences.",
    "Proficient in React, Node.js, and Tailwind CSS for robust applications.",
    "Dedicated to crafting scalable and efficient digital solutions."
  ];

  useLayoutEffect(() => {
    if (!textRef.current || !aboutRef.current) return;

    // GSAP Split Text Animation
    const text = new SplitType(textRef.current, { types: "chars" });
    const chars = text.chars;
    const tl = gsap.timeline();
    tl.from(chars, {
      opacity: 0,
      y: 100,
      rotateX: -90,
      stagger: 0.02,
      duration: 1,
      ease: "power4.out",
    });

    return () => tl.kill();
  }, []);

  // Typing Effect for Dynamic Text
  useEffect(() => {
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const currentText = textArray[index];

      if (isDeleting) {
        setDisplayText(currentText.substring(0, charIndex--));
      } else {
        setDisplayText(currentText.substring(0, charIndex++));
      }

      if (!isDeleting && charIndex === currentText.length + 1) {
        setTimeout(() => (isDeleting = true), 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % textArray.length;
      }

      setTimeout(typeEffect, isDeleting ? 50 : 100);
    };

    typeEffect();
  }, []);

  return (
    <section ref={aboutRef} className="relative min-h-screen flex items-center bg-black text-white px-10 md:px-24">
      <div className="z-10 max-w-3xl text-left">
        <h1 ref={textRef} className="text-5xl md:text-6xl font-extrabold tracking-wide">
          Hi, I'm Yasar
        </h1>
        <p className="text-lg text-gray-300 mt-4 min-h-[60px] leading-relaxed">
          {displayText}
          <span className="animate-blink">|</span>
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-6 flex gap-4">
          <Link to="https://drive.google.com/drive/folders/1ZPW69WtM7shgkd5SnUUSoODtMvOXeH2v?usp=drive_link" target="_blank" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-all">
            Download Resume
          </Link>
          <Link to="/contact" className="px-6 py-3 border border-white rounded-lg text-white font-semibold hover:bg-white hover:text-black transition-all">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
