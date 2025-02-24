import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ParticleCursor.scss';

const ParticleCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const particles = [];
    const numParticles = 20;
    const mouse = { x: 0, y: 0 };
    let animationFrameId;

    // Color transition function
    const getColor = (x, y) => {
      const hue = (x / window.innerWidth) * 360;
      const lightness = (y / window.innerHeight) * 50 + 25; // 25-75% lightness
      return `hsl(${hue}, 100%, ${lightness}%)`;
    };

    // Create particles
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      cursor.appendChild(particle);
      particles.push({ element: particle, x: 0, y: 0 });
    }

    // Update mouse position
    const updateMousePosition = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Animate particles
    const animateParticles = () => {
      const color = getColor(mouse.x, mouse.y);

      particles.forEach((particle, index) => {
        const speed = 0.5 - (index / numParticles) * 0.3;
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        
        particle.x += dx * speed;
        particle.y += dy * speed;

        gsap.set(particle.element, {
          x: particle.x,
          y: particle.y,
          backgroundColor: color,
        });
      });

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    // Set up event listeners
    window.addEventListener('mousemove', updateMousePosition);
    animateParticles();

    // Clean up
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <div ref={cursorRef} className="particle-cursor" />;
};

export default ParticleCursor;