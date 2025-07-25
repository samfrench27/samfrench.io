"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaApple, FaAndroid } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiPostgresql, SiRedis, SiGraphql, SiExpress, SiSwift, SiKotlin, SiFlutter } from 'react-icons/si';

const DevSkills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" />, level: 95 },
        { name: "Next.js", icon: <SiNextdotjs />, level: 90 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: 85 },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 95 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 90 }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 90 },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" />, level: 85 },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-600" />, level: 85 },
        { name: "REST APIs", icon: null, level: 95 }
      ]
    },
    {
      name: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" />, level: 80 },
        { name: "Redis", icon: <SiRedis className="text-red-500" />, level: 75 }
      ]
    },
    {
      name: "DevOps",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: 90 },
        { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: 80 },
        { name: "AWS", icon: <FaAws className="text-yellow-500" />, level: 75 }
      ]
    },
    {
      name: "Mobile",
      skills: [
        { name: "iOS", icon: <FaApple className="text-gray-300" />, level: 80 },
        { name: "Android", icon: <FaAndroid className="text-green-400" />, level: 80 },
        { name: "Swift", icon: <SiSwift className="text-orange-500" />, level: 75 },
        { name: "Kotlin", icon: <SiKotlin className="text-purple-500" />, level: 75 },
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" />, level: 85 }
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((category, catIndex) => (
          <motion.div 
            key={category.name}
            className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-pink-400 mb-6">{category.name} Technologies</h3>
            
            <div className="space-y-6">
              {category.skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center gap-2">
                    {skill.icon && <span className="text-xl">{skill.icon}</span>}
                    <span className="text-white">{skill.name}</span>
                    <span className="ml-auto text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + catIndex * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="mt-12 bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-xl font-bold text-pink-400 mb-6">Development Philosophy</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-5 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-3">Clean Code</h4>
            <p className="text-gray-300">
              I believe in writing clean, maintainable code that follows best practices and design patterns. 
              This includes proper organization, meaningful naming, and comprehensive documentation.
            </p>
          </div>
          
          <div className="bg-gray-700 p-5 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-3">User-Centric</h4>
            <p className="text-gray-300">
              Every line of code I write is focused on creating the best possible user experience. 
              This means optimizing for performance, accessibility, and intuitive design.
            </p>
          </div>
          
          <div className="bg-gray-700 p-5 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-3">Continuous Learning</h4>
            <p className="text-gray-300">
              The tech landscape is constantly evolving, and I'm committed to staying up-to-date with 
              the latest technologies, frameworks, and best practices.
            </p>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          With a background in product leadership, I bring a unique perspective to development projects—balancing 
          technical excellence with business objectives and user needs.
        </p>
        
        <a 
          href="https://github.com/samfrench27" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-md hover:from-purple-700 hover:to-pink-600 transition-all"
        >
          Check Out My GitHub
        </a>
      </motion.div>
    </div>
  );
};

export default DevSkills;