import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import emailjs from '@emailjs/browser';

// Define constants with fallback values
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

const Contact = () => {
  const formRef = useRef(null);
  const socialRef = useRef(null);
  const infoRef = useRef(null);
  const form = useRef();
  const [status, setStatus] = useState('');

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);

    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });

      gsap.from(infoRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power4.out',
      });

      gsap.from(socialRef.current?.children || [], {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const metaData = {
      timestamp: new Date().toISOString(),
      source: 'Contact Form',
      userAgent: navigator.userAgent,
      pageUrl: window.location.href
    };

    const formData = new FormData(form.current);
    const formValues = Object.fromEntries(formData);

    const emailData = {
      ...formValues,
      meta: JSON.stringify(metaData)
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailData,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          form.current.reset();
          setTimeout(() => setStatus(''), 3000);
        },
        (error) => {
          setStatus(`Failed to send: ${error.text}`);
          setTimeout(() => setStatus(''), 3000);
        }
      );
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div ref={infoRef} className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <span className="block text-gray-300">Location</span>
                    <span className="text-lg">Ahmedabad</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <span className="block text-gray-300">Email</span>
                    <span className="text-lg">yasar.khan.cg@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    📱
                  </div>
                  <div>
                    <span className="block text-gray-300">Phone</span>
                    <span className="text-lg">+91 6351786420</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Availability</h3>
              <p className="text-gray-300 mb-4">
                I'm currently available for freelance work and interesting projects.
                My typical response time is within 24 hours.
              </p>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Available for new projects</span>
                </div>
              </div>
            </div>

            <div ref={socialRef} className="space-y-6">
              <h3 className="text-2xl font-bold">Connect</h3>
              <div className="flex flex-wrap gap-4">
                {['GitHub', 'LinkedIn', 'Twitter', 'Instagram', 'Dribbble', 'Behance'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="px-6 py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-8 bg-white/5 backdrop-blur-sm rounded-2xl p-8"
          >
            <div ref={formRef}>
              <div>
                <label htmlFor="name" className="block text-lg mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lg mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  placeholder="Tell me about your project..."
                />
              </div>
              <input
                type="hidden"
                name="meta"
                value=""
              />
              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
              {status && (
                <p className={`text-center mt-4 ${status.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;