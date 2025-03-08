"use client";
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTheme } from './ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';

export default function AnimatedHeader() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | null>(null);
  
  // Particle animation setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      connected: number[];
    }> = [];
    
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = 500; // Fixed height for header
    };
    
    const createParticles = () => {
      particles.length = 0;
      if (!canvas) return;
      
      const particleCount = Math.floor(window.innerWidth / 10); // Responsive particle count
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          color: isDarkMode 
            ? [
                'rgba(138, 43, 226, 0.6)', // Purple
                'rgba(148, 0, 211, 0.6)',  // Dark Violet
                'rgba(75, 0, 130, 0.6)',   // Indigo
                'rgba(0, 191, 255, 0.6)',  // Deep Sky Blue 
                'rgba(255, 215, 0, 0.3)',  // Gold (stars)
              ][Math.floor(Math.random() * 5)]
            : [
                'rgba(0, 153, 255, 0.6)',  // Blue
                'rgba(102, 204, 255, 0.6)', // Light blue
                'rgba(0, 204, 204, 0.6)',   // Teal
                'rgba(153, 51, 255, 0.6)',  // Purple
                'rgba(0, 255, 204, 0.6)',   // Cyan
              ][Math.floor(Math.random() * 5)],
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          connected: []
        });
      }
      
      particlesRef.current = particles;
    };
    
    const drawParticles = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Boundary checks
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Connect particles that are close
        p.connected = [];
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j];
          const dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (dist < 100) {
            p.connected.push(j);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const connectionColor = isDarkMode ? `rgba(138, 43, 226, ${1 - dist / 100})` : `rgba(255, 255, 255, ${1 - dist / 100})`;
            ctx.strokeStyle = connectionColor;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(drawParticles);
    };
    
    // Initialize
    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };
    
    window.addEventListener('resize', handleResize);
    
    resizeCanvas();
    createParticles();
    drawParticles();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDarkMode]);
  
  // Neon text effect with dynamic color change
  const [colorIndex, setColorIndex] = useState(0);
  const dayModeColors = [
    'text-blue-500 shadow-blue-500',
    'text-cyan-500 shadow-cyan-500',
    'text-indigo-500 shadow-indigo-500'
  ];
  
  const nightModeColors = [
    'text-purple-500 shadow-purple-500',
    'text-pink-500 shadow-pink-500',
    'text-indigo-400 shadow-indigo-400'
  ];
  
  const neonColors = isDarkMode ? nightModeColors : dayModeColors;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % neonColors.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [neonColors.length]);
  
  return (
    <header className="relative overflow-hidden" style={{ height: '500px' }}>
      {/* Theme Toggle Button */}
      <ThemeToggle onModeChange={setIsDarkMode} />
      
      {/* Particle animation canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ 
          background: isDarkMode 
            ? 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' 
            : 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0891b2 100%)'
        }}
      />
      
      {/* Tech-inspired decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-20 right-10 w-60 h-60 border-2 border-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-blue-500 opacity-10 animate-ping"></div>
        
        {/* Circuit-like lines */}
        <div className="absolute top-1/4 left-0 w-1/3 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
        <div className="absolute bottom-1/3 right-0 w-1/4 h-0.5 bg-gradient-to-l from-transparent to-purple-500"></div>
        <div className="absolute top-1/2 left-1/4 h-16 w-0.5 bg-gradient-to-b from-transparent to-cyan-500"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center py-10">
        {/* Centered profile section */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden relative shadow-xl bg-white p-1 mx-auto">
              <Image 
                src="/profile-photo.png"
                alt="Sam French"
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="rounded-full"
              />
              <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-cyan-400 transition-all duration-300"></div>
            </div>
          </div>
          
          <h1 className={`text-4xl md:text-5xl font-bold mt-6 text-white ${neonColors[colorIndex]}`} style={{ textShadow: '0 0 5px currentColor' }}>
            Sam French
          </h1>
          
          <h2 className="text-2xl font-medium mt-2 mb-4 text-cyan-100">
            {isDarkMode ? 'Full Stack Developer' : 'Director of Product at Token.io'}
          </h2>
          
          <p className="mb-6 text-indigo-100 max-w-xl mx-auto">
            {isDarkMode 
              ? 'Building innovative SaaS solutions with modern web technologies. Passionate about clean code, user experience, and solving real-world problems through software.'
              : 'Building cutting-edge Account-to-Account payment solutions and leading product strategy across Open Banking initiatives.'}
          </p>
          
          <div className="flex justify-center space-x-4 mb-6">
            <a 
              href="#contact" 
              className={`px-6 py-3 font-medium rounded-md transition-all duration-300 transform hover:-translate-y-1 shadow-lg ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600' 
                  : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600'
              }`}
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className={`px-6 py-3 bg-transparent border-2 font-medium rounded-md transition-all duration-300 transform hover:-translate-y-1 ${
                isDarkMode 
                  ? 'border-pink-500 text-pink-100 hover:bg-pink-500/20' 
                  : 'border-cyan-500 text-cyan-100 hover:bg-cyan-500/20'
              }`}
            >
              {isDarkMode ? 'View Code Projects' : 'View Projects'}
            </a>
          </div>
          
          {/* Social Links moved up below buttons */}
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:sam@samfrench.io" 
              className="text-white hover:text-cyan-300 transition-colors duration-300 transform hover:scale-125"
            >
              <FaEnvelope className="text-2xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sam-french-359b74a8/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-cyan-300 transition-colors duration-300 transform hover:scale-125"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a 
              href="https://github.com/samfrench27" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-cyan-300 transition-colors duration-300 transform hover:scale-125"
            >
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}