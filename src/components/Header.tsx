"use client";
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { FaEnvelope, FaLinkedin, FaGithub, FaCode, FaServer, FaDatabase } from 'react-icons/fa';

export default function AnimatedHeader() {
  const [scrolled, setScrolled] = useState(false);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  
  // Particle animation setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 400; // Fixed height for header
    };
    
    const createParticles = () => {
      particles.length = 0;
      const particleCount = Math.floor(window.innerWidth / 10); // Responsive particle count
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          color: [
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
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 100})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(drawParticles);
    };
    
    // Initialize
    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
    
    resizeCanvas();
    createParticles();
    drawParticles();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);
  
  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Neon text effect with dynamic color change
  const [colorIndex, setColorIndex] = useState(0);
  const neonColors = [
    'text-blue-500 shadow-blue-500',
    'text-purple-500 shadow-purple-500',
    'text-cyan-500 shadow-cyan-500',
    'text-indigo-500 shadow-indigo-500'
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % neonColors.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Matrix rain effect for the terminal section
  const [terminalText, setTerminalText] = useState('');
  const fullText = '$ whoami\n> Director of Product at Token.io\n$ skills --list\n> Open Banking, A2A Payments, Product Strategy\n$ current_project\n> Building next-gen financial infrastructure';
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTerminalText(fullText.substring(0, index));
      index++;
      
      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  return (
    <header className="relative overflow-hidden" style={{ height: '500px' }}>
      {/* Particle animation canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0891b2 100%)' }}
      />
      
      {/* Tech-inspired decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 border-4 border-cyan-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 border-2 border-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-blue-500 opacity-10 animate-ping"></div>
        
        {/* Circuit-like lines */}
        <div className="absolute top-1/4 left-0 w-1/3 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
        <div className="absolute bottom-1/3 right-0 w-1/4 h-0.5 bg-gradient-to-l from-transparent to-purple-500"></div>
        <div className="absolute top-1/2 left-1/4 h-16 w-0.5 bg-gradient-to-b from-transparent to-cyan-500"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between py-10">
        {/* Profile section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden relative shadow-xl bg-white p-1">
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
            <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full animate-pulse">
              Online
            </div>
          </div>
          
          <h1 className={`text-4xl md:text-5xl font-bold mt-6 text-white ${neonColors[colorIndex]}`} style={{ textShadow: '0 0 10px currentColor' }}>
            Sam French
          </h1>
          
          <h2 className="text-2xl font-medium mt-2 mb-4 text-cyan-100">
            Director of Product <span className="hidden md:inline">at Token.io</span>
          </h2>
          
          <p className="mb-6 text-indigo-100 max-w-lg">
            Building cutting-edge Account-to-Account payment solutions and leading product strategy across Open Banking initiatives.
          </p>
          
          <div className="flex justify-center md:justify-start space-x-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-md hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-transparent border-2 border-cyan-500 text-cyan-100 font-medium rounded-md hover:bg-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </a>
          </div>
        </div>
        
        {/* Terminal section */}
        <div className="md:w-1/2 w-full max-w-md">
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
            <div className="flex items-center px-4 py-2 bg-gray-800">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-400 text-sm">sam@token-io ~ %</div>
            </div>
            <div className="p-6 font-mono text-sm h-64 overflow-hidden">
              <div className="text-green-400 whitespace-pre-line">{terminalText}</div>
              <div className="inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse"></div>
            </div>
          </div>
          
          {/* Tech icon ring */}
          <div className="flex justify-center mt-6 space-x-6">
            <div className="p-3 bg-blue-800 text-white rounded-full animate-bounce shadow-lg">
              <FaCode className="text-xl" />
            </div>
            <div className="p-3 bg-purple-700 text-white rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.2s' }}>
              <FaServer className="text-xl" />
            </div>
            <div className="p-3 bg-cyan-600 text-white rounded-full animate-bounce shadow-lg" style={{ animationDelay: "0.4s" }}>
              <FaDatabase className="text-xl" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Social Links */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-6 z-10">
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
    </header>
  );
}