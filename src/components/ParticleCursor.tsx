import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ParticleCursor.scss';

interface Particle {
  element: HTMLDivElement;
  x: number;
  y: number;
}

interface Mouse {
  x: number;
  y: number;
}

const ParticleCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const particles: Particle[] = [];
    const numParticles = 20;
    const mouse: Mouse = { x: 0, y: 0 };
    let animationFrameId: number;

    const getColor = (x: number, y: number): string => {
      const hue = (x / window.innerWidth) * 360;
      const lightness = (y / window.innerHeight) * 50 + 25;
      return `hsl(${hue}, 100%, ${lightness}%)`;
    };

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      cursor.appendChild(particle);
      particles.push({ element: particle, x: 0, y: 0 });
    }

    const updateMousePosition = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

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

    window.addEventListener('mousemove', updateMousePosition);
    animateParticles();

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <div ref={cursorRef} className="particle-cursor" />;
};

export default ParticleCursor;
