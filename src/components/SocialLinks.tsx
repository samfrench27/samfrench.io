import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaTwitter, FaMedium } from 'react-icons/fa';

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  variant?: 'light' | 'dark';
}

export default function SocialLinks({ 
  className = "", 
  iconClassName = "text-xl", 
  variant = 'light'
}: SocialLinksProps) {
  // Define color classes based on variant
  const colorClasses = variant === 'light' 
    ? 'text-white hover:text-cyan-200' 
    : 'text-gray-300 hover:text-cyan-400';
  
  // Adding a base transition class for all icons
  const baseTransition = "transform transition-all duration-300 ease-in-out";
  
  return (
    <div className={`flex justify-center space-x-5 ${className}`}>
      <a 
        href="mailto:sam@samfrench.io" 
        aria-label="Email Sam French" 
        className={`${colorClasses} hover:scale-125 ${baseTransition}`}
      >
        <FaEnvelope className={iconClassName} />
      </a>
      <a 
        href="https://www.linkedin.com/in/sam-french-359b74a8/" 
        target="_blank" 
        rel="noopener" 
        aria-label="Sam French LinkedIn profile" 
        className={`${colorClasses} hover:scale-125 ${baseTransition}`}
      >
        <FaLinkedin className={iconClassName} />
      </a>
      <a 
        href="https://github.com/samfrench27" 
        target="_blank" 
        rel="noopener" 
        aria-label="Sam French GitHub profile" 
        className={`${colorClasses} hover:scale-125 ${baseTransition}`}
      >
        <FaGithub className={iconClassName} />
      </a>
    </div>
  );
}